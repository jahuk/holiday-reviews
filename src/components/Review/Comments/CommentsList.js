import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentsList = ({comments}) => (
    <ol className="commentsList">

        {comments.map((comment, i) => (
            <Comment
                key={i}
                {...comment}
            />
        ))}

    </ol>
);

CommentsList.propTypes = {
    comments: PropTypes.array
};

export default CommentsList;