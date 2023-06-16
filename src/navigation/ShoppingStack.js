import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import ShoppingScreen from "../screen/ShoppingScreen";

const Stack = createNativeStackNavigator();

const Shopping_CartStack = ({newProducto}) =>{
    return(
        <Stack.Navigator>
      <Stack.Screen
      name={screen.shopping.shopping}
      children={(props)=>(
        <ShoppingScreen {...props} newProducto={newProducto}/>
      )} 
      options={{title: "carrito"}}
      />
      </Stack.Navigator>
    );
};

export default Shopping_CartStack;