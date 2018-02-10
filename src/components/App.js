import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as ReviewsActions from '../actions/reviews.actions';

import Header from './Header';

class App extends React.Component {

    componentDidMount() {
        this.props.getReviews();
    }

    render() {
        return (
            <main className="main">
                <Header/>
            </main>
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
