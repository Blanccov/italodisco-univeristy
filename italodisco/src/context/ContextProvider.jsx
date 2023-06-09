import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState("");
    const [token, _setToken] = useState(localStorage.getItem("BEARER_TOKEN"));

    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification("");
        }, 1500);
    };

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("BEARER_TOKEN", token);
        } else {
            localStorage.removeItem("BEARER_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                notification,
                setUser,
                setToken,
                setNotification,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
