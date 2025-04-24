import React, { useState, useEffect } from 'react';
import classes from './InpImage.module.css';

export default function InpImage({ value, onChange, label }) {
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (typeof value === 'string') {
            setPreviewImage(value);
        } else if (value instanceof File) {
            const imageURL = URL.createObjectURL(value);
            setPreviewImage(imageURL);
        } else {
            setPreviewImage('');
        }
    }, [value]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
            onChange(file);
        }
    };

    return (
        <div className={classes.container}>
            <p>{label ? label : "Hình ảnh"}</p>

            <label className={classes.label}>
                Chọn tệp
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </label>

            {previewImage && (
                <div className={classes.box_img}>
                    <img className={classes.img} src={previewImage} alt="Preview" />
                </div>
            )}
        </div>
    );
}
