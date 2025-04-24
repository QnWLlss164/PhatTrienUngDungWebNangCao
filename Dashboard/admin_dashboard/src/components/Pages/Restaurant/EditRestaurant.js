
import React, { useState, useEffect } from 'react';
import classes from './EditRestaurant.module.css';
import Input from '../../Input/Input';
import InpImage from '../../InpImage/InpImage';
import Button from '../../Button/Button';

export default function EditRest({ restaurant, onClose, onSave }) {
    const [form, setForm] = useState({
        name: '',
        description: '',
        province: '',
        district: '',
        ward: '',
        street: '',
        contact: '',
        image: '',
        thumb: '',
        location: '',
    });

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (restaurant) {
            setForm({
                name: restaurant.name || '',
                description: restaurant.description || '',
                province: restaurant.province || '',
                district: restaurant.district || '',
                ward: restaurant.ward || '',
                street: restaurant.street || '',
                contact: restaurant.contact || '',
                image: restaurant.image || '',
                thumb: restaurant.thumb || '',
                location: restaurant.location || '',
            });
        }
    }, [restaurant]);

    useEffect(() => {
        const isFormChanged =
            form.name !== restaurant.name ||
            form.description !== restaurant.description ||
            form.province !== restaurant.province ||
            form.district !== restaurant.district ||
            form.ward !== restaurant.ward ||
            form.street !== restaurant.street ||
            form.contact !== restaurant.contact ||
            form.image !== restaurant.image ||
            form.thumb !== restaurant.thumb ||
            form.location !== restaurant.location
        setIsChanged(isFormChanged);
    }, [form, restaurant]);

    const handleChange = (field) => (e) => {
        const value = e.target ? e.target.value : e;
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!isChanged) return;
        onSave({ _id: restaurant._id, payload: form });
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2>Chỉnh sửa nhà hàng</h2>
                <div className={classes.form}>
                    <div>
                        <p>Tên</p>
                        <Input type="text" value={form.name} onChange={handleChange('name')} placeholder="Tên" />
                    </div>
                    <div>
                        <p>Mô tả</p>
                        <Input type="text" value={form.description} onChange={handleChange('description')} placeholder="Mô tả" />
                    </div>
                    <div>
                        <p>Tỉnh</p>
                        <Input type="text" value={form.province} onChange={handleChange('province')} placeholder="Tỉnh" />
                    </div>
                    <div>
                        <p>Huyện</p>
                        <Input type="text" value={form.district} onChange={handleChange('district')} placeholder="Huyện" />
                    </div>
                    <div>
                        <p>Phường</p>
                        <Input type="text" value={form.ward} onChange={handleChange('ward')} placeholder="Phường" />
                    </div>
                    <div>
                        <p>Phố</p>
                        <Input type="text" value={form.street} onChange={handleChange('street')} placeholder="Phố" />
                    </div>
                    <div>
                        <p>Liên hệ</p>
                        <Input type="text" value={form.contact} onChange={handleChange('contact')} placeholder="Liên hệ" />
                    </div>
                    <div>
                        <p>Vị trí</p>
                        <Input type="text" value={form.location} onChange={handleChange('location')} placeholder="vị trí" />
                    </div>
                    <InpImage value={form.image} onChange={(url) => setForm(prev => ({ ...prev, image: url }))} />
                    <InpImage value={form.thumb} onChange={(url) => setForm(prev => ({ ...prev, thumb: url }))} label="Ảnh nền" />
                </div>

                <div className={classes.actions}>
                    <Button onClick={handleSave} disabled={!isChanged} className={classes.save}>Lưu</Button>
                    <Button onClick={() => onClose(false)} className={classes.cancel}>Hủy</Button>
                </div>
            </div>
        </div>
    );
}
