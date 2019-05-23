
import cityArray from '../data/canada.json'


export const fetchCities = () => ({
    type: 'FETCH_CITIES',
    payload: cityArray
});


export const textChange = (text) => ({
    type: 'TEXT_CHANGE',
    payload: text
});