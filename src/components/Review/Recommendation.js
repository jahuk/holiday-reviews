import React from 'react';
import PropTypes from 'prop-types';

const Recommendation = ({isPositive}) => (
    <section className="recommendation">
        {isPositive}
    </section>
);

Recommendation.propTypes = {
    isPositive: PropTypes.bool
};

export default Recommendation;