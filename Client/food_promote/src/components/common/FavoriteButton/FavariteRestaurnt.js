import { useState } from "react";
import { UserAPI } from "../../../apis/userAPI";
import { useUser } from "../../../hook/userContext";
import classes from './FavoriteButton.module.css'
import { useToast } from "../../../hook/ToastContext";

const FavariteRestaurnt = ({ restaurantId }) => {
    const { state, dispatch } = useUser();
    const favoriteRestaurants = state.user?.favoriteRestaurants || [];
    const [isFavorite, setIsFavorite] = useState(favoriteRestaurants.some((fav) => fav.restaurant === restaurantId));
    const token = localStorage.getItem("token");
    const { showToast } = useToast();

    const handleToggleFavorite = async (e) => {
        e.stopPropagation();
        if (!token) {
            showToast("Bạn cần đăng nhập để thực hiện chức năng này.");
            return;
        }

        if (isFavorite) {
            UserAPI.DeleteFavoriteRetaurant(token, restaurantId, (err, res) => {
                if (!err) {
                    setIsFavorite(false);

                    dispatch({
                        type: "UPDATE_USER",
                        payload: { favoriteRestaurants: res.favoriteRestaurants },
                    });
                    showToast(res.message);
                }
            });
        } else {
            UserAPI.FavoriteRetaurant(token, restaurantId, (err, res) => {
                if (!err) {
                    setIsFavorite(true);

                    dispatch({
                        type: "UPDATE_USER",
                        payload: { favoriteRestaurants: res.favoriteRestaurants },
                    });
                    showToast(res.message);
                }
            });
        }
    };
    if (!state.user) return
    return (
        <>
            <span onClick={handleToggleFavorite}>

                {isFavorite ? (
                    <i className={`${classes.icon_favarite} fa-solid fa-heart`}></i>
                ) : (
                    <i className={`${classes.icon_favarite} fa-regular fa-heart`}></i>
                )}

            </span>
        </>
    );
};

export default FavariteRestaurnt;
