import React from 'react';
import PropTypes from 'prop-types';

const Author = ({name, photo}) => (
    <figure className="reviewAuthor">
        <img src={photo} alt={name} className="reviewAuthor__img"/>
        <figcaption className="reviewAuthor__caption">{name}</figcaption>
    </figure>
);

Author.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
};

export default Author;