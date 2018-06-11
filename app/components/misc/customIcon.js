import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { iconLibrary } from '../../assets/iconDirectory';

export default class CustomIcon extends Component {

    render() {
        return(
            <Image 
                style={{height: this.props.size, width: this.props.size}}
                source={iconLibrary[`${this.props.name}`]}
            />
        )
    }
}