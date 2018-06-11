import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NavMenu from '../components/misc/navMenu';
import { pageLayout, textStyle } from '../styles/layout';

export default class Settings extends Component {
    render() {
        return (
            <View style={pageLayout.mainContainer}>
                <View style={pageLayout.upperContainer}>
                    <Text style={textStyle.pageHeaders}>SETTINGS</Text>
                </View>
                <View style={pageLayout.lowerContainer}>
                </View>
                <View style={pageLayout.navContainer}>
                    <NavMenu/>
                </View>
            </View>
        )
    }
}