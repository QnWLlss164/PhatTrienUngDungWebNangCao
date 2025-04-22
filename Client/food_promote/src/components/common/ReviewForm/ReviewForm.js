import React, { useState } from "react";
import styles from "./ReviewForm.module.css";
import { useNavigate } from "react-router-dom";

export default function ReviewForm({ onSubmit }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        if (rating === 0 || comment.trim() === "") {
            setError("Vui lòng nhập đầy đủ đánh giá và nội dung.");
            return;
        }

        onSubmit({ rating, comment });
        setRating(0);
        setComment("");
        setError(null);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.rating}>
                {[1, 2, 3, 4, 5].map((value) => (
                    <button
                        key={value}
                        type="button"
                        className={styles.star}
                        onClick={() => setRating(value)}
                    >
                        <i className={value <= rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                    </button>
                ))}
            </div>
            <textarea
                className={styles.textarea}
                rows={4}
                placeholder="Write an review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <p className={styles.error}>{error && error}</p>
            <button type="submit" className={styles.button}>
                Send
            </button>
        </form>
    );
}
