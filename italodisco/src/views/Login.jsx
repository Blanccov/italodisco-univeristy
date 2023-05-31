import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (ev) => {
        ev.prevDefault();
    };

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Login into</h1>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
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
