import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Button,
  Content,
  Container,
  Form,
  Item,
  Label,
  Input,
  Right,
} from 'native-base';
import Slogin from '../images/traveling.png';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 90,
            }}>
            <Text style={{fontWeight: 'bold', color: '#FBCC00', fontSize: 40}}>
              Ticket
            </Text>
            <Text style={{fontWeight: 'bold', color: '#1AA1E3', fontSize: 40}}>
              Ku
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Form>
              <Item>
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Input placeholder="Password" />
              </Item>
              <Right style={{flexDirection: 'row', marginTop: 10}}>
                <Text>Belum Punya Akun ? </Text>
                <Text
                  onPress={() => this.props.navigation.navigate('Register')}
                  style={{color: '#1AA1E3'}}>
                  Daftar
                </Text>
              </Right>
              <View style={{marginTop: 10}}>
                <Button
                  onPress={() => this.props.navigation.navigate('Home')}
                  full
                  rounded
                  style={{backgroundColor: '#1AA1E3'}}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    Login
                  </Text>
                </Button>
              </View>
            </Form>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#073E65', fontWeight: 'bold'}}>
              ©TicketKu
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
