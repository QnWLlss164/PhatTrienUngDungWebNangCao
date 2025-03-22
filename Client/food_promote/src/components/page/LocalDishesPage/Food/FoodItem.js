import React from 'react'
import classes from './Food.module.css'

export default function FoodItem(props) {
    const { image_url, title, description, price } = props.data;
    return (
        <div className={`${classes.item_container}`}>
            <div style={{
                backgroundImage: `url(${image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.item_img}>
            </div>
            <div className={classes.item_content}>
                <h1 className={classes.item_title}>{title}</h1>
                <p className={classes.item_des}>
                    {description}
                </p>
                <p>{price}</p>
            </div>
        </div>
    )
}
