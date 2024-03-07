import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationPage from './components/Registration';
export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationPage /> {/* Render the RegistrationPage component */}
      <StatusBar style="auto" />
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
