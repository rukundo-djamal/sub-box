import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Header, Left, Body, Title, StyleProvider, Button, Right, Text, } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import UserAvatar from 'react-native-user-avatar';
export default class Tablist extends Component {
  renderList(){
    return this.props.data.map(item => 
    <Row key={item.name} style={s.container}>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#E8EAF6')} onPress={() => this.props.navigation.navigate("Detail", item)}  >
        <Row >
          <Col size={20} style={s.icon}><UserAvatar size="60" name={item.name} /></Col>
          <Col size={65} style={s.content}><Body style={s.align}><Text>{item.name}</Text><Text note>{item.desc}</Text></Body></Col>
          <Col size={15} style={s.But}><Icon name='arrow-right' size={24} color='black' /></Col>
        </Row>
        </TouchableNativeFeedback>
      </Row> );
  }
  render( ) {
    return (
      <ScrollView>
        <Grid >
        {this.renderList()}
        </Grid>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'transparent',


  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  content:
  {
    backgroundColor: 'transparent',
    marginTop: 10,
    marginLeft: 30,
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
  align:{
    alignItems: 'flex-start'
    
  }
});

