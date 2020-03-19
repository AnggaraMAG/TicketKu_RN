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

export default class MyTicket extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View>
            <Text style={{fontWeight:'bold' ,fontSize:17}}>Ticket Pesanan</Text>
          </View>
          <Card style={{borderRadius: 10}}>
            <ListItem>
              <Body>
                <Text>Kode 09374629</Text>
              </Body>
              <Right>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  Approved
                </Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body
                style={{
                  flexDirection: 'row',
                  paddingRight: 12,
                  padding: 5,
                }}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
                <View>
                  <Text>Aekloba (ALK)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
          <Card style={{borderRadius: 10}}>
            <ListItem>
              <Body>
                <Text>Kode 5857728</Text>
              </Body>
              <Right>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  Approved
                </Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body
                style={{
                  flexDirection: 'row',
                  paddingRight: 12,
                  padding: 5,
                }}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
          <Card style={{borderRadius: 10}}>
            <ListItem>
              <Body>
                <Text>Kode 39384722</Text>
              </Body>
              <Right>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  Approved
                </Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="train" />
              </Left>
              <Body
                style={{
                  flexDirection: 'row',
                  paddingRight: 12,
                  padding: 5,
                }}>
                <View style={{flexGrow: 1}}>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
                <View>
                  <Text>Jakarta (GMR)</Text>
                  <Text style={{fontSize: 12}}> 30 Maret 2020, 20:00</Text>
                </View>
              </Body>
            </ListItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
