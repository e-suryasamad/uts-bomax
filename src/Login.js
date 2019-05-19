import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Alert} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title} from 'native-base';

export default class Login extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
  }
  
  UserLoginFunction = () => {
    const { username }  = this.state ;
    const { password }  = this.state ;
 
    fetch('https://senapatiku.000webhostapp.com/bmi/user_login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((response) => response.json())
          .then((responseJson) => {
            // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
            {
                //Then open Profile activity and send user email to profile activity.
                this.props.navigation.navigate('Home', {
                  username: this.state.username
                });
            }
            else{
              Alert.alert(responseJson);
            }
          }).catch((error) => {
            console.error(error);
          });
      }

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
              <Title>Login</Title>
            </Body>
            <Right></Right>
          </Header>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
              onChangeText={username => this.setState({username})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
              />
            </Item>
          </Form>
          <Button info
          style={{alignSelf: "center", marginTop: 20}}
          onPress = {this.UserLoginFunction}
          >
            <Text>Login</Text>
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
