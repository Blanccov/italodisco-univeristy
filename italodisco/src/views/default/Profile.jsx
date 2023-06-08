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
    const [currentPassword, setCurrentPassword] = useState("");

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

            if (!currentPassword) {
                setErrors({
                    currentPassword: ["Current Password is required"],
                });
                return;
            }

    }, []);

    const onSubmit = (ev) => {
        ev.preventDefault();
        setErrors(null);

        if (user.newPassword !== user.confirmPassword) {
            setErrors({ confirmPassword: ["Passwords do not match"] });
            return;
        }

        if (user.newPassword && user.newPassword.length < 8) {
            setErrors({
                newPassword: ["Password must be at least 8 characters long"],
            });
            return;
        }

        if (user.newPassword && !user.confirmPassword) {
            setErrors({
                confirmPassword: ["Confirm New Password is required"],
            });
            return;
        }


        const requestData = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            current_password: currentPassword,
            new_password: user.newPassword,
            confirm_password: user.confirmPassword,
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
            {user.id && (
                <h1 className="text-white">Update Profile: {user.name}</h1>
            )}
            <div>{loading && <div>loading</div>}</div>
            {errors && (
                <div className="text-danger">
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key]}</p>
                    ))}
                </div>
            )}
            <div>
                {!loading && (
                    <form
                        onSubmit={onSubmit}
                        className="my-form d-flex flex-column"
                    >
                        <fieldset>
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="form-label text-white"
                                >
                                    Name
                                </label>
                                <input
                                    value={user.name}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            name: ev.target.value,
                                        })
                                    }
                                    placeholder="Name"
                                    id="name"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="surname"
                                    className="form-label text-white"
                                >
                                    Surname
                                </label>
                                <input
                                    value={user.surname}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            surname: ev.target.value,
                                        })
                                    }
                                    placeholder="Surname"
                                    id="surname"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="form-label text-white"
                                >
                                    Email
                                </label>
                                <input
                                    value={user.email}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            email: ev.target.value,
                                        })
                                    }
                                    placeholder="Email"
                                    id="email"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="currentPassword"
                                    className="form-label text-white"
                                >
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(ev) =>
                                        setCurrentPassword(ev.target.value)
                                    }
                                    placeholder="Current Password"
                                    id="currentPassword"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="newPassword"
                                    className="form-label text-white"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            newPassword: ev.target.value,
                                        })
                                    }
                                    placeholder="New Password"
                                    id="newPassword"
                                    className="form-control mb-3"
                                />
                            </div>
                            {user.newPassword && (
                                <div className="form-group">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="form-label text-white"
                                    >
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                confirmPassword:
                                                    ev.target.value,
                                            })
                                        }
                                        placeholder="Confirm New Password"
                                        id="confirmPassword"
                                        className="form-control mb-3"
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label
                                    htmlFor="pesel"
                                    className="form-label text-white"
                                >
                                    Pesel
                                </label>
                                <input
                                    value={user.pesel}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            pesel: ev.target.value,
                                        })
                                    }
                                    placeholder="Pesel"
                                    id="pesel"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="phone"
                                    className="form-label text-white"
                                >
                                    Phone
                                </label>
                                <input
                                    value={user.phone}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            phone: ev.target.value,
                                        })
                                    }
                                    placeholder="Phone"
                                    id="phone"
                                    className="form-control mb-3"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="address"
                                    className="form-label text-white"
                                >
                                    Address
                                </label>
                                <textarea
                                    value={user.address}
                                    onChange={(ev) =>
                                        setUser({
                                            ...user,
                                            address: ev.target.value,
                                        })
                                    }
                                    placeholder="Address"
                                    id="address"
                                    className="form-control mb-3"
                                />
                            </div>
                            <button
                                className="btn btn-outline-primary"
                                disabled={!currentPassword}
                            >
                                Save
                            </button>
                        </fieldset>
                    </form>
                )}
            </div>
        </div>
    );
}
