import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryAPI } from '../../../../apis/categorieAPI';
import FoodItem from '../Food/FoodItem';
import { useContext } from "react";
import { LoaderContext } from "../../../../hook/LoaderContext";
import Pagination from '../../../common/Pagination/Pagination';
import { useSearchParams } from "react-router-dom";
import classes from './Category.module.css'
import ListEmtry from '../../../common/error/ListEmtry';
import DataError from '../../../common/error/DataError';

export default function CategoryDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const { setLoading } = useContext(LoaderContext);

    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    useEffect(() => {
        // Cập nhật currentPage mỗi khi searchParams thay đổi
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);
    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            CategoryAPI.GetCategoryById(id, currentPage, (err, result) => {
                if (err) {
                    setError(err.message);
                    setLoading(false);
                    return;
                }
                setCategory(result);
                setTotalPages(result.totalPages || 1);
                setLoading(false);
                setError(false);
            });
        };

        fetchCategory();
    }, [id, currentPage]);

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };
    if (error) return <DataError error={error} />;
    if (!category) return <ListEmtry error={"Không tìm thấy danh mục"} />;

    return (
        <div className={`grid wide`}>
            <div style={{
                backgroundImage: `url(${category.category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }} className={classes.bg_cate}>
                <h1 className={classes.cat_name}>{category.category.name}</h1>
            </div>


            <p className={classes.cate_title}>Sản phẩm thuộc danh mục này</p>
            {category.products.length > 0 ? (
                <>
                    <div className={classes.cate_list}>
                        {category.products.map((product) => (
                            <FoodItem key={product._id} data={product} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <ListEmtry error={"Không có sản phẩm nào trong danh mục này."} />
            )}
        </div>
    );
}
