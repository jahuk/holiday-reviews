import React from 'react';
import PropTypes from 'prop-types';

import Author from './Review/Author';
import Time from './Review/Time';
import Recommendation from './Review/Recommendation';
import Rating from './Review/Rating';
import Comments from './Review/Comments';

class Review extends React.Component {

    constructor() {
        super();
        this.state = {
            showFull: false
        };
    }

    handleTextClick = () => {
        this.setState({
            showFull: !this.state.showFull
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
            comments,
            addComment
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

                    <Comments comments={comments} reviewId={id} addComment={addComment}/>

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
    comments: PropTypes.array,
    addComment: PropTypes.func
};

export default Review;