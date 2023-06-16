import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/ScreenName";
import ListScreen from "../screen/ListScreen/ListScreen";
import Product_InformationScreen from "../screen/Product_InformationScreen/Product_InformationScreen";

const Stack = createNativeStackNavigator();

const ListStack = ({setNewProduct}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.list.list}
        component={ListScreen}
        options={{ title: "Lista" }}
      />
      <Stack.Screen 
      name={screen.product.product}
      children={(props)=>(
        <Product_InformationScreen {...props} setNewProduct={setNewProduct}/>
      )}
      options={{title: "Detalle de Producto"}}
      
      /> 
    </Stack.Navigator>
  );
};

export default ListStack;
