import React from 'react';
import Pizzas from './Pizzas';
import Cart from './Cart';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='rowC'>
                <Pizzas />
                <Cart />
            </div>
        );
    }
}

export default Home;