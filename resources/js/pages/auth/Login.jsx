import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./login.module.scss";
import AuthContext from "./AuthProvider";

import axios from "../api/axios";
import Header from "../shared/Header";
const LOGIN_URL = "/login";

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email: user, password: pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.userRole;
            console.log(accessToken);
            console.log(roles);
            setAuth({ user, pwd, roles, accessToken });
            setUser("");
            setPwd("");
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            err.current.focus();
        }
    };
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                </section>
            ) : (
                <>
                    <Header />
                    <div className={styles["bg-image"]}>
                        <div className="my-form">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend className="text-white ">
                                        Login
                                    </legend>
                                    <p
                                        className={
                                            errMsg ? "errmsg" : "offscreen"
                                        }
                                        ref={errRef}
                                    >
                                        {errMsg}
                                    </p>

                                    <div className="form-group">
                                        <label
                                            htmlFor="email"
                                            className="form-label mt-4 text-white "
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) =>
                                                setUser(e.target.value)
                                            }
                                            value={user}
                                            required
                                        />
                                        <small
                                            id="emailHelp"
                                            className="form-text text-muted"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="password"
                                            className="form-label mt-4 text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control "
                                            id="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPwd(e.target.value)
                                            }
                                            value={pwd}
                                            required
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
                </>
            )}
        </>
    );
}

export default Login;
