import { combineReducers } from 'redux';
import { GALLERY_ACTIONS } from '../actions/galleryActions';

const galleryReducer = (state = [], action) => {

    switch (action.type) {
        case GALLERY_ACTIONS.SET_GALLERY:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    galleryReducer,
});