import * as React from 'react';
import { Button, View, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Felvitel_2 from "./Felvitel_2"
import Marka from "./Marka";
import Kozos from './Kozos';
import Ujlap from "./Ujlap";
import Videonk from "./Videonk";
import Nevunk from "./Nevunk";
import Keresesszoveg2 from "./Keresesszoveg2";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./Images/ff.jpg')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    </ImageBackground>
  );
}

function Root({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Kezdőképernyő" screenOptions={{
      drawerStyle: {
        backgroundColor: '#502c49',
        width: 240,
      },
      drawerLabelStyle: {
        color: 'white',
      },
    }}
    >
      <Drawer.Screen name="Névjegy" component={Nevunk} />
      <Drawer.Screen name="Kezdőképernyő" component={HomeScreen} />
      <Drawer.Screen name="Autó feltöltős" component={Felvitel_2} />
      <Drawer.Screen name="Márka" component={Marka} />
      <Drawer.Screen name="adatok" component={Kozos} />
      <Drawer.Screen name="Videjo" component={Videonk} />
      <Drawer.Screen name="keresés" component={Keresesszoveg2} />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Ujlap" component={Ujlap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}