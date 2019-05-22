import { combineReducers } from 'redux';
import {setSearchFieldReducer} from './changeSearchFieldReducer'
import {fetchCitiesReducer} from './fetchCitiesReducer';


export default combineReducers({
    cities: fetchCitiesReducer,
    text: setSearchFieldReducer
});