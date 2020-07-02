import React from 'react';
import classes from './Hotel.css';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {

    return (
        <div className={classes.Hotel}>
            <div className={classes['listing-horizontal']}>
                <div className={classes['lh-content']}>
                    <Link className={classes.bookmark}><span>Add</span></Link>
                    <p>Hotel: <strong>{props.hotel_name}</strong></p>
                    <p>Price: <strong>{props.price}</strong></p>
                    <p>Location: <strong>{props.location}</strong></p>
                </div>
            </div>
        </div>
    )

};

export default NavigationItem;