import React from 'react'
import classes from './Navbar.module.css'
import { useUser } from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { state, dispatch } = useUser();
    const { user } = state;
    const navigate = useNavigate();
    const HandleSignOut = () => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    }
    return (
        <div className={classes.navbar}>
            <div className={classes.search_box}>
                <input type="text" placeholder="Search term" />
                <button><i className="fas fa-search"></i></button>
            </div>

            <div className={classes.icons}>

                <div className={classes.div_name}>
                    <p>
                        {user.first_name} {user.last_name}
                    </p>
                    <span onClick={HandleSignOut}>sign out</span>
                </div>
                <div className={classes.dropdown}>

                    <div style={{
                        backgroundImage: `url(${user.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                        className={classes.avt}></div>
                </div>

            </div>
        </div>
    )
}
