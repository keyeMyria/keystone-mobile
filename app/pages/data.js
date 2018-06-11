import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Stopwatch from '../components/data/stopwatch';
import NavMenu from '../components/misc/navMenu';
import { pageLayout, textStyle } from '../styles/layout';

export default class Data extends Component {
    render() {
        return (
            <View style={pageLayout.mainContainer}>
                <View style={pageLayout.upperContainer}>
                    <Text style={textStyle.pageHeaders}>RECORD</Text>
                </View>
                <View style={pageLayout.lowerContainer}>
                    <Stopwatch/>
                </View>
                <View style={pageLayout.navContainer}>
                    <NavMenu/>
                </View>
            </View>
        )
    }
}