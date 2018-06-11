import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import RadialMenu from 'react-native-radial-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { navContainer, iconStyle, navButtons } from '../../styles/components/misc/navStyle';

const pages = [
    {
        name: 'ios-timer',
        route: 'Data'
    },
    {
        name: 'ios-analytics',
        route: 'Dashboard'
    },
    {
        name: 'ios-bulb',
        route: 'Goals'
    },
    {
        name: 'ios-settings',
        route: 'Settings'
    }
]

class NavMenu extends Component {

    render() {
        return(
            <View style={navContainer.container} shadowColor='#000' shadowOpacity={.25}>
                <RadialMenu spreadAngle={180} menuRadius={85}>
                    <View style={navButtons.mainButton}>
                        <Icon name='ios-menu' size={iconStyle.size} color={iconStyle.mainColor}/>
                    </View>
                    {pages.map((item, i) => (
                        <View style={navButtons.subButton} key={i} onSelect={() => this.props.navigation.navigate(item.route)}>
                            <Icon 
                                name={item.name} 
                                size={iconStyle.size} 
                                color={iconStyle.subColor} 
                                key={i}
                            />
                        </View>
                    ))}
                </RadialMenu>
            </View>
        )
    }
}

export default withNavigation(NavMenu);