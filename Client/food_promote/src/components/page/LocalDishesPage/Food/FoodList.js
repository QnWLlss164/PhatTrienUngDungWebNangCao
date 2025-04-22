import React, { useState, useEffect } from 'react'
import classes from './Food.module.css'
import FoodItem from './FoodItem'
import { ProductAPI } from "../../../../apis/productAPI";
import { LoaderContext } from "../../../../hook/LoaderContext";
import { useContext } from "react";
import Pagination from '../../../common/Pagination/Pagination';
import { useSearchParams } from "react-router-dom";
import DataError from '../../../common/error/DataError';
import ListEmtry from '../../../common/error/ListEmtry';

export default function FoodList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const { setLoading } = useContext(LoaderContext);
    const [foodList, setFoodList] = useState([]);
    const [error, setError] = useState(null);

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };
    useEffect(() => {
        // Cập nhật currentPage mỗi khi searchParams thay đổi
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);
    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            ProductAPI.GetAllProduct({ pageNumber: currentPage }, (err, data) => {
                if (err) {
                    setError(err.message);
                } else {
                    setFoodList(data.products || []);
                    setTotalPages(data.pages || 1);
                    setError(false);
                }
                setLoading(false);
            });
        }
        fetchProfile();
    }, [currentPage]);

    if (error) return <DataError error={error} />
    if (!foodList) return <ListEmtry error={"Không có Food."} />
    return (
        <>
            <div className={classes.list_container}>
                {foodList.map((e) => (<FoodItem key={e._id} data={e} />))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}
