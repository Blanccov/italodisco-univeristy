import React, { useState, useEffect } from "react";
import Card from "../UX/Card";
import axiosClient from "../axios-client";
import styles from "./Recruitment.module.scss";
import { useParams } from "react-router-dom";

export default function RecruitmentForm() {
    const { name } = useParams();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const { setNotification } = useStateContext();
    const [recruitment, setRecruitment] = useState({});

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        axiosClient
            .post("/recruitments")
            .then(({ data }) => {
                setRecruitment(data.data);
            })
            .catch(() => {
            });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            {user.id && <h1 className="text-white">Update User: {user.name}</h1>}
            {!user.id && <h1 className="text-white">New User</h1>}
            <div>{loading && <div>loading</div>}</div>
            {errors && (
                <div >
                    {Object.keys(errors).map((key) => (
                        <p key={key} className="text-danger">{errors[key][0]}</p>
                    ))}
                </div>
            )}
            {!loading && (
                <form onSubmit={onSubmit} className="my-form">
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
                    <button className="btn btn-outline-primary">Save</button>
                </form>
            )}
        </div>
    );

}
