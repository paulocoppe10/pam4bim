import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SaoPaulo({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Cidade de Sao Paulo</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("Peruibe")}
            >
            <Text>
                Peruibe
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