import React from 'react';

const ReviewPage = (props) => {
    const {name, price, img, description} = props.cart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className="cart-info">
            <h3>{name}</h3>
            <p>{description.slice(0,120) + '...'}</p>
            <h5>Price: ${price}</h5>
            </div>
            <button className='details-button'>Details</button>
        </div>
    );
};

export default ReviewPage;