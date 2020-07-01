import React from 'react';
import classes from './Logo.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = (props) => (
        <div classes={classes.Logo}>
                <Link to="/">
                        <img src={logo} alt="Ok Trolly" />
                </Link>
        </div>
);

export default Logo;