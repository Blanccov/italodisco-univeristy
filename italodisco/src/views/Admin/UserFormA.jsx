import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import styles from "./Users.module.scss";

export default function UserFormA() {
    const { id } = useParams();
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
        pesel: "",
        phone: "",
        address: "",
        roleId: 2, // to będzie trzeba ustawić defaultowo w php
    });

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (user.id) {
            axiosClient
                .patch(`/users/${user.id}`, user)
                .then(() => {
                    setNotification("User was succesfully updated");
                    navigate("/admin/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post(`/users/`, user)
                .then(() => {
                    setNotification("User was succesfully created");
                    navigate("/admin/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div>{loading && <div>loading</div>}</div>

            {!loading && (
                <form onSubmit={onSubmit} className="my-form my-margin">
                    {user.id && (
                        <h1 className="text-white">Update User: {user.name}</h1>
                    )}
                    {!user.id && <h1 className="text-white">New User</h1>}
                    {errors && (
                        <div>
                            {Object.keys(errors).map((key) => (
                                <p key={key} className="text-danger fw-bold">
                                    {errors[key][0]}
                                </p>
                            ))}
                        </div>
                    )}
                    <input
                        value={user.name}
                        onChange={(ev) =>
                            setUser({ ...user, name: ev.target.value })
                        }
                        placeholder="Name"
                        required
                    />
                    <input
                        value={user.surname}
                        onChange={(ev) =>
                            setUser({ ...user, surname: ev.target.value })
                        }
                        placeholder="Surname"
                        required
                    />
                    <input
                        type="email"
                        value={user.email}
                        onChange={(ev) =>
                            setUser({ ...user, email: ev.target.value })
                        }
                        placeholder="Email"
                        required
                    />
                    <input
                        value={user.password}
                        onChange={(ev) =>
                            setUser({ ...user, password: ev.target.value })
                        }
                        placeholder="Password"
                        required
                    />
                    <input
                        value={user.pesel}
                        onChange={(ev) =>
                            setUser({ ...user, pesel: ev.target.value })
                        }
                        placeholder="Pesel"
                        minLength="11"
                        maxLength="11"
                        required
                    />
                    <input
                        value={user.phone}
                        onChange={(ev) =>
                            setUser({ ...user, phone: ev.target.value })
                        }
                        placeholder="Phone"
                        required
                    />
                    <textarea
                        value={user.address}
                        onChange={(ev) =>
                            setUser({ ...user, address: ev.target.value })
                        }
                        placeholder="Address"
                        required
                    />
                    <button className="btn btn-outline-primary">Save</button>
                </form>
            )}
        </div>
    );
}
