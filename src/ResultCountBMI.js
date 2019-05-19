import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title} from 'native-base';
// import {FormLabel, FormInput} from 'react-native-elements';

// type Props = {};
export default class ResultCountBMI extends Component<{}> {
  
  // constructor (props){
  //   super(props);
  //   this.state = {
  //     tinggiBadan: 0,
  //     beratBadan: 0,
  //     hasilBMI: 99
  //   }
  // }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button transparent
              onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back'/>
              </Button>
            </Left>
            <Body>
              <Title>Result Count BMI</Title>
            </Body>
            <Right></Right>
          </Header>
        {/* <Text>
          Tinggi Badan: {this.state.tinggiBadan}
        </Text>
        <Text>
          Berat Badan: {this.state.beratBadan}
        </Text> */}
        <Text>
          FlatList will contain here
          {/* Indeks Massa Tubuh Anda: {this.props.navigation.state.params.JSON_ListView_Clicked_Item} */}
        </Text>
        {/* <Button
        title='Simpan'
        />
        <Button
        title='to somewhere'
        onPress={()=>this.props.navigation.navigate('UpdateIdentityScreen')}
        /> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
