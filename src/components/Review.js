import React from 'react';
import PropTypes from 'prop-types';

import Author from './Review/Author';
import Recommendation from './Review/Recommendation';
import Rating from './Review/Rating';

const Review = ({id, title, date, author, isPositive, rating, text, comments}) => (
    <li className="review">
        <Author {...author}/>
        <Recommendation isPositive={isPositive}/>
        <Rating rating={rating}/>
    </li>
);

Review.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.object,
    isPositive: PropTypes.bool,
    ratings: PropTypes.number,
    text: PropTypes.string,
    comments: PropTypes.array
};

export default Review;