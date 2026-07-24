import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionScreen from '../screens/QuestionScreen';
import HomeScreen from '../screens/HomeScreen';

// Criamos o "Stack" (pilha) de navegação: cada tela nova entra por cima da anterior.
const Stack = createNativeStackNavigator();

/**
 * AppNavigator
 * Centraliza as rotas do app. São só 2 telas:
 * - Question: a pergunta inicial "você sabe que dia é hoje?"
 * - Home: a tela principal única, com tudo (abertura, timeline, galeria, frases)
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Question"
        screenOptions={{
          headerShown: false, // sem barra de topo, pra manter o clima do site
        }}
      >
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}