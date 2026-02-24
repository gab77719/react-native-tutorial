import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import CardUser from './components/CardUser';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <CardUser 
          nome="Giovanni"
          email="ana@email.com"
          foto="https://i.pravatar.cc/150?img=1"
        />

        <CardUser 
          nome="Kauã Ramos"
          email="carlos@email.com"
          foto="https://i.pravatar.cc/150?img=2"
        />

        <CardUser 
          nome="Luiz"
          email="mariana@email.com"
          foto="https://i.pravatar.cc/150?img=3"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 200,
  }
});