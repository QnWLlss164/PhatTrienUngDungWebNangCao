import React, { useEffect, useState } from "react";
// import { useUser } from "../../hook/userContext";
import { UserAPI } from "../../apis/userAPI";
import classes from './Profile.module.css'
import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";
import AvatarSection from "./AvatarSection";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import Slide from "../../components/common/Slide/Slide";
import { useUser } from "../../hook/userContext";
import Restaurantfav from "../../components/page/Profile/Restaurantfav/Restaurantfav";
import Productfav from "../../components/page/Profile/Productfav/Productfav";
import ListEmtry from "../../components/common/error/ListEmtry";
import DataError from "../../components/common/error/DataError";
import { useToast } from "../../hook/ToastContext";

const Profile = () => {
    const { setLoading } = useContext(LoaderContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const { dispatch } = useUser();
    const { showToast } = useToast();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);
    useEffect(() => {
        if (!token) return;

        const fetchProfile = async () => {
            setLoading(true);

            UserAPI.Profile(token, (err, data) => {
                if (err) {
                    setError(true);
                } else {
                    setUserInfo(data);
                }
                setLoading(false);
            });
        };

        fetchProfile();

    }, [token]);

    const changePassword = async ({ currentPassword, newPassword }) => {
        setLoading(true);
        UserAPI.ChangePassword(
            token,
            { currentPassword, newPassword },
            (err, result) => {
                if (err) {
                    showToast(err.message);
                    setLoading(false);
                    return
                }
                showToast(result.message);
                setLoading(false);
            }
        );
    };

    const updateField = async (field, value) => {
        const updated = { ...userInfo, [field]: value };
        setLoading(true);
        await UserAPI.UpdateProfile(token, updated, (err, data) => {
            if (err) {
                setError(true);
            } else {
                setUserInfo(data);
                dispatch({
                    type: "UPDATE_USER",
                    payload: { [field]: value },
                });
            }
            setLoading(false);
        });
    };


    if (error) return <DataError error={error} />;
    if (!userInfo) return <ListEmtry error={"người dùng không tồn tại"} />;
    return (
        <div className={`grid wide`}>
            <div className={classes.profileContainer}>
                <AvatarSection
                    avatarUrl={userInfo.avatar}
                    thumbUrl={userInfo.thumb}
                    onUpload={updateField}
                    userName={`${userInfo.first_name} ${userInfo.last_name}`}
                />
                <UserInfo
                    userInfo={userInfo}
                    onUpdateField={updateField}
                    onChangePassword={changePassword}
                />
                <div className={classes.list_header}>
                    <h1>Product favarite</h1>
                </div>
                {
                    userInfo.favoriteProducts?.length > 0 ? <>
                        <Slide>
                            {userInfo.favoriteProducts?.map((e, i) =>
                                <div key={i}>
                                    <Productfav data={e} />
                                </div>)}
                        </Slide>
                    </> : <ListEmtry error={"chưa có product yêu thích"} />
                }


                <div className={classes.list_header}>
                    <h1 >
                        Favorite Restaurant
                    </h1>
                </div>
                {
                    userInfo.favoriteRestaurants?.length > 0 ? <>
                        <Slide>
                            {userInfo.favoriteRestaurants?.map((e, i) => <div key={i}>
                                <Restaurantfav data={e} />
                            </div>)}
                        </Slide>
                    </> :
                        <ListEmtry error={"chưa có restaurant yêu thích"} />
                }


            </div>
        </div>
    );
};

export default Profile;