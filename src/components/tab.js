import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Col, Row, Grid, } from "react-native-easy-grid";
import Tv from './tablist';
import Insurance from './tablist';
import Gym from './tablist';
import getTheme from './../../../native-base-theme/components';
import material from './../../../native-base-theme/variables/material';
import { Container, List, FooterTab, Footer, Fab, ListItem, Tabs, Tab, Thumbnail, Content, Text, StyleProvider, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';





class Subscription extends Component {
    
    renderTab() {
        let tab = Object.keys(this.props.data);
        console.log(tab)
        return tab.map(s => 
        <Tab key={s} heading={s}>
            <Tv navigation={this.props.navigation} data={this.props.data[s]} />
        </Tab>);
    }
    render() {
        return (
            <View style={styles.container}>
                <StyleProvider style={getTheme(material)}>
                    <Container>
                        <Header hasTabs>
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                    <Icon name='menu' size={24} color='white' />
                                </Button>
                            </Left>
                            <Body>
                                <Title>Subscription</Title>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate("Search")}>
                                    <Icon name='search' size={24} color='white' />
                                </Button>
                            </Right>
                        </Header>
                        <Tabs initialPage={0}>
                            { this.renderTab()}
                        </Tabs>
                        <Footer>
                            <FooterTab>
                                <Button active onPress={() => this.props.navigation.goBack()}>
                                    <Icon name='home' size={24} color='white' />
                                </Button>
                                <Button>
                                    <Icon name='extension' size={24} color='white' />
                                </Button>

                            </FooterTab>
                        </Footer>
                    </Container>
                </StyleProvider>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    iconst: {
        fontSize: 40,
        color: '#1B5E20',
        flexDirection: 'column'
    },
    textcontainer: {
        marginTop: 10,
        color: '#1B5E20'

    },
    imgcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
});
const mapStateToProps = (state) => {
    return {
        data: state.services.subscription
    }
}

export default connect(mapStateToProps)(Subscription);
