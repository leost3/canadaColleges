
const initState = {
    searchField: ''
}

export const setSearchFieldReducer = ( state=initState, action ) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_FIELD':
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}