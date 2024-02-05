import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import Ipcim from './Ipcim';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={[styles.markaText, { textAlign: 'center' }]}>{item.marka_nev}</Text>
              <View style={styles.imageContainer}>
                <Image source={{ uri: Ipcim.Ipcim + item.marka_kepek }} style={styles.image} />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'green',
  },
  loadingIndicator: {
    marginTop: 50,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 4,
  },
  markaText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    fontVariant: ['small-caps'],
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'contain', // Hozzáadva a levágás elkerüléséhez
  },
});

export default App;