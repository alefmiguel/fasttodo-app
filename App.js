import React, { useState, useEffect } from 'react';

import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert
 } 
from 'react-native';

// import { AsyncStorage } from '@react-native-community/async-storage';

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [task, setTask] = useState([
    'Alisson',
    'Renan',
    'Macedo'
  ]);
  const [newTask, setNewTask] = useState('');

  // useEffect(() => {
  //   async function carregaDados() {
  //     const task = await AsyncStorage.getItem("task");

  //     if (task) {
  //       setTask(JSON.parse(task));
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   async function salvarDados() {
  //     AsyncStorage.setItem("task", JSON.stringify(task));
  //   }
  //   salvarDados();
  // }, [task])

  async function addTask() {

    if (newTask === '') {
      return;
    }

    const search = task.filter(task => task === newTask);

    if (search.length != 0) {
      Alert.alert("Atenção", "Nome da tarefa repetida!");
      return;
    }

    setTask([ ... task, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  useEffect(() => {
    console.log(newTask);
  }, [newTask]);

  async function removeTask(item) {
    // Alert.alert(
    //   "Deletar Task",
    //   "Tem certeza que deseja remover esta anotação?",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => {
    //         return
    //       },
    //       style: 'cancel'
    //     },
    //     {
    //       text: "OK",
    //       onPress: () => setTask(task.filter(tasks => tasks != item))
    //     }
    //   ],
    //   { cancelable: false }
    // )

    setTask(task.filter(tasks => tasks != item))
  }

    return (
      <>
        <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={ Platform.OS === 'ios' }
        >
          <View style={styles.container}>
            <View style={styles.body}>
              <FlatList 
              style={styles.flatlist}
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={( { item } ) => (
                <View style={styles.containerView}>
                  <Text style={styles.text}> { item } </Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
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
              onChangeText={text => setNewTask(text)}
              value={newTask}
              />
              <TouchableOpacity 
              style={styles.button} 
              onPress={() => addTask()}
              >
                <Ionicons name="ios-add" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
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
  },

  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  }
});
