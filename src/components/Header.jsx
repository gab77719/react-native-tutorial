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
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    logo: {
        width: 600,
        left: -700,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10
    },
    nome: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        left: -320
    }
});