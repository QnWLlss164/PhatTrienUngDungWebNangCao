import React, { } from 'react'
import { Link, NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
import logo from '../../assets/logo.png'

export default function Sidebar({ collapsed }) {

    const handleActive = ({ isActive }) => isActive ? `${classes.sidebar_item} ${classes.active}` : `${classes.sidebar_item}`
    return (
        <div className={`${classes.sidebar} ${collapsed ? classes.collapsed : ''}`}>
            <div className={classes.header}>
                <Link Link to={'/'}>
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>

            </div>

            <div>
                <ul>
                    <NavLink className={handleActive} to="/"> <i className="fa-solid fa-house"></i><li > Trang thống kê</li></NavLink>
                    <NavLink className={handleActive} to="/categories"><i className="fa-solid fa-list"></i> <li >Quản lý danh mục</li></NavLink>
                    <NavLink className={handleActive} to="/users"><i className="fa-solid fa-user"></i> <li >Quản lý người dùng</li></NavLink>
                    <NavLink className={handleActive} to="/foods"><i className="fa-solid fa-bowl-food"></i><li > Quản lý món ăn</li></NavLink>
                    <NavLink className={handleActive} to="/restaurants"><i className="fa-solid fa-utensils"></i><li > Quản lý nhà hàng</li></NavLink>
                    <NavLink className={handleActive} to="/posts"><i className="fa-solid fa-signs-post"></i><li > Quản lý bài post</li></NavLink>
                </ul>
            </div>


        </div>
    )
}
