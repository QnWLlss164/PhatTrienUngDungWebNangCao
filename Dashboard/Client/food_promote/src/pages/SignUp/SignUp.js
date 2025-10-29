import React, { useState } from "react";
import classes from './SignUp.module.css'
import InputPwd from "../../components/common/Input/InputPwd";
import Input from "../../components/common/Input/Input";
import logo from '../../assets/form_logo.png'
import { Link } from "react-router-dom";
import feature from '../../assets/signup.png'
import Button from "../../components/common/Button/Button";
import { useUser } from "../../hook/userContext";
import { UserAPI } from "../../apis/userAPI";
import { useNavigate } from "react-router-dom";

import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";

export default function SignUp() {
    const { dispatch } = useUser();
    const { setLoading } = useContext(LoaderContext);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !firstname || !lastname || !password || !repeatpassword) {
            setErrorMessage("Tất cả các trường đều phải được nhập.");
            return false;
        }
        if (username.length < 6) {
            setErrorMessage("Tên đăng nhập phải có ít nhất 6 ký tự.");
            return false;
        }
        if (password.length < 6) {
            setErrorMessage("Mật khẩu phải có ít nhất 6 ký tự.");
            return false;
        }
        if (password !== repeatpassword) {
            setErrorMessage("Mật khẩu xác nhận không khớp.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (!validateForm()) {
            setLoading(false);
            return;
        }
        UserAPI.Register({ username, firstname, lastname, password, repeatpassword }, (err, data) => {
            if (err) {
                setErrorMessage("Đăng ký thất bại: " + err.message);
                setLoading(false)
                return;
            }
            console.log("user", data)
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
            <form className={classes.login_form} onSubmit={handleSubmit}>
                <img className={classes.logo} src={logo} alt="logo" />
                <h2>Create Account</h2>
                {errorMessage && <div className={classes.error_message}>{errorMessage}</div>}
                <div className={classes.name}>
                    <Input type="text" label="First Name" placeholder="Firstname" value={firstname} setValue={setFirstname} />
                    <Input type="text" label="Last Name" placeholder="Lastname" value={lastname} setValue={setLastName} />
                </div>
                <Input type="text" label="User Name" placeholder="Username" value={username} setValue={setUsername} />
                <InputPwd label="Password" password={password} setPassword={setPassword} />
                <InputPwd label="Repeat Password" password={repeatpassword} setPassword={setRepeatPassword} />
                <Button type="submit" className={classes.login_button}>
                    Create account
                </Button>
                <div className={classes.link}>
                    <p>
                        By creating an account you agree to DALAT Foodies’s
                    </p>
                    <Link>
                        Terms of Services
                    </Link>
                    and
                    <Link>
                        Privacy Policy.
                    </Link>
                </div>

                <div className={classes.link}>
                    <p>
                        Have an account?
                    </p>
                    <Link to='/login'>
                        Log in
                    </Link>
                </div>
            </form>

        </div>
    )
}
