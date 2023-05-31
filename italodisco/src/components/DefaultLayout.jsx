import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if(!token){

        return <Navigate to="/login" />
    }

    return (
        <div>
            <aside>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>header</div>
                    <div>{user.name}</div>
                    {/* <a onClick={onLogout}>Logout</a> */}
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
}
