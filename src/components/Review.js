import React from 'react';
import PropTypes from 'prop-types';

import Author from './Review/Author';
import Time from './Review/Time';
import Recommendation from './Review/Recommendation';
import Rating from './Review/Rating';

class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
        this.handleTextClick = this.handleTextClick.bind(this);
    }

    handleTextClick() {
        this.setState({
            showFull: true
        });
    }

    render() {

        const {
            id,
            title,
            date,
            author,
            isPositive,
            rating,
            text,
            comments
        } = this.props;

        return (
            <li className="review">
                <section>

                    <Author {...author}/>

                    <Time date={date}/>

                    <h1 className="review__header">{title}</h1>

                    <section className="review__scores">

                        <Recommendation isPositive={isPositive}/>
                        <Rating rating={rating}/>

                    </section>

                    <section
                        className={`review__text ${this.state.showFull ? 'review__text--full' : 'review__text--short'}`}
                        onClick={this.handleTextClick}>
                        {!this.state.showFull && <span className="review__text__gradient"/>}
                        {text}
                    </section>

                </section>
            </li>
        );
    }
}

Review.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.object,
    isPositive: PropTypes.bool,
    rating: PropTypes.number,
    text: PropTypes.string,
    comments: PropTypes.array
};

export default Review;