import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import Users from "./views/Users";
import GuestLayout from "./components/GuestLayout";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import UserForm from "./views/UserForm";
import Recruitment from "./views/Recruitment";
import RecruitmentForm from "./views/RecruitmentForm";
import RecruitmentShow from "./views/RecruitmentShow";
import Appliacations from "./views/Applications";
import ScoreForm from "./views/ScoreForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
            {
                path: '/recruitments',
                element: <Recruitment />
            },
            {
                path: '/recruitments/:departament',
                element: <RecruitmentShow />
            },
            {
                path: '/recruitments/new',
                element: <RecruitmentForm key="recruitmentCreate"/>
            },
            {
                path: '/recruitments/:id',
                element: <RecruitmentForm key="recruitmentUpdate"/>
            },
            {
                path: '/applications',
                element: <Appliacations />
            },
            {
                path: '/applications/new',
                element: <ScoreForm key="applicationCreate"/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }

]);

export default router;
