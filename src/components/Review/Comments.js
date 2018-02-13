import React from 'react';
import PropTypes from 'prop-types';

import CommentForm from './Comments/CommentForm';
import CommentsList from './Comments/CommentsList';

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addingComment: false
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.closeCommentForm = this.closeCommentForm.bind(this);
    }

    handleButtonClick() {
        this.openCommentForm();
    }

    openCommentForm() {
        this.setState({
            addingComment: true
        });
    }

    closeCommentForm() {
        this.setState({
            addingComment: false
        });
    }

    render() {

        const {
            comments,
            reviewId,
            addComment
        } = this.props;

        const {addingComment} = this.state;

        return (
            <section className="comments">

                { addingComment && <CommentForm reviewId={reviewId} addComment={addComment} closeCommentForm={this.closeCommentForm} /> }
                { !addingComment && <button className="comments__button" onClick={this.handleButtonClick}>Add Comment</button> }

                <CommentsList comments={comments}/>

            </section>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array,
    reviewId: PropTypes.string,
    addComment: PropTypes.func
};

export default Comments;