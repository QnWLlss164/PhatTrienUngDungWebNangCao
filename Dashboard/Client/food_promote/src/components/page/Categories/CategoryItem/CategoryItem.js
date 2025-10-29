// src/components/CategoryItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CategoryItem.module.css"; // Bạn có thể tạo class CSS cho từng item

const CategoryItem = ({ data }) => {
    const { name, image, _id } = data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/categories/${_id}`);
    };

    return (
        <div className={classes.categoryItem} onClick={handleClick}>
            <div
                className={classes.categoryImage}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h3 className={classes.categoryName}>{name}</h3>
            </div>
        </div>
    );
};

export default CategoryItem;
