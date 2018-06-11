import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import { buttonContainers, textStyle, shadowStyle } from '../../styles/components/misc/buttonStyle';

class FlatButton extends Component {
    render() {
        return(
            <View 
                style={buttonContainers.container} 
                shadowColor={shadowStyle.color} 
                shadowOpacity={shadowStyle.opacity}
                shadowOffset={shadowStyle.offset}
            >
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={.7}>
                    <View style={buttonContainers.flatButton}>
                        <Text style={textStyle.flatbuttonText}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class IoniIconButton extends Component {
    render() {
        return(
            <View 
                style={buttonContainers.container} 
                shadowColor={shadowStyle.color} 
                shadowOpacity={shadowStyle.opacity}
                shadowOffset={shadowStyle.offset}
            >
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={.7}>
                    <View style={buttonContainers.flatButton}>
                        <IoniIcon name={this.props.name} color='#FFFFFF' size={20}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class IoniTextButton extends Component {
    render() {
        return(
            <View 
                style={buttonContainers.container} 
                shadowColor={shadowStyle.color} 
                shadowOpacity={shadowStyle.opacity}
                shadowOffset={shadowStyle.offset}
            >
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={.7}>
                    <View style={buttonContainers.mediumButton}>
                        <IoniIcon name={this.props.name} color='#FFFFFF' size={20}/>
                        <Text style={textStyle.mediumButtonText}>{this.props.title}</Text>                        
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class FAIconButton extends Component {
    render() {
        return(
            <View 
                style={buttonContainers.container} 
                shadowColor={shadowStyle.color} 
                shadowOpacity={shadowStyle.opacity}
                shadowOffset={shadowStyle.offset}
            >
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={.7}>
                    <View style={buttonContainers.flatButton}>
                        <FAIcon name={this.props.name} color='#FFFFFF' size={20}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const BackArrowButton = (props) => (
    <TouchableHighlight onPress={props.onPress}>
        <IoniIcon name='ios-arrow-back' color='#433D3F' size={26}/>
    </TouchableHighlight>
)

export { 
    FlatButton, 
    IoniIconButton as IconButton,
    IoniTextButton as TextIconButton, 
    BackArrowButton,
    FAIconButton 
}
