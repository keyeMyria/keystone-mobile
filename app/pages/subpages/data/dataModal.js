import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { FlatButton } from '../../../components/misc/buttons';
import { pageLayout, textStyle } from '../../../styles/layout';

export default ModalPage = (props) => (
    <View style={pageLayout.lowerContainer}>
        <Text style={textStyle.pageHeaders}>RECORD</Text>
        <FlatButton title='Close' onPress={props.onPress}/>
    </View>
)