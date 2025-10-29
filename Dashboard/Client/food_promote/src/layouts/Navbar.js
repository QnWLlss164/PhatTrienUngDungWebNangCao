import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavEnum from "../common/emun/navEnum";
import classes from './layout.module.css'
import logo from '../assets/logo.png';
import Button from "../components/common/Button/Button";
import { useUser } from "../hook/userContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { state, dispatch } = useUser();
    const { user } = state;
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const HandleSignOut = () => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    }
    const handleActive = ({ isActive }) => isActive ? `${classes.nav_item} ${classes.active}` : classes.nav_item
    return (

        <div className={` ${classes.header} ${scrolled ? `${classes.scrolled}` : ""}`}>

            <div className={`grid wide ${classes.container}`}>
                <Link to={NavEnum.HOME}>
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                <div className={classes.nav}>
                    <NavLink
                        to={NavEnum.HOME}
                        className={handleActive}
                    >
                        <h4>Trang chủ</h4>
                    </NavLink>
                    <NavLink
                        to={NavEnum.LOCAL_DISHES}
                        className={handleActive}
                    >
                        <h4>Món ăn địa phương</h4>
                    </NavLink>
                    <NavLink
                        to={NavEnum.DINING_PLACES}
                        className={handleActive}
                    >
                        <h4>Địa điểm ăn uống</h4>
                    </NavLink>
                    <NavLink
                        to={NavEnum.BLOGS_AND_NEWS}
                        className={handleActive}
                    >
                        <h4>Blog & Tin tức</h4>
                    </NavLink>
                </div>
                <div className={classes.btn_box}>
                    {!user ? <>
                        <Link to='/signup'>
                            <Button effect={true}>Đăng ký</Button>
                        </Link>
                        <Link to='/login'>
                            <Button>Đăng nhập</Button>
                        </Link></> :
                        <>
                            <div className={classes.info}>
                                <p>
                                    {user.first_name} {user.last_name}
                                </p>
                                <span onClick={HandleSignOut}>Đăng xuất</span>
                            </div>
                            <Link to='/profile'>
                                <div style={{
                                    backgroundImage: `url(${user.avatar})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                    className={classes.avt}></div>
                            </Link>
                        </>}

                </div>
            </div>
        </div>
    )
}
