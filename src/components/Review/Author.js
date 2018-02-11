import React from 'react';
import PropTypes from 'prop-types';

const Author = ({name, photo}) => (
    <figure className="author">
        <img src={photo} alt={name} className="author__img" />
        <figcaption className="author__caption">{name}</figcaption>
    </figure>
);

Author.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
};

export default Author;