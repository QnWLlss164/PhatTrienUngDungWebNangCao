import React from 'react'
import classes from './Button.module.css'
export default function Button(props) {
    return (
        <button onClick={props.onClick} type={props.type} className={`${classes.btn} ${props.className} ${props.effect && classes.btn_ef}`}>{props.children}</button>
    )
}
