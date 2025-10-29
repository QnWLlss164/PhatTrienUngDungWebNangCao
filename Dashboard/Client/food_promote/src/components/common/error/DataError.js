import React from 'react'
import classes from './Error.module.css'
export default function DataError({ error }) {
    return (
        <div className={`grid wide ${classes.container}`}>
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>{error}</p>
        </div>
    )
}
