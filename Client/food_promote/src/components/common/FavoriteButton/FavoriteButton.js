import { useState } from "react";
import { UserAPI } from "../../../apis/userAPI";
import { useUser } from "../../../hook/userContext";
import classes from './FavoriteButton.module.css'
import { useToast } from "../../../hook/ToastContext";

const FavoriteButton = ({ productId }) => {
    const { state, dispatch } = useUser();
    const favoriteProducts = state.user?.favoriteProducts || [];
    const [isFavorite, setIsFavorite] = useState(favoriteProducts.some((fav) => fav.product === productId));
    const token = localStorage.getItem("token");
    // const [toastMsg, setToastMsg] = useState("");
    const { showToast } = useToast();
    const handleToggleFavorite = async (e) => {
        e.stopPropagation();
        if (!token) {
            showToast("Bạn cần đăng nhập để thực hiện chức năng này.");
            return;
        }

        if (isFavorite) {
            UserAPI.DeleteFavoriteProduct(token, productId, (err, res) => {
                if (!err) {
                    setIsFavorite(false);

                    dispatch({
                        type: "UPDATE_USER",
                        payload: { favoriteProducts: res.favoriteProducts },
                    });
                    showToast(res.message);
                }
            });
        } else {
            UserAPI.FavoriteProduct(token, productId, (err, res) => {
                if (!err) {
                    setIsFavorite(true);

                    dispatch({
                        type: "UPDATE_USER",
                        payload: { favoriteProducts: res.favoriteProducts },
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
            {/* {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />} */}
        </>
    );
};

export default FavoriteButton;
