import React, {Component} from 'react';
import Aux from '../../hoc/Auxi/Auxi'
import SignUp from '../../components/Navigation/NavigationItems/SignUp/SignUp';
import SignIn from '../../components/Navigation/NavigationItems/SignIn/SignIn';
import {Route} from 'react-router-dom';
import classes from './Authentication.css';

class Authentication extends Component {
        render() {
                return(
                        <Aux>
                                <h1 className={classes.Home}>Ok Trolly</h1>
                                <Route path="/auth/signin" exact component={SignIn} />
                                <Route path="/auth/signup" exact component={SignUp} />
                        </Aux>
                );
        }
}

export default Authentication;