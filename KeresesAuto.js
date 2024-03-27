import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Keyboard } from 'react-native';
import Ipcim from './Ipcim';

const KeresesAuto = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [searched, setSearched] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'marka');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const Keresfuggveny = async () => {
    setSearched(true);
    var adatok = {
      "bevitel1": text
    };
    try {
      const response = await fetch(Ipcim.Ipcim + 'keresszoveg2', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  const renderSeparator = () => {
    return searched && data.length > 0 ? (
      <View
        style={{
          height: 2,
          width: "96%",
          backgroundColor: "#CED0CE",
          marginTop: 15,
          marginBottom: 30,
        }}
      />
    ) : null;
  };
  

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Ird be a keresendő szöveget!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button
        title='Keresés'
        onPress={() => Keresfuggveny()}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.autoNev}>{item.auto_modell}</Text>
                <Image source={{ uri: Ipcim.Ipcim + item.auto_kep }} style={styles.image} />
              </View>
            )}
            ItemSeparatorComponent={renderSeparator}
          />
        ) : (
          <View style={styles.nincsTalalatContainer}>
            <Text style={styles.nincsTalalatText}>Nincs ilyen találat!</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  autoNev: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontVariant: ['small-caps'],
  },
  image: {
    width: 330,
    height: 330,
    marginBottom: 30,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  nincsTalalatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nincsTalalatText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default KeresesAuto;
