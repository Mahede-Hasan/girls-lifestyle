
import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCarts';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const [carts, setCarts] = useCart([]);

    return (
        <div>
        <div className='home-page'>

        </div>

        <div className="carts">
            {
                carts.map(cart => <Cart
                key={cart.id}
                cart={cart}
                ></Cart>)
            }
        </div>
        </div>
    );
};

export default Home;