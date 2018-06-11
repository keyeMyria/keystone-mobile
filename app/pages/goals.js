import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { FlatButton } from '../components/misc/buttons';
import store from 'react-native-simple-store';
import NavMenu from '../components/misc/navMenu';
import { pageLayout, textStyle } from '../styles/layout';

export default class Goals extends Component {

    render() {
        return (
            <View style={pageLayout.mainContainer}>
                <View style={pageLayout.upperContainer}>
                    <Text style={textStyle.pageHeaders}>KEYSTONES</Text>
                </View>
                <View style={pageLayout.lowerContainer}>
                    <FlatButton onPress={this.deleteData} title='DELETE'/>
                </View>
                <View style={pageLayout.navContainer}>
                    <NavMenu/>
                </View>
            </View>
        )
    }
}