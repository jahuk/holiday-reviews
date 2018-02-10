// Set up your root reducer here...
import {combineReducers} from 'redux';
import reviews from './reviews.reducer';

const rootReducer = combineReducers({
    reviews
});

export default rootReducer;