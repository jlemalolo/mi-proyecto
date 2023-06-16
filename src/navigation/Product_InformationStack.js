import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/ScreenName";
import Product_InformationScreen from "../screen/Product_InformationScreen/Product_InformationScreen";

const Stack = createNativeStackNavigator();

const Product_InformationStack = () =>{
    return(
        <Stack.Navigator>
      <Stack.Screen
      name={screen.product.product}
      component={Product_InformationScreen}
      options={{title: "Informacion"}}
      />
    </Stack.Navigator>
    );
};

export default Product_InformationStack;

