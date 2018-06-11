import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, Linking, Alert } from 'react-native';
import { InputForm } from '../misc/textInput';
import { FlatButton, BackArrowButton } from '../misc/buttons';
import { loginLayout, textStyle } from '../../styles/pages/introLayout';

export default class AuthenticationModal extends Component {
    render() {
        return(
            <Modal
            animationType='slide'
            visible={this.props.visible}
            >
                <View style={loginLayout.mainContainer}>
                    <View style={loginLayout.outerTitleContainer}>
                        <View style={loginLayout.innerTitleContainer}>
                            <View style={loginLayout.backIconContainer}>
                                <BackArrowButton onPress={this.props.onBack}/>
                            </View>
                            <View style={loginLayout.titleTextContainer}>
                                <Text style={textStyle.pageHeaders}>{this.props.header}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={loginLayout.loginContent}>
                        <View style={loginLayout.formContainer}>
                            <InputForm>
                                {this.props.children}
                            </InputForm>
                            <FlatButton title={this.props.submitTitle} onPress={this.props.submit}/>
                            {this.props.retrieveCredentials}
                        </View>
                            // SocialLogin goes here // 
                    </View>
                    <View style={{flex: .05}}/>
                </View>
            </Modal>
        )
    }
}