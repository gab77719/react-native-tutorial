import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardProduct({ foto, nome, descricao, preco }) {
    return (
        <View style={styles.card}>
            <Image 
            source={typeof foto === 'string' ? { uri: foto } : foto}
            style={styles.imagem}/>
            
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
   card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    width: '48%'
},

    imagem: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },  

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    descricao: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },          

    preco: {
        fontSize: 14,
        color: 'gray',
    },
});     