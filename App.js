import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
 } 
from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState([
    'Alisson',
    'Renan',
    'Macedo'
  ]);
  const [newTask, setNewTask] = useState('');

    return (
      <>
        <View style={styles.container}>
          <View style={styles.body}>
            <FlatList 
            style={styles.flatlist}
            data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={( { item } ) => (
              <View style={styles.containerView}>
                <Text> { item } </Text>
                <TouchableOpacity>
                  <MaterialIcons 
                  name='delete-forever'
                  size={25}
                  color='#f64675'
                  />
                </TouchableOpacity>
              </View>
            )}
            >

            </FlatList>
          </View>

          <View style={styles.form}>
            <TextInput 
            style={styles.input}
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder='Adicione uma tarefa'
            maxLength={25}
            />
            <TouchableOpacity style={styles.button}>
              <Ionicons name="ios-add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa o máximo de espaço que puder
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },

  body: {
    flex: 1,
  },

  form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#fff',
  },

  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },

  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10
  },

  flatlist: {
    flex: 1,
    marginTop: 5
  },

  containerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee'
  }
});
