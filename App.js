import * as React from 'react';
import { Button, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Felvitel from "./Felvitel";
import Marka_2 from "./Marka_2";
import Kozosscreen from "./Kozosscreen";
import Reszletek from "./Reszletek";
import Videjo from "./Videjo";
import Nevjegy from "./Nevjegy";
import Keresesszoveg from "./Keresesszoveg";
import Felvitel_2 from "./Felvitel_2"
import Marka from "./Marka";
import Kozos from './Kozos';
import Ujlap from "./Ujlap";
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

      <Drawer.Screen name="Autó feltöltés" component={Felvitel_2} />
      <Drawer.Screen name="Motor feltöltés" component={Felvitel} />

      <Drawer.Screen name="Autó márkák felsorolása" component={Marka} />
      <Drawer.Screen name="Motor márkák felsorolása" component={Marka_2} />

      <Drawer.Screen name="Autó adatok" component={Kozos} />
      <Drawer.Screen name="Motor adatok" component={Kozosscreen} />

      <Drawer.Screen name="Autók közti keresés" component={Keresesszoveg2} />
      <Drawer.Screen name="Motorok közti keresés" component={Keresesszoveg} />


      <Drawer.Screen name="Videó fölösleges" component={Videjo} />





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
        <Stack.Screen name="Ujlap" component={Reszletek} />
        <Stack.Screen name="Ujlap_Peti" component={Ujlap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
