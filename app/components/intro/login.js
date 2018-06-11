import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import store from 'react-native-simple-store';
import { AuthorizeHK } from '../data/healthkitFunctions';
import AuthenticationModal from '../authentication/authModal';
import { Input } from '../misc/textInput';
import { FlatButton } from '../misc/buttons';

export default class Authenticate extends Component {
    state = { 
        viewSignUp: false,
        viewLogIn: false,
        userName: '',
        userEmail: '',
        userPassword: '',
    }

    handleSignUpPress = () => {
        this.setState({ viewSignUp: !this.state.viewSignUp })
    }
    handleLogInPress = () => {
        this.setState({ viewLogIn: !this.state.viewLogIn })
    }
    recordUserName = (input) => {
        this.setState({ userName: input })
    }
    recordUserEmail = (input) => {
        this.setState({ userEmail: input })
    }
    recordPassword = (input) => {
        this.setState({ userPassword: input })
    }

    createUser = async () => {
        let name = this.state.userName;
        let email = this.state.userEmail;
        let password = this.state.userPassword;

        await store.save('userData', {
            userEmail: email,
            appTier: 'Basic'
        })
        .then(() => store.get('userData'))
        .then((data) => console.log(data)) 
        .catch((error) => console.log(err))

        console.log(`Trying to log ${name} in.`)
    }

    render() {
        return(
            <View>
                <AuthorizeHK/>
                <FlatButton title='SIGN UP' onPress={this.handleSignUpPress}/>
                <FlatButton title='LOG IN' onPress={this.handleLogInPress}/>
                <AuthenticationModal 
                    visible={this.state.viewSignUp} 
                    onBack={this.handleSignUpPress} 
                    header='SIGN UP'
                    submitTitle='SIGN UP'
                    submit={this.createUser}
                >
                    <Input title='Name' placeholder='Your Name' onBlur={this.recordUserName}/>
                    <Input title='Email' placeholder='user@email.com' onBlur={this.recordUserEmail}/>
                    <Input title='Password' placeholder='*******' onBlur={this.recordPassword} password={true}/>
                </AuthenticationModal>
                <AuthenticationModal 
                    visible={this.state.viewLogIn} 
                    onBack={this.handleLogInPress} 
                    header='LOG IN'
                    submitTitle='LOG IN'
                    submit={this.createUser}
                >
                    <Input title='Email' placeholder='user@email.com' onBlur={this.recordUserEmail}/>
                    <Input title='Password' placeholder='********' onBlur={this.recordPassword} password={true}/>
                </AuthenticationModal>
            </View>
        )
    }
}