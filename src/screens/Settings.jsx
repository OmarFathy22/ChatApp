import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Button,
  Image,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";

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
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetUser = async (uid) => {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
        console.log(user);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    const CheckUser = async () => {
      const res = await AsyncStorage.getItem("user");
      const user = JSON.parse(res);
      GetUser(user?.uid);
      setLoading(false);
    };
    CheckUser();
  }, []);

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
  const HeaderSetting = () => {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: "white",
          shadowColor: "#000",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Settings</Text>
      </View>
    );
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#020343" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <HeaderSetting />
      <View style={styles.insideContainer}>
        <View>
          <Image
            source={{ uri: user?.photo }}
            style={{
              height: 130,
              width: 130,
              borderRadius: 130,
              marginVertical: 10,
            }}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          {user?.name}
        </Text>
        <Button
          title="Sign Out"
          onPress={() => {
            SignOut();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  insideContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    // justifyContent: "center",
    paddingTop: 100,
    alignItems: "center",
  },
});

export default Settings;
