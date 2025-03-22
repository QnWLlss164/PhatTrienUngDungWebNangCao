import React from "react";
import classes from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`${classes.pagination_button} ${i === currentPage ? "active" : ""}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            if (currentPage > 3) {
                pageNumbers.push(
                    <button
                        key={1}
                        className={classes.pagination_button}
                        onClick={() => handlePageClick(1)}
                    >
                        1
                    </button>
                );
                if (currentPage > 4) pageNumbers.push(<span key="left-dots">...</span>);
            }

            const startPage = Math.max(1, currentPage - 1);
            const endPage = Math.min(totalPages, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`${classes.pagination_button} ${i === currentPage ? `${classes.active}` : ""}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }

            if (currentPage < totalPages - 2) {
                if (currentPage < totalPages - 3) pageNumbers.push(<span key="right-dots">...</span>);
                pageNumbers.push(
                    <button
                        key={totalPages}
                        className={classes.pagination_button}
                        onClick={() => handlePageClick(totalPages)}
                    >
                        {totalPages}
                    </button>
                );
            }
        }

        return pageNumbers;
    };
    return (
        <div className={classes.pagination}>
            <button
                className={classes.pagination_button}
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            {renderPageNumbers()}
            <button
                className={classes.pagination_button}
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}

export default Pagination;
