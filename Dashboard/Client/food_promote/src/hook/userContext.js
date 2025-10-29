import { createContext, useReducer, useContext } from "react";
import { UserAPI } from '../apis/userAPI'
import React, { useEffect, useState } from "react";

const UserContext = createContext();

// Action Types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";

const userReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload };
        case LOGOUT:
            return { user: null };
        case UPDATE_USER:
            return { user: { ...state.user, ...action.payload } };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: null });
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            UserAPI.Profile(token, (err, data) => {
                if (!err) {
                    dispatch({ type: "LOGIN", payload: data });
                } else {
                    console.error("Token không hợp lệ:", err.message);
                    localStorage.removeItem("token");
                    dispatch({ type: "LOGOUT" });
                }
                setIsCheckingAuth(false);
            });
        } else {
            setIsCheckingAuth(false);
        }
    }, []);

    if (isCheckingAuth) {
        return <div>Loading...</div>;
    }
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
