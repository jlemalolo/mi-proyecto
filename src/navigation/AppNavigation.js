import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/ScreenName";
import ListStack from "./ListStack";
import AccountStack from "./AccountStack";
import Product_InformationStack from "./Product_InformationStack";
import ShoppingStack from "./ShoppingStack";

//Crear una instancia para la gestión de la navegación
const Tab = createBottomTabNavigator();

export const AppNavigation = ({newProducto, setNewProduct}) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#00a680",
          tabBarInactiveTintColor: "#646464",
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        })}
      >
        <Tab.Screen
          name={screen.list.tab}
          children={(props) =>(
            <ListStack {...props} setNewProduct={setNewProduct}/>
          )}
          options={{ title: "Lista" }}
        />
        <Tab.Screen
          name={screen.shopping.tab}
          children={(props) =>(
            <ShoppingStack {...props} newProducto={newProducto}/>
          )}
          options={{ title: "Carrito" }}
        />
        <Tab.Screen
          name={screen.account.tab}
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
    let iconName;
  
    if (route.name == screen.list.tab) {
      iconName = "format-list-bulleted";
    }
  
    if (route.name == screen.account.tab) {
      iconName = "login";
    }
  
    if (route.name == screen.product.tab) {
      iconName = "magnify";
    }
  
    if (route.name == screen.shopping.tab) {
      iconName = "cart";
    }
    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
      );
    };