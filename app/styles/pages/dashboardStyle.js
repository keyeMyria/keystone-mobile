import { StyleSheet, Dimensions } from 'react-native';

const {deviceHeight, deviceWidth} = Dimensions.get('window');

export const containers = StyleSheet.create({
    summaryContainer: {
        flex: .75,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderBottomWidth: .25,
        borderColor: '#433D3F',
    },
    goalContainer: {
        flex:.25,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderTopWidth:.1,
        borderColor: '#433D3F',
    }
})