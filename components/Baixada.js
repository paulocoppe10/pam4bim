import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Baixada({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Baixada Santista</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("Peruibe")}
            >
            <Text>
                Peruibe
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Intanhaem")}
            >
            <Text>
            Intanhaem
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Monguagua")}
            >
            <Text>
            Monguagua
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Praiagrande")}
            >
            <Text>
            Praia Grande
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Saovicente")}
            >
            <Text>
            Sao Vicente
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Santos")}
            >
            <Text>
            Santos
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Guaruja")}
            >
            <Text>
            Guaruja
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Cubatao")}
            >
            <Text>
            Cubatao
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Bertioga")}
            >
            <Text>
            Bertioga
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