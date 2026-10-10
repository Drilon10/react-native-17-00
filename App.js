import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import Ch1 from './screens/Ch1';
import { NavigationContainer } from '@react-navigation/native';
import ExcerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen
          name='Home'
          component={MainScreen}
        ></Stack.Screen>
        <Stack.Screen
          name='List'
          component={ListScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
