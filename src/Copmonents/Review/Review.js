import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, img, Ratting, price } = review;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='mobile-info'>
                <h2 className='mobile-name text-6xl'>{name}</h2>
                <p>Price: $ {price}</p>
                <p>Ratting: {Ratting}</p>
            </div>
        </div>
    );
};
export default Review;