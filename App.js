import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StatusBar, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CertainChat from "./src/screens/CertainChat";
import { FontAwesome } from "@expo/vector-icons";
import HeaderLeft from "./src/components/HeaderLeft";
import SignIn from "./src/screens/Auth/SignIn";
import SignUp from "./src/screens/Auth/SignUp";
import MainContent from "./src/components/MainContent";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Provider store = {store}>
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style={"light"} backgroundColor="black" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="MainContent" component={MainContent} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            // options={}
            name="CertainChat"
            component={CertainChat}
          /> */}
        </Stack.Navigator>
      </View>
    </NavigationContainer>

    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
