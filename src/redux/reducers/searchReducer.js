import { combineReducers } from 'redux';
import { SEARCH_ACTIONS } from '../actions/searchActions';

const searchReducer = (state = [], action) => {

    switch (action.type) {
        case SEARCH_ACTIONS.SET_SEARCH:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    searchReducer,
});