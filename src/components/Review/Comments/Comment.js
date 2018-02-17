import React from 'react';
import PropTypes from 'prop-types';

import Author from './Comment/Author';

class Comment extends React.Component {

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
            text,
            author
        } = this.props;

        return (
            <section className="comment">

                <h1 className="comment__header">Comment</h1>

                <section
                    className={`comment__text ${this.state.showFull ? 'comment__text--full' : 'comment__text--short'}`}
                    onClick={this.handleTextClick}>
                    {text}
                    {!this.state.showFull && <span className="comment__text__gradient"/>}
                </section>

                <Author {...author}/>

            </section>
        );
    }
}

Comment.propTypes = {
    author: PropTypes.object,
    text: PropTypes.string
};

export default Comment;