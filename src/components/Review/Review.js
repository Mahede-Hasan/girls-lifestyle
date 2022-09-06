import React from 'react';
import useCart from '../../hooks/useCarts';
import ReviewPage from '../ReviewPage/ReviewPage';

const Review = () => {
    const [carts, setCarts] = useCart();
    return (
        <div>
            <div className="carts">
            {
                carts.map(cart => <ReviewPage
                key={cart.id}
                cart={cart}
                ></ReviewPage>
                )
            }
        </div>
        </div>
    );
};

export default Review;