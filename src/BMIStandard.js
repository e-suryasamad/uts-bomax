import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Right, Title, List, ListItem} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

// type Props = {};
// GetSectionListItem = (item) => {
//   Alert.alert (item)
// }

// class FlatListDemo extends Component{
// constructor(props){
//   super(props);

//   this.state = {
//     loading: false,
//     data: [],
//     page: 1,
//     seed: 1,
//     error: null,
//      refreshing: false,
//   };
// }

// componentDidMount(){
//   this.makeRemoteRequest();
// }

// makeRemoteRequest = () => {
//   const { page, seed } = this.state;
//   const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
//   this.setState({ loading: true });

//   fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     this.setState({
//       data: page === 1 ? res.results : [...this.state.data, ...res.results],
//       error: res.error || null,
//       loading: false,
//       refreshing: false
//     });
//   })
//   .catch(error => {
//     this.setState({ error, loading: false });
//   });
// };
//   return (
//     <View>
//        <Text>Coming S</Text>
//     </View>
//   );
// }

export default class BMIStandard extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: [],
      category: '',
      from: 0,
      to: 0,
      // page: 1,
      // seed: 1,
      error: null,
      refreshing: false,
      };
    }
    

    // makeRemoteRequest = () => {
    //   // const { page, seed } = this.state;
    //   const url = 'http://senapatiku.000webhostapp.com/bmi/std_bmi.php';
    //   // this.setState({ loading: true });

    //   fetch(url)
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState({
    //       data: response.results,
    //       // error: res.error || null,
    //       // loading: false,
    //       // refreshing: false
    //     });
    //   })
    //   // .catch(error => {
    //   //   this.setState({ error, loading: false });
    //   // });
    // }

    componentDidMount(){
      axios.get('http://senapatiku.000webhostapp.com/bmi/std_bmi.php')
        .then((response) => {
          console.log(response.data);
          this.setState({
            data: response.data,
            // category : parse(response.data.std_category),
            // from : parseFloat(response.data.std_from),
            // to : parseFloat(response.data.std_to)
          });
          category = response.data.std_category;
          from = parseFloat(response.data.std_from);
          to = parseFloat(response.data.std_to);
          this.setState({
            category: category,
            from: from,
            to: to
          });
        });
    }

    FlatListItemSeparator = () => {
      return (
        <View
          style = {{
            height: 2,
            width: "100%",
            backgroundColor: "#607D8B",
            // marginTop: 5,
            // marginBottom: 5
          }}
        />
      );
    }

    // standardBMI(){
    //   axios.get('http://senapatiku.000webhostapp.com/bmi/std_bmi.php')
    //     .then((response) => {
    //       console.log(response.data);
    //       this.setState({
    //         data: response.data,
    //         // category : parse(response.data.std_category),
    //         // from : parseFloat(response.data.std_from),
    //         // to : parseFloat(response.data.std_to)
    //       });
    //       category = response.data.std_category;
    //       from = parseFloat(response.data.std_from);
    //       to = parseFloat(response.data.std_to);
    //       this.setState({
    //         category: category,
    //         from: from,
    //         to: to
    //       });
    //     });
    // }

  render() {
    // let dataStandar = [
    //   {tipe: 'Very severely underweight',  from:0, to:15  },
    //   {tipe: 'Very severely underweight',  from:0, to:1  },
    //   {tipe: 'Very severely underweight',  from:0, to:15  },
    //   {tipe: 'Very severely underweight',  from:0, to:1  },
    // ]

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
              <Title>BMI Standard</Title>
            </Body>
            <Right></Right>
          </Header>
          {/* flatlist */}
          {/* <FlatList
            data={dataStandar}
            renderItem={({item})=>
            <TouchableOpacity style={{flexDirection: 'row'}}
            onPress={() => {
              this.props.navigation.navigate('BMIStandardDetail', {
                tipe: item.tipe,
                from: item.from,
                to: item.to,
              });
            }}
            >
              <Text>{item.tipe}</Text>
              <Text style={{marginLeft: 10}}>{item.from}</Text>
              <Text style={{marginLeft: 10}}>{item.to}</Text>
            </TouchableOpacity>
          }
          /> */}
          <ScrollView>
          <FlatList
            data = {this.state.data}
            ItemSeparatorComponent = { this.FlatListItemSeparator }
            renderItem = {({ item }) =>
            (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('BMIStandardDetail', {
                    category: item.std_category,
                    from: item.std_from,
                    to: item.std_to,
                  });
                }}
              >
                <Text>{item.std_category}</Text>
                {/* <Text style={{marginLeft: 10}}>{item.std_from}</Text>
                <Text style={{marginLeft: 10}}>{item.std_to}</Text> */}
              </TouchableOpacity>
            )
          }
          keyExtractor = {item => item.id_std_bmi}
          />
          </ScrollView>
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
  separatorTouchable: {
    flexDirection: 'row',
    height: 1,
    width: "100%",
    // backgroundColor: "#607D8B",
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#607D8B",
  }
});
