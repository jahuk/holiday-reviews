import React from 'react';
import PropTypes from 'prop-types';

const Author = ({name, photo}) => (
    <section className="author">
        {name} {photo}
    </section>
);

Author.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
};

export default Author;