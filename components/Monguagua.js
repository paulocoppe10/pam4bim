import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import api from './Api'
export default function Monguagua() {
  const [dados, setDados] = useState("");
  useEffect(()=>{
      async function previsao(){
        const Response = await api.get('weather?array_limit=10&fields=only_results,temp,city_name,date,time,forecast,max,min,wind_speedy,description&key=e4c586c4bd&city_name=Monguagua,SP');
        setDados(Response.data.results.forecast);
      }
      previsao();
  },[]);
    return (
    <View style={styles.bloco}>
        <Text>Cidade de Monguagua</Text>
        <FlatList
        data={dados}
        renderItem={({item})=>{
          return(
            <View style={styles.tempo}>
            <Text style={styles.texto}>Data: {item.date}</Text>
            <Text style={styles.texto}>Max: {item.max}</Text>
            <Text style={styles.texto}>Min: {item.min}</Text>
            <Text style={styles.texto}>Desc: {item.description}</Text>
            <Text style={styles.texto}>Vento: {item.wind_speedy}</Text>
          </View>
       );
      }}
      ></FlatList>
      </View>
    );}


const styles = StyleSheet.create({
    bloco:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});