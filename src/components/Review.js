import React from 'react';
import PropTypes from 'prop-types';

import Author from './Review/Author';
import Time from './Review/Time';
import Recommendation from './Review/Recommendation';
import Rating from './Review/Rating';

const Review = ({id, title, date, author, isPositive, rating, text, comments}) => (
    <li className="review">
        <section>

            <Author {...author}/>

            <Time date={date}/>

            <h1 className="review__header">{title}</h1>

            <section className="review__scores">

                <Recommendation isPositive={isPositive}/>
                <Rating rating={rating}/>

            </section>

        </section>
    </li>
);

Review.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.object,
    isPositive: PropTypes.bool,
    rating: PropTypes.number,
    text: PropTypes.string,
    comments: PropTypes.array
};

export default Review;