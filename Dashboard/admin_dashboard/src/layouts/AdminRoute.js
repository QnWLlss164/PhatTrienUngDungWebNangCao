import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/userContext";

export default function AdminRoute({ children }) {
    const { state, isCheckingAuth } = useUser();

    // Nếu đang check auth => show loading hoặc return null
    if (isCheckingAuth) {
        return <div>Đang kiểm tra quyền truy cập...</div>; // hoặc spinner tùy bạn
    }

    // Nếu chưa đăng nhập hoặc không phải admin => chuyển về login
    if (!state.user || state.user.role !== "admin") {
        return <Navigate to="/login" replace />;
    }

    return children;
}
