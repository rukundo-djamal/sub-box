import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Header, Left, Body, Title, StyleProvider, Button, Right, Text, Footer, FooterTab } from 'native-base';
import getTheme from './../../native-base-theme/components';
import material from './../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styling/styles';
import PList from './Plist';


const {
  root,
  hide,
  container,
  overlay,
  leave,
  cont,
  mainrw,
  logo,
  card,
  text,
  txt,
  txtcnt,
  move
} = styles;
export default class Detail extends Component {

  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <View style={root}>
        <StyleProvider style={getTheme(material)}>
          <Header>
            <Left>
              <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#2a6796')} onPress={() => this.props.navigation.navigate("Service")}>
                <View style={{ height: 60, width: 60, justifyContent: 'center', marginLeft: 15 }}>
                  <Icon name='close' color='white' size={30} />
                </View>
              </TouchableNativeFeedback>
            </Left>
            <Body>
              <Title >{params.name}</Title>
            </Body>
          </Header>
        </StyleProvider>
        <Grid>
          <Row size={25} style={hide}>
            <View style={container}>
              <Image height={200} source={require('../img/Tv.jpg')}>
                <View style={overlay}>
                </View>
              </Image>
            </View>
          </Row>
          <Row size={75} style={hide}>

            <Grid style={leave}>
              <FlatList
                data={params.packages}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <PList navigation={this.props.navigation} data={item} company={params.name} />}
              />
            </Grid>
          </Row>
        </Grid>
        <Grid style={move}>
          <Col style={cont}>

            <Row size={100} style={mainrw}>
              <Col size={50} style={logo}>
                <View style={card}>
                  <UserAvatar size="100" name={params.name} />
                </View>
              </Col>
              <Col size={50} style={text}>
                <Text style={txt}>{params.name}</Text>
                <Text style={txtcnt}>{params.desc}</Text>
              </Col>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}






