const initState = {
    searchField: "",
};


export default (state=initState, action={}) => {
    switch(action.type) {
        case 'TEXT_CHANGE':
            return {...state, searchField: action.payload};
        default:
            return state;
    };
};