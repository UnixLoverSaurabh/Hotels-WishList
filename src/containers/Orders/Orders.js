import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import axios from '../../axios';
import classes from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import AOS from 'aos';
// import 'aos/dist/aos.css';

class Orders extends Component {

        state = {
                location: '',
                categorie: '',
                inDate: '',
                outDate: '',
                loading: false
        }

        componentDidMount() {
                AOS.init();
        }

        formHandler = () => {
                const date = new Date();
                console.log(this.state.location + ' ' + this.state.categorie);
                const data = {
                        location: this.state.location,
                        inDate: this.state.inDate,
                        outDate: this.state.outDate,
                        primaryKey: date
                };

                axios.post('/info.json', data)
                .then(resopnse => {
                        this.props.history.push('/hotels');
                })
        }

        render() {

                return (
                        <Aux>
                                <div className={classNames(classes['site-blocks-cover'], classes.overlay)} >
                                        <div className={classes.container}>
                                                <div className={classNames(classes.row, classes['align-items-center'], classes['justify-content-center'])}>
                                                        <div className={classes['col-md-10']}>
                                                                <div className={classNames(classes.row, classes['justify-content-center'])}>
                                                                        <div className={classNames(classes['col-md-8'], classes['text-center'])}>
                                                                                <h1>Find Nearby Hotels!</h1>
                                                                                <p>Explore top-rated attractions, activities and more!</p>
                                                                        </div>
                                                                </div>

                                                                <div className={classNames(classes['form-search-wrap'], classes['p-2'])} data-aos="fade-up" data-aos-delay="200">
                                                                        <div className={classNames(classes.row, classes['align-items-center'])}>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-4'])}>
                                                                                        <input type="text" id="origin-input"
                                                                                                className={classes['form-control']} placeholder="Destination"
                                                                                                onChange={(event) => this.setState({ location: event.target.value })} />
                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                
                                                                                        <input type="date" className={classes['form-control']} data-date-inline-picker="true" placeholder="Check-in"
                                                                                                        onChange={(event) => this.setState({ inDate: event.target.value })} />
                                                                

                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                        <input type="date" className={classes['form-control']} data-date-inline-picker="true" placeholder="Check-out"
                                                                                                        onChange={(event) => this.setState({ outDate: event.target.value })} />
                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-2'], classes['ml-auto'], classes['text-right'])}>
                                                                                        <input type="submit" className={classNames(classes.btn, classes['btn-primary'])} value="Search" onClick={this.formHandler} />
                                                                                </div>

                                                                        </div>
                                                                </div>

                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </Aux>
                )
        };
};

export default Orders;