import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function Register() {
    const nameRef = useRef();
    const surnameRef = useRef();
    const peselRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            pesel: peselRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        console.log(payload);

        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Register into</h1>
                    {errors && (
                        <div>
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )}
                    <input ref={nameRef} type="text" placeholder="Name"></input>
                    <input
                        ref={surnameRef}
                        type="text"
                        placeholder="Surname"
                    ></input>
                    <input
                        ref={peselRef}
                        type="text"
                        placeholder="Pesel"
                    ></input>
                    <input
                        ref={phoneRef}
                        type="text"
                        placeholder="Phone"
                    ></input>
                    <input
                        ref={addressRef}
                        type="text"
                        placeholder="Address"
                    ></input>
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
                    <button>Register</button>
                    <p>
                        Have account?
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
