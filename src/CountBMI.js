import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Left, Icon, Body, Right, Title} from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class CountBMI extends Component<{}> {

constructor (props){
  super(props);
  this.state = {
    tinggiBadan: 0,
    beratBadan: 0,
    hasilBMI: 0,
    username: '',
    date: new Date().getDate(),
    idUser: 1
  }
}

  hitungBMI(){
    // var tinggiBadan = this.state.tinggiBadan/100;
    // var tinggiBadanKuadrat: tinggiBadan*tinggiBadan;
    this.setState({
      // tinggiBadanKuadrat: tinggiBadan*tinggiBadan,
      hasilBMI: (this.state.beratBadan/((this.state.tinggiBadan/100)*(this.state.tinggiBadan/100)))
      // hasilBMI: this.state.beratBadan/this.state.tinggiBadanKuadrat
    })
  }

  saveBMIResult = () => {
    fetch('https://senapatiku.000webhostapp.com/bmi/bmi_save.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        beratBadan: this.state.beratBadan,
        tinggiBadan: this.state.tinggiBadan,
        hasilBMI: this.state.hasilBMI,
        date: this.state.date,
        idUser: this.state.idUser
      })
    })
    .then((response) => response.json())
          .then((responseJson) => {
          if(responseJson === 'sukses')
            {
              Alert.alert('Save BMI Success');
            }
            else{
              Alert.alert('Save BMI Failed');
            }
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    
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
          {/* {( this.props.navigation.state.params.username  === null) ? */}
          { username  ? 
            (
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                paddingTop: 30,
                paddingBottom: 30
              }}>
                <View style={styles.buttonSaveWrap}>
                  <Button light
                    onPress = {() =>
                      this.hitungBMI()
                    }
                    style = {{alignSelf: "center", margin: 40}}
                  >
                  <Text style={styles.buttonText}>Count</Text>
                  </Button>
                </View>
                <View style={styles.buttonBackWrap}>
                  <Button light
                  onPress = {this.saveBMIResult}>
                    <Text style={styles.buttonText}>Save</Text>
                  </Button>
                </View>
              </View>
            ) : (
            <Button light
              onPress = {() =>
                this.hitungBMI()
              }
              style = {{alignSelf: "center", margin: 40}}
            >
            <Text>Count</Text>
            </Button>
            ) }
          {/* <Text>{username}</Text> */}
          {/* buka bekukan */}
          {/* <Button light
            onPress = {() => 
                this.hitungBMI()
                // navigate('ResultCountBMIScreen', {
                //   JSON_ListView_Clicked_Item: this.state.hasilBMI
                // })
              
              // (this.hitungBMI(),
              // this.props.navigation.navigate('ResultCountBMIScreen'))
            }
            style={{alignSelf: "center", margin: 40}}
          >
            <Text>Hitung</Text>
          </Button> */}
          {/* tutup bekukan */}
          {/* :
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingTop: 30,
            paddingBottom: 30
          }}>
            <View style={styles.buttonSaveWrap}>
              <Button primary>
                <Text style={styles.buttonText}>Simpan Barang</Text>
              </Button>
            </View>
            <View style={styles.buttonBackWrap}>
              <Button light>
                <Text style={styles.buttonText}>Kembali</Text>
              </Button>
            </View>
          </View>
          } */}
          
          <Text
          style={{marginLeft: 50, marginBottom: 20}}
          >BMI Result = {this.state.hasilBMI.toFixed(2)}
          </Text>
          <Text
          style={{marginLeft: 50}}
          >BMI Category = 
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonSaveWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    // alignItems:
    // paddingLeft: 40,
  },
  buttonBackWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    // alignItems:
    // paddingLeft: 40,
  },
  buttonText:{
    margin: 10
  },
  });