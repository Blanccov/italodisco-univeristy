import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

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
        <div>
            <h1>Users</h1>
            <Link to="/users/new">Add new</Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>email</th>
                            <th>pesel</th>
                            <th>phone</th>
                            <th>address</th>
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
                            <tr>
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
