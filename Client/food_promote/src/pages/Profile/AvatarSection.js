import React, { useRef, useState, useEffect } from "react";
import styles from "./Profile.module.css";
import ImageOption from "./ImageOption";

const AvatarSection = ({ avatarUrl, thumbUrl, onUpload, userName }) => {
    return (
        <div className={styles.avatarWrapper}>
            <ImageOption
                imageUrl={thumbUrl}
                fieldKey="thumb"
                label="Ảnh bìa"
                onUpload={onUpload}
                className={styles.thumb}
            >
            </ImageOption>
            <ImageOption
                imageUrl={avatarUrl}
                fieldKey="avatar"
                label="Ảnh đại diện"
                onUpload={onUpload}
                className={styles.avt}
            >
                <span>
                    {userName}
                </span>
            </ImageOption>
        </div>
    );
};

export default AvatarSection;