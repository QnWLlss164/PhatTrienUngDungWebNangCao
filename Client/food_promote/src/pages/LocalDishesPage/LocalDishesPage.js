import React, { useState } from 'react'
import classes from './LocalDishesPage.module.css'
import Feature_img from "../../assets/feature.png";
import CategorySlide from '../../components/page/LocalDishesPage/Category/CategorySlide';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import FoodList from '../../components/page/LocalDishesPage/Food/FoodList';
import Pagination from '../../components/common/Pagination/Pagination';

export default function LocalDishesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className={`grid wide `}>
            <div className={classes.header}>
                <img src={Feature_img} alt="feature" />
                <div>
                    <h1>
                        Featured Local Dishes
                    </h1>
                    <p>
                        Explore the signature flavors of out region. From savior street food to exquisite traditional dishes.
                    </p>
                    <SearchBar />
                </div>
            </div>
            <div className={classes.container}>
                <h1>
                    Choose Category
                </h1>
                <CategorySlide />
                <h1>
                    Local Dishes List
                </h1>
                <FoodList />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}
