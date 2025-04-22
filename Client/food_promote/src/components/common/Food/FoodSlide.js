import React, { useState, useEffect } from 'react'
import NewItem from './FoodItem'
// import classes from './Food.module.css'
import { LoaderContext } from "../../../hook/LoaderContext";
import { ProductAPI } from "../../../apis/productAPI";
import { useContext } from "react";
import Slide from '../Slide/Slide'
import DataError from '../error/DataError';
import ListEmtry from '../error/ListEmtry';

export default function FoodSLide() {
    const [foodList, setFoodList] = useState([]);
    const { setLoading } = useContext(LoaderContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            ProductAPI.ProductTop((err, data) => {
                if (err) {
                    setError(err.message);
                } else {
                    setFoodList(data);
                    setError(false);
                }
                setLoading(false);
            });
        }
        fetchProfile();
    }, []);

    if (error) return <DataError error={error} />
    if (!foodList) return <ListEmtry error={"Danh sách sản phẩm rỗng"} />
    return (
        <>
            <Slide>
                {foodList.map((e) => (<NewItem key={e._id} data={e} />))}
            </Slide>

        </>
    )
}
