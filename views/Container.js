import {
    StyleSheet,
    Text,
    FlatList,
    View,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export { Container };
import React, { useState } from 'react';

export default function Container() {

    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleRenderTask = ({ item }) => {
        return (
            <Text style={styles.item}> {item} 
                <View>
                    <TouchableOpacity onPress={() => DiffTask(item)}>
                        <MaterialIcons
                            name= "delete-forever"
                            size= {25}
                            color= "#f64c75"
                        />
                    </TouchableOpacity>
                </View>
            </Text>
        )
    }

    const handleAdd = () => {
        if (task.trim()) {
            updateTasks([...tasks, task]);
            updateTask('');
        }
    }

    const DiffTask = (index) => {
        const newVector = [...tasks]
        newVector.splice(index, 1)
        updateTasks(newVector)
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}> ✎ FAST TO-DO! </Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.field}
                            onChangeText={text => updateTask(text)}
                            value={task}
                        />
                        <TouchableWithoutFeedback onPress={handleAdd}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> ✚ </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={handleRenderTask}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#039dfc',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
        height: 500,
        marginTop: "-200px",
        padding: 20
    },
    button: {
        backgroundColor: "#00cc99",
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        cursor: 'pointer'
    },
    item: {
        display: 'flex',
        borderWidth: 1,
        width: "73vw",
        borderColor: "#dcdcdc",
        padding: 10,
        marginTop: 15,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        padding: 10,
    },
    form: {
        flexDirection: 'row'
    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        fontSize: 15,
        color: "#333",
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 30,
    }
})