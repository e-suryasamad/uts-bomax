import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import Login from './Login';
// import CountBMI from './CountBMI';
import Registration from './Registration';

const AppNavigator = createStackNavigator({
//   Login: Login,
//   CountBMI: CountBMI,
  Registration: Registration
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{
  initialRouteName: "Registration"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;