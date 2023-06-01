import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        setLoding(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoding(false);
                console.log(data);
            })
            .catch(() => {
                setLoding(false);
            });
    };

    return <div>User</div>;
}
