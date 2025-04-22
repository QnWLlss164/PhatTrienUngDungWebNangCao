import React, { useRef, useState, useEffect } from "react";
import styles from "./Profile.module.css";
import ImageViewer from "./ImageViewer";

const ImageOption = ({ imageUrl, label, fieldKey, onUpload, className, children }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [showViewer, setShowViewer] = useState(false);
    const fileInputRef = useRef();
    const containerRef = useRef();
    useEffect(() => {
        if (!showOptions) return;

        const handleClickOutside = (e) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target)
            ) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showOptions]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            onUpload(fieldKey, imageUrl);
        }
    };
    const handleOptions = (e) => {
        e.stopPropagation();
        setShowOptions(!showOptions)
    }

    const handleViewImage = (e) => {
        e.stopPropagation();
        setShowViewer(true);
        setShowOptions(false);
    }

    const handleChangeImage = (e) => {
        e.stopPropagation();
        fileInputRef.current.click();
        setShowOptions(false);
    }
    const handleItemOption = (e) => {
        e.stopPropagation()
    }
    return (
        <div className={styles.avatarItem} ref={containerRef}>
            <div
                className={className}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                onClick={handleOptions}
            >
                {children}
                {showOptions && (
                    <div className={styles.options}
                        onClick={handleItemOption}>
                        <p><strong>{label}</strong></p>
                        <p onClick={handleViewImage}>
                            Xem ảnh
                        </p>
                        <p onClick={handleChangeImage}>
                            Thay đổi ảnh
                        </p>
                    </div>
                )}
            </div>



            {showViewer && (
                <ImageViewer
                    src={imageUrl}
                    onClose={() => setShowViewer(false)}
                />
            )}

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};
export default ImageOption;