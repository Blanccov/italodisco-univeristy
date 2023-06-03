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
import ApplicationForm from "./views/ApplicationForm";
import Students from "./views/Students";
import StudentsList from "./views/StudentsList";
import AdminLayout from "./components/AdminLayout";
import About from "./views/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/recruitments" />
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
            // {
            //     path: '/applications/new',
            //     element: <ScoreForm key="applicationCreate"/>
            // },
            {
                path: '/applications/:id',
                element: <ApplicationForm key="applicationUpdate"/>
            },
            {
                path: '/students/:id',
                element: <Students key="students"/>
            },
            {
                path: '/users/getAcceptedStudentsList',
                element: <StudentsList />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
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
            // {
            //     path: '/applications/new',
            //     element: <ScoreForm key="applicationCreate"/>
            // },
            {
                path: '/applications/:id',
                element: <ApplicationForm key="applicationUpdate"/>
            },
            {
                path: '/students/:id',
                element: <Students key="students"/>
            },
            {
                path: '/users/getAcceptedStudentsList',
                element: <StudentsList />
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
