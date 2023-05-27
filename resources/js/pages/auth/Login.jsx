import React, { useState } from "react";
import styles from "./login.module.scss";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const naviagte = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/login", { email, password });
            setEmail("");
            setPassword("");
            naviagte("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div className={styles["bg-image"]}>
                <div className="my-form">
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            <legend className="text-white ">Login</legend>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label mt-4 text-white "
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label mt-4 text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control "
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <button
                                className="btn btn-secondary mt-5 w-100"
                                type="submit"
                            >
                                Login
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
