import React from 'react'
import ctg from '../../../../assets/category.png'
import CategoryItem from './CategoryItem'
// import classes from './Food.module.css'
import Slide from '../../../common/Slide/Slide'

export default function CategorySlide() {

    const CategoryList = [
        {
            image_url: ctg,
            title: 'category name',
        },
        {
            image_url: ctg,
            title: 'category name',
        },
        {
            image_url: ctg,
            title: 'category name',
        },
        {
            image_url: ctg,
            title: 'category name',
        },
        {
            image_url: ctg,
            title: 'category name',
        },
        {
            image_url: ctg,
            title: 'category name',
        },

    ]
    return (
        <>
            <Slide>
                {CategoryList.map((e, i) => (<CategoryItem key={i} data={e} />))}
            </Slide>

        </>
    )
}
