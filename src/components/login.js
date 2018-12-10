import React, { Component } from 'react';
import styles from '../styling/styles';
import {
    View,
    Button,
    StyleSheet,
    TouchableNativeFeedback,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Keyboard

} from 'react-native';
import { Container, Header, Text, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import {
    credential_sync,
    login_act,
    userData
} from '../actions';


const {
    linearGradient,
    authtitlefont,
    authtitle,
    authform,
    authinput,
    authbtn,
    authregister
} = styles;
class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password: ''
        }
    }
    componentWillMount(){
        this.props.userData();
    }
    login() {
        if (this.state.email && this.state.password) {
            const { navigation} = this.props;
            const {email, password} = this.state;
            Keyboard.dismiss();
            this.props.login_act({ email, password, navigation});
            this.props.userData();
            
            
        }
    }
    render() {
        //console.log(this.props.data);
        return (
            <LinearGradient
                colors={['#41295a', '#2a6796']}
                style={linearGradient}>

                <Grid>

                    <Row size={25} style={authtitle}>
                        <Text style={authtitlefont}>SubBox</Text>
                    </Row>
                    <Row size={75}>

                        <Col style={authform}>

                            <TextInput
                                style={authinput}
                                underlineColorAndroid="white"
                                placeholderTextColor="white"
                                placeholder="E-mail"
                                value={this.state.email}
                                onChangeText={(value) =>  this.setState({email:value})}
                            />
                            <TextInput
                                style={authinput}
                                underlineColorAndroid="white"
                                placeholder="Password"
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                value={this.state.password}
                                onChangeText={(value) =>  this.setState({password:value})}

                            />
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#2a6796')} delayPressIn={0} onPress={() => this.login()} >
                                <View style={authbtn}>
                                    <Text style={{ color: '#2a6796' }}>Sign in</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} >
                                <View>
                                    <Text style={authregister}>Sign up</Text>
                                </View>
                            </TouchableOpacity>

                        </Col>

                    </Row>

                </Grid>

            </LinearGradient>

        );
    }
}


export default connect(null, { credential_sync, login_act, userData })(Login)