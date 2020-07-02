import React from 'react';
import classes from './Hotel.css';

const NavigationItem = (props) => {

    return (
        <div className={classes.Hotel}>
            <p>Materials: {props.hotel_name}</p>
            <p>Price: <strong>{props.price}</strong></p>
            <p>Location: <strong>{props.location}</strong></p>
        </div>
    )


};

export default NavigationItem;