import * as React from 'react';
import { Button, View, ImageBackground, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MotorFelvitel from "./MotorFelvitel";
import AutoFelvitel from "./AutoFelvitel";

import MuszakiAuto from "./MuszakiAuto";
import MuszakiMotor from "./MuszakiMotor"

import Nevjegy from "./Nevjegy";

import KeresesMotor from "./KeresesMotor";
import KeresesAuto from "./KeresesAuto";

import Marka_Autok from './Marka_Autok';
import Marka_Motor from "./Marka_Motor";






function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./Images/3.jpg')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      blurRadius={3}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
        <Text style={styles.text}>Üdvözöllek a japán autók és motorok világában!</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Névjegy')}>
          <Text style={styles.button}>Tovább a Névjegyhez</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 255, 0.75)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5, 
    marginBottom: 40,
    
  },
  button: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    textShadowColor: 'rgba(255, 0, 0, 0.75)',


    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
    marginTop: 10,
  }
});



function Vissza({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Kezdőlap" screenOptions={{
      drawerStyle: {
        backgroundColor: '#502c49',
        width: 240,
      },
      drawerLabelStyle: {
        color: 'white', 
      },
    }}
    >
      <Drawer.Screen name="Névjegy" component={Nevjegy} />
      <Drawer.Screen name="Kezdőlap" component={HomeScreen} />

      <Drawer.Screen name="Autó feltöltés" component={AutoFelvitel} />
      <Drawer.Screen name="Motor feltöltés" component={MotorFelvitel} />



      <Drawer.Screen name="Autó adatok" component={Marka_Autok} />
      <Drawer.Screen name="Motor adatok" component={Marka_Motor} />

      <Drawer.Screen name="Autók közti keresés" component={KeresesAuto} />
      <Drawer.Screen name="Motorok közti keresés" component={KeresesMotor} />







    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vissza" component={Vissza} options={{ headerShown: false }} />
        <Stack.Screen name="Műszaki adatok autók" component={MuszakiAuto} />
        <Stack.Screen name="Műszaki adatok motorok" component={MuszakiMotor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
