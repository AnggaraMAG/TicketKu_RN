import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Body,
  Card,
  Right,
  Left,
  Icon,
} from 'native-base';

export default class Akun extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#f2f2f4'}}>
        <Content>
          <View style={{marginTop: 15, marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Akun Saya</Text>
          </View>
          <Card style={{borderRadius: 4}}>
            <ListItem>
              <Body style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Email : </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'grey',
                    marginLeft: 10,
                  }}>
                  AnggaraMAG@gmail.com
                </Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Saldo : </Text>
              </Body>
              <Body style={{marginLeft: -190}}>
                <Text
                  style={{color: '#1b5e20', fontSize: 17, fontWeight: 'bold'}}>
                  Rp.804.943.45
                </Text>
              </Body>
            </ListItem>
          </Card>
          <View style={{marginTop: 15, marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Reward Saya</Text>
          </View>
          <Card style={{borderRadius: 4, padding: 10}}>
            <ListItem icon style={{marginTop: 5}}>
              <View style={{marginRight: 20}}>
                <View>
                  <Left>
                    <Icon
                      style={{color: '#00e676'}}
                      type="FontAwesome"
                      active
                      name="ticket"
                    />
                  </Left>
                </View>
              </View>
              <Body>
                <View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Kupon Saya
                    </Text>
                  </View>
                  <View>
                    <Text>Lihat Kupon yang dapat anda gunakan sekarang.</Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            {/* line grey */}
            <View
              style={{
                backgroundColor: '#f2f2f4',
                height: 1,
                marginTop: 20,
              }}></View>
            <ListItem icon style={{marginTop: 15}}>
              <View style={{marginRight: 20}}>
                <View>
                  <Left>
                    <Icon
                      style={{color: '#ffd600'}}
                      active
                      type="FontAwesome5"
                      name="coins"
                    />
                  </Left>
                </View>
              </View>
              <Body>
                <View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Koin Saya
                    </Text>
                  </View>
                  <View>
                    <Text>Tukar Coin anda dengan hadiah menarik sekarang.</Text>
                  </View>
                </View>
              </Body>
            </ListItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
