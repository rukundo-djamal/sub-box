import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Thumbnail, Content, Text, StyleProvider, Header, H1, Left, Body, Right, Button, Title } from 'native-base';
import firebase from 'firebase';
import UserAvatar from 'react-native-user-avatar';
import LinearGradient from 'react-native-linear-gradient';
import style from '../styling/styles';

const { linearGradient } = style;

export default class Profile extends Component {

    render() {
        const user = firebase.auth().currentUser;
        const { displayName, email } = user;
        //console.log(this.props.data);
        return (
            <Grid>

                <Row size={100} style={styles.one}>
                    <StyleProvider style={getTheme(material)}>
                        <Container>
                            <Col size={35}>
                                <LinearGradient
                                    colors={['#2a6796' ,'#5C6BC0']}
                                    style={linearGradient}>
                                    <Row >
                                        <TouchableOpacity style={{ padding: 20 }} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                            <Icon name="menu" size={24} color="white" />
                                        </TouchableOpacity>
                                    </Row>
                                    <Row>

                                    </Row>

                                </LinearGradient>
                            </Col>
                            <Col size={75} style={styles.card}>
                                <Row style={{marginTop: 120, marginLeft:20, marginRight: 30, backgroundColor: '#fff'}}>
                                    <Col>
                                    <Row style={{height:60,backgroundColor: '#fff', padding: 10, marginBottom:10}}>
                                    <Col style={{justifyContent: 'center', alignItems: 'center'}} size={1}>
                                    <Text>Name</Text>
                                    </Col>
                                    <Col style={{justifyContent: 'center', alignItems: 'center'}} size={1}>
                                    <Text note>{displayName}</Text>
                                    </Col>
                                    </Row>
                                    <Row style={{height:60, backgroundColor: '#fff', padding: 10}}>
                                    <Col style={{justifyContent: 'center', alignItems: 'center'}} size={1}>
                                    <Text>E-mail</Text>
                                    </Col>
                                    <Col style={{justifyContent: 'center', alignItems: 'center'}} size={1}>
                                    <Text note>{email}</Text>
                                    </Col>
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Container>
                    </StyleProvider>
                    <View style={styles.Profile}>
                        <UserAvatar size="145" name={displayName} />
                    </View>
                </Row>
            </Grid>

        );
    }
}

const styles = StyleSheet.create({

    Profile: {
        position: 'absolute',
        left: 130,
        top: 140,
        height: 155,
        width: 155,
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6

    },
    email: {
        fontSize: 12,
        color: 'grey'
    },
    imgcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textcontainer: {
        marginTop: 10,
        color: 'black',
        fontFamily: 'averta bold',
        fontSize: 14

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    one: {
        backgroundColor: '#E3F2FD',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    card: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        //padding: 80
        elevation:4
    }
});

