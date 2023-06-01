import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

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
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Login into</h1>
                    {errors && (
                        <div>
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )}
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                    ></input>
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    ></input>
                    <button>Login</button>
                    <p>
                        Not Registered?
                        <Link to="/register">Create account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
