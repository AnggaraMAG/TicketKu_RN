import React from 'react';
import {
  Container,
  Button,
  Text,
  Content,
  Footer,
  Icon,
  FooterTab,
  Header,
  Title,
  Left,
  View,
  Card,
} from 'native-base';
import {Dimensions, Image, ScrollView, TouchableHighlight} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Myticket from '../screens/Myticket';
import Akun from '../screens/Akun';
const {height, width} = Dimensions.get('window');

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      myticket: false,
      akun: false,
    };
  }
  render() {
    const {home, myticket, akun} = this.state;
    return (
      <Container>
        <Header style={{backgroundColor: '#073E65'}}>
          <Left style={{marginLeft: 20, flex: 1, flexDirection: 'row'}}>
            <Title style={{fontWeight: 'bold', color: '#FBCC00'}}>Ticket</Title>
            <Title style={{fontWeight: 'bold', color: '#1AA1E3'}}> Ku</Title>
          </Left>
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          {home ? (
            <View>
              <View style={{height: height / 2.5}}>
                <Svg>
                  <Circle cx={width / 2} cy="-700" r="900" fill="#073E65" />

                  <Image
                    style={{width: width, height: 170}}
                    source={{
                      uri:
                        'https://tvlk.imgix.net/imageResource/2020/03/09/1583740363103-9785927ab893e827208903ae872c01a5.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
                    }}
                  />
                </Svg>
              </View>

              <View
                style={{
                  marginBottom: 15,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Lelah ? Waktunya Liburan !!
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Train')}>
                  <Card
                    style={{
                      alignItems: 'center',
                      borderRadius: 10,
                      padding: 5,
                      height: 60,
                      width: 90,
                    }}>
                    <Icon
                      name="train"
                      style={{color: '#234665', fontSize: 30}}
                    />
                    <Text>Kereta Api</Text>
                  </Card>
                </TouchableHighlight>
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 5,
                    height: 60,
                    width: 90,
                  }}>
                  <Icon
                    name="airplane"
                    style={{color: '#073E', fontSize: 30}}
                  />
                  <Text>Pesawat</Text>
                </Card>
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 5,
                    height: 60,
                    width: 90,
                  }}>
                  <Icon name="bus" style={{color: 'black', fontSize: 30}} />
                  <Text>Bus</Text>
                </Card>
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 5,
                    height: 60,
                    width: 90,
                  }}>
                  <Icon name="bed" style={{color: 'pink', fontSize: 30}} />
                  <Text>Hotel</Text>
                </Card>
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 5,
                    height: 60,
                    width: 90,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="ticket"
                    style={{color: 'red', fontSize: 30}}
                  />
                  <Text>Event</Text>
                </Card>
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 5,
                    height: 60,
                    width: 90,
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="ship"
                    style={{color: 'blue', fontSize: 30}}
                  />
                  <Text>Kapal</Text>
                </Card>
              </View>
              {/* line grey */}
              <View
                style={{
                  backgroundColor: '#f2f2f4',
                  height: 1,
                  marginTop: 20,
                }}></View>
              {/* section wisata */}
              <View style={{marginTop: 15, marginLeft: 10}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Destinasi Wisata Terbaik di Indonesia !!
                  </Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={{flexDirection: 'row', marginTop: 16}}>
                  <View style={{marginRight: 10}}>
                    <View style={{width: 250, height: 150}}>
                      <Image
                        style={{
                          height: undefined,
                          width: undefined,
                          resizeMode: 'cover',
                          flex: 1,
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            'https://www.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Danau-Toba-Sumatera-Utara-Lake-Toba-1024x768.jpg',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Sumatera Utara
                      </Text>
                    </View>
                  </View>
                  <View style={{marginRight: 10}}>
                    <View style={{width: 250, height: 150}}>
                      <Image
                        style={{
                          height: undefined,
                          width: undefined,
                          resizeMode: 'cover',
                          flex: 1,
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            'https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2019/05/26/1558910172780-e427ab074dc6bfeb9a66087596aff816.jpeg',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Sumatera Barat
                      </Text>
                    </View>
                  </View>
                  <View style={{marginRight: 10}}>
                    <View style={{width: 250, height: 150}}>
                      <Image
                        style={{
                          height: undefined,
                          width: undefined,
                          resizeMode: 'cover',
                          flex: 1,
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            'https://cdn02.indozone.id/re/content/2019/11/08/6gsPpo/t_5dc524d4c01cb.jpg?w=700&q=85',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Pulau Seribu
                      </Text>
                    </View>
                  </View>
                  <View style={{marginRight: 10}}>
                    <View style={{width: 250, height: 150}}>
                      <Image
                        style={{
                          height: undefined,
                          width: undefined,
                          resizeMode: 'cover',
                          flex: 1,
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            'https://cdn2.tstatic.net/jogja/foto/bank/images/wisata-jogja-hits-skip-sejenak-dari-rutinitas.jpg',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Jogja
                      </Text>
                    </View>
                  </View>
                  <View style={{marginRight: 10}}>
                    <View style={{width: 250, height: 150}}>
                      <Image
                        style={{
                          height: undefined,
                          width: undefined,
                          resizeMode: 'cover',
                          flex: 1,
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            'https://cdns.klimg.com/dream.co.id/resized/750x500/news/2019/09/04/116540/6-destinasi-wisata-surabaya-kota-tersibuk-kedua-di-indonesia-190904q_3x2.jpg',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Surabaya
                      </Text>
                    </View>
                  </View>
                </ScrollView>
                {/* line grey */}
                <View
                  style={{
                    backgroundColor: '#f2f2f4',
                    height: 1,
                    marginTop: 20,
                  }}></View>
              </View>
            </View>
          ) : myticket ? (
            <Myticket navigation={this.props.navigation} />
          ) : akun ? (
            <Akun navigation={this.props.navigation} />
          ) : null}
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#073E65'}}>
            <Button
              vertical
              style={{backgroundColor: '#073E65'}}
              onPress={() =>
                this.setState({
                  myticket: false,
                  home: true,
                  akun: false,
                })
              }>
              <Icon name="home" />
              <Text>Awal</Text>
            </Button>
            <Button
              vertical
              style={{backgroundColor: '#073E65'}}
              onPress={() =>
                this.setState({
                  myticket: true,
                  home: false,
                  akun: false,
                })
              }>
              <Icon type="FontAwesome" name="ticket" />
              <Text>Pesanan</Text>
            </Button>
            <Button
              vertical
              style={{backgroundColor: '#073E65'}}
              onPress={() =>
                this.setState({
                  myticket: false,
                  home: false,
                  akun: true,
                })
              }>
              <Icon name="person" />
              <Text>Akun Saya</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
