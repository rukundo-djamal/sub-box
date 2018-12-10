import React, { Component } from 'react';
import styles from '../styling/styles';
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Thumbnail, Content, Text, StyleProvider, Header, H1, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { NavigationActions } from 'react-navigation'
import Box from './box';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    userData,
    MyBOX
} from '../actions';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login' })
    ]
})

const {
    wrap,
    linearGradient
} = styles;
class Main extends Component {
    componentWillMount(){
        this.props.MyBOX();
    }
    
    renderList(data){
        return _.map(data, (item, key) => <Box key={key} navigation={this.props.navigation} data={item} />);
    }
    
    render() {
        //const { params } = this.props.navigation;
        //console.log(this.props.qdata);
        return (
            <Grid>
                <Row size={100} style={styles.one}>
                    <StyleProvider style={getTheme(material)}>
                        <Container>
                            <Col size={6}>
                                <Header
                                    hasTabs>
                                    <Left>
                                        <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                            <Icon name='menu' color='white' size={24} />
                                        </Button>
                                    </Left>
                                    <Body >
                                        <Title >SubBox</Title>
                                    </Body>
                                </Header>
                            </Col>
                            <Col size={20}>
                                <LinearGradient
                                    colors={['#2a6796', '#5C6BC0']}
                                    style={linearGradient}>
                                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'normal', color: '#EDE7F6' }}>Enjoy fast and easy access to subcription</Text>
                                    </Row>
                                </LinearGradient>
                            </Col>
                            <Col size={72}>
                                <Row style={wrap}>
                                    {this.renderList(this.props.qdata)}
                                </Row>
                            </Col>
                        </Container>
                    </StyleProvider>

                </Row>

            </Grid>

        );
    }
}
const mapStateToProps = (state) => {
    return { 
        qdata : state.mdata.data,
        loading: state.mdata.loading
     }
}

export default connect(mapStateToProps, {userData, MyBOX})(Main)