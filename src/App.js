import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import CardProduct from './components/CardProduct';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
        <CardProduct
          foto={require('../assets/golf.webp')}
          nome="Volkswagen Golf"
          descricao="Carro compacto e versátil"
          preco="R$ 89.900,00"
        />

        <CardProduct
         foto={require('../assets/audia3jpg.jpg')}
          nome="Audi A3"
          descricao="Carro de luxo com desempenho esportivo"
          preco="R$ 129.900,00"
        />

        <CardProduct
          foto={require('../assets/2025-bmw-3-series-102-66562dcd6a1c6.avif')}
          nome="BMW Série 3"
          descricao="Carro esportivo de luxo"
          preco="R$ 249.900,00"
        />
        
        <CardProduct
          foto={require('../assets/chevy.jpg')} 
          nome="Chevette Chevy 500"
          descricao="Carro clássico e econômico"
          preco="R$ 19.900,00"
        />  
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    padding: 20,
  },
   grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // 👈 espaço entre os 2
  },
});
