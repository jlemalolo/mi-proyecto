import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import AccountScreen from "../screen/Account/AccountScreen";
import LoginScreen from "../screen/Account/LoginScreen/LoginScreen";
import RegisterScreen from "../screen/Account/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

const AccountStack  = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={screen.account.account}
          component={AccountScreen}
          options={{ title: "Cuenta" }}
        />
        <Stack.Screen
          name={screen.account.login}
          component={LoginScreen}
          options={{ title: "Iniciar Sesión" }}
        />
        <Stack.Screen
          name={screen.account.register}
          component={RegisterScreen}
          options={{ title: "Registrarse" }}
        />
      </Stack.Navigator>
    );
  };

  export default AccountStack;