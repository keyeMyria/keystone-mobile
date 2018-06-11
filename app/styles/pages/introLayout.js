import { StyleSheet } from 'react-native';

export const introLayout = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconContainer: {
        borderWidth: .5,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#EE596C',
        borderRadius: 40, 
        paddingTop: 1,
        paddingLeft: 1,
        marginLeft: 15,
        marginRight: 15,
    },
    titleTextContainer: {
        flex: 1,
        borderBottomWidth: .25, 
        borderColor: '#989596',
    },
    innerTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        marginTop: 15
    },
    tutorialContainer: {
        flex: .8,
        alignItems: 'center',
    },
    dotContainer: {
        flex: .05,
    },
    activeDot: {
        backgroundColor: '#4EFFEF', 
        width: 8, 
        height: 8,
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    }
})

export const loginLayout = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    backIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        paddingTop: 1,
        paddingLeft: 1,
        marginLeft: 15,
        marginRight: 15,
    },
    titleTextContainer: {
        flex: 1,
        borderBottomWidth: .25, 
        borderColor: '#989596',
    },
    innerTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        marginTop: 15
    },
    loginContent: {
        flex: .8,
        alignItems: 'center',
    },
    formContainer: {
        flex: .5,
        alignItems: 'center'
    },
    socialContainer: {
        flex: .5,
        justifyContent: 'space-evenly'
    },
    orContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export const textStyle = StyleSheet.create({
    welcomeText: {
        fontFamily: 'Helvetica',
        color: '#433D3F',
        fontSize: 24,
        marginLeft: 15, 
        letterSpacing: 2,
    },
    pageHeaders: {
        fontFamily: 'Helvetica',
        color: '#433D3F',
        fontSize: 24,
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
        fontSize: 16,
        color: '#000000',
    },
    highlightText: {
        fontSize: 10,
        color: '#2196F3',
        marginTop:10
    }
})

export const iconStyle = {
    size: 20,
    mainColor: '#FFFFFF',
    subColor: '#FFFFFF' 
}