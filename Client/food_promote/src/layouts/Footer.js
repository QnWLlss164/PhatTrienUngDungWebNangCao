import React from 'react'
import classes from './layout.module.css'
import logo from '../assets/footer-logo.png'
import iconAddress from '../assets/icon-address.png'
import iconLetter from '../assets/icon-letter.png'
import iconPhone from '../assets/icon-phone.png'
import iconYt from '../assets/icon-youtube.png'
import iconFb from '../assets/icon-facebook.png'
import iconC from '../assets/icon-c.png'
import { Link } from 'react-router-dom'
import NavEnum from "../common/emun/navEnum"
export default function Footer() {
    return (
        <div className={classes.footer_bg}>
            <div className='grid wide'>
                <div>
                    <div className={classes.footer_container}>
                        <div className={classes.footer_nav}>
                            <img className={classes.footer_logo} src={logo} alt='logo' />
                        </div>
                        <div className={classes.footer_nav}>
                            <h1>
                                Navigations
                            </h1>
                            <div>
                                <Link to={NavEnum.HOME}>
                                    <p>Home</p>
                                </Link>
                                <Link to={NavEnum.LOCAL_DISHES}>
                                    <p>Local Dishes</p>
                                </Link>
                                <Link to={NavEnum.DINING_PLACES}>
                                    <p>Dining Places</p>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS}>
                                    <p>Blog & Câu chuyện ẩm thực</p>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.footer_nav}>
                            <h1>Quick Link</h1>
                            <div>
                                <Link to={NavEnum.HOME}>
                                    <p>Contact Us</p>
                                </Link>
                                <Link to={NavEnum.LOCAL_DISHES}>
                                    <p>FAQs</p>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS}>
                                    <p>Booking</p>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS}>
                                    <p>Pages</p>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.footer_nav}>
                            <h1>Services</h1>
                            <div>
                                <Link to={NavEnum.HOME}>
                                    <p>Home</p>
                                </Link>
                                <Link to={NavEnum.LOCAL_DISHES}>
                                    <p>Contact</p>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS}>
                                    <p>Blogs</p>
                                </Link>
                                <Link to={NavEnum.BLOGS_AND_NEWS}>
                                    <p>404</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer_contact_list}>
                        <div className={classes.footer_contact}>
                            <img src={iconAddress} alt='icon' />
                            <span>
                                Dalat, Lam Dong, Viet Nam
                            </span>
                        </div>
                        <div className={classes.footer_contact}>
                            <img src={iconPhone} alt='icon' />
                            <span>
                                (+878) 765 665
                            </span>
                        </div>
                        <div className={classes.footer_contact}>
                            <img src={iconLetter} alt='icon' />
                            <span>
                                DalatFoodies@foodie.vn
                            </span>
                        </div>
                        <div className={classes.footer_contact}>
                            <img src={iconFb} alt='icon' />
                            <img src={iconYt} alt='icon' />
                        </div>
                    </div>
                    <div className={`${classes.footer_contact} ${classes.footer_reserved}`}>
                        <img src={iconC} alt='icon' />
                        <p>
                            2025 Influenca Template - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>

        </div >
    )
}
