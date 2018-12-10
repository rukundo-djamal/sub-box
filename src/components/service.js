import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import styles from '../styling/styles';
import { Container, Thumbnail, Content, Text, StyleProvider, Header, H1, Left, Body, Right, Button, Title } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/MaterialIcons';
import List from './list';
import { Grid, Col, Row } from 'react-native-easy-grid';
export default class Service extends Component {
    render() {
        const { params } = this.props.navigation.state;
        //console.log(params);
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' color='white' size={24} />
                            </Button>
                        </Left>
                        <Body >
                            <Title>{params.name}</Title>
                        </Body>
                    </Header>
                    <FlatList
                        data={params.company}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => <List navigation={this.props.navigation} data={item} />}
                    />
                </Container>
            </StyleProvider>
        );
    }
} 
