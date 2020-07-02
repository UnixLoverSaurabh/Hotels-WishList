import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/auth/signin">Sign In</NavigationItem>
        <NavigationItem link="/wishlist">My wishlist</NavigationItem>
    </ul>
);

export default NavigationItems;