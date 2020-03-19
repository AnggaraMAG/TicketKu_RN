import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Train from './src/components/train.js';
import Myticket from './src/screens/Myticket';
import Akun from './src/screens/Akun';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Train"
            component={Train}
            options={{title: 'Kereta Api'}}
          />
          <Stack.Screen
            name="Myticket"
            component={Myticket}
            options={{title: 'Ticket Saya'}}
          />
          <Stack.Screen
            name="Akun"
            component={Akun}
            options={{title: 'Akun Saya'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
