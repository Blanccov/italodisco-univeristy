import { Router, createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ApplicationPage from "./user/ApplicationPage";
import Home from "./Home";
import GuestLayout from "./GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/applications",
                element: <ApplicationPage />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Register />,
            },
        ],
    },
]);

export default Router;
