import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import classes from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import Typed from 'react-typed';

class Orders extends Component {

        state = {
                lookingFor: '',
                location: '',
                categorie: '',
                loading: false
        }

        formHandler = () => {
                console.log(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie);
                alert(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie);
        }

        render() {

                return (
                        <Aux>
                                <div className={classNames(classes['site-blocks-cover'], classes.overlay)} style={{ color: 'red' }}>
                                        <div className={classes.container}>
                                                <div className={classNames(classes.row, classes['align-items-center'], classes['justify-content-center'])}>

                                                        <div className={classes['col-md-10']}>


                                                                <div className={classNames(classes.row, classes['justify-content-center'])}>
                                                                        <div className={classNames(classes['col-md-8'], classes['text-center'])}>
                                                                                <h1>Find Nearby <span><Typed
                                                                                        strings={[
                                                                                                'Appartments',
                                                                                                'Restaurants',
                                                                                                'Hotels',
                                                                                                'Events']} typeSpeed={80} backSpeed={80} backDelay={4000} startDelay={1000}
                                                                                        showCursor loop ></Typed></span></h1>
                                                                                <p>Explore top-rated attractions, activities and more!</p>
                                                                        </div>
                                                                </div>

                                                                <div className={classNames(classes['form-search-wrap'], classes['p-2'])}>
                                                                                <div className={classes.row}>
                                                                                        <div className={classNames(classes['col-lg-12'], classes['col-xl-4'])}>
                                                                                                <input type="text"
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
                                                                                                        <select className={classes['form-control']} onChange={(event) => this.setState({ categorie : event.target.value })}>
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