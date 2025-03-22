import React, { useEffect, useState } from "react";
import { useUser } from "../../hook/userContext";
import { UserAPI } from "../../apis/userAPI";
import classes from './Profile.module.css'
import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";


const Profile = () => {
    const { setLoading } = useContext(LoaderContext);
    const { state } = useUser();
    const { user } = state;
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!user) return;

        const fetchProfile = async () => {
            setLoading(true);

            UserAPI.Profile(user.token, (err, data) => {
                if (err) {
                    setError(true);
                } else {
                    setUserInfo(data);
                }
                setLoading(false);
            });
        };

        fetchProfile();

    }, [user, setLoading]);

    if (error) return <div>{error}</div>;
    if (!userInfo) return <div>Loading...</div>;
    return (
        <div className={`grid wide`}>
            <div className={classes.profileContainer}>
                <div style={{
                    backgroundImage: `url(${user.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    className={classes.avt}></div>
                <div className={classes.profileInfo}>
                    <div><strong>Họ:</strong> {userInfo.first_name}</div>
                    <div><strong>Tên:</strong> {userInfo.last_name}</div>
                    <div><strong>Tài khoản:</strong> {userInfo.username}</div>
                    <div><strong>Vai trò:</strong> {userInfo.role}</div>
                </div>
                {
                    user.favoriteProducts ? <>
                        {user.favoriteProducts.map((e, i) => <p key={i}>{e}</p>)}

                    </> : <p>
                        chưa có product yêu thích
                    </p>
                }
                {
                    user.favoriteRestaurants ? <>
                        {user.favoriteProducts.map((e, i) => <p key={i}>{e}</p>)}

                    </> : <p>
                        chưa có restaurant yêu thích
                    </p>
                }
            </div>
        </div>
    );
};

export default Profile;