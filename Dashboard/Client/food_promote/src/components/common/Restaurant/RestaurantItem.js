import React from 'react'
import classes from './Restaurant.module.css'
import Rating from '../Rating/Rating';
import { useNavigate } from 'react-router-dom'

export default function RestaurantItem(props) {
    const { _id, image, name, rating } = props.data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/dining-places/${_id}`);
    };
    const handerDrag = (e) => {
        e.preventDefault()
    }
    return (
        <div onClick={handleClick} onDragStart={handerDrag} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
                <h1 className={classes.item_title}>{name}</h1>
            </div>

            <div className={classes.item_content}>
                <Rating rating={rating} />
            </div>
        </div>
    )
}
