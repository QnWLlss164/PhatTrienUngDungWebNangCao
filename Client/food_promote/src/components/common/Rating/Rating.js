import React from 'react'
import classes from './Rating.module.css'
export default function Rating(props) {
    const { rating } = props
    return (
        <div className={classes.rate}>
            {Array.from({ length: 5 }, (_, i) => {
                if (i < Math.floor(rating)) {
                    return <span key={i}>
                        <i className="fa-solid fa-star"></i>
                    </span>;
                } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
                    return <span key={i}>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </span>;
                } else {
                    return <span key={i}>
                        <i className="fa-regular fa-star"></i>
                    </span>;
                }
            })}
        </div>
    )
}
