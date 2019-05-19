import React, {Component} from 'react';
import { Alert } from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Textarea, Title} from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class UpdateAccount extends Component<{}> {
  
  constructor (props){
    super (props);
    this.state = {
      idUser: '',
      username: '',
      password: '',
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      pekerjaan: '',
      alamat: '',
    }
  }

  componentDidMount(){
      this.setState({
      //ti = text input
      tiId: this.props.navigation.state.params.idUser,
      tiNama: this.props.navigation.state.params.nama,
      tiTmpL: this.props.navigation.state.params.tempatLahir,
      tiTglL: this.props.navigation.state.params.tanggalLahir,
      tiPkj: this.props.navigation.state.params.pekerjaan,
      tiAlt: this.props.navigation.state.params.alamat,
      tiUser: this.props.navigation.state.params.username,
      tiPsd: this.props.navigation.state.params.password,
    })
  }

  submitUpdate = () => {
    fetch('https://senapatiku.000webhostapp.com/bmi/user_update.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUser: this.state.tiId,
        nama: this.state.tiNama,
        tempatLahir: this.state.tiTmpL,
        tanggalLahir: this.state.tiTglL,
        pekerjaan: this.state.tiPkj,
        alamat: this.state.tiAlt,
        username: this.state.tiUser,
        password: this.state.tiPsd
      })
    })
    .then((response) => response.json())
          .then((responseJson) => {
          if(responseJson === 'sukses')
            {
              Alert.alert('Update Success');
            }
            else{
              Alert.alert('Update Failed');
            }
          // Alert.alert(responseJson);
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    // const { navigation } = this.props;
    // const idUser = navigation.getParam('idUser', 'NO-ID');
    return (
      <Container>
        {/* <Header /> */}
          <Content>
            <Header>
              <Left>
                <Button transparent
                onPress={() => this.props.navigation.goBack()}>
                  <Icon name='arrow-back'/>
                </Button>
              </Left>
              <Body>
                <Title>Update Account</Title>
              </Body>
              <Right></Right>
            </Header>
            <Form>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  value={ this.state.tiUser }
                  onChangeText={ textInputValue => this.setState({ tiUser: textInputValue })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  value={ this.state.tiPsd }
                  onChangeText={ textInputValue => this.setState({ tiPsd: textInputValue })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Nama</Label>
                <Input
                  value={ this.state.tiNama }
                  onChangeText={ textInputValue => this.setState({ tiNama: textInputValue })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Tempat Lahir</Label>
                <Input
                  value={ this.state.tiTmpL }
                  onChangeText={ textInputValue => this.setState({ tiTmpL: textInputValue })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Tanggal Lahir</Label>
                <Input
                  value={ this.state.tiTglL }
                  onChangeText={ textInputValue => this.setState({ tiTglL: textInputValue })}
                />
              </Item>
              {/* <DatePicker
                style={{width: 200}}
                date={this.state.tiTglL}
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
                }}
                onChangeText={ textInputValue => this.setState({ tiTglL: textInputValue })}
              /> */}
              <Item floatingLabel>
                <Label>Pekerjaan</Label>
                <Input
                  value={ this.state.tiPkj }
                  onChangeText={ textInputValue => this.setState({ tiPkj: textInputValue })}
                />
              </Item>
              <Textarea
                rowSpan={5}
                placeholder="Alamat"
                bordered
                value={ this.state.tiAlt }
                onChangeText={ textInputValue => this.setState({ tiAlt: textInputValue })}
              />
            </Form>
          <Button light
          onPress = {this.submitUpdate}
          >
            <Text>Simpan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
