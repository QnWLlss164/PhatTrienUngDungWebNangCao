import React from 'react'
import classes from './Category.module.css'

export default function CategoryItem(props) {
    const { image_url, title } = props.data;
    return (
        <div >
            <div style={{
                backgroundImage: `url(${image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.container}>
                <h1 className={classes.item_title}>{title}</h1>
            </div>

        </div>
    )
}
