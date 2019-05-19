import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Textarea} from 'native-base';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createRootStackCon } from 'react-navigation';
import AccountStack from './src/AccountStack';
import LoginStack from './src/LoginStack';
import RegistrationStack from './src/RegistrationStack';
import UpdateAccount from './src/UpdateAccount';
import ResultCountBMI from './src/ResultCountBMI';
import CountBMI from './src/CountBMI';
import BMIStandardStack from './src/BMIStandardStack';
import Logout from './src/Logout';

const RootStack = createDrawerNavigator({
  Home: CountBMI,
  Login: LoginStack,
  Registration: RegistrationStack,
  BMI:{
    screen: BMIStandardStack,
    navigationOptions:{
      title: 'BMI Standard',
      drawerLabel: 'BMI Standard'
    }
},
  Account: AccountStack,
  Logout: Logout
},
{
  initialRouteName: 'Home'
}
);

const RootStackCon = createAppContainer(RootStack);

export default RootStackCon;


// const AppNavigator = createStackNavigator({
//   Home: CountBMI,
//   Login: Login,
//   Registration: Registration,
//   Account: Account,
//   UpdateAccount: UpdateAccount,
//   BMIStandard: BMIStandard
// },
// {
//   initialRouteName: "Home"
// }
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;


//count bmi, bmi standard, login, registrasi, identity