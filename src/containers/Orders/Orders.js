import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import axios from '../../axios';
import classes from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import Typed from 'react-typed';
import AOS from 'aos';
// import 'aos/dist/aos.css';

class Orders extends Component {

        state = {
                lookingFor: '',
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
                console.log(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie);
                const data = {
                        location: this.state.location,
                        inDate: this.state.inDate,
                        outDate: this.state.outDate
                };

                axios.post('/info.json', data)
                .then(resopnse => {
                        alert(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie + ' uploaded succesfully');
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
                                                                                <h1 data-aos='fade-up'>Find Nearby <span><Typed
                                                                                        strings={[
                                                                                                'Appartments',
                                                                                                'Restaurants',
                                                                                                'Hotels',
                                                                                                'Events']} typeSpeed={80} backSpeed={80} backDelay={4000} startDelay={1000}
                                                                                        showCursor loop ></Typed></span></h1>
                                                                                <p data-aos="fade-up" data-aos-delay="100">Explore top-rated attractions, activities and more!</p>
                                                                        </div>
                                                                </div>

                                                                <div className={classNames(classes['form-search-wrap'], classes['p-2'])} data-aos="fade-up" data-aos-delay="200">
                                                                        <div className={classes.row}>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-4'])}>
                                                                                        <input type="text" id="origin-input"
                                                                                                className={classes['form-control']} placeholder="What are you looking for?"
                                                                                                onChange={(event) => this.setState({ lookingFor: event.target.value })} />
                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                        <div className={classes['wrap-icon']}>
                                                                                                <span className="icon icon-room"></span>
                                                                                                <input type="text" className={classes['form-control']} placeholder="Location"
                                                                                                        onChange={(event) => this.setState({ location: event.target.value })} />
                                                                                        </div>

                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                        <div className={classes['select-wrap']}>
                                                                                                <select className={classes['form-control']} onChange={(event) => this.setState({ categorie: event.target.value })}>
                                                                                                        <option value="">All Categories</option>
                                                                                                        <option value="Appartment">Appartment</option>
                                                                                                        <option value="Restaurant">Restaurant</option>
                                                                                                        <option value="Eat">Eat &amp; Drink</option>
                                                                                                        <option value="Events">Events</option>
                                                                                                        <option value="Fitness">Fitness</option>
                                                                                                        <option value="Others">Others</option>
                                                                                                </select>
                                                                                        </div>
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
                        </Aux >
                )
        }
};

export default Orders;