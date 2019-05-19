import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Account from './Account';
import UpdateAccount from './UpdateAccount';
import ResultCountBMI from './ResultCountBMI'

const AppNavigator = createStackNavigator({
  Account: Account,
  UpdateAccount: UpdateAccount,
  ResultCountBMI: ResultCountBMI
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{
  initialRouteName: "Account"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;