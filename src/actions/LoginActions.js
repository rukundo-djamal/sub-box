import {
 CREDENTIALS_SYNC,
 Login_Loading
} from './types';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation'
   

export const credential_sync = ({prop, value}) => {
    return {
        type: CREDENTIALS_SYNC,
        payload: {prop, value}
    }
}

export const login_act = ({email, password, navigation}) => {
    //console.log(data);
    return(dispatch) => {
        //dispatch({type:Login_Loading});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            navigation.dispatch(NavigationActions.navigate({
                routeName: 'MDrawer'
              }));
        })
        .catch(error => {
            console.log(error)
        });
    }
}