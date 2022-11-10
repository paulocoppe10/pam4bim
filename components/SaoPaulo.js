import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SaoPaulo({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Estado de Sao Paulo</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("Baixada")}
            >
            <Text>
                Baixada Santista
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