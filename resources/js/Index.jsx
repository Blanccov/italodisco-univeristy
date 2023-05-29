import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./pages/shared/Header";
import Application from "./pages/applications/Application";
import ResultPage from "./pages/results/ResultPage";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/application" element={<Application />}></Route>
    </Route>
);

// const router = createBrowserRouter({
//     path: '/',
//     element: <Header />,
//     children : [
//         {path: '/', element: <Home />},
//         {path: '/application', element: <Application />}
//     ],
// });
const router = createBrowserRouter(routeDefinitions)

function Index() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Index;
