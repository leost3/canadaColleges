import * as cittiesArr from '../data/canada.json';


export const fetchCities = () => {
    return {
        type: 'FETCH_CITIES',
        payload: cittiesArr.default
    };
};

export const setSearchField = (text) => {
    return {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text
    }
}