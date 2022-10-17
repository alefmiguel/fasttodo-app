import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './views/Container.js';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>

      <Container/>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: "-200px",
    fontWeight: 'bold',
    fontSize: "280%",
    borderRadius: 15,
    color: "black",
  }
});
