/* action types */

export const REVIEWS_FETCH_REQUESTED = 'REVIEWS_FETCH_REQUESTED';
export const REVIEWS_FETCH_DONE = 'REVIEWS_FETCH_DONE';
export const REVIEWS_FETCH_FAILED = 'REVIEWS_FETCH_FAILED';
export const COMMENT_ADD = 'COMMENT_ADD';

/* action creators */

export const getReviews = () => {
    return (dispatch) => {
        dispatch({type: REVIEWS_FETCH_REQUESTED});

        fetch('data/reviews.json')
            .then(response => response.json())
            .then(json => {
                dispatch({type: REVIEWS_FETCH_DONE, json});
            })
            .catch((error) => {
                dispatch({type: REVIEWS_FETCH_FAILED, error});
            });
    };
};

export const addComment = (reviewId, comment) => {
    return (dispatch) => {
        dispatch({type: COMMENT_ADD, reviewId, comment});
    };
};
