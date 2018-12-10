import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert
} from 'react-native';
import { Col, Row, Grid, } from "react-native-easy-grid";
import { Container, Header, Left, Body, Title, StyleProvider, Button, Right, Text, Tab, Content, Toast, } from 'native-base';
import moment from 'moment';
import { connect } from 'react-redux';
import { get_user_box, delsub } from '../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';


const valid_date=(time) => {
    let day=time.split('/');
    let temp1=day[0];
    let temp2 =day[1];
    let temp3 =day[2];
    day[0]=parseInt(temp3);
    day[1]=parseInt(temp1);
    day[2]=parseInt(temp2);
    return day;
}

class MList extends Component {

    render() {
        console.log(this.props.data);
        const { name, desc, price, uid, time } = this.props.data;
        let now = moment().format('L'); 
        let day1 = valid_date(time);
        let day2 = valid_date(now);
        let a = moment(day1);
        let b = moment(day2)
        let day=a.from(b);
        
        return (
            <Row style={s.container}>
                <Col>
                <Row >
                    <Col size={50} style={s.content}><Body style={s.align}><Text style={s.fnt}>{name}</Text><Text style={s.fnt} note>{desc}</Text></Body></Col>
                    <Col size={35} style={s.content}><Text style={s.fnt} note>{price} Rwf</Text></Col>
                    <Col size={15} style={s.But}>
                        <Button transparent onPress={() => this.props.delsub(uid)}>
                            <Icon name='remove' size={24} color='black' />
                        </Button>
                    </Col>
                </Row>
                <Row style={{justifyContent:'center', alignItems: 'center'}}><Text style={{fontSize: 10, fontWeight: 'bold', color: '#263238'}} >Expires {day}</Text></Row>
                </Col>
            </Row>



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
    align: {
        alignItems: 'flex-start'

    },
    fnt: {
        fontFamily: 'averta bold',
        fontSize: 13, 
        fontWeight: 'bold',
    }
});

export default connect(null, {delsub})(MList)