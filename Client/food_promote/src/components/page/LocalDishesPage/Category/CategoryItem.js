import React from 'react'
import classes from './Category.module.css'
import { useNavigate } from 'react-router-dom';

export default function CategoryItem(props) {
    const { image, name, _id } = props.data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/categories/${_id}`);
    };
    const handerDrag = (e) => {
        e.preventDefault()
    }
    return (
        <div onClick={handleClick} onDragStart={handerDrag}>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
                className={classes.container}>
                <h1 className={classes.item_title}>{name}</h1>
            </div>

        </div>
    )
}
