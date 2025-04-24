import React from 'react'
import classes from './FoodItem.module.css'

export default function FoodItem({ data, onEdit, onDelete }) {
    const { _id, name, price, image } = data

    const handleEdit = () => {
        onEdit(data);
    }

    const handleDelete = () => {
        onDelete(_id);
    }

    return (
        <div className={classes.box}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }} className={classes.avt}></div>
            <div className={classes.container}>
                <div>
                    <p className={classes.name}>{name}</p>
                    <p>{price}đ</p>
                </div>
                <div className={classes.icon_box}>
                    <div onClick={handleEdit} className={classes.icon_setting}>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div onClick={handleDelete} className={classes.icon_delete}>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
