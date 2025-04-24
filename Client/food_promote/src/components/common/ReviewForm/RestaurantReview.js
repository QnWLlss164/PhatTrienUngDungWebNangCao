import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import { RestaurantAPI } from '../../../apis/restaurantAPI'
import { LoaderContext } from '../../../hook/LoaderContext'
import { useContext } from "react";
import DataError from "../error/DataError";
import styles from "./ReviewForm.module.css";

export default function RestaurantReview({ id, setReviews, setRating }) {
    const { setLoading } = useContext(LoaderContext);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    const handleReviewSubmit = async ({ rating, comment }) => {
        setLoading(true);
        RestaurantAPI.postReview(token, id, { rating, comment }, (err, data) => {
            if (err) {
                setError(err.message);
            } else {
                setReviews(data.reviews)
                setRating(data.rating)
                setError(false);
            }
            setLoading(false);
        })
    };

    if (error) return <DataError error={error} />
    return (
        <div>
            <h3 className={styles.comment_title}>Đánh giá và xếp hạng</h3>
            <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
    );
}
