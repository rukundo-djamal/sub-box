import React, { Component } from 'react';
import {
    TouchableNativeFeedback,
    View,
} from 'react-native';
import styles from '../styling/styles';
const {
    container,
    box
} = styles;
import { Grid, Col, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Text, StyleProvider, Header, Left, Body, Right, Button, Title } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';

const icon = 'home';

export default class Box extends Component {
    render() {
        const {icon, name, company }=this.props.data;
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#F3E5F5')}
                delayPressIn={0}
                onPress={() => this.props.navigation.navigate("Service",this.props.data)} >
                <View style={box}>
                    <Icon name={icon} size={60} color="#2a6796" />
                    <Text>{name}</Text>
                </View>
            </TouchableNativeFeedback>


        );
    }
}