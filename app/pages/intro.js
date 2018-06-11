import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import CustomIcon from '../components/misc/customIcon'
import { TutorialPage, IntroButtons } from '../components/intro/tutorialPage';
import Authenticate from '../components/intro/login';
import { introLayout, textStyle } from '../styles/pages/introLayout';

export default Intro = (props) => (
    <Swiper activeDot={<View style={introLayout.activeDot}/>} loop={false} showsButtons={true}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={textStyle.welcomeText}>
                Welcome to Keystone
            </Text>
            <CustomIcon size={50} name='keystone'/>
        </View>
        <TutorialPage iconName='ios-analytics' title='DASHBOARD'>
            <Text style={textStyle.paragraphText}>Dashboard tutorial</Text>
        </TutorialPage>
        <TutorialPage iconName='ios-timer' title='DATA'>
            <Text style={textStyle.paragraphText}>Data tutorial</Text>
        </TutorialPage>
        <TutorialPage iconName='ios-bulb' title='GOALS'>
            <Text style={textStyle.paragraphText}>Goals tutorial</Text>
        </TutorialPage>
        <TutorialPage iconName='ios-settings' title='LOGIN'>
            <Authenticate/>
        </TutorialPage>
    </Swiper>
)
