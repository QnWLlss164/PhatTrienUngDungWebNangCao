import React from 'react'
import pzdl from '../../../../assets/banh-trang-nuong-da-lat-1.jpg'
import lgle from '../../../../assets/lau-ga-la-e-tao-ngo-da-lat.jpg'
import bcdl from '../../../../assets/banh-can-le-o-da-lat-ngon-nhat.jpg'
import scpm from '../../../../assets/sua-chua-pho-mai-da-lat-5.jpg'

import classes from './Food.module.css'
import FoodItem from './FoodItem'

export default function FoodList() {
    const FoodList = [
        {
            image_url: pzdl,
            title: 'Grilled Rice Paper – “Vietnamese Pizza”',
            description: 'A legendary street food of Đà Lạt! Crispy grilled rice paper topped with eggs, sausage, scallions, cheese, and flavorful sauces creates a perfect snack. Sitting by a warm charcoal grill while enjoying this crispy delight in the cool air is an unforgettable experience!',
            price: '30.000đ'
        },
        {
            image_url: lgle,
            title: 'Chicken Hotpot with É Leaves – A Unique Herbal Flavor”',
            description: 'This signature dish of Đà Lạt features tender chicken cooked in a fragrant broth infused with É leaves—a type of basil with a refreshing, slightly spicy taste. A steaming hotpot on a chilly evening is the perfect comfort food!',
            price: '30.000đ'
        },
        {
            image_url: bcdl,
            title: 'Bánh Căn – Mini Savory Pancakes”',
            description: 'A classic Đà Lạt breakfast dish! These crispy little pancakes are filled with quail eggs or seafood and served with a rich dipping sauce made from fish sauce, pork meatballs, and scallions.',
            price: '30.000đ'
        },
        {
            image_url: scpm,
            title: 'Grilled Pork Spring Rolls – The Perfect Bite”',
            description: 'Đà Lạt’s grilled pork spring rolls are wrapped with fresh herbs, pickled vegetables, and crispy rice paper, then dipped into a creamy peanut sauce—creating a perfect balance of sweet, sour, and savory flavors.',
            price: '30.000đ'
        },
        {
            image_url: bcdl,
            title: 'Bánh Căn – Mini Savory Pancakes”',
            description: 'A classic Đà Lạt breakfast dish! These crispy little pancakes are filled with quail eggs or seafood and served with a rich dipping sauce made from fish sauce, pork meatballs, and scallions.',
            price: '30.000đ'
        },
        {
            image_url: scpm,
            title: 'Grilled Pork Spring Rolls – The Perfect Bite”',
            description: 'Đà Lạt’s grilled pork spring rolls are wrapped with fresh herbs, pickled vegetables, and crispy rice paper, then dipped into a creamy peanut sauce—creating a perfect balance of sweet, sour, and savory flavors.',
            price: '30.000đ'
        },

    ]
    return (
        <div className={classes.list_container}>
            {FoodList.map((e, i) => (<FoodItem key={i} data={e} />))}
        </div>
    )
}
