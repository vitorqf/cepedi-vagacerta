import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
