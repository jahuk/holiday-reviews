import React from 'react';
import PropTypes from 'prop-types';

class CommentForm extends React.Component {

    componentDidMount() {
        this._textarea.focus();
    }

    handleSendComment = (e) => {
        e.preventDefault();

        if (this._textarea.value) {
            this.props.addComment(this.props.reviewId, this._textarea.value);
            this.props.closeCommentForm();
        }
    }

    handleCancelComment = (e) => {
        e.preventDefault();

        this.props.closeCommentForm();
    }

    render() {
        return (
            <form className="commentForm">

                <textarea className="commentForm__textarea" ref={(el) => this._textarea = el}/>
                <button className="commentForm__button" onClick={this.handleCancelComment}>Cancel</button>
                <button className="commentForm__button" onClick={this.handleSendComment}>Send comment</button>

            </form>
        );
    }
}

CommentForm.propTypes = {
    reviewId: PropTypes.string,
    addComment: PropTypes.func,
    closeCommentForm: PropTypes.func
};

export default CommentForm;