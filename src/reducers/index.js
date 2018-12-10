import { combineReducers } from 'redux';
import createUser from './createUser';
import userBox from './userBox';
import auth from './auth';
export default combineReducers({
    mdata: userBox
});