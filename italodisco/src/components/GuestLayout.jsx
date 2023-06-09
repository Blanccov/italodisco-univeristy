import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import styles from "./Layout.module.scss";

export default function GuestLayout() {
    const { token, user } = useStateContext();
    // debugger;
    if (token && user.role_id === 2) {
        return <Navigate to="/" />;
    }
    if (token && user.role_id === 3) {
        return <Navigate to="/admin/users" />;
    }
    return (
        <>
            <nav
                className={
                    "navbar navbar-expand-lg navbar-dark bg-transparent " +
                    styles["bg-image"]
                }
            >
                <div className="container-fluid">
                    <a className="navbar-brand ">Italodisco</a>
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
                                <a className="nav-link active" href="/">
                                    Home
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/guest/recruitments">
                                    Recruitments
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/guest/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}
