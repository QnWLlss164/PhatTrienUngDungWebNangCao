import React from 'react'
import ChartPost from './ChartPost'
import ChartProduct from './ChartProduct'
import classes from './Chart.module.css'
import ChartRestaurant from './ChartResstaurant'
import ChartCategory from './ChartCate.js'

export default function Chart() {
    return (
        <div>
            <div className={classes.container}>
                <ChartPost />
                <ChartProduct />
                <ChartRestaurant />
                <ChartCategory />
            </div>
        </div>
    )
}
