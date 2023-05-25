import React from "react";
import styles from "./login.module.scss";

function Login() {
    const heading = "Login";
    return (
        <div>
            <div className={styles["bg-image"]}>
                <div className="my-form">
                    <form>
                        <fieldset>
                            <legend className="text-white ">Legend</legend>

                            <div className="form-group">
                                <label
                                    for="exampleInputEmail1"
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
                                    for="exampleInputPassword1"
                                    className="form-label mt-4 text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control "
                                    id="exampleInputPassword1"
                                    placeholder="Password"
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
