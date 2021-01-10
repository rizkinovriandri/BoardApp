import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const ListBoards = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    firestore()
      .collection('boards')
      .onSnapshot((snapshot) => {
        const dataBoards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataBoards);
      });
  }, []);

  let deleteData = firestore().collection('boards');

  const deleteBoard = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Board successfully deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.author}</Text>
                </View>
               
              </View>
              <View style={styles.action}>
                
                <Button
                  title="Hapus"
                  type="outline"
                  onPress={() => deleteBoard(item.id)}
                />
              </View>
            </View>
          );
        }}
      />
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('InputBoards')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#2e2e2e',
    padding: 20,
  },
});

export default ListBoards;
