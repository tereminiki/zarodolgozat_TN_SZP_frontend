import * as React from 'react';
import { Button, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MotorFelvitel from "./MotorFelvitel";
import Marka_Motor from "./Marka_Motor";
import MűszakiMotor from "./MűszakiMotor";
import Nevjegy from "./Nevjegy";
import KeresesMotor from "./KeresesMotor";
import AutoFelvitel from "./AutoFelvitel"
import Marka_Autok from './Marka_Autok';
import MűszakiAuto from "./MűszakiAuto";
import KeresesAuto from "./KeresesAuto";

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
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Műszaki adatok autók" component={MűszakiAuto} />
        <Stack.Screen name="Műszaki adatok motorok" component={MűszakiMotor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
