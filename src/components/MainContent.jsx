import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Svg, Path, G, Rect, Defs, ClipPath } from "react-native-svg";
import store from "../store/Redux/store";
import ChatScreen from "../screens/Chat";
import SettingsScreen from "../screens/Settings";
import CallsScreen from "../screens/Calls";
import { COLORS } from "../utils/Colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CertainChat from "../screens/CertainChat";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderLeft from "../components/HeaderLeft";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/Config";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

const TabBottom = createMaterialBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const CheckUserSignedIn = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      setUser(null);
      // ...
    }
  });
};
const SignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
function MyTobTabs() {
  return (
    <TabTop.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: "transparent" },
        tabBarActiveTintColor: "white",

        tabBarLabelStyle: { fontSize: 12, color: "white", fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: COLORS.Purple,
          borderRadius: 50,
          // margin: 20,
          position: "absolute",
          bottom: 20,
          right: 20,
          left: 20,
          paddingVertical: 10,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: 65,

          justifyContent: "start",
          alignItems: "center",
        },
      }}
      initialRouteName="Chat"
    >
      <TabTop.Screen
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ width: 48, height: 48 }}>
              {/* <Ionicons name="call-outline" size={40} color={color} /> */}
              {/* <Image source={require("./assets/fluent_call-12-regular.png")} style={{width:48, height:48  }}/> */}

              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={focused ? 43 : 40}
                height={focused ? 43 : 40}
                viewBox="0 0 25 31"
                fill="none"
              >
                <Path
                  d="M11.2196 5.44042C11.0039 4.85303 10.5715 4.37046 10.0113 4.0917C9.45106 3.81293 8.80539 3.75911 8.20672 3.94125C5.3688 4.81625 3.38547 7.25167 3.8113 10.0692C4.28755 13.1962 5.34718 16.206 6.93505 18.9417C8.50593 21.6711 10.5653 24.0884 13.0105 26.0729C15.2096 27.8521 18.2955 27.3621 20.4713 25.3204C20.929 24.8909 21.2067 24.3037 21.2484 23.6774C21.29 23.0511 21.0926 22.4323 20.6959 21.9458L19.1384 20.0413C18.8264 19.6583 18.4066 19.3779 17.9333 19.2364C17.46 19.0949 16.9552 19.099 16.4842 19.2479L12.8909 20.3854L12.2638 19.7379C11.4737 18.9185 10.7826 18.009 10.2046 17.0283C9.64371 16.0366 9.20683 14.9796 8.9038 13.8813L8.66172 13.0208L11.4326 10.4688C11.7982 10.1293 12.0547 9.68876 12.1694 9.20321C12.2842 8.71765 12.2521 8.20894 12.0771 7.74167L11.2226 5.44334L11.2196 5.44042ZM7.34922 1.15292C8.65925 0.752106 10.073 0.867465 11.3007 1.47536C12.5284 2.08325 13.4772 3.13766 13.9526 4.4225L14.8071 6.72084C15.1841 7.73057 15.2523 8.82961 15.003 9.8782C14.7537 10.9268 14.1982 11.8776 13.4071 12.6096L11.978 13.925C12.1617 14.4325 12.4096 15.0129 12.7305 15.5758C13.0513 16.13 13.4246 16.6346 13.7659 17.0458L15.6034 16.4625C16.6307 16.1382 17.7317 16.1296 18.7639 16.438C19.796 16.7463 20.7119 17.3574 21.393 18.1921L22.9505 20.0967C23.8161 21.1551 24.2475 22.5028 24.1576 23.8671C24.0678 25.2315 23.4633 26.5109 22.4663 27.4467C19.5671 30.1679 14.8334 31.2967 11.1788 28.3392C8.45563 26.13 6.16193 23.4388 4.41214 20.4C2.6407 17.3487 1.45838 13.9917 0.92672 10.5038C0.22672 5.85751 3.56047 2.31959 7.34922 1.15584V1.15292Z"
                  fill={color}
                />
              </Svg>
            </View>
          ),
        }}
        name="Calls"
        component={CallsScreen}
      />
      <TabTop.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ width: 48, height: 48 }}>
              {/* <Ionicons
              name="ios-chatbubble-ellipses-outline"
              size={40}
              color={color}
            /> */}
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={focused ? 43 : 40}
                height={focused ? 43 : 40}
                viewBox="0 0 48 48"
                fill="none"
              >
                <G clip-path="url(#clip0_127_800)">
                  <Path
                    d="M24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44H8C6.93913 44 5.92172 43.5786 5.17157 42.8284C4.42143 42.0783 4 41.0609 4 40V24C4 12.954 12.954 4 24 4ZM24 8C19.7565 8 15.6869 9.68571 12.6863 12.6863C9.68571 15.6869 8 19.7565 8 24V40H24C28.2435 40 32.3131 38.3143 35.3137 35.3137C38.3143 32.3131 40 28.2435 40 24C40 19.7565 38.3143 15.6869 35.3137 12.6863C32.3131 9.68571 28.2435 8 24 8ZM24 28C24.5098 28.0006 25.0001 28.1958 25.3707 28.5457C25.7414 28.8956 25.9645 29.3739 25.9943 29.8828C26.0242 30.3917 25.8587 30.8928 25.5315 31.2837C25.2043 31.6746 24.7402 31.9258 24.234 31.986L24 32H18C17.4902 31.9994 16.9999 31.8042 16.6293 31.4543C16.2586 31.1044 16.0355 30.6261 16.0057 30.1172C15.9758 29.6083 16.1413 29.1072 16.4685 28.7163C16.7957 28.3254 17.2598 28.0742 17.766 28.014L18 28H24ZM30 20C30.5304 20 31.0391 20.2107 31.4142 20.5858C31.7893 20.9609 32 21.4696 32 22C32 22.5304 31.7893 23.0391 31.4142 23.4142C31.0391 23.7893 30.5304 24 30 24H18C17.4696 24 16.9609 23.7893 16.5858 23.4142C16.2107 23.0391 16 22.5304 16 22C16 21.4696 16.2107 20.9609 16.5858 20.5858C16.9609 20.2107 17.4696 20 18 20H30Z"
                    fill={color}
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_127_800">
                    <Rect width="40" height="40" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
          ),
        }}
        name="Chat"
        component={ChatScreen}
      />

      <TabTop.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{ width: focused ? 43 : 40, height: focused ? 43 : 40 }}
            >
              <Feather name="settings" size={focused ? 43 : 40} color={color} />
            </View>
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </TabTop.Navigator>
  );
}
const MainContent = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyTobTabs />
    </GestureHandlerRootView>
  );
};

export default MainContent;
