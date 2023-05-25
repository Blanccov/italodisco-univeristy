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
import Result from "./pages/results/Result";
import Application from "./pages/applications/Application";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/application" element={<Application />}></Route>
    </Route>
);

const router = createBrowserRouter(routeDefinitions);

function Index() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}

export default Index;
