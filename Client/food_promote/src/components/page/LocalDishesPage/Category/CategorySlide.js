import React, { useEffect, useState } from "react";
import CategoryItem from './CategoryItem'
import styles from './Category.module.css'
import Slide from '../../../common/Slide/Slide'
import { useContext } from "react";
import { LoaderContext } from "../../../../hook/LoaderContext";
import { CategoryAPI } from "../../../../apis/categorieAPI";
import DataError from "../../../common/error/DataError";
import { useNavigate } from "react-router-dom";
import ListEmtry from "../../../common/error/ListEmtry";
export default function CategorySlide() {
    const navigate = useNavigate();
    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const { setLoading } = useContext(LoaderContext);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);

            CategoryAPI.GetSlideCategories((err, data) => {
                if (err) {
                    setError(err.message);
                } else {
                    setCategory(data);
                    setError(false);
                }
                setLoading(false);
            });
        };

        fetchProfile();

    }, []);

    const handleSeeAll = () => {
        navigate('/categories');
    };

    if (error) return <DataError error={error} />
    if (!category) return <ListEmtry error={"Không có categories"} />
    return (
        <>
            <Slide>
                {category?.map((e) => (<CategoryItem key={e._id} data={e} />))}
                <div className={styles.seeAllItem} onClick={handleSeeAll}>
                    <div className={styles.seeAllInner}>
                        <p>Xem tất cả</p>
                    </div>
                </div>
            </Slide>

        </>
    )
}
