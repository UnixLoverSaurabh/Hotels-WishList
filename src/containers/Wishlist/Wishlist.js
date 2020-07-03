import React, { Component } from 'react';
import axios from '../../axios';
import Hotel from '../Hotels/Hotel/Hotel';
import classes from './Wishlist.css';

class Wishlist extends Component {
        state = {
                hotels: [],
                loading: true
        }
        componentDidMount() {
                axios.get('/wishlist.json').then(response => {
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

        removeHotelHandler = (hotel) => {

                // Delete this hotel from firebase
                // axios.post('/wishlist.json', hotel)
                //         .then(response => {
                //                 console.log(hotel);
                //         })
                //         .catch(error => {
                //                 alert('Wait while we are uploading');
                //         });
        }


        render() {
                return (
                        <div className={classes.Wishlist}>
                                {this.state.hotels.map(hotel => (
                                        <Hotel key={hotel.index} clicked={() => this.removeHotelHandler(hotel)} location={hotel.location} price={hotel.room_price} hotel_name={hotel.hotel_name} />
                                ))}
                        </div>
                );
        };
};

export default Wishlist;