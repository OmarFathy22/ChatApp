import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {

  View,
  StatusBar,

} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Provider } from "react-redux";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import CertainChat from "../../src/screens/CertainChat";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderLeft from "../../src/components/HeaderLeft";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/Config";
import SignIn from "../..//src/screens/Auth/SignIn";
import SignUp from "../../src/screens/Auth/SignUp";
import MainContent from "../components/MainContent";

// const TabBottom = createMaterialBottomTabNavigator();
// const TabTop = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const navigation = useNavigation();
  const CheckUser = () => {
      AsyncStorage.getItem('user').then((value) => {
        if(value){
          navigation.navigate("Chat");
        }
        else{
          navigation.navigate("SignIn");
        }
      })
  }
  useEffect(() => {
    CheckUser();
  }, [])
  return (
    // <Provider store = {store}>
    
        <View style={styles.container}>
          <StatusBar style={"light"} backgroundColor="black" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="MainContent"
          >
            <Stack.Screen name="MainContent" component={MainContent} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen
              options={{
                headerShown: true,
                title: "",

                headerLeft: () => <HeaderLeft />,
                headerRight: () => (
                  <View style={styles.HeaderRight}>
                    <FontAwesome
                      name="video-camera"
                      size={30}
                      color="#060645"
                    />
                    <Ionicons name="ios-call" size={30} color="#060645" />
                  </View>
                ),
              }}
              name="CertainChat"
              component={CertainChat}
            />
          </Stack.Navigator>
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  HeaderRight: {
    flexDirection: "row",
    gap: 15,
  },
});
