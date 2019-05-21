import { combineReducers } from 'redux';
import  fetchCities  from '../reducers/fetchCities';

export default combineReducers({
    cities: fetchCities,
})