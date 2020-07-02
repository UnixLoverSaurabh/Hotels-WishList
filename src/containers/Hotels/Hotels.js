import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';
import axios from '../../axios';
import classes from './Hotels.css';

class Hotels extends Component {

        state = {
                hotels: [],
                loading: true
        }
        componentDidMount() {
                axios.get('/hotel.json').then(response => {
                        let fetchedHotels = [];
                        for (let key in response.data) {
                                console.log(response.data[key]['index'] + ' ' + response.data[key]['location'] + ' ' + response.data[key]['hotel_name']);
                                fetchedHotels.push({
                                        ...response.data[key],
                                        id: key
                                });
                        }
                        this.setState({
                                hotels: fetchedHotels,
                                loading: false
                        });
                }).catch(error => {
                        this.setState({
                                loading: false
                        });
                });
        };

        render() {
                return (
                        <div className={classes.Hotels}>
                             {this.state.hotels.map(hotel => (
                                     <Hotel key={hotel.index} location={hotel.location} price={hotel.room_price} hotel_name={hotel.hotel_name} />
                             ))}   
                        </div>
                );
        };
};

export default Hotels;