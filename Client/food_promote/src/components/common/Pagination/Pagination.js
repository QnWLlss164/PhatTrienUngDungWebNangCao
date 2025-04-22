import React, { useCallback } from "react";
import classes from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageClick = useCallback((page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    }, [onPageChange, totalPages]);

    const handlePrevClick = useCallback(() => {
        handlePageClick(currentPage - 1);
    }, [currentPage, handlePageClick]);

    const handleNextClick = useCallback(() => {
        handlePageClick(currentPage + 1);
    }, [currentPage, handlePageClick]);

    const getPageClickHandler = useCallback((page) => {
        return () => handlePageClick(page);
    }, [handlePageClick]);

    const renderPageNumbers = useCallback(() => {
        const pageNumbers = [];

        const createPageButton = (i) => (
            <button
                key={i}
                className={`${classes.pagination_button} ${i === currentPage ? classes.active : ""}`}
                onClick={getPageClickHandler(i)}
            >
                {i}
            </button>
        );

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(createPageButton(i));
            }
        } else {
            if (currentPage > 3) {
                pageNumbers.push(createPageButton(1));
                if (currentPage > 4) pageNumbers.push(<span key="left-dots">...</span>);
            }

            const startPage = Math.max(1, currentPage - 1);
            const endPage = Math.min(totalPages, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(createPageButton(i));
            }

            if (currentPage < totalPages - 2) {
                if (currentPage < totalPages - 3) pageNumbers.push(<span key="right-dots">...</span>);
                pageNumbers.push(createPageButton(totalPages));
            }
        }

        return pageNumbers;
    }, [currentPage, totalPages, handlePageClick]);

    if (totalPages <= 1) return null;

    return (
        <div className={classes.pagination}>
            <button
                className={classes.pagination_button}
                onClick={handlePrevClick}
                disabled={currentPage === 1}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            {renderPageNumbers()}
            <button
                className={classes.pagination_button}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}

export default Pagination;
