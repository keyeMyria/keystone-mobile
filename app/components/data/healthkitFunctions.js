import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import HealthKit from 'rn-apple-healthkit';
import { FAIconButton } from '../misc/buttons';

export class AuthorizeHK extends Component {

    requestPermissions = () => {
        HealthKit.initHealthKit(hkOptions, (err, results) => {
            if (err) {
                console.log('Error initializing Healthkit: ', err);
                return;
            }
        })
    }

    render() {
        return(
            <FAIconButton name='heartbeat' onPress={this.requestPermissions}/>
        )
    }
}

const hkOptions = {
    permissions: {
        read: [
            'ActiveEnergyBurned',
            'BiologicalSex',
            'BloodGlucose',
            'BloodPressureDiastolic',
            'BloodPressureSystolic',
            'BodyMassIndex',
            'BodyTemperature',
            'DateOfBirth',
            'DistanceCycling',
            'DistanceWalkingRunning',
            'FlightsClimbed',
            'HeartRate',
            'Height',
            'LeanBodyMass',
            'RespiratoryRate',
            'SleepAnalysis',
            'StepCount',
            'Steps',
            'Weight'
        ],
        write: [
            'BloodPressureDiastolic',
            'BloodPressureSystolic',
            'BodyMassIndex',
            'DistanceCycling',
            'DistanceWalkingRunning',
            'FlightsClimbed',
            'Height',
            'LeanBodyMass',
            'MindfulSession',
            'StepCount',
            'Steps',
            'Weight',
        ]
    }
}