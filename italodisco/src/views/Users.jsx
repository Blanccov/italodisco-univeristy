import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import styles from "./Users.module.scss";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        getUsers();

    }, []);

    const onDelete = (u) => {
        if (!window.confirm("are you sure u want to delete this user?")) {
            return;
        }

        axiosClient.delete(`/users/${u.id}`).then(() => {
            getUsers();
        });
    };

    const getUsers = () => {
        setLoding(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoding(false);
                setUsers(data.data);
            })
            .catch(() => {
                setLoding(false);
            });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div>
                <h1 className="text-white">Users</h1>
                <Link className="btn mb-2" to="/users/new">
                    Add new
                </Link>
            </div>
            <div className="my-sizing">
                <table className="table-responsive table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>email</th>
                            <th>pesel</th>
                            <th>phone</th>
                            <th>address</th>
                            <th></th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        </tbody>
                    )}
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.email}</td>
                                <td>{u.pesel}</td>
                                <td>{u.phone}</td>
                                <td>{u.address}</td>
                                <td>
                                    <Link to={"/users/" + u.id}>Edit</Link>
                                    &nbsp;
                                    <button onClick={(ev) => onDelete(u)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
