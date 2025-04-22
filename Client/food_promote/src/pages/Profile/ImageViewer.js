import React from "react";
import styles from './Profile.module.css';

const ImageViewer = ({ src, onClose }) => {
    return (
        <div className={`${styles.overlay}`} onClick={onClose}>
            <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Avatar full view" />

            </div>
            <button onClick={onClose}>
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
        </div>
    );
};

export default ImageViewer;
