import React from 'react';
import PropTypes from 'prop-types';

const Recommendation = ({isPositive}) => (
    <section className={`recommendation ${isPositive ? 'recommendation--positive' : 'recommendation--negative'}`}>
        <i className={`recommendation__thumbs icon-thumbs-${isPositive ? 'up' : 'down'}`}/>
    </section>
);

Recommendation.propTypes = {
    isPositive: PropTypes.bool
};

export default Recommendation;