import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import store from 'react-native-simple-store';
import NavMenu from '../components/misc/navMenu';
import { pageLayout, textStyle } from '../styles/layout';

export default class Dashboard extends Component {
    state = { userEmail:'' }
    componentWillMount() {
        store.get('userData')
            .then((data) => {
                this.setState({ userEmail:data.userEmail })
            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <View style={pageLayout.mainContainer}>
                <View style={pageLayout.upperContainer}>
                    <Text style={textStyle.pageHeaders}>DASHBOARD</Text>
                </View>
                <View style={pageLayout.lowerContainer}>
                    <Text>
                        {this.state.userEmail}
                    </Text>
                </View>
                <View style={pageLayout.navContainer}>
                    <NavMenu/>
                </View>
            </View>
        )
    }
}