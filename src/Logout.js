import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title} from 'native-base';

export default class Login extends Component<{}> {
  render() {
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
              <Title>Logout</Title>
            </Body>
            <Right></Right>
          </Header>
          {/* <TextInput
          placeholder='username
          '/>
          <TextInput
          placeholder='password'
          /> */}
          <Button info
          onPress={()=>this.props.navigation.navigate('Home')}>
            <Text>Logout</Text>
          </Button>
          {/* <Button transparent
          onPress={()=>this.props.navigation.navigate('Registration')}>
            <Text>registration?</Text>
          </Button> */}
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
