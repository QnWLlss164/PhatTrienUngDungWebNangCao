import React from 'react'
import classes from './Food.module.css'
import Rating from '../Rating/Rating';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom'

export default function FoodItem(props) {
    const { _id, image, name, description, rating } = props.data;
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/local-dishes/${_id}`);
    };
    const handleOnDrag = (e) => {
        e.preventDefault()
    }
    return (
        <div onClick={handleClick} onDragStart={handleOnDrag} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
                <FavoriteButton productId={_id} />
            </div>

            <div className={classes.item_content}>
                <div className={classes.content_text}>
                    <h1 className={classes.item_title}>{name}</h1>
                    <p className={classes.item_des}>
                        {description}
                    </p>
                </div>
                <div className={classes.rate}>
                    <div>{rating}</div>
                    <div>
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}
