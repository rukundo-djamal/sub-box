import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';
import style from '../styling/styles';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Header, Left, Body, Title, StyleProvider, Button, Thumbnail, Right, Text, } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Noti from 'react-native-vector-icons/MaterialIcons';
//import UserAvatar from 'react-native-user-avatar';
import Icons from "react-native-vector-icons/SimpleLineIcons";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'firebase';
import UserAvatar from 'react-native-user-avatar';


const resetAction1 = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'MDrawer' })
    ]
});


const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login'})
    ]
  });

const {
    myfont,
    drwcolor,
    tintColor
} = style;
class Dcontent extends Component {

    render() {
        //const { dispatch, nav } = this.props;
        const user = firebase.auth().currentUser;
        const { displayName, email } = user;
        return (
            <Grid>
                <Row size={40} style={[styles.one, styles.imgcontainer]}>
                    <View style={styles.imgcontainer}>
                    <UserAvatar size="100" name={displayName} />
                    <Text style={styles.textcontainer}>{displayName}</Text>
                    <Text style={styles.email}>{email}</Text>
                    </View>
                </Row>
                <Row size={50} style={styles.two}>
                    <ScrollView>
                        <Grid >
                            <Row >
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D1C4E9')} onPress={() => this.props.navigation.navigate("Home")}>
                                    <Row style={s.container}>
                                        <Col size={20} style={s.icon}><Icon name="home" size={24} color='grey' /></Col>
                                        <Col size={80} style={s.content}>
                                            <Text style={drwcolor}>Home</Text>

                                        </Col>
                                    </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D1C4E9')} onPress={() => this.props.navigation.navigate("Profile")}>
                                    <Row style={s.container}>
                                        <Col size={20} style={s.icon}><Icons name="user" size={24} color='grey' /></Col>
                                        <Col size={80} style={s.content}>
                                            <Text style={drwcolor}>Profile</Text>

                                        </Col>
                                    </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D1C4E9')} onPress={() => this.props.navigation.navigate("Notifications")}>
                                    <Row style={s.container}>
                                        <Col size={20} style={s.icon}><Icon name="notifications" size={24} color='grey' /></Col>
                                        <Col size={80} style={s.content}>
                                            <Text style={drwcolor}>Notifications</Text>

                                        </Col>
                                    </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D1C4E9')} onPress={() => this.props.navigation.navigate("Settings")}>
                                    <Row style={s.container}>
                                        <Col size={20} style={s.icon}><Icon name="view-list" size={24} color='grey' /></Col>
                                        <Col size={80} style={s.content}>
                                            <Text style={drwcolor}>My SubBox</Text>
                                        </Col>
                                    </Row>
                                </TouchableNativeFeedback>
                            </Row>
                            <Row >
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D1C4E9')} onPress={() => this.props.navigation.navigate("Help")}>
                                    <Row style={s.container}>
                                        <Col size={20} style={s.icon}><Icon name="help" size={24} color='grey' /></Col>
                                        <Col size={80} style={s.content}>
                                            <Text style={drwcolor}>Help</Text>
                                        </Col>
                                    </Row>

                                </TouchableNativeFeedback>
                            </Row>
                        </Grid>
                    </ScrollView>
                </Row>
                <Row size={10} style={styles.two}>
                    <Grid >
                        <Row >
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E0F2F1')} onPress= { () => this.props.navigation.dispatch(resetAction)}>
                                <Row style={s.container}>
                                    <Col size={20} style={s.icon}><Icons name="logout" size={24} color='grey' /></Col>
                                    <Col size={80} style={s.content}>
                                        <Text style={drwcolor}>Log out</Text>

                                    </Col>
                                </Row>
                            </TouchableNativeFeedback>
                        </Row>
                    </Grid>
                </Row>
            </Grid>

        );
    }
}


const s = StyleSheet.create({
    one: {
        backgroundColor: '#00796B',
    },
    two: {
        backgroundColor: '#fff',
    },
    imgcontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textcontainer: {
        marginTop: 10,
        color: '#fff'
    },
    iconst: {
        fontSize: 28,
        color: '#1B5E20'
    },
    space: {
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    },
    email: {
        fontSize: 12,
        color: '#fff'
    },
    space: {
        marginBottom: 10
    },
    container: {
        padding: 10
    },
    icon: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    content:
    {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    But: {
        backgroundColor: 'transparent',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    thumbnail: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const styles = StyleSheet.create({
    one: {
        backgroundColor: '#2a6796',
    },
    two: {
        backgroundColor: '#fff',
    },
    imgcontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textcontainer: {
        marginTop: 10,
        color: '#fff'

    },
    iconst: {
        fontSize: 28,
        color: '#1B5E20'
    },
    space: {
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    },
    email: {
        fontSize: 12,
        color: '#fff'
    },
    space: {
        marginBottom: 10
    }
});

  
export default Dcontent

