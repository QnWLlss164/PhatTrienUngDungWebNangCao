import React, { useState } from "react";
import classes from './Login.module.css'
import InputPwd from "../../components/common/Input/InputPwd";
import Input from "../../components/common/Input/Input";
import logo from '../../assets/form_logo.png'
import { Link } from "react-router-dom";
import feature from '../../assets/feature.png'
import Button from "../../components/common/Button/Button";
import { useUser } from "../../hook/userContext";
import { UserAPI } from "../../apis/userAPI";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";

export default function Login() {
    const { setLoading } = useContext(LoaderContext);
    const { dispatch } = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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
        if (password.length < 6) {
            setErrorMessage("Mật khẩu phải có ít nhất 6 ký tự.");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
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
            if (data.role !== "guest") {
                setErrorMessage("Tài khoản không có quyền truy cập trang người dùng.");
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
        <div className={`grid wide ${classes.login_container}`}>
            <img className={classes.img} src={feature} alt="feature" />
            <form className={classes.login_form} onSubmit={handleLogin}>
                <img className={classes.logo} src={logo} alt="logo" />
                <h2>Signin To Continue</h2>
                {errorMessage && <div className={classes.error_message}>{errorMessage}</div>}
                <Input type="text" label="" placeholder="Username" value={username} setValue={setUsername} />
                <InputPwd password={password} setPassword={setPassword} />
                <Button type="submit" className={classes.login_button}>
                    Login
                </Button>
                <div className={classes.link}>
                    <p>
                        Don’t have account yet?
                    </p>
                    <Link to='/signup'>
                        Sign up
                    </Link>
                </div>
            </form>

        </div>
    )
}
