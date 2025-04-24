import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductAPI } from '../../apis/productAPI';
import Rating from '../../components/common/Rating/Rating';
import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";
import classes from './FoodDetails.module.css'
import ProductReview from '../../components/common/ReviewForm/ProductReview';
import FavoriteButton from '../../components/common/FavoriteButton/FavoriteButton';
import DataError from '../../components/common/error/DataError';
import ListEmtry from '../../components/common/error/ListEmtry';
import FoodItem from '../../components/common/Food/FoodItem';
export default function FoodDetails() {
    const { setLoading } = useContext(LoaderContext);
    const { id } = useParams();
    const [Food, setFood] = useState(null);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [recomment, setRecomment] = useState([]);

    useEffect(() => {
        setLoading(true);
        ProductAPI.GetSingleProduct(id, (err, result) => {
            if (err) {
                setError('Không thể tải dữ liệu Food.');
            } else {
                setFood(result);
                setReviews(result.reviews)
                setRating(result.rating)
                ProductAPI.Recomment(result.categories_id, (err, result) => {
                    if (err) {
                        setError(err.message);
                    } else {
                        setRecomment(result.products)
                        setError(false);
                    }
                    setLoading(false);
                });
            }
            setLoading(false);
        });

    }, [id]);

    if (error) return <DataError error={error} />;
    if (!Food) return <ListEmtry error={"dữ liệu không tồn tại"} />;
    return (
        <div className='grid wide'>
            <div className={classes.content}>
                <div style={{
                    backgroundImage: `url(${Food.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}
                    className={classes.content_image}>
                </div>
                <div className={classes.content_product}>
                    <div className={classes.name}>
                        <h1>{Food.name}</h1>
                        <FavoriteButton productId={id} />

                    </div>
                    <p>{Food.description}</p>
                    <h1>{Food.restaurantName}</h1>
                    <h1>{Food.price}đ</h1>
                    <div className={classes.rating}>
                        <h1>Rating:</h1>
                        {rating}
                        <Rating rating={rating} />
                    </div>

                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.comments}>
                    <div>
                        <ProductReview id={id} setReviews={setReviews} setRating={setRating} />
                    </div>
                    <div className={classes.reviewList}>
                        {reviews && reviews.length > 0 ? (
                            reviews.map((e) => (
                                <div key={e._id} className={classes.reviewItem}>
                                    <div style={{
                                        backgroundImage: `url(${e.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",

                                    }}
                                        className={classes.reviewImage}>
                                    </div>

                                    <div className={classes.reviewContent}>
                                        <div className={classes.contentUser}>
                                            <div>
                                                <p className={classes.reviewName}>{e.name}</p>
                                                <p className={classes.date}>
                                                    {new Date(e.updatedAt).toLocaleDateString('vi-VN')}
                                                </p>
                                            </div>

                                            <Rating rating={e.rating} />
                                        </div>
                                        <p className={classes.reviewComment}>{e.comment}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <ListEmtry error={"Chưa có đánh giá nào"} />
                        )}
                    </div>
                </div>
                <div className={classes.recomment}>
                    <h1 className={classes.title_recomment}>
                        Những món tương tự
                    </h1>
                    {
                        recomment && recomment.length > 0 ?
                            <div className={classes.list_recomment}>
                                {recomment.map((e) => <FoodItem key={e._id} data={e} />)}
                            </div> :
                            <ListEmtry error={"Danh sách recoment rỗng"} />
                    }
                </div>
            </div>

        </div>
    );
}
