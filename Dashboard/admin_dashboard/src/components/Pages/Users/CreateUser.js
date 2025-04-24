import React, { useState } from 'react';
import classes from './CreateUser.module.css';
import Button from '../../Button/Button';

export default function CreateUserModal({ onClose, onCreate }) {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        role: 'guest',
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
                <h2>Tạo người dùng</h2>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <input
                        name="first_name"
                        placeholder="Họ"
                        value={form.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="last_name"
                        placeholder="Tên"
                        value={form.last_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="username"
                        placeholder="Tên đăng nhập"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <select name="role" value={form.role} onChange={handleChange}>
                        <option value="guest">Khách</option>
                        <option value="admin">Quản trị</option>
                    </select>
                    <div className={classes.actions}>
                        <Button type="submit">Tạo</Button>
                        <Button type="button" onClick={onClose} className={classes.cancel}>Hủy</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
