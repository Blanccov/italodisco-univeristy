import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            <div>
                mordo
                <Outlet />
            </div>
        </div>
    );
};

export default GuestLayout;
