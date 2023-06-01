import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.get("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        }).catch(err =>{
            console.log(err)
        });
    }, []);

    return (
        <div>
            <aside>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>header</div>
                    <div>{user.name}</div>
                    <button onClick={onLogout}>Logout</button>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
}
