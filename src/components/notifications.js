/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Title, StyleProvider, Button } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Notifications extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
        <Container>
            <Header>
                <Left> 
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name='menu' color='white' size={24} />
                    </Button>
                </Left>
                <Body>
                    <Title >Notifications</Title>
                </Body>
            </Header>
        </Container>
    </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('Notifications', () => Notifications);
