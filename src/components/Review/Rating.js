import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 6;

const Rating = ({rating}) => {

    const stars = [];
    for (let i = 0; i < MAX_RATING; i++) {
        stars.push(<i key={i} className={`icon-star ${ i < rating ? 'icon-star--full' : 'icon-star--empty'}`}/>);
    }

    return (
        <section className="rating">
            <section className="rating__stars">
                {stars}
            </section>
            <section className="rating__numbers">
                {rating}/{MAX_RATING}
            </section>
        </section>
    );
};

Rating.propTypes = {
    rating: PropTypes.number
};

export default Rating;