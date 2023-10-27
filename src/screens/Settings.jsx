import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
    // Alert.alert("Success" , "User Signed Out Successfully");
    console.log("User removed successfully");
  } catch (error) {
    console.log("Error removing user:", error);
    Alert.alert("Error", "Error Signing Out");
  }
};

const Settings = ({ navigation }) => {
  // const navigation = useNavigation();

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        removeUser();
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        // An error happened.
        Alert.alert("Error", error.message);
      });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        SignOut(navigation.navigate("SignIn"));
      }}
    >
      <View>
        <Text>Sign Out</Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Settings;
