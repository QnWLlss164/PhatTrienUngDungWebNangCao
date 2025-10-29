import React, { useState } from "react";
import styles from "./Profile.module.css";

const UserInfoItem = ({ label, value, onSave }) => {
    const [editing, setEditing] = useState(false);
    const [inputVal, setInputVal] = useState(value);

    const handleSave = () => {
        onSave(inputVal);
        setEditing(false);
    };

    return (
        <div className={styles.item}>

            {editing ? (
                <>
                    <div className={styles.item_info}>
                        <strong>{label}: </strong>
                        <input
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
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
                        <span>{value}</span>
                    </div>
                    <button onClick={() => setEditing(true)}>Sửa</button>
                </>
            )}
        </div>
    );
};

export default UserInfoItem;
