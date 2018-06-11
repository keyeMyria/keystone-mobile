import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { inputLayout, textStyle } from '../../styles/components/misc/inputStyle';

class Input extends Component {
    state = { text: '' }

    handleChangeText = (input) => {
        this.setState({ text: input })
    }

    handleBlur = () => {
        const input = this.state.text;
        this.props.onBlur(input)
    }

    render() {
        return(
            <View style={inputLayout.outerContainer}>
                <View style={inputLayout.titleContainer}>
                    <Text style={textStyle.inputTitle}>{`${this.props.title}:`}</Text>
                </View>
                <View style={inputLayout.inputContainer}>
                    <TextInput
                        value={this.state.text}
                        onChangeText={this.handleChangeText}
                        onBlur={this.handleBlur}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.password}
                        placeholderTextColor='#E5DCDD'
                        numberOfLines={1}
                        autoCapitalize='none'
                        style={textStyle.inputText}
                    />
                </View>
            </View>
        )
    }
}

const InputForm = (props) => (
    <KeyboardAvoidingView 
        behavior='padding' 
        style={inputLayout.inputFormContainer}
    >
        {props.children}
    </KeyboardAvoidingView>
)


export { Input, InputForm }