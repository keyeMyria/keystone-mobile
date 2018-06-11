import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import store from 'react-native-simple-store';
import { FlatButton, FAIconButton } from '../../components/misc/buttons';
import { iconStyle, introLayout, textStyle } from '../../styles/pages/introLayout';

const IntroIcon = (props) => (
    <View style={introLayout.iconContainer}>
        <Icon 
            name={props.iconName} 
            size={iconStyle.size} 
            color={iconStyle.subColor} 
        />
    </View>
)

const TutorialPage = (props) => (
    <View style={introLayout.mainContainer}>
        <View style={introLayout.outerTitleContainer}>
            <View style={introLayout.innerTitleContainer}>
                <IntroIcon iconName={props.iconName}/>
                <View style={introLayout.titleTextContainer}>
                    <Text style={textStyle.pageHeaders}>{props.title}</Text>
                </View>
            </View>
        </View>
        <View style={introLayout.tutorialContainer}>
            {props.children}
        </View>
        <View style={introLayout.dotContainer}/>
    </View>
)

export { TutorialPage }
