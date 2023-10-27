import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IStory from "../components/InstaStory";

const Calls = () => {
  return (
    <View>
      {/* <Text>calls</Text> */}
      <TouchableOpacity
        onPress={() => {
          SignIn(setUser, email, password);
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
      <Text>Omar</Text>
      <IStory />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Calls;
