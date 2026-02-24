import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardUser({ nome, email, foto }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.avatar} />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 14,
    color: 'gray',
  },
});