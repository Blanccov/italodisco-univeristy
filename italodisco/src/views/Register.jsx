import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import styles from "./Sign.module.scss"

export default function Register() {
    const nameRef = useRef();
    const surnameRef = useRef();
    const peselRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const { setNotification } = useStateContext();

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
            role_id: 2,
        };

        console.log(payload)

        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate("/login")
                setNotification("Account is created")
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
        <div className={styles["bg-image"]}>
            <div className="my-form">
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend className="text-white ">Register</legend>
                        {errors && (
                            <div>
                                {Object.keys(errors).map((key) => (
                                    <p key={key} className="text-danger">{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        <div className="d-flex">
                            <div className="form-group me-2">
                                <label
                                    className="col-form-label mt-4 text-white"
                                    htmlFor="Name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    id="Name"
                                    ref={nameRef}
                                    required
                                />
                            </div>
                            <div className="form-group ms-2">
                                <label
                                    className="col-form-label mt-4 text-white"
                                    htmlFor="Surname"
                                >
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Surname"
                                    id="Surname"
                                    ref={surnameRef}
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group me-2">
                                <label
                                    className="col-form-label mt-4 text-white"
                                    htmlFor="Pesel"
                                    required
                                >
                                    Pesel
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter pesel"
                                    id="Pesel"
                                    ref={peselRef}
                                    required
                                />
                                <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                Pesel has need to 11 characters
                            </small>
                            </div>
                            <div className="form-group ms-2">
                                <label
                                    className="col-form-label mt-4 text-white"
                                    htmlFor="Phone"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone"
                                    id="Phone"
                                    ref={phoneRef}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                className="col-form-label mt-4 text-white"
                                htmlFor="Address"
                            >
                                Address
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Enter address"
                                id="Address"
                                rows={2}
                                ref={addressRef}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="Email"
                                className="form-label mt-4 text-white "
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                ref={emailRef}
                                required
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
                                htmlFor="Password"
                                className="form-label mt-4 text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control "
                                id="Password"
                                placeholder="Password"
                                ref={passwordRef}
                                required
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                Password has need to more or equal 8 characters
                            </small>
                        </div>
                        <button
                            className="btn btn-secondary mt-5 w-100"
                            type="submit"
                        >
                            Register
                        </button>
                        <p>
                            Have account?
                             <Link className="my-link" to="/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
}
