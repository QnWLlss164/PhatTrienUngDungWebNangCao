// ToastContainer.jsx
import React from "react";
import ReactDOM from "react-dom";
import { useToast } from "../../hooks/ToastContext";
import ToastItem from "./ToastItem";
import styles from "./Toast.module.css";

const ToastContainer = () => {
    const { toasts } = useToast();

    return ReactDOM.createPortal(
        <div className={styles.toastContainer}>
            {toasts.map((toast) => (
                <ToastItem key={toast.id} message={toast.message} />
            ))}
        </div>,
        document.getElementById("toast-root")
    );
};

export default ToastContainer;
