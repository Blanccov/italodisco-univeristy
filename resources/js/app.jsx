import "bootstrap/dist/js/bootstrap.min.js";
// import 'bootswatch/dist/lux/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.scss";
import { AuthProvider } from "./pages/auth/AuthProvider";

import ReactDOM from "react-dom/client";
// import Home from './pages/Home';
import Index from "./Index";

ReactDOM.createRoot(document.getElementById("app")).render(
    <AuthProvider>
        <Index />
    </AuthProvider>
);
