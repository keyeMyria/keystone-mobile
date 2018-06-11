import { StyleSheet } from 'react-native';

export const buttonContainers = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 75,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 5,
        paddingTop: 10,
    },
    flatButton: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE596C',
        borderRadius: 3,
        borderStyle: 'solid',
        borderColor: '#433D3F'
    },
    mediumButton: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE596C',
        borderRadius: 3,
        borderStyle: 'solid',
        borderColor: '#433D3F',
        paddingLeft: 7.5,
        paddingRight: 7.5,
    }
})

export const textStyle = StyleSheet.create({
    flatbuttonText: {
        fontFamily: 'HelveticaNeue',
        color: '#F2F1F2',
        fontSize: 15,
    },
    mediumButtonText: {
        fontFamily: 'HelveticaNeue',
        color: '#F2F1F2',
        fontSize: 15,
        paddingLeft: 2.5
    }
})

export const shadowStyle = {
    color: '#000',
    opacity: .5,
    offset: {
        width: -2,
        height: 4
    }
}