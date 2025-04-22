import React from 'react'
import classes from './Error.module.css'
export default function ListEmtry({ error }) {
    return (
        <div className={classes.container}>
            <i className="fa-regular fa-face-frown"></i>
            {error}
        </div>
    )
}
