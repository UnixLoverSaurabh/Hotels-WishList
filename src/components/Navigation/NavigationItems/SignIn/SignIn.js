import React, { Component } from 'react';
import classes from './SignIn.css';
import { Link } from 'react-router-dom';
import axios from '../../../../axios';

class SignIn extends Component {

        state = {
                username: '',
                password: '',
                email: '',
                logined: false,
                loading: false
        }

        Submit = (props) => {
                axios.get('/users.json').then(response => {
                        for (let key in response.data) {
                                if(response.data[key]['username'] === this.state.username && (response.data[key]['password'] === this.state.password) ){
                                        this.setState({
                                                logined: true
                                        });
                                }
                        }

                        this.setState({
                                loading: false
                        });


                }).catch(error => {
                        this.setState({
                                loading: false
                        });
                });

                if(this.state.logined) {
                        this.props.history.push('/');
                }
                else if (! this.state.logined) {
                        alert('Wrong username or password');
                }
        };

        render() {
                return (
                        <div className={classes.login}>
                                <input className={classes.inputText} type="text" placeholder="Username" id="username"
                                        onChange={(event) => this.setState({ username: event.target.value })} />
                                <input className={classes.inputPassword} type="password" placeholder="password" id="password"
                                        onChange={(event) => this.setState({ password: event.target.value })} />
                                <input onClick={this.Submit} type="submit" value="Sign In" />
                                <Link className={classes.link} to="/auth/signup">Sign Up</Link>
                                <br />
                                <a href="/" className={classes.forgot}>forgot password?</a>
                        </div>

                );
        }
};

export default SignIn;