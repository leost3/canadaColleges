import { combineReducers } from 'redux';
import fetchCitiesReducer from './fetchCitiesReducer';
import textChangeReducer from './textChangeReducer';


export default combineReducers({
    cities:fetchCitiesReducer,
    searchField:textChangeReducer 
});