import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Login';
import CountBMI from './CountBMI';
import Registration from './Registration';
import CountBMI_Login from './CountBMI_Login';

const AppNavigator = createStackNavigator({
  Login: Login,
  CountBMI: CountBMI,
  HomeLoggedIn: CountBMI_Login,
  // Registration: Registration
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{
  initialRouteName: "Login"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;