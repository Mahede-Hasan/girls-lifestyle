import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
    const { name, img, description, price } = props.cart;

    const handleButtonClick = ()=>{
        alert('Your going to About page')
    }
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className="cart-info">
            <h3>{name}</h3>
            <p>{description.slice(0,120) + '...'}</p>
            <h5>Price: ${price}</h5>
            </div>
            <Link to="/about"><button onClick={handleButtonClick} className='details-button'>Details</button></Link>
        </div>
    );
};

export default Cart;