import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';


const InputBoards = () => {

  const [boardTitle, setBoardTitle] = useState();
  const [boardDesc, setBoardDesc] = useState();
  const [boardAuthor, setBoardAuthor] = useState();

  const onChangeBoardTitle = (boardTitle) => {
    setBoardTitle(boardTitle);
  };

  const onChangeBoardDesc = (boardDesc) => {
    setBoardDesc(boardDesc);
  };

  const onChangeBoardAuthor = (boardAuthor) => {
    setBoardAuthor(boardAuthor);
  };

  const handleAddProduct = () => {
    
      console.log(`judulnya adalah ${boardTitle} | Description : ${boardDesc} | Author : ${boardAuthor}`);    
  };

    return (
      <SafeAreaView style={styles.container}>
      
      <Text style={styles.createTitle}>Create New Board</Text>
      <Input
        placeholder="Title"
        onChangeText={(boardTitle) => onChangeBoardTitle(boardTitle)}
        rightIcon={
          <Icon
            name='adn'
            size={24}
            color='black'
          />
        }
        
      />
      <Input
        placeholder="Description"
        onChangeText={(boardDesc) => onChangeBoardDesc(boardDesc)}
        rightIcon={
          <Icon
            name='book'
            size={24}
            color='black'
          />
        }
        // onChangeText={(email) => onChangeEmail(email)}
      />
      <Input
        placeholder="Author"
        onChangeText={(boardAuthor) => onChangeBoardAuthor(boardAuthor)}
        rightIcon={
          <Icon
            name='user-circle'
            size={24}
            color='black'
          />
        }
        // onChangeText={(email) => onChangeEmail(email)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text>
          <Icon
            name='save'
            size={24}
            color='black'
          />  Simpan</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00a4e4',
    width: '50%',
    padding: 10,
  },

  createTitle: {
    alignItems: 'center',
    marginBottom : 10,
    fontWeight: "bold",
    padding: 10,
  },
});



export default InputBoards;