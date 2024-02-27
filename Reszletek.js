import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Ipcim from './Ipcim';
import Adatok from './Adatok';

const Reszletek = ({ route }) => {
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
      <Text style={{ fontSize: 50, fontVariant: ['small-caps'], fontWeight: 'bold' }}>{atkuld2}</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openImageModal(item)}>
            <Image source={{ uri: Ipcim.Ipcim + item.motor_kep }} style={{ width: 300, height: 300, margin: 10 }} />
          </TouchableOpacity>
        )}
      />
      {selectedImage && <Adatok adatok={selectedImage} onClose={closeImageModal} />}
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

export default Reszletek;
