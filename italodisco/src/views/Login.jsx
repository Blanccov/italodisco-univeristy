import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import styles from "./Sign.module.scss"

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
                console.log(data.user)
                console.log(data.token)
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message],
                        });
                    }
                }
            });

    };

    return (
        <div className={styles["bg-image"]}>
                        <div className="my-form">
                            <form onSubmit={onSubmit}>
                                <fieldset>
                                    <legend className="text-white ">
                                        Login
                                    </legend>
                                    {errors && (
                                        <div>
                                            {Object.keys(errors).map((key) => (
                                                <p key={key}>
                                                    {errors[key][0]}
                                                </p>
                                            ))}
                                        </div>
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
                                </fieldset>
                            </form>
                        </div>
                    </div>
    );
}
