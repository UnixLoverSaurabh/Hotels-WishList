import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/auth/signin">Sign In</NavigationItem>
        <NavigationItem link="/orders">My Orders</NavigationItem>
    </ul>
);

export default NavigationItems;