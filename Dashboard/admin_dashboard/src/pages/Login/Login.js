import React, { useState, useContext } from 'react';
import { LoaderContext } from '../../hooks/LoaderContext';
import { useNavigate } from 'react-router-dom';
import { UserAPI } from '../../api/userAPI';
import { useUser } from '../../hooks/userContext';
import styles from './Login.module.css'

const Login = () => {
    const { setLoading } = useContext(LoaderContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { dispatch } = useUser();
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setErrorMessage("Tên đăng nhập và mật khẩu không được để trống.");
            return false;
        }
        if (username.length < 5) {
            setErrorMessage("Tên đăng nhập phải có ít nhất 5 ký tự.");
            return false;
        }
        if (password.length < 5) {
            setErrorMessage("Mật khẩu phải có ít nhất 5 ký tự.");
            return false;
        }
        return true;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setLoading(false)
            return;
        }
        UserAPI.Login({ username, password }, (err, data) => {
            if (err) {
                setErrorMessage("Đăng nhập thất bại: " + err.message);
                setLoading(false)
                return;
            }
            if (data.role !== "admin") {
                console.log("admin")
                setErrorMessage("Tài khoản không có quyền truy cập trang quản lý.");
                setLoading(false)
                return;
            }

            localStorage.setItem("token", data.token);
            UserAPI.Profile(data.token, (err, data) => {
                if (!err) {
                    dispatch({ type: "LOGIN", payload: data });

                }

            });
            setLoading(false)
            navigate("/");

        });
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />
                {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
