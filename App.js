import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import Menu from "./screens/Menu"
import app from "./firebase";
export default function App(){
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}