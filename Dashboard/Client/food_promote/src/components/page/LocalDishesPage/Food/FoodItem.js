import React from 'react'
import classes from './Food.module.css'
import { useNavigate } from 'react-router-dom'
import FavoriteButton from '../../../common/FavoriteButton/FavoriteButton';
import Rating from '../../../common/Rating/Rating';

export default function FoodItem(props) {
    const { _id, image, name, description, price, rating } = props.data;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/local-dishes/${_id}`);
    };

    return (
        <div onClick={handleClick} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
            </div>
            <div className={classes.item_content}>
                <div className={classes.box_rating}>
                    <div className={classes.rate}>
                        <Rating rating={rating} />
                    </div>
                    <span className={classes.favorite}>
                        <FavoriteButton productId={_id} />
                    </span>
                </div>
                <h1 className={classes.item_title}>{name}</h1>
                <p className={classes.item_des}>
                    {description}
                </p>
                <p>{price}</p>
            </div>
        </div>
    )
}
