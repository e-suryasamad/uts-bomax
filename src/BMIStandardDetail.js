import React, {Component} from 'react';
import {FlatList, StyleSheet, View, SectionList, Alert } from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title, List} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BMIStandard extends Component<{}> {
  
  render() {
    const { navigation } = this.props;
    const category = navigation.getParam('category', 'Category of BMI Standard');
    const from = navigation.getParam('from', 'Start range of BMI Standard');
    const to = navigation.getParam('to', 'End range of BMI Standard');

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
              <Title>BMI Standard Detail</Title>
            </Body>
            <Right></Right>
          </Header>
            <Text>Category : {category}</Text>
            <Text>Start from : {from}</Text>
            <Text>Until : {to}</Text>
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
