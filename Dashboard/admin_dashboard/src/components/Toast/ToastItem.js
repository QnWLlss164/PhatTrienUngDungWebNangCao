import React from 'react';
import styles from './Toast.module.css';

const ToastItem = ({ message }) => {
    return (
        <div className={styles.toast}>
            {message}
        </div>
    );
};

export default ToastItem;
