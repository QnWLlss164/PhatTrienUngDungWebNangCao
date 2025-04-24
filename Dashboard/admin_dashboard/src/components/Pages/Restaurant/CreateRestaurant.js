import React, { useState } from 'react';
import classes from './CreateRestaurant.module.css';
import Button from '../../Button/Button';
import InpImage from '../../InpImage/InpImage';
import Input from '../../Input/Input';

export default function CreateRestModal({ onClose, onCreate }) {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(form);
        onClose()
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2>Tạo nhà hàng</h2>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.form_input}>
                        <div>
                            <p>Tên</p>
                            <Input
                                name="name"
                                placeholder="Tên"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <p>Mô tả</p>
                            <Input
                                name="description"
                                placeholder="Mô tả"
                                value={form.description}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <div>
                            <p>Tỉnh</p>
                            <Input
                                name="province"
                                placeholder="Tỉnh"
                                value={form.province}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <p>Huyện</p>
                            <Input
                                name="district"
                                type="text"
                                placeholder="Huyện"
                                value={form.district}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <p>Phường</p>
                            <Input
                                name="ward"
                                type="text"
                                placeholder="Phường"
                                value={form.ward}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <p>Phố</p>
                            <Input
                                name="street"
                                type="text"
                                placeholder="Phố"
                                value={form.street}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <p>
                                Liên hệ
                            </p>
                            <Input
                                name="contact"
                                type="text"
                                placeholder="Liên hệ"
                                value={form.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <p>
                                Vị trí
                            </p>
                            <Input
                                name="location"
                                type="text"
                                placeholder="Vị trí"
                                value={form.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <InpImage value={form.image} onChange={(url) => setForm(prev => ({ ...prev, image: url }))} />
                        <InpImage value={form.thumb} onChange={(url) => setForm(prev => ({ ...prev, thumb: url }))} label="Ảnh nền" />
                    </div>
                    <div className={classes.actions}>
                        <Button type="submit">Tạo</Button>
                        <Button className={classes.cancel} type="button" onClick={onClose}>Hủy</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
