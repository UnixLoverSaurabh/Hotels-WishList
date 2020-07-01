import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from '../../../../axios.js';
import Spinner from '../../../UI/Spinner/Spinner';

class SignUp extends Component {

        state = {
                username: '',
                password: '',
                email: '',
                loading: false
        }

        SubmitDataHandler = (props) => {
                this.setState({
                        loading: true
                });
                
                const userInfo = {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                }
                axios.post('/users.json', userInfo)
                        .then(response => {
                                this.setState({
                                        loading: false
                                });
                        }).catch(error => {
                                this.setState({
                                        loading: false
                                });
                        });

                // alert("Information submitted");
        };

        render() {
                let spin = null;
                if(this.state.loading) {
                        spin = <Spinner />
                }
                return (
                        <div className={classes.login}>
                                <input className={classes.inputText} type="text" placeholder="Username" value={this.state.username} id="username" onChange={(event) => this.setState({
                                        username: event.target.value
                                })} />
                                <input className={classes.inputEmail} type="email" placeholder="email" value={this.state.email} id="email" onChange={(event) => this.setState({
                                        email: event.target.value
                                })} />
                                <input className={classes.inputPassword} type="password" placeholder="password" value={this.state.password} id="password" onChange={(event) => this.setState({
                                        password: event.target.value
                                })} />
                                <input onClick={this.SubmitDataHandler} type="submit" value="Sign Up" />

                                {spin}
                        </div>

                );
        }
};

export default SignUp;