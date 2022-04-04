import React from 'react';
import useReviews from '../../Hooks/Hooks';
import Review from '../Review/Review';
import './Reviews.css'


const Revews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='review'>
            {
                reviews.map(review => <Review key={review.id}
                    review={review}>
                </Review>)
            }
        </div>
    );
};

export default Revews;