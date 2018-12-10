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
import { Grid, Row, Col } from 'react-native-easy-grid';
export default class Help extends Component {

  render() {
    return (
      <Grid>
        <Row size={100} style={styles.one}>
          <StyleProvider style={getTheme(material)}>
            <Container>
              <Col size={8}>
                <Header>
                  <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                      <Icon name='menu' color='white' size={24} />
                    </Button>
                  </Left>
                  <Body >
                    <Title >Help</Title>
                  </Body>
                </Header>
              </Col>
              <Col size={92}>
                <Row  >
                  <Col>
                    <Row style={{ height: 60, elevation: 2, backgroundColor: '#fff', padding: 10 }}>
                      <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                        <Text>Email us on</Text>
                      </Col>
                      <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                        <Text note>help@subbox.com</Text>
                      </Col>
                    </Row>
                    <Row style={{ height: 60, elevation: 2, backgroundColor: '#fff', padding: 10 }}>
                      <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                        <Text>Version</Text>
                      </Col>
                      <Col style={{ justifyContent: 'center', alignItems: 'center' }} size={1}>
                        <Text note>1.0.0</Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          </StyleProvider>

        </Row>

      </Grid>
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

AppRegistry.registerComponent('Help', () => Help);
