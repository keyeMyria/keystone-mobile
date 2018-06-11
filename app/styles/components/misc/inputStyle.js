import { StyleSheet } from 'react-native';

export const inputLayout = StyleSheet.create({
    outerContainer: {
        height: 40,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 1
    },
    titleContainer: {
        flex: .3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    inputContainer: {
        flex: .7,
        justifyContent: 'center',
        paddingTop: 10,
        borderBottomWidth: .25, 
        borderColor: '#989596',
    },
    inputFormContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const textStyle = StyleSheet.create({
    inputTitle: {
        fontFamily: 'HelveticaNeue',
        color: '#433D3F',
        fontSize: 16,
        marginRight: 15
    },
    inputText: {
        fontFamily: 'HelveticaNeue',
        color: '#433D3F',
        fontSize: 16,
    },
})