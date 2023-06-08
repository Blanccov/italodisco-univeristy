import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";

export default function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { setNotification } = useStateContext();
  const [user, setUser] = useState({
    id: null,
    name: "",
    surname: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    pesel: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/user`)
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    setErrors(null);

    if (user.newPassword !== user.confirmPassword) {
      setErrors({ confirmPassword: ["Passwords do not match"] });
      return;
    }

    if (user.newPassword && user.newPassword.length < 8) {
      setErrors({ newPassword: ["Password must be at least 8 characters long"] });
      return;
    }

    if (user.newPassword && !user.confirmPassword) {
      setErrors({ confirmPassword: ["Confirm New Password is required"] });
      return;
    }

    const requestData = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      new_password: user.newPassword,
      pesel: user.pesel,
      phone: user.phone,
      address: user.address,
    };

    axiosClient
      .patch(`/users/updateUserProfile`, requestData)
      .then(() => {
        setNotification("Profile was successfully updated");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className={styles["bg-image"] + " d-flex flex-column"}>
      {user.id && <h1 className="text-white">Update Profile: {user.name}</h1>}
      <div>{loading && <div>loading</div>}</div>
      {errors && (
        <div className="text-danger">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key]}</p>
          ))}
        </div>
      )}
      {!loading && (
        <form onSubmit={onSubmit} className="my-form d-flex flex-column">
          <input
            value={user.name}
            onChange={(ev) => setUser({ ...user, name: ev.target.value })}
            placeholder="Name"
            className="mb-3"
          />
          <input
            value={user.surname}
            onChange={(ev) => setUser({ ...user, surname: ev.target.value })}
            placeholder="Surname"
            className="mb-3"
          />
          <input
            value={user.email}
            onChange={(ev) => setUser({ ...user, email: ev.target.value })}
            placeholder="Email"
            className="mb-3"
          />
          <input
            type="password"
            onChange={(ev) => setUser({ ...user, password: ev.target.value })}
            placeholder="Current Password"
            className="mb-3"
          />
          <input
            type="password"
            value={user.newPassword}
            onChange={(ev) =>
              setUser({ ...user, newPassword: ev.target.value })
            }
            placeholder="New Password"
            className="mb-3"
          />
          {user.newPassword && (
            <input
              type="password"
              value={user.confirmPassword}
              onChange={(ev) =>
                setUser({ ...user, confirmPassword: ev.target.value })
              }
              placeholder="Confirm New Password"
              className="mb-3"
            />
          )}
          <input
            value={user.pesel}
            onChange={(ev) => setUser({ ...user, pesel: ev.target.value })}
            placeholder="Pesel"
            className="mb-3"
          />
          <input
            value={user.phone}
            onChange={(ev) => setUser({ ...user, phone: ev.target.value })}
            placeholder="Phone"
            className="mb-3"
          />
          <textarea
            value={user.address}
            onChange={(ev) => setUser({ ...user, address: ev.target.value })}
            placeholder="Address"
            className="mb-3"
          />
          <button className="btn btn-outline-primary">Save</button>
        </form>
      )}
    </div>
  );
}
