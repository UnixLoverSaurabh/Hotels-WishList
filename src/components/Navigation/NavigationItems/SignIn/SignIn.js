import React from 'react';
import classes from './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = (props) => {

        const Submit = (props) => {
                alert("submitted");
        };

        return (
                <div className={classes.login}>
                        <input className={classes.inputText} type="text" placeholder="Username" id="username"/>
                        <input className={classes.inputPassword} type="password" placeholder="password" id="password"/>
                        <input onClick={Submit} type="submit" value="Sign In"/>
                        <Link className={classes.link} to="/auth/signup">Sign Up</Link>
                        <br/>
                        <a href="/" className={classes.forgot}>forgot password?</a>
                </div>

        );
};

export default SignIn;