import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app!</Text>
      <Greet firstname="Richard" lastname="Venegas" />
      <Greet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
