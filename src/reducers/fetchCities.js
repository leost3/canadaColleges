import {REQUEST_CITIES} from '../components/constants';



export default (state=[],action={}) => {
    switch(action.type) {
        case REQUEST_CITIES:
            console.log('request cities returned')
            return action.payload;
        default:
                // console.log('request cities NOTTTTTT returned')
            return state;
    };
};