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
            <Text style={styles.item}> {item} </Text>
        )
    }

    const handleAdd = () => {
        if (task.trim()) {
            updateTasks([...tasks, task]);
            updateTask('');
        }
    }

    async function DiffTask() {

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
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={handleRenderTask}
                    >
                        <TouchableOpacity onPress={() => DiffTask(item)}>
                            <MaterialIcons
                                name="delete-forever"
                                size: {25}
                                color: "#f64c75"
                            />
                        </TouchableOpacity>
                    </FlatList>
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
        borderWidth: 1,
        width: "73vw",
        borderColor: "#dcdcdc",
        padding: 10,
        marginTop: 15,
        borderRadius: 3
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
        marginLeft: -120
    }
})