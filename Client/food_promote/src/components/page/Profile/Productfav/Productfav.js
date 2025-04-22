import React from 'react'
import classes from './Productfav.module.css'
import FavoriteButton from '../../../common/FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom'

export default function Productfav(props) {
    const { product, image, name, description } = props.data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/local-dishes/${product}`);
    };

    return (
        <div onClick={handleClick} onDragStart={(e) => e.preventDefault()} className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
                <FavoriteButton productId={product} />
            </div>

            <div className={classes.item_content}>
                <div className={classes.content_text}>
                    <h1 className={classes.item_title}>{name}</h1>
                    <p className={classes.item_des}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
