import React, { Component } from 'react';
import styles from '../styling/styles';
import {
    View,
    Button,
    StyleSheet,
    TouchableNativeFeedback,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Container, Header, Text, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import {credential_sync} from '../actions'


const {
    linearGradient,
    authtitlefont,
    authtitle,
    authform,
    authinput,
    authbtn,
    authregister
} = styles;

export default class Register extends Component {
    
    render() {
        return (
            <LinearGradient
                colors={['#41295a', '#2a6796']}
                style={linearGradient}>
                <Grid>
                    <Row size={15} style={authtitle}>
                        <Text style={authtitlefont}>SubBox</Text>
                    </Row>
                    <Row size={85}>
                        <ScrollView>
                            <Col style={authform}>
                                <TextInput
                                    style={authinput}
                                    underlineColorAndroid="white"
                                    placeholderTextColor="white"
                                    placeholder="First Name"
                                />
                                <TextInput
                                    style={authinput}
                                    underlineColorAndroid="white"
                                    placeholderTextColor="white"
                                    placeholder="Last Name"
                                />
                                <TextInput
                                    style={authinput}
                                    underlineColorAndroid="white"
                                    placeholderTextColor="white"
                                    placeholder="E-mail"
                                />
                                <TextInput
                                    style={authinput}
                                    underlineColorAndroid="white"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor="white"
                                />
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#2a6796')} delayPressIn={0} >
                                    <View style={authbtn}>
                                        <Text style={{ color: '#2a6796' }}>Sign up</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                                    <View>
                                        <Text style={authregister}>Sign in</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </ScrollView>
                    </Row>
                </Grid>
            </LinearGradient>

        );
    }
}




