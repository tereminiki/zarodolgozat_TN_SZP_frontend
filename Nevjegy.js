import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./Images/1.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.name}>Teremi Nikoletta</Text>
        <View style={styles.separator}></View>
        <Text style={styles.name}>Száraz Péter</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginVertical: 5,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '80%', // Csökkentjük a szélességet 80%-ra
    alignSelf: 'center', // Középre igazítás
  },
  
});
