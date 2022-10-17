import {
    StyleSheet,
    Text,
    FlatList,
    View,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';

export { Container };
import React, { useState } from 'react';

export default function Container() {

    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleRenderTask = ({ item }) => {
        return (
            <Text style={{ color: 'red' }}> {item} </Text>
        )
    }

    const handleAdd = () => {
        updateTasks([...tasks, task]);
        updateTask('');
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {/* <Text style={styles.Text}> opa </Text> */}
                    <View style={styles.form}>
                        <TextInput
                            style={styles.field}
                            onChangeText={text =>
                            updateTask(text)}
                            value={task}
                        />
                        <TouchableWithoutFeedback style={styles.button} onPress={handleAdd}>
                            <Text style={styles.buttonText}> ADICIONAR </Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <FlatList
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

    },
    item: {

    },
    buttonText: {

    },
    form: {

    },
    field: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 10,
        fontSize: 15,
        color: "#333"
    }
})