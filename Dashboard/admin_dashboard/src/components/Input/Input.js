import React from 'react'
import classes from './Input.module.css'
export default function Input(props) {
    return (
        <input name={props.name} disabled={props.disabled} value={props.value} onChange={props.onChange} className={`${classes.input} ${props.className}`} type={props.type} placeholder={props.placeholder} />
    )
}
