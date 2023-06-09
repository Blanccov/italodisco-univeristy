import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import styles from "./Sign.module.scss";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors("Fill all fields!");
                    } else {
                        setErrors({
                            email: [response.data.message],
                        });
                    }
                }
                if (response && response.status === 401) {
                    setErrors(response.data.error);
                }
            });
    };

    return (
        <div className={styles["bg-image"]}>
            <div className="my-margin">
                <div className="my-form">
                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <legend className="text-white ">Login</legend>
                            {errors && (
                                <div className="text-danger">{errors}</div>
                            )}

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
                                    ref={emailRef}
                                    required
                                />
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
                                    ref={passwordRef}
                                    required
                                />
                            </div>
                            <button
                                className="btn btn-secondary mt-5 w-100"
                                type="submit"
                            >
                                Login
                            </button>
                            <p>
                                Don't have account yet? &nbsp;
                                <Link className="my-link" to="/register">
                                    Register
                                </Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
//siemano
