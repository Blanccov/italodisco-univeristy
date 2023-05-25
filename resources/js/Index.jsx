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

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Route>
);

const router = createBrowserRouter(routeDefinitions);

function Index() {
    return (
        <Header>
            <RouterProvider router={router} />
        </Header>
    );
}

export default Index;
