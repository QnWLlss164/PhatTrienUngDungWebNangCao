import React, { useState } from "react";
import styles from "./Profile.module.css";

const UserInfoPwd = ({ label, onSave }) => {
    const [editing, setEditing] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSave = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Mật khẩu mới không trùng khớp.");
            return;
        }

        onSave({
            currentPassword,
            newPassword
        });

        setEditing(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
    };

    return (
        <div className={styles.item}>

            {editing ? (
                <>
                    <div className={styles.item_info}>
                        <strong>{label}: </strong>
                        <input
                            type="password"
                            placeholder="Mật khẩu hiện tại"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu mới"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Nhắc lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className={styles.error}>{error}</p>}
                    </div>

                    <div>
                        <button onClick={handleSave}>Lưu</button>
                        <button onClick={() => setEditing(false)}>Hủy</button>
                    </div>
                </>
            ) : (
                <>

                    <div className={styles.item_info}>
                        <strong>{label}: </strong>
                        <span>{"*".repeat(8)}</span>
                    </div>


                    <button onClick={() => setEditing(true)}>Sửa</button>
                </>
            )}
        </div>
    );
};

export default UserInfoPwd;
