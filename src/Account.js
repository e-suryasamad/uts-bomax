import React, {Component} from 'react';
import {Platform, StyleSheet, View, Alert} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title} from 'native-base';
import axios from 'axios';
export default class Account extends Component<{}> {
  
  constructor (props){
    super (props);
    this.state = {
      idUser: 2,
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      pekerjaan: '',
      alamat: '',
      username: '',
      password: '',
      data: [],
    };
  }

  componentDidMount() {
    // showDetailAccount
    var idUser = this.state.idUser;
    // const { idUser } = this.state;
    
    // fetch('https://senapatiku.000webhostapp.com/bmi/user_account.php', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     idUser: idUser
    //   })
    // })
    axios.get('https://senapatiku.000webhostapp.com/bmi/user_account.php?idUser='+this.state.idUser)
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data
            });
            idUser = response.data[0].idUser;
            nama = response.data[0].namaUser;
            tempatLahir = response.data[0].tempatLahir;
            tanggalLahir = response.data[0].tanggalLahir;
            pekerjaan = response.data[0].pekerjaan;
            alamat = response.data[0].alamat;
            username = response.data[0].username;
            password = response.data[0].password;
            this.setState({
              idUser: idUser,
              nama: nama,
              tempatLahir: tempatLahir,
              tanggalLahir: tanggalLahir,
              pekerjaan: pekerjaan,
              alamat: alamat,
              username: username,
              password: password
            });
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
              <Title>Account</Title>
            </Body>
            <Right></Right>
          </Header>
        <Text>
          Nama = {this.state.nama}
        </Text>
        <Text>
          Tempat lahir = {this.state.tempatLahir}
        </Text>
        <Text>
          Tanggal lahir = {this.state.tanggalLahir}
        </Text>
        <Text>
          Pekerjaan = {this.state.pekerjaan}
        </Text>
        <Text>
          Alamat = {this.state.alamat}
        </Text>
        <Text>
          Username = {this.state.username}
        </Text>
        <Text>
          Password = {this.state.password}
        </Text>
        {/* <Button
        // onPress={()=>this.props.navigation.navigate('ResultCountBMI')}
        onPress = { () => this.showDetailAccount() }
        >
          <Text>BMI List</Text>
        </Button> */}
        <Button
        onPress={()=>this.props.navigation.navigate('UpdateAccount', {
          idUser: this.state.idUser,
          nama: this.state.nama,
          tempatLahir: this.state.tempatLahir,
          tanggalLahir: this.state.tanggalLahir,
          pekerjaan: this.state.pekerjaan,
          alamat: this.state.alamat,
          username: this.state.username,
          password: this.state.password
        })}>
          <Text>Update</Text>
        </Button>
        {/* {this.showDetailAccount() ? Alert.alert(this.state.nama) : Alert.alert('gagal')} */}
        {/* <Button
        onPress={()=>this.props.navigation.goBack()}
        title='Kembali'
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
