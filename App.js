import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import store from 'react-native-simple-store';
import Intro from './app/pages/intro';
import Dashboard from './app/pages/dashboard';
import Data from './app/pages/data';
import Goals from './app/pages/goals';
import Settings from './app/pages/settings';

export default SwitchNavigator = createSwitchNavigator({
  Intro: Intro,
  Dashboard: Dashboard,
  Data: Data,
  Goals: Goals,
  Settings: Settings,
  },
  {
    initialRouteName: 'Intro'
  }
);
