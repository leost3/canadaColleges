import * as cities from '../data/canada.json';
import { REQUEST_CITIES } from '../components/constants';

export const requestCities = () => async dispatch => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    // const data = await response.json();
    // console.log(data)
    // const response = await fetchUsers.get('/posts')
    dispatch({
        type: REQUEST_CITIES,
        payload: cities.default
    });
};
