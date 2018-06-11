import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import store from 'react-native-simple-store';
import moment from 'moment';
import { FlatButton } from '../misc/buttons';
import ModalPage from '../../pages/subpages/data/dataModal';
import { stopwatchLayout, stopwatchStyle } from '../../styles/components/data/stopwatchStyle';

export default class DataStopwatch extends Component {
    state = {
        stopwatchStart: false,
        stopwatchReset: false,
        currentTime: '00:00:00',
        modalVisible: false,
    };

    toggleStopwatch = () => {
        this.setState({
            stopwatchStart: !this.state.stopwatchStart, 
            stopwatchReset: false,
            currentTime: this.currentTime
        });
    };

    resetStopwatch = () => {
        this.setState({stopwatchStart: false, stopwatchReset: true});
    };

    changeTime =  () => {
        new Promise(this.setState({ currentTime: this.currentTime }))
    }

    saveTime = () => {
        this.setState({ modalVisible:!this.state.modalVisible })
    }
        
    getFormattedTime = (time) => {
        this.currentTime = time;
    };

    render() {
        return(
            <View style={stopwatchLayout.stopwatchContainer}>
                <Stopwatch 
                    start={this.state.stopwatchStart}
                    reset={this.state.stopwatchReset}
                    getTime={this.getFormattedTime}
                    options={stopwatchStyle}
                />
                <View style={stopwatchLayout.buttonContainer}>
                    <FlatButton  title={this.state.stopwatchStart ? 'STOP' : 'START'} onPress={this.toggleStopwatch}/>
                    <FlatButton title='RESET' onPress={this.resetStopwatch}/>
                </View>
                <View>
                    {this.state.currentTime === '00:00:00' ? null : <FlatButton title='SAVE' onPress={this.saveTime}/>}
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType='slide'
                    presentationStyle='overFullScreen'
                >
                    <ModalPage onPress={this.saveTime}/>
                </Modal>
            </View>
        )
    }
}
