import React from 'react';
import PropTypes from 'prop-types';

import Review from './Review';

const ReviewsList = ({reviews, addComment}) => (
    <section className="reviews">
        <ol className="reviews__list">

            {reviews.map((review) => (
                <Review
                    key={review.id}
                    addComment={addComment}
                    {...review}
                />
            ))}

        </ol>
    </section>
);

ReviewsList.propTypes = {
    reviews: PropTypes.array,
    addComment: PropTypes.func
};

export default ReviewsList;