import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";
import styles from "./Layout.module.scss";

export default function AdminLayout() {
    const { user, token, notification, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    if (user.role_id === 3) {
        return <Navigate to="/admin/users" />;
    }
    if (user.role_id === 2) {
        return <Navigate to="/recruitments" />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.get("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <nav
                className={
                    "navbar navbar-expand-lg navbar-dark bg-transparent " +
                    styles["bg-image"]
                }
            >
                <div className="container-fluid">
                    <a className="navbar-brand ">Italodisco ADMIN</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/admin/users">
                                    Home
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/users">
                                    Users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/recruitments">
                                    Recruitment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/students">
                                    Students
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/admin/about">
                                    About
                                </Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Separated link
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href=""
                                        onClick={onLogout}
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
            {notification && (
                <div className="alert alert-dismissible alert-success">
                    {notification}
                </div>
            )}
                <Outlet />
            </main>

        </>
    );
}
