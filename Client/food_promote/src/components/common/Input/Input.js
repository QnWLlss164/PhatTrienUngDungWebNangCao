import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
    const { type, label, placeholder, value, setValue } = props
    return (
        <div className={classes.container}>

            <label>{label}</label>
            <div className={classes.form_group}>
                <input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}
