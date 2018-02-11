import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (date) => {
    const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
};

const Time = ({date}) => {
    return (
        <span className="time">
            <time datatime={date}>{formatDate(new Date(date))}</time>
        </span>
    );
};

Time.propTypes = {
    date: PropTypes.string
};

export default Time;