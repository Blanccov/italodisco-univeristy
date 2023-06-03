import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import Recruitment from "./views/default/Recruitment";
import RecruitmentShow from "./views/default/RecruitmentShow";
import Appliacations from "./views/default/Applications";
import ApplicationForm from "./views/default/ApplicationForm";
import AdminLayout from "./components/AdminLayout";
import About from "./views/About";
import UsersA from "./views/Admin/UsersA";
import UserFormA from "./views/Admin/UserFormA";
import RecruitmentA from "./views/Admin/RecruitmentA";
import RecruitmentFormA from "./views/Admin/RecruitmentFormA";
import RecruitmentShowA from "./views/Admin/RecruitmentShowA";
import StudentsA from "./views/Admin/StudentsA";
import StudentsListA from "./views/Admin/StudentsListA";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/recruitments" />,
            },

            {
                path: "/recruitments",
                element: <Recruitment />,
            },
            {
                path: "/recruitments/:departament",
                element: <RecruitmentShow />,
            },

            {
                path: "/applications",
                element: <Appliacations />,
            },

            {
                path: "/applications/:id",
                element: <ApplicationForm key="applicationUpdate" />,
            },

            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <Navigate to="/admin/users" />,
            },
            {
                path: "/admin/users",
                element: <UsersA />,
            },
            {
                path: "/admin/users/new",
                element: <UserFormA key="userCreate" />,
            },
            {
                path: "/admin/users/:id",
                element: <UserFormA key="userUpdate" />,
            },
            {
                path: "/admin/recruitments",
                element: <RecruitmentA />,
            },
            {
                path: "/admin/recruitments/:departament",
                element: <RecruitmentShowA />,
            },
            {
                path: "/admin/recruitments/new",
                element: <RecruitmentFormA key="recruitmentCreate" />,
            },
            {
                path: "/admin/recruitments/:id",
                element: <RecruitmentFormA key="recruitmentUpdate" />,
            },
            {
                path: "/admin/students/:id",
                element: <StudentsA key="students" />,
            },
            {
                path: "/admin/students",
                element: <StudentsListA />,
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
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
