import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantAPI } from '../../apis/restaurantAPI';
import Rating from '../../components/common/Rating/Rating';
import { LoaderContext } from "../../hook/LoaderContext";
import { useContext } from "react";
import classes from './RestaurantDetails.module.css'
import RestaurantReview from '../../components/common/ReviewForm/RestaurantReview';
import Map from '../../components/page/DiningPlace/Map/Map';
import DataError from '../../components/common/error/DataError';
import ListEmtry from '../../components/common/error/ListEmtry';
import { ProductAPI } from '../../apis/productAPI'
import { useSearchParams } from "react-router-dom";
import Pagination from '../../components/common/Pagination/Pagination';
import FoodItem from '../../components/common/Food/FoodItem';
import FoodItemTop from '../../components/page/LocalDishesPage/Food/FoodItem';
import FavariteRestaurnt from '../../components/common/FavoriteButton/FavariteRestaurnt';

export default function RestaurantDetails() {
    const { setLoading } = useContext(LoaderContext);
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const [menu, setMenu] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };

    useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);

    useEffect(() => {
        setLoading(true);
        RestaurantAPI.getSingle(id, (err, result) => {
            if (err) {
                setError(err.message);
            } else {
                setRestaurant(result);
                setReviews(result.reviews)
                setRating(result.rating)
                ProductAPI.GetMenuByRestaurant(result._id, currentPage, (err, result) => {
                    if (err) {
                        setError(err.message);
                    } else {
                        setMenu(result.products)
                        setTotalPages(result.pages)
                        setTopRated(result.topRated)
                        setError(false);
                    }
                })
            }
            setLoading(false);
        });
    }, [id, currentPage]);

    if (error) return <DataError error={error} />;
    if (!restaurant) return <ListEmtry error={"dữ liệu rỗng"} />;

    return (
        <div className='grid wide'>
            <div style={{
                backgroundImage: `url(${restaurant.thumb})`,
                backgroundSize: "contain",
                backgroundPosition: "center",

            }} className={classes.content_image}>
            </div>

            <div className={classes.content}>
                <div className={classes.title}>
                    <h1>{restaurant.name}</h1>
                    <FavariteRestaurnt restaurantId={restaurant._id} />
                </div>
                <Rating rating={rating} />
                <p>{restaurant.street} - {restaurant.ward} - {restaurant.district} - {restaurant.province}</p>
                <p>
                    Contact: {restaurant.contact}
                </p>
                <p>{restaurant.description}</p>
            </div>

            <div className={classes.high_rating}>
                <h1 className={classes.high_rating_title}>
                    high rating
                </h1>


                {topRated.length > 0 ?
                    <div className={classes.high_rating_list}>
                        {topRated.map((e) => <FoodItemTop key={e._id} data={e} />)}
                    </div> :
                    <ListEmtry error={"nhà hàng không món ăn nào được rating"} />
                }
            </div>

            {/* latitude={restaurant.latitude} longitude={restaurant.longitude} */}
            <div>
                <h1 className={classes.menu_title}>
                    Feature Food
                </h1>
                {menu.length > 0 ?
                    <div className={classes.menu_list}>
                        {menu.map((e) =>
                            <FoodItem key={e._id} data={e} />)}
                    </div> :
                    <ListEmtry error={"nhà hàng không có món ăn"} />
                }
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
            <div className={classes.comments}>
                <div>
                    <RestaurantReview id={id} setReviews={setReviews} setRating={setRating} />
                </div>
                <div className={classes.reviewList}>
                    {reviews && reviews.length > 0 ? (
                        reviews.map((e, index) => (
                            <div key={index} className={classes.reviewItem}>
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
            <Map location_url={restaurant.location} />
        </div>
    );
}
