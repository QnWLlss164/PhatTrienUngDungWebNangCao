import React from 'react';
import classes from './ConfirmModal.module.css';

export default function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <p>{message}</p>
                <div className={classes.actions}>
                    <button onClick={onConfirm} className={classes.confirm}>Xác nhận</button>
                    <button onClick={onCancel} className={classes.cancel}>Hủy</button>
                </div>
            </div>
        </div>
    );
}
