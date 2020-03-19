import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Content,
  Card,
  Item,
  Icon,
  Input,
  DatePicker,
  Button,
} from 'native-base';

export default class train extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={{borderRadius: 10, padding: 15}}>
            <Item>
              <Icon active name="train" />
              <Input placeholder="Stasiun Awal" />
            </Item>
            <Item>
              <Icon active name="train" />
              <Input placeholder="Stasiun Akhir" />
              <Icon active name="swap" />
            </Item>
            <Item>
              <Icon active name="calendar" />
              <DatePicker
                defaultDate={new Date(2020, 4, 4)}
                minimumDate={new Date(2020, 1, 1)}
                maximumDate={new Date(2020, 12, 31)}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Tanggal Keberangkatan"
                onDateChange={() => {}}
                disabled={false}
              />
            </Item>
            <Item>
              <Icon active name="person" />
              <Input number placeholder="Penumpang" />
            </Item>
            <Button full rounded style={{marginTop: 20}}>
              <Text style={{color: 'white'}}>Cari Kereta</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
