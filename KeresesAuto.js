import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Keyboard } from 'react-native';
import Ipcim from './Ipcim';

const KeresesAuto = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [searched, setSearched] = useState(false); // Állapot a keresés gombra való kattintás nyomon követésére

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
    setSearched(true); // Keresés gombra való kattintás jelzése
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
    return searched && data.length > 0 ? ( // Vonal megjelenítése csak ha rányomtak a keresés gombra és találatok vannak
      <View
        style={{
          height: 2, // Vonal magassága
          width: "96%",
          backgroundColor: "#CED0CE",
          marginTop: 15, // Vonal és a szöveg közötti térköz
          marginBottom: 30, // Vonal és a következő szöveg közötti térköz
        }}
      />
    ) : null; // Ha nincs találat vagy nem kattintottak a keresés gombra, ne legyen vonal
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
            ItemSeparatorComponent={renderSeparator} // Vonal hozzáadása
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
    borderRadius: 10, // lekerekítés
    resizeMode: 'cover', // teljes méretű megjelenítés, levágás nélkül
  },
  nincsTalalatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nincsTalalatText: {
    fontSize: 20, // nagyobb betűméret
    color: 'red', // egyedi szín
    textAlign: 'center',
  },
});

export default KeresesAuto;
