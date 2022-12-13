import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import store from "./redux/store";

import Welcome from "./screens/welcome/Welcome.js";
import Alarms from "./screens/alarms/Alarms";
import AddNew from "./screens/addNew/AddNew";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Alarms" component={Alarms} />
          <Stack.Screen name="Add new" component={AddNew} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
