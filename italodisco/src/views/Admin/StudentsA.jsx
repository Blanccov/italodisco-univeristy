import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";

export default function StudentsA() {
    const { id } = useParams();
    const [students, setStudents] = useState([]);
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

        const recruId = {
            recruitment_id: id,
        };

        console.log(recruId);

        axiosClient
            .post("/users/getAcceptedStudents", recruId)
            .then(({ data }) => {
                setLoding(false);
                setStudents(data.accepted_students);
                console.log(students);
            })
            .catch(() => {
                setLoding(false);
            });
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div>
                <h1 className="text-white">Students</h1>
                <Link className="btn mb-2" to="/admin/students/new">
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
                        {students &&
                            students.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.surname}</td>
                                    <td>{u.email}</td>
                                    <td>{u.pesel}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.address}</td>
                                    <td>
                                        <Link to={"/admin/users/" + u.id}>
                                            Edit
                                        </Link>
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
