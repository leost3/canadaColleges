

export const fetchCitiesReducer = ( state=[], action={}) => {
    switch(action.type) {
        case 'FETCH_CITIES':
            return action.payload;
        default:
            return state;
    };
};