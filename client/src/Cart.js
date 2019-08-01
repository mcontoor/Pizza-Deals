import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }

    componentDidUpdate() {
        window.addEventListener('click', () => {

        
        axios.get('http://localhost:5001/cart')
            .then(res => this.setState({
                cart: res.data
            }))
            .catch(e => console.log(e))
        })
    }
    render() {
        const { cart } = this.state;
        return (
            <div>
                <h3>Cart</h3>
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={cart.item._id}>{cart.item.name}</li>
                        ))}
                    </ul>
                </div>
                <button>Proceed to checkout</button>
            </div>
        )
    }
}

export default Cart;