import React from 'react'
import classes from './Restaurant.module.css'
import { useNavigate } from 'react-router-dom'
import Rating from '../../../common/Rating/Rating';
import FavariteRestaurnt from '../../../common/FavoriteButton/FavariteRestaurnt';
export default function Restaurant(props) {
    const { _id, image, name, description, rating } = props.data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/dining-places/${_id}`);
    };
    return (
        <div onClick={handleClick} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
            </div>
            <div className={classes.item_content}>
                <div className={classes.box_rating}>
                    <Rating rating={rating} />
                    <FavariteRestaurnt restaurantId={_id} />
                </div>
                <h1 className={classes.item_title}>{name}</h1>
                <p className={classes.item_des}>
                    {description}
                </p>
            </div>
        </div>
    )
}
