import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title} from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class CountBMI extends Component<{}> {

constructor (props){
  super(props);
  this.state = {
    tinggiBadan: 0,
    beratBadan: 0,
    hasilBMI: 0,
  }
}

// state = {
//   isLoggedIn: false
// }

  hitungBMI(){
    // var tinggiBadan = this.state.tinggiBadan/100;
    // var tinggiBadanKuadrat: tinggiBadan*tinggiBadan;
    this.setState({
      // tinggiBadanKuadrat: tinggiBadan*tinggiBadan,
      hasilBMI: (this.state.beratBadan/((this.state.tinggiBadan/100)*(this.state.tinggiBadan/100)))
      // hasilBMI: this.state.beratBadan/this.state.tinggiBadanKuadrat
    })
  }

  render() {
    
    // if (this.state.isLoggedIn)
    //   return <Secured 
    //         onLogoutPress={() => this.setState({isLoggedIn: false})}
    //       />;
    //   else 
    //     return <Login 
    //         onLoginPress={() => this.setState({isLoggedIn: true})}
    //       />;

    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button transparent
              onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right></Right>
          </Header>
          <Form>
            <Item floatingLabel>
              <Label>Berat Badan (Kg)</Label>
              <Input
                onChangeText={(beratBadan) => this.setState({beratBadan})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Tinggi Badan (cm)</Label>
              <Input
                onChangeText={(tinggiBadan) => this.setState({tinggiBadan})}
              />
            </Item>
          </Form>
          <Button light
            onPress = {() => 
                this.hitungBMI()
                // navigate('ResultCountBMIScreen', {
                //   JSON_ListView_Clicked_Item: this.state.hasilBMI
                // })
              
              // (this.hitungBMI(),
              // this.props.navigation.navigate('ResultCountBMIScreen'))
            }
          >
            <Text>Hitung</Text>
          </Button>
          <Button light>
            <Text>Save</Text>
          </Button>
          <Text>BMI Result = {this.state.hasilBMI.toFixed(2)}</Text>
          <Text>BMI Category = </Text>
        </Content>
      </Container>
    );
  }
}