import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { Container, Header, Left, Body, Title, StyleProvider, Button } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import {
  userData,
  MyBOX
} from '../actions';
import Mlist from './mylist';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-native-easy-grid';

let add = 0;

class MSubBox extends Component {
  constructor() {
    super()
    this.state = {
      total: 0
    }
  }
  
  render() {
    console.log(this.props.mysub);
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
              <Title >MY SubBox</Title>
            </Body>
          </Header>
          <Grid >
            <Row size={90}>
              <FlatList
                data={this.props.mysub}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                  return <Mlist navigation={this.props.navigation} data={item} />
                }
                }
              />
            </Row>
            <Row size={10} style={{ backgroundColor: '#2a6796', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}> Total {this.state.total}</Text>
            </Row>
          </Grid>
        </Container>
      </StyleProvider>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  const mysub = _.map(state.mdata.box, (val, uid) => {
    return { ...val, uid };
  })
  return { mysub };
}

export default connect(mapStateToProps, { MyBOX })(MSubBox)


