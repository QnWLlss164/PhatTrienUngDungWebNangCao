import React from 'react'
import classes from './Restaurantfav.module.css'
import { useNavigate } from 'react-router-dom'
import FavariteRestaurnt from '../../../common/FavoriteButton/FavariteRestaurnt';

export default function Restaurantfav(props) {
    const { restaurant, image, thumb, name } = props.data;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/dining-places/${restaurant}`);
    };
    const handerDrag = (e) => {
        e.preventDefault()
    }
    return (
        <div onClick={handleClick} onDragStart={handerDrag} className={`${classes.item_container}`}>


            <div style={{
                backgroundImage: `url(${thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }} className={classes.item_content}>
                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",

                }}
                    className={classes.item_img}>
                </div>
                <h1 className={classes.item_title}><p>{name}</p>
                    <FavariteRestaurnt restaurantId={restaurant} /></h1>

            </div>
        </div>
    )
}
