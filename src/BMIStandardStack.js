import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import Login from './Login';
// import CountBMI from './CountBMI';
import BMIStandard from './BMIStandard';
import BMIStandardDetail from './BMIStandardDetail';

const AppNavigator = createStackNavigator({
  BMIStandard:{
      screen: BMIStandard,
      title: 'BMI Standard'
  },BMIStandardDetail:{
    title: 'BMI Detail',
    screen: BMIStandardDetail
  }
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{
  initialRouteName: "BMIStandard"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;