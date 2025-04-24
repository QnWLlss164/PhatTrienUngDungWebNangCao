
import React, { useState, useEffect } from 'react';
import classes from './EditFood.module.css';
import Input from '../../Input/Input';
import InpImage from '../../InpImage/InpImage';
import Button from '../../Button/Button';
import { CategoryAPI } from '../../../api/categorieAPI';
import { RestaurantAPI } from '../../../api/restaurantAPI';

export default function EditFood({ food, onClose, onSave }) {
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
        if (food) {
            setForm({
                name: food.name || '',
                description: food.description || '',
                price: food.price || '',
                unit: food.unit || '',
                image: food.image || '',
                categories_id: food.categories_id || '',
                restaurant_id: food.restaurant_id || '',
            });
        }

        CategoryAPI.getAllName(token, (err, res) => {
            if (!err) setCategories(res);
        });
        RestaurantAPI.getAllName(token, (err, res) => {
            if (!err) {
                setRestaurants(res);
            }
        });

    }, [food]);

    useEffect(() => {
        const isFormChanged = Object.keys(form).some(key => form[key] !== (food[key] || ''));
        setIsChanged(isFormChanged);
    }, [form, food]);

    const handleChange = (field) => (e) => {
        const value = e.target ? e.target.value : e;
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!isChanged) return;
        onSave({ _id: food._id, payload: form });
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2>Chỉnh sửa món ăn</h2>

                <div className={classes.form}>
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
                        <Input type="text" value={form.name} onChange={handleChange('name')} placeholder="Tên" /></div>
                    <div>
                        <p>Mô tả</p>
                        <Input type="text" value={form.description} onChange={handleChange('description')} placeholder="Mô tả" />
                    </div>
                    <div>
                        <p>Giá</p>
                        <Input type="number" value={form.price} onChange={handleChange('price')} placeholder="Giá" />
                    </div>
                    <div>
                        <p>Đơn vị</p>
                        <Input type="text" value={form.unit} onChange={handleChange('unit')} placeholder="Đơn vị" />
                    </div>
                    <InpImage value={form.image} onChange={(url) => setForm(prev => ({ ...prev, image: url }))} />
                </div>

                <div className={classes.actions}>
                    <Button onClick={handleSave} disabled={!isChanged} className={classes.save}>Lưu</Button>
                    <Button onClick={() => onClose(false)} className={classes.cancel}>Hủy</Button>
                </div>
            </div>
        </div>
    );
}
