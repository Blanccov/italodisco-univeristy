import React from "react";
import styles from "./NotFound.module.scss";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

export default function NotFound() {
    const { user } = useStateContext();

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <h1 className="text-white">404 - Page Not Found</h1>
            {user.role_id === 3 && (
                <div>
                    <Link className="text-white" to="/admin/users">Back to site</Link>
                </div>
            )}
            {user.role_id === 2 && (
                <div>
                    <Link className="text-white" to="/">Back to site</Link>
                </div>
            )}
        </div>
    );
}
