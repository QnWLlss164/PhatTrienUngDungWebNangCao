// components/EditCategoryModal/EditCategoryModal.jsx
import React, { useState, useEffect } from 'react';
import classes from './EditCategory.module.css';
import Input from '../../../Input/Input';
import InpImage from '../../../InpImage/InpImage';
import Button from '../../../Button/Button';

export default function EditCategory({ category, onClose, onSave }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        setName(category.name || '');
        setImage(category.image || '');
    }, [category]);

    useEffect(() => {
        // Kiểm tra nếu có thay đổi mới kích hoạt nút lưu
        setIsChanged(name !== category.name || image !== category.image);
    }, [name, image, category]);

    const handleSave = () => {
        if (!isChanged) return;
        onSave({ ...category, name, image });
    };

    const handleClose = () => {
        onClose(false)
    }
    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2 className={classes.title}>Chỉnh sửa danh mục</h2>
                <div className={classes.name}>
                    <p>Tên danh mục</p>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <InpImage label={"Chỉnh sửa hình ảnh"} value={image} onChange={(url) => setImage(url)} />
                <div className={classes.actions}>
                    <Button onClick={handleSave} disabled={!isChanged} className={classes.save}>Lưu</Button>
                    <Button onClick={handleClose} className={classes.cancel}>Hủy</Button>
                </div>
            </div>
        </div>
    );
}
