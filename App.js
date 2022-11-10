import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import SaoPaulo from './components/SaoPaulo';
import Baixada from './components/Baixada';
import Bertioga from './components/Bertioga';
import Cubatao from './components/Cubatao';
import Guaruja from './components/Guaruja';
import Santos from './components/Santos';
import Saovicente from './components/Saovicente';
import Praiagrande from './components/Praiagrande';
import Monguagua from './components/Monguagua';
import Intanhaem from './components/Intanhaem';
import Peruibe from './components/Peruibe';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SaoPaulo" component={SaoPaulo} />
        <Stack.Screen name="Baixada" component={Baixada} />
        <Stack.Screen name="Bertioga" component={Bertioga} />
        <Stack.Screen name="Cubatao" component={Cubatao} />
        <Stack.Screen name="Guaruja" component={Guaruja} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="Saovicente" component={Saovicente} />
        <Stack.Screen name="Praiagrande" component={Praiagrande} />
        <Stack.Screen name="Monguagua" component={Monguagua} />
        <Stack.Screen name="Intanhaem" component={Intanhaem} />
        <Stack.Screen name="Peruibe" component={Peruibe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}