import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({rating}) => (
    <section className="rating">
        {rating}
    </section>
);

Rating.propTypes = {
    rating: PropTypes.number
};

export default Rating;