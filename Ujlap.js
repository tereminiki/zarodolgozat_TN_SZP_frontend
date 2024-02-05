import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Ipcim from './Ipcim';

const Ujlap = ({ route }) => {
  const { atkuld1, atkuld2, atkuld3 } = route.params;
  const [data, setData] = useState([]);



  useEffect(async() => {
    try {
      var adatok ={
        "bevitel1":atkuld1
    }
      const response = await fetch(Ipcim.Ipcim+'auto_kep', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <View style={styles.container}>

      <Text style={{fontSize: 50, fontVariant: ['small-caps'], fontWeight: 'bold'}}>{atkuld2}</Text>
      <Image source={{ uri: Ipcim.Ipcim}}/>
      <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
            
  {
            <Image source={{uri:Ipcim.Ipcim+item.auto_kep}} style={{width:300,height:300, margin:10}}   />
  }

          </View>
      )}
      />
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

export default Ujlap;
