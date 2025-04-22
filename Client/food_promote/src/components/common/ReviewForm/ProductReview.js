import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import { ProductAPI } from '../../../apis/productAPI'
import { LoaderContext } from '../../../hook/LoaderContext'
import { useContext } from "react";
import DataError from "../error/DataError";

export default function ProductReview({ id, setReviews, setRating }) {
  const { setLoading } = useContext(LoaderContext);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const handleReviewSubmit = async ({ rating, comment }) => {
    setLoading(true);
    ProductAPI.ProductReview(token, id, { rating, comment }, (err, data) => {
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
      <h3>Review and rating</h3>
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
}
