import { StyleSheet } from 'react-native';

export const navContainer = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
    }
})

export const iconStyle = {
    size: 25,
    mainColor: '#FFFFFF',
    subColor: '#FFFFFF' 
}

export const navButtons = StyleSheet.create({
    mainButton: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#433D3F',
        borderRadius: 50,
        paddingTop: 1,
        paddingLeft: 1,
    },
    subButton: {
        borderWidth: .5,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#EE596C',
        borderRadius: 50, 
        paddingTop: 1,
        paddingLeft: 1,
    }
})