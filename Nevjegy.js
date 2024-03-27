import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); 

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  return (
    <ImageBackground source={require('./Images/5.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Teremi Nikoletta</Text>
          <View style={styles.separator}></View>
          <Text style={styles.name}>Száraz Péter</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Szakdolgozatról</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Japán autók és motorok</Text>
              <Text style={styles.modalText}>A szakdolgozatom fókuszában a japán autók és motorok online bemutatása áll. Az alkalmazás célja, hogy egy olyan online felületet hozzon létre, ahol a felhasználók kényelmesen felfedezhetik és megismerhetik a különböző márkákat és modelleket. Az inspiráció alapját a Használtautók weboldala adta, ahol minden adat könnyen elérhető és részletesen kereshető. Ebben az alkalmazásban azonban nem az eladásokra helyezzük a hangsúlyt, hanem inkább a járművek részletes bemutatására koncentrálunk.</Text>
              <Button
                title="Bezárás"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center', // Középre igazítás
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Középre igazítás
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue', // Változtatható szín
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
