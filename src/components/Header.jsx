import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image 
              source={require('../../assets/image.avif')} 
              style={styles.logo}
            />
            <Text style={styles.nome}>Gabriel</Text>
        </View>
    )   
}

const styles = StyleSheet.create({      
    container: {
        backgroundColor: '#000000',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    nome: {
        color: '#eeeeeee3',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: '',   
    }
});