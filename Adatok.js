import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

// Márka nevek objektuma a megfelelő számokhoz
const markak = {
  1: 'Kawasaki',
  2: 'Honda',
  3: 'Suzuki',
  4: 'Yamaha',
};

const Adatok = ({ adatok, onClose }) => {
  // Márka név kikeresése az objektumból a megfelelő szám alapján
  const markaNev = markak[adatok.motor_marka];

  return (
    <Modal transparent={true} visible={true}>
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.adatokContainer}>
            <Text style={styles.text}>Márka: {markaNev}</Text>
            <Text style={styles.text}>Modell: {adatok.motor_modell}</Text>
            <Text style={styles.text}>Évjárat: {adatok.motor_evjarat}</Text>
            <Text style={styles.text}>Hengerűrtartalom: {adatok.motor_hengerurt}</Text>
            <Text style={styles.text}>Üzemanyag: {adatok.motor_uzema}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  adatokContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Adatok;
