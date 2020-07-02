import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import classes from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import Typed from 'react-typed';
import AOS from 'aos';

class Orders extends Component {

        state = {
                lookingFor: '',
                location: '',
                categorie: '',
                loading: false
        } 

        componentDidMount() {
                AOS.init();
        }

        componentWillReceiveProps() {
                AOS.refresh();
        }

        formHandler = () => {
                console.log(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie);
                alert(this.state.lookingFor + '  ' + this.state.location + ' ' + this.state.categorie);
        }

        render() {

                return (
                        <Aux>
                                <div className={classNames(classes['site-blocks-cover'], classes.overlay)} >

                                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1R5QWrqEMfU9qPpah3ufkQmeSWBEVtRo&libraries=places"></script>
                                <script type="text/javascript">
                                      function initialize() {
                                        var input1 = document.getElementById("origin-input");
                                        new google.maps.places.Autocomplete(input1); 
                                        } 
                                        google.maps.event.addDomListener(window, 'load', initialize);  
                                </script>
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
                                                                        <div className={classNames(classes.row, classes['align-items-center']}>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-4'])}>
                                                                                        <input type="text" id="origin-input"
                                                                                                className={classes['form-control']} placeholder="Destination"
                                                                                                onChange={(event) => this.setState({ lookingFor: event.target.value })} />
                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                
                                                                                        <input type="date" className={classes['form-control']} data-date-inline-picker="true" placeholder="Check-in"
                                                                                                        onChange={(event) => this.setState({ location: event.target.value })} />
                                                                

                                                                                </div>
                                                                                <div className={classNames(classes['col-lg-12'], classes['col-xl-3'])}>
                                                                                        <input type="date" className={classes['form-control']} data-date-inline-picker="true" placeholder="Check-out"
                                                                                                        onChange={(event) => this.setState({ location: event.target.value })} />
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
