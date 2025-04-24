import React, { useState, useEffect } from 'react';
import classes from './CreateFood.module.css';
import Input from '../../Input/Input';
import InpImage from '../../InpImage/InpImage';
import Button from '../../Button/Button';
import { CategoryAPI } from '../../../api/categorieAPI';
import { RestaurantAPI } from '../../../api/restaurantAPI';

export default function CreateFood({ onClose, onCreate }) {
    const token = localStorage.getItem("token");

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        unit: '',
        image: '',
        categories_id: '',
        restaurant_id: '',
    });

    const [categories, setCategories] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        CategoryAPI.getAllName(token, (err, res) => {
            if (!err) {
                setCategories(res);
            }
        });
        RestaurantAPI.getAllName(token, (err, res) => {
            if (!err) {
                setRestaurants(res);
            }
        });
    }, []);

    useEffect(() => {
        const isFormChanged = Object.keys(form).some(key => form[key] !== '');
        setIsChanged(isFormChanged);
    }, [form]);

    const handleChange = (field) => (e) => {
        const value = e.target ? e.target.value : e;
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleCreate = () => {
        if (!isChanged) return;
        onCreate(form);
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2>Tạo món ăn mới</h2>
                <div>
                    <label>Danh mục</label>
                    <select value={form.categories_id} onChange={handleChange('categories_id')}>
                        <option value="">Chọn danh mục</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>

                    <label>Nhà hàng</label>
                    <select value={form.restaurant_id} onChange={handleChange('restaurant_id')}>
                        <option value="">Chọn nhà hàng</option>
                        {restaurants.map((res) => (
                            <option key={res._id} value={res._id}>
                                {res.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>Tên</p>
                    <Input type="text" value={form.name} onChange={handleChange('name')} placeholder="Tên" />
                </div>
                <div><p>Mô tả</p>
                    <Input type="text" value={form.description} onChange={handleChange('description')} placeholder="Mô tả" /></div>
                <div>
                    <p>Giá</p>
                    <Input type="number" value={form.price} onChange={handleChange('price')} placeholder="Giá" />
                </div>
                <div>
                    <p>Đơn bị</p>
                    <Input type="text" value={form.unit} onChange={handleChange('unit')} placeholder="Đơn vị" />

                </div>
                <InpImage value={form.image} onChange={(url) => setForm(prev => ({ ...prev, image: url }))} />
                <div className={classes.actions}>
                    <Button onClick={handleCreate} disabled={!isChanged} className={classes.save}>Tạo</Button>
                    <Button onClick={() => onClose(false)} className={classes.cancel}>Hủy</Button>
                </div>
            </div>
        </div>
    );
}
