import React, { useEffect, useState } from 'react';
import { Button, Image, View, Text, TextInput, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ipcim from './Ipcim';
import { Picker } from '@react-native-picker/picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [bevitel1, setBevitel1] = useState('');
  const SERVER_URL = Ipcim.Ipcim;
  const [data, setData] = useState([]);
  const [selectedMarka, setSelectedMarka] = useState(null);
  const [loading, setLoading] = useState(true);

  const createFormData = (photo, body = {}) => {
    const formData = new FormData();

    formData.append('photo', {
      name: 'photo.jpg',
      type: 'image/jpg',
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    Object.keys(body).forEach((key) => {
      formData.append(key, body[key]);
    });

    return formData;
  };

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'marka_motorok');
      const json = await response.json();
      setData(json);
      setSelectedMarka(json.length > 0 ? json[0].marka_id : null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleUploadPhoto = async () => {
    try {
      if (!image) {
        console.log('Először válassz ki egy képet');
        return;
      }

      const response = await fetch(`${SERVER_URL}api/upload`, {
        method: 'POST',
        body: createFormData(image, { userId: '123', bevitel1: selectedMarka }),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const uzenet = await response.text();
      console.log('response', uzenet);
      alert(uzenet);
    } catch (error) {
      console.log('error', error.message);
      alert(error.message);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
      setSelectedMarka(data.length > 0 ? data[0].marka_id : null);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ padding: 10 }}></Text>

      <Button title="Válassz ki egy képet a gallériából" onPress={pickImage} />
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      <Button title="Tölsd fel képet" onPress={handleUploadPhoto} />

      <View style={{ flex: 1, padding: 24 }}>
        <Picker
          selectedValue={selectedMarka}
          onValueChange={(itemValue, itemIndex) => setSelectedMarka(itemValue)}
          style={{ height: 50, width: 200, fontFamily: 'Arial' }}>
          {data.map((item) => (
            <Picker.Item label={item.marka_nev} value={item.marka_id} key={item.marka_id} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
