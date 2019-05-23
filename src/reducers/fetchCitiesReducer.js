


export default (state=[], action={}) => {
    switch(action.type) {
        case 'FETCH_CITIES':
            console.log('action fetch cities')
            return action.payload;
        default:
            return state;
    }
}