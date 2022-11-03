import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tempo from './Tempo';
import api from  './Api';

export default function Peruibe() {
    useEffect(
        ()=>{
            function teste(){
                console.warn("Teste da userEffect");
            }
            teste();
        },[]
    );
    const response = api.get  
  const [dados, setDados] = useState("");
  setDados(response.data.forecast[0]);
    return (
      <View style={styles.container}>
        <View style={styles.bloco}>   
          <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>
  
        <View style={styles.blocoGeral}>
          <Text style={styles.label}>Peruibe </Text>
        </View>
        
        <Tempo data={dados}  />
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