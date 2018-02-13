import React from 'react';
import PropTypes from 'prop-types';

import Author from './Comment/Author';

const Comment = ({author, text}) => (
    <section className="comment">

        <h1 className="comment__header">Comment</h1>

        <p className="comment__text">
            {text}
        </p>

        <Author {...author}/>

    </section>
);

Comment.propTypes = {
    author: PropTypes.object,
    text: PropTypes.string
};

export default Comment;