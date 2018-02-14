import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as ReviewsActions from '../actions/reviews.actions';

import Header from './Header';
import Footer from './Footer';
import ReviewsList from './ReviewsList';

class App extends React.Component {

    componentDidMount() {
        this.props.getReviews();
    }

    render() {

        const {
            reviews,
            addComment
        } = this.props;

        return (
            <section className="main">
                <Header/>
                <main className="content">
                    <ReviewsList reviews={reviews} addComment={addComment}/>
                </main>
                <Footer/>
            </section>
        );
    }

}

App.propTypes = {
    reviews: PropTypes.array,
    getReviews: PropTypes.func,
    addComment: PropTypes.func
};

const mapStateToProps = (reviews) => (reviews);

const mapDispatchToProps = {
    getReviews: ReviewsActions.getReviews,
    addComment: ReviewsActions.addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
