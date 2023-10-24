import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';






const Calls = () => {
  return (
    <View>
      {/* <Text>calls</Text> */}
       <TouchableOpacity onPress={() => {
        SignIn(setUser,email,password);
       }}><Text>Sign In</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Calls;
