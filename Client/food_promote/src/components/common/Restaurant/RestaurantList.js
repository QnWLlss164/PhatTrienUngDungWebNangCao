import React, { useState, useEffect } from 'react'
import NewItem from './RestaurantItem'
// import classes from './Restaurant.module.css'
import Slide from '../Slide/Slide'
import { LoaderContext } from "../../../hook/LoaderContext";
import { RestaurantAPI } from "../../../apis/restaurantAPI";
import { useContext } from "react";
import DataError from '../error/DataError';
import ListEmtry from '../error/ListEmtry';

export default function RestaurantList() {
    const [restaurantList, setRestaurantList] = useState([]);
    const { setLoading } = useContext(LoaderContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            RestaurantAPI.getTopRatedRest((err, data) => {
                if (err) {
                    setError(err.message);
                } else {
                    setRestaurantList(data);
                    setError(false)
                }
                setLoading(false);
            });
        }
        fetchProfile();
    }, []);

    if (error) return <DataError error={error} />
    if (!restaurantList) return <ListEmtry error={"Danh sách nhà hàng rỗng"} />
    return (
        <>
            <Slide>
                {restaurantList.map((e) => (<NewItem key={e._id} data={e} />))}
            </Slide>

        </>
    )
}
