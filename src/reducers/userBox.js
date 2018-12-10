import {
    GET_USER_BOX,
    USER_DATA,
    START_FETCHING,
    END_FETCHING,
    EMAIL_SYNC,
    PASSWORD_SYNC
} from '../actions/types';

const INITIAL_STATE = {
    data: '',
    box: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "GET_USER_BOX":
            return { ...state, box: action.payload };
        case USER_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}