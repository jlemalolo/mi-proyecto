import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./src/utils/firebase";
import Toast from "react-native-toast-message";
import { useState } from "react";


const App = () => {
 const [newProduct, setNewProduct] = useState(null);

  return (
    <>
      <NavigationContainer>
        <AppNavigation newProduct={newProduct} setNewProduct={setNewProduct} />
      </NavigationContainer>
      <Toast/>
    </>
  );
};
export default App;
