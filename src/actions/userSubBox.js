import {
    GET_USER_BOX
} from './types';

import firebase from 'firebase';

export const get_user_box = ({name, price, desc, company, time}) => {
    const {currentUser} =firebase.auth();
    return() => {
        firebase.database().ref(`/users/${currentUser.uid}/userbox`)
    .push({name, price, desc, company, time});  
    };        
} 
export const MyBOX = () => {
    const {currentUser} =firebase.auth();
    //console.log("inside mybox");
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userbox`)
        .on('value', snap => {
            let data =  snap.val();
            getBoxData(dispatch, data );
        });
    }
}

export const delsub = (sub) => {
    const {currentUser} =firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userbox/${sub}`)
        .remove();
    }
} 

const getBoxData =(dispatch, data) => {
    dispatch({ type: GET_USER_BOX, payload: data})
}