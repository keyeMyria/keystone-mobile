import { StyleSheet } from 'react-native';

export const stopwatchLayout = StyleSheet.create({
    stopwatchContainer: {
        height: 125,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export const stopwatchStyle = {
    container: {
        borderColor: '#FFF',
        borderStyle: 'solid',
    },
    text: {
        fontSize: 30,
        color: '#433D3F'
    }
}