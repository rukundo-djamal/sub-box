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
import { get_user_box } from '../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';



class PList extends Component {

    addToMsubBox(){
        Toast.show({
            text: 'added to your SubBox',
            position: 'bottom',
            buttonText: 'Okay'
        });
        let time = moment().add(1, 'M').format('L');
        const { name, desc, price } = this.props.data;
        const { company } = this.props;
        /*day1=now.split('/');
        temp1=day1[0];
        temp2 =day1[1];
        temp3 =day1[2];
        day1[0]=temp3;
        day1[1]=temp2;
        day1[2]=temp1;
        let a = moment(day1);
        let b = moment([ '09', '25', '2017' ]);
        let d=a.diff(b, 'days');
        time='10/30/2017'
        10/31/2017
        let now = moment().format('L'); 
        let day1 = valid_date(time);
        let day2 = valid_date(now);
        let a = moment(day1);
        let b = moment(day2)
        let day=a.from(b); 
        console.log(day);
        */
        //moment().subtract(30, 'days'); // or...
       // moment().add(+30, 'days');
        this.props.get_user_box({ name, desc, price, time, company});

    }

    render() {


        //console.log(this.props.data);
        const { name, desc, price } = this.props.data;
        return (
            <Row style={s.container}>
                <Row >
                    <Col size={50} style={s.content}><Body style={s.align}><Text style={s.fnt}>{name}</Text><Text style={s.fnt} note>{desc}</Text></Body></Col>
                    <Col size={35} style={s.content}><Text style={s.fnt}>{price} Rwf</Text></Col>
                    <Col size={15} style={s.But}>
                        <Button onPress={() => this.addToMsubBox()} transparent>
                            <Icon name='add' size={24} color='black' />
                        </Button>
                    </Col>
                </Row>
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
    }
});

export default connect(null, {get_user_box})(PList)
