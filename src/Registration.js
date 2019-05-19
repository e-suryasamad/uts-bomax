import React, {Component} from 'react';
import {Platform, StyleSheet, View, Alert} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title, Textarea} from 'native-base';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

export default class Registration extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      date: new Date().getDate(),
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      pekerjaan: '',
      alamat: '',
      username: '',
      password: ''
    }
  }

  submitRegistration = () => {
    // var body = {
    //   nama = this.state.nama,
    //   tempatLahir = this.state.tempatLahir,
    //   tanggalLahir = this.state.tanggalLahir,
    //   pekerjaan = this.state.pekerjaan,
    //   alamat = this.state.alamat,
    //   username = this.state.username,
    //   password = this.state.password
    // }
    //use
    // var nama = this.state.nama;
    // var tempatLahir = this.state.tempatLahir;
    // var tanggalLahir = this.state.tanggalLahir;
    // var pekerjaan = this.state.pekerjaan;
    // var alamat = this.state.alamat;
    // var username = this.state.username;
    // var password = this.state.password;
    
    // axios({
    //   method: 'POST',
    //   url: 'https://senapatiku.000webhostapp.com/bmi/user_registration.php',
    //   data: body,
    //   config: {
    //     headers: {'Accept': 'application/json' }
    //   }
    // })
    //use
    // axios.post('https://senapatiku.000webhostapp.com/bmi/user_registration.php',
    // {
    //   nama: nama,
    //   tempatLahir: tempatLahir,
    //   tanggalLahir: tanggalLahir,
    //   pekerjaan: pekerjaan,
    //   alamat: alamat,
    //   username: username,
    //   password: password
    // },
    // {
    //   headers: {'Accept': 'application/json' }
    // })
    // .then(function (response){
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // const { nama }  = this.state ;
    // const { tempatLahir }  = this.state ;
    // const { tanggalLahir } = this.state;
    // const { pekerjaan } = this.state;
    // const { alamat } = this.state;
    // const { username } = this.state;
    // const { password } = this.state;
 
    fetch('https://senapatiku.000webhostapp.com/bmi/user_registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: this.state.nama,
        tempatLahir: this.state.tempatLahir,
        tanggalLahir: this.state.tanggalLahir,
        pekerjaan: this.state.pekerjaan,
        alamat: this.state.alamat,
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((response) => response.json())
          .then((responseJson) => {
          if(responseJson === 'Registration Success')
            {
                //Then open Profile activity and send user email to profile activity.
                // this.props.navigation.navigate('Home');
              Alert.alert('Registration Success');
            }
            else{
              Alert.alert('Registration Failed');
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
              <Title>Registration</Title>
            </Body>
            <Right></Right>
          </Header>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input
              onChangeText={(nama_Input) => this.setState({nama: nama_Input})} 
              />
            </Item>
            <Item floatingLabel>
              <Label>Tempat Lahir</Label>
              <Input
              onChangeText={(tempatLahir_Input) => this.setState({tempatLahir: tempatLahir_Input})} 
              />
            </Item>
            <Item>
              <Label>Tanggal Lahir</Label>
            </Item>
              <DatePicker
                style={{width: 200}}
                date={this.state.tanggalLahir}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate = {new Date().getFullYear()-100}
                maxDate = {new Date().getFullYear()-15}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  } 
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(tanggalLahir_Input) => {this.setState({tanggalLahir: tanggalLahir_Input})}}
              />
            {/* </Item> */}
            <Item floatingLabel>
              <Label>Pekerjaan</Label>
              <Input
              onChangeText={(pekerjaan_Input) => this.setState({pekerjaan: pekerjaan_Input})}
              />
            </Item>
            <Textarea
                rowSpan={5}
                placeholder="Alamat"
                bordered
                value={this.state.alamat}
                onChangeText={(alamat_Input) => this.setState({alamat: alamat_Input})}
            />
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
              onChangeText={(username_Input) => this.setState({username: username_Input})} 
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
              secureTextEntry={true}
              onChangeText={(password_Input) => this.setState({password: password_Input})} 
              />
            </Item>
          </Form>
          <Button info
            // onPress={()=>this.props.navigation.navigate('Home')}
            onPress = {this.submitRegistration}
          >
          <Text>Submit</Text>
          </Button>
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
  },
  textArea:{
    borderColor: 'grey',
    borderWidth: 1
  }
});
