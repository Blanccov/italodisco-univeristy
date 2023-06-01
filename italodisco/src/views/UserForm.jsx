import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

export default function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        id: null,
        name: "",
        surname: "",
        email: "",
        password: "",
        pesel: "",
        phone: "",
        address: "",
        roleId: 2 // to będzie trzeba ustawić defaultowo w php
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
                    navigate("/users");
                })
                .catch((err) => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }else{
            axiosClient
                .post(`/users/`, user)
                .then(() => {
                    navigate("/users");
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
        <>
            {user.id && <h1>Update User: {user.name}</h1>}
            {!user.id && <h1>New User</h1>}
            <div>{loading && <div>loading</div>}</div>
            {errors && (
                <div>
                    {Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}
            {!loading && (
                <form onSubmit={onSubmit}>
                    <input
                        value={user.name}
                        onChange={(ev) =>
                            setUser({ ...user, name: ev.target.value })
                        }
                        placeholder="Name"
                    />
                    <input
                        value={user.surname}
                        onChange={(ev) =>
                            setUser({ ...user, surname: ev.target.value })
                        }
                        placeholder="Surname"
                    />
                    <input
                        value={user.email}
                        onChange={(ev) =>
                            setUser({ ...user, email: ev.target.value })
                        }
                        placeholder="Email"
                    />
                    <input
                        value={user.password}
                        onChange={(ev) =>
                            setUser({ ...user, password: ev.target.value })
                        }
                        placeholder="Password"
                    />
                    <input
                        value={user.pesel}
                        onChange={(ev) =>
                            setUser({ ...user, pesel: ev.target.value })
                        }
                        placeholder="Pesel"
                    />
                    <input
                        value={user.phone}
                        onChange={(ev) =>
                            setUser({ ...user, phone: ev.target.value })
                        }
                        placeholder="Phone"
                    />
                    <input
                        value={user.address}
                        onChange={(ev) =>
                            setUser({ ...user, address: ev.target.value })
                        }
                        placeholder="Address"
                    />
                    <button>Save</button>
                </form>
            )}
        </>
    );
}
