import React, { Component } from 'react';
import Order from '../../components/Navigation/NavigationItems/Order/Order';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class AllOrders extends Component {
        state = {
                orders: [],
                loading: true
        }

        componentDidMount() {
                axios.get('/orders.json').then(response => {
                        let fetchedOrders = [];
                        for (let key in response.data) {
                                fetchedOrders.push({
                                        ...response.data[key],
                                        id: key
                                });
                        }
                        this.setState({
                                orders: fetchedOrders,
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
                        <div>
                             {this.state.orders.map(order => (
                                     <Order key={order.id} materials={order.materials} price={order.price} />
                             ))}   
                        </div>
                );
        };
        ;
}

export default withErrorHandler(AllOrders, axios);