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
        return (
            <section className="main">
                <Header/>
                <main className="content">
                    <ReviewsList reviews={this.props.reviews}/>
                </main>
                <Footer/>
            </section>
        );
    }

}

App.propTypes = {
    reviews: PropTypes.array,
    getReviews: PropTypes.func,
};

const mapStateToProps = (reviews) => (reviews);

const mapDispatchToProps = {
    getReviews: ReviewsActions.getReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
