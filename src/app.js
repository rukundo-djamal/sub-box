import React, { Component } from 'react';
import { Root } from "native-base";
import { View, Text } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Mystore from './reducers';
import Dcontent from './components/dcontent';
import Profile from './components/profile';
import Notifications from './components/notifications';
import Settings from './components/msub';
import Help from './components/help';
import Service from './components/service';
import Detail from './components/detail';

const MDrawer = DrawerNavigator(
    {
        Home: { screen: Main },
        Profile: { screen: Profile },
        Notifications: { screen: Notifications },
        Settings: { screen: Settings },
        Help: { screen: Help },
        Service: { screen: Service },
        Detail: { screen: Detail }
    },
    {
        drawerWidth: 250,
        headerMode: 'none',
        contentComponent: props => <Dcontent {...props} />
    }
);


const Auth = StackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        MDrawer: { screen: MDrawer }
    },
    {
        headerMode: 'none'
    }
);
export default class App extends Component {
    render() {

        const store = createStore(Mystore, {}, applyMiddleware(ReduxThunk));

        return (

            <Root>
                <Provider store={store}>
                    <Auth />
                </Provider>
            </Root>

        );
    }
}
