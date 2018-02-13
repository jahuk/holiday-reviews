import * as ReviewsActions from '../actions/reviews.actions';
import {SESSION_USER} from './constans/constans';

const defaultState = [];

export default (state = defaultState, action) => {

    switch (action.type) {

        case ReviewsActions.REVIEWS_FETCH_DONE:
            return action.json;

        case ReviewsActions.COMMENT_ADD:
            return state.map((review) => {
                return review.id === action.reviewId
                    ? {
                        ...review,
                        comments: [
                            ...review.comments,
                            {
                                author: SESSION_USER,
                                text: action.comment
                            }
                        ]
                    }
                    : review;
            });

        default:
            return state;
    }

};
