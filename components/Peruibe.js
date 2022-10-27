import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';

export default function Peruibe() {
 useEffect(
     ()=>{
         function teste(){
             console.warn("Teste da userEffect");
         }
         teste();
     },[]
 );
    return (
    <View style={styles.bloco}>
        <Text>Cidade de Peruibe</Text>
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