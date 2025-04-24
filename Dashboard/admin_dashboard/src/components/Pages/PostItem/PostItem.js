import React from 'react';
import classes from './PostItem.module.css'; // bạn có thể tạo CSS module này

export default function PostItem({ post, onEdit, onDelete }) {
    if (!post) return null;

    return (
        <div className={classes.card}>
            <div style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }} className={classes.image}></div>

            <div className={classes.content}>
                <h2 className={classes.title}>{post.title}</h2>
                <p className={classes.author}>Tác giả: {post.author}</p>
                <p className={classes.description}>{post.description}</p>

                <div className={classes.icon_box}>
                    <div onClick={() => onEdit(post)} className={classes.icon_setting}>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div onClick={() => onDelete(post._id)} className={classes.icon_delete}>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
