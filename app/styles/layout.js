import { StyleSheet } from 'react-native';

export const pageLayout = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    upperContainer: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F1F2',
    },
    lowerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    navContainer: {
        flex: .17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})

export const textStyle = StyleSheet.create({
    pageHeaders: {
        fontFamily: 'Helvetica',
        color: '#433D3F',
        fontSize: 24,
        paddingTop: 25,
        letterSpacing: 2,
    },
    mediumText: {
        fontFamily: 'HelveticaNeue',
        color: '#433D3F',
        fontSize: 24,
    },
    buttonText: {
        fontFamily: 'HelveticaNeue',
        color: '#F2F1F2',
        fontSize: 15,
    },
    paragraphText: {
        color: '#433D3F',
        fontSize: 16,
    }
})