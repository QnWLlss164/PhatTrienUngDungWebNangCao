import React, { useEffect, useState } from "react";
import { CategoryAPI } from "../../apis/categorieAPI";
import CategoryItem from "../../components/page/Categories/CategoryItem/CategoryItem";
import Pagination from "../../components/common/Pagination/Pagination";
import ListEmpty from "../../components/common/error/ListEmtry";
import { useSearchParams } from "react-router-dom";
import classes from './Categories.module.css';
import DataError from "../../components/common/error/DataError";
import { useContext } from "react";
import { LoaderContext } from '../../hook/LoaderContext'
const CategoriesPage = () => {
    const { setLoading } = useContext(LoaderContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const [categories, setCategories] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);

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
        const fetchCategory = async () => {
            setLoading(true);
            CategoryAPI.GetAllCategories(currentPage, (err, result) => {
                if (err) {
                    setError(err.message);
                    setLoading(false);
                    return;
                }
                setCategories(result.categories);
                setTotalPages(result.totalPages || 1);
                setError(false);
                setLoading(false);
            });
        };

        fetchCategory();
    }, [currentPage]);

    if (error) return <DataError error={error} />;
    if (categories.length === 0) return <ListEmpty error="Không có danh mục nào." />;

    return (
        <div className="grid wide">
            <h1>Danh mục</h1>
            <div className={classes.categoryList}>
                {categories.map((category) => (
                    <CategoryItem key={category._id} data={category} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default CategoriesPage;
