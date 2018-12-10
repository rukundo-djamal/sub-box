import {
    GET_USER_BOX,
    USER_DATA,
    START_FETCHING,
    END_FETCHING,
    EMAIL_PASWORD_SYNC
} from '../actions/types';

const INITIAL_STATE = {
    data:''
};

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {

        case "USER_DATA":
            return { ...state, data: action.payload }
        default:
            return state;
        console.log(state);
    }
    
}