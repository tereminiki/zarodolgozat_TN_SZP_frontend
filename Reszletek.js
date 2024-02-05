import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Ipcim from './Ipcim';

const Reszletek = ({ route }) => {
  const { atkuld1, atkuld2, atkuld3 } = route.params;
  const [data, setData] = useState([]);



  useEffect(async() => {
    try {
      var adatok ={
        "bevitel1":atkuld1
    }
      const response = await fetch(Ipcim.Ipcim+'motor_kep', {
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
      
      <Text>{atkuld2}</Text>
      
      <Image source={{ uri: Ipcim.Ipcim + atkuld3 }} style={{ width: 300, height: 300 }} />
      
      <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
         
            {
            <Image source={{uri:Ipcim.Ipcim+item.motor_kep}} style={{width:300,height:300, margin:10}}   />
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

export default Reszletek;
