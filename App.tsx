import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import Home from './src/screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RootSiblingParent>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};
