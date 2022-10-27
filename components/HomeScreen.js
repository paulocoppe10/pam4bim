import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Olá mundo</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("SaoPaulo")}
            >
            <Text>
                Sao Paulo
            </Text>
        </TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
    bloco:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});