import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.logo} name="car" size={26} color="#ffffff" />
            <AntDesign style={styles.menu} name="menu" size={24}/>
            <Text style={styles.nome}>Motors Web</Text>
        </View>
    )   
}

const styles = StyleSheet.create({      
    container: {
        backgroundColor: '#ff0000',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 30,
        resizeMode: 'contain',
        marginInline: 20,
    },      
    nome: {
        color: '#eeeeeee3',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: '',  
        marginRight: 'auto',  
    },
    menu: {
        marginRight: 0,
        color: '#ffffff',
        left: 200,  
    },
}); 