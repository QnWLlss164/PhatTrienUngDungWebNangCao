import { createContext, useReducer, useContext } from "react";

// Khởi tạo Context
const UserContext = createContext();

// Action Types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer function để cập nhật state
const userReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload };
        case LOGOUT:
            return { user: null };
        default:
            return state;
    }
};

// Provider Component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: null });

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook để sử dụng UserContext dễ dàng hơn
export const useUser = () => useContext(UserContext);
