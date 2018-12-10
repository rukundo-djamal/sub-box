import {
    USER_DATA,
    START_FETCHING,
    END_FETCHING
} from './types';

import firebase from 'firebase';

export const userData = ( ) => {
    return (dispatch) => {
        fetch('https://dukire-55859.firebaseio.com/subpay.json')
        .then((responseJson) => {
            const data = JSON.parse(responseJson._bodyText);
            getData(dispatch, data );
        })
        .catch((error) => {
            console.error(error);
        });
    };
}
const getData =(dispatch, data) => {
    dispatch({ type: USER_DATA, payload: data })
}

 