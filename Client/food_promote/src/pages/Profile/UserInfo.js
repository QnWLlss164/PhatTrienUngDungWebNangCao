import React from "react";
import UserInfoItem from "./UserInfoItem";
import styles from "./Profile.module.css";
import UserInfoPwd from "./UserInfoPwd";
const UserInfo = ({ userInfo, onUpdateField, onChangePassword }) => {
    return (
        <div className={styles.list_info}>
            <UserInfoItem
                label="Họ"
                value={userInfo.first_name}
                onSave={(val) => onUpdateField("first_name", val)}
            />
            <UserInfoItem
                label="Tên"
                value={userInfo.last_name}
                onSave={(val) => onUpdateField("last_name", val)}
            />
            <UserInfoItem
                label="Tài khoản"
                value={userInfo.username}
                onSave={(val) => onUpdateField("username", val)}
            />
            <UserInfoPwd
                label="Mật khẩu"
                onSave={onChangePassword}
            />
        </div>
    );
};

export default UserInfo;
