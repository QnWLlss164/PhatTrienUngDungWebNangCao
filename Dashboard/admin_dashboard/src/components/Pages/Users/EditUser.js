// components/Pages/Users/EditUser.jsx
import React, { useState, useEffect } from 'react';
import classes from './EditUser.module.css';
import Input from '../../../components/Input/Input';
import InpImage from '../../../components/InpImage/InpImage';
import Button from '../../../components/Button/Button';

export default function EditUser({ user, onClose, onSave }) {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        avatar: '',
        thumb: '',
    });

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (user) {
            setForm({
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                username: user.username || '',
                password: '',
                avatar: user.avatar || '',
                thumb: user.thumb || '',
            });
        }
    }, [user]);

    useEffect(() => {
        const isFormChanged =
            form.first_name !== user.first_name ||
            form.last_name !== user.last_name ||
            form.username !== user.username ||
            form.password !== '' ||
            form.avatar !== user.avatar ||
            form.thumb !== user.thumb
        setIsChanged(isFormChanged);
    }, [form, user]);

    const handleChange = (field) => (e) => {
        const value = e.target ? e.target.value : e;
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!isChanged) return;
        onSave({ _id: user._id, payload: form });
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <h2>Chỉnh sửa người dùng</h2>
                <div className={classes.form}>
                    <div>
                        <p>Tên</p>
                        <Input type="text" value={form.first_name} onChange={handleChange('first_name')} placeholder="Họ" />
                    </div>
                    <div>
                        <p>Họ</p>
                        <Input type="text" value={form.last_name} onChange={handleChange('last_name')} placeholder="Tên" />
                    </div>
                    <div>
                        <p>Tên tài khoản</p>
                        <Input type="text" value={form.username} onChange={handleChange('username')} placeholder="Tên đăng nhập" />
                    </div>
                    <div>
                        <p>Mật khẩu mới</p>
                        <Input type="password" value={form.password} onChange={handleChange('password')} placeholder="Mật khẩu mới (nếu có)" />
                    </div>
                    <div>
                        <p>Quyền</p>
                        <Input disabled={true} type="text" value={user.role} placeholder="Vai trò" />
                    </div>
                    <InpImage value={form.avatar} onChange={(url) => setForm(prev => ({ ...prev, avatar: url }))} label="Ảnh đại diện" />
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
