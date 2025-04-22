import React, { useState, useEffect } from 'react'
import classes from './Restaurant.module.css'
import Restaurant from './Restaurant'
import { RestaurantAPI } from "../../../../apis/restaurantAPI";
import { LoaderContext } from "../../../../hook/LoaderContext";
import { useContext } from "react";
import Pagination from '../../../common/Pagination/Pagination';
import { useSearchParams } from "react-router-dom";
import DataError from '../../../common/error/DataError';
import ListEmtry from '../../../common/error/ListEmtry';

export default function RestaurantList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalPages, setTotalPages] = useState(1);
    const { setLoading } = useContext(LoaderContext);
    const [restaurant, setRestaurant] = useState([]);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    useEffect(() => {
        // Cập nhật currentPage mỗi khi searchParams thay đổi
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            RestaurantAPI.getAll({ pageNumber: currentPage }, (err, data) => {
                if (err) {
                    setError(err.message);
                } else {
                    setRestaurant(data.restaurant || []);
                    setTotalPages(data.pages || 1);
                    // setCurrentPage(data.page);
                    setError(false);
                }
                setLoading(false);
            });
        }
        fetchProfile();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };

    if (error) return <DataError error={error} />
    if (!restaurant) return <ListEmtry error={"danh sách nhà hàng rỗng"} />
    return (
        <>
            <div className={classes.list_container}>
                {restaurant.map((e) => (<Restaurant key={e._id} data={e} />))}
            </div>
            {
                totalPages > 1 && <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            }

        </>
    )
}
