import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Ipcim from './Ipcim';
import Motor_adatok from './Motor_adatok';

const MűszakiMotor = ({ route }) => {
  const { atkuld1, atkuld2, atkuld3 } = route.params;
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      var adatok = {
        "bevitel1": atkuld1
      };
      const response = await fetch(Ipcim.Ipcim + 'motor_kep', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const openImageModal = (item) => {
    setSelectedImage(item);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ flex: 1, borderBottomColor: 'green', borderBottomWidth: 5 }} />
  <Text style={{ fontSize: 50, fontVariant: ['small-caps'], fontWeight: 'bold' }}>{atkuld2}</Text>
  <View style={{ flex: 1, borderBottomColor: 'red', borderBottomWidth: 5 }} />
</View>


      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openImageModal(item)}>
            <Image source={{ uri: Ipcim.Ipcim + item.motor_kep }} style={{
                width: 300,   // Kép szélessége 300 pixel
                height: 300,  // Kép magassága 300 pixel
                margin: 25,   // Külső térköz 25 pixel minden oldalon
                borderRadius: 10,  // Kép sarkainak lekerekítése 10 pixel
                resizeMode: 'contain',  // A kép arányainak megőrzése és kitöltése
                borderWidth: 0,   // Keretvastagság 2 pixel
                borderColor: 'black',  // Keretszín fekete
                shadowColor: 'rgba(0, 0, 0, 0.5)',  // Árnyékszín (fekete, 50%-os átlátszósággal)
                shadowOffset: { width: 2, height: 2 },  // Árnyékolás eltolása
                shadowOpacity: 0.8,  // Árnyék átlátszósága (0-1 közötti érték)
                shadowRadius: 5,   // Árnyék sugara
                backgroundColor: 'lightgray',  // Háttérszín a kép alatt
               }} />
          </TouchableOpacity>
        )}
      />
      {selectedImage && <Motor_adatok adatok={selectedImage} onClose={closeImageModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MűszakiMotor;
