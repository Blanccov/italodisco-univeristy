import "bootstrap/dist/js/bootstrap.min.js";
// import 'bootswatch/dist/lux/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.scss";
import { AuthProvider } from "./pages/auth/AuthProvider";

import ReactDOM from "react-dom/client";
// import Home from './pages/Home';
import Index from "./Index";
import { RouterProvider } from "react-router-dom";
import router from "./pages/router"

ReactDOM.createRoot(document.getElementById("app")).render(
    <AuthProvider>
        {/* <Index /> */}
        <RouterProvider router={router} />
    </AuthProvider>
);
