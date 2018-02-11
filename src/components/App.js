import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as ReviewsActions from '../actions/reviews.actions';

import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

    componentDidMount() {
        this.props.getReviews();
    }

    render() {
        return (
            <section className="main">
                <Header/>
                <main className="content">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </main>
                <Footer/>
            </section>
        );
    }

}

App.propTypes = {
    getReviews: PropTypes.func,
};

const mapDispatchToProps = {
    getReviews: ReviewsActions.getReviews
};

export default connect(null, mapDispatchToProps)(App);
