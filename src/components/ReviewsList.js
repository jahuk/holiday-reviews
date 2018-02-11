import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review';

const ReviewsList = ({reviews}) => (
    <section className="reviews">
        <ol className="reviews__list">

            { reviews.map((review) => (
                <Review
                    key={review.id}
                    {...review}
                />
            ))}

        </ol>
    </section>
);

ReviewsList.propTypes = {
    reviews: PropTypes.array,
};

export default ReviewsList;