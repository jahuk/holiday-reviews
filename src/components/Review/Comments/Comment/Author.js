import React from 'react';
import PropTypes from 'prop-types';

const Author = ({name, photo, profession}) => (
    <figure className="commentAuthor">
        <img src={photo} alt={name} className="commentAuthor__img"/>
        <figcaption className="commentAuthor__caption">{name}</figcaption>
        <p className="commentAuthor__profession">{profession}</p>
    </figure>
);

Author.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    profession: PropTypes.string
};

export default Author;