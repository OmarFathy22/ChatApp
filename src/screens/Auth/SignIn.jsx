import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import {signInWithEmailAndPassword  } from "firebase/auth";
import { Alert } from "react-native";
import {auth} from "../../../firebase/Config";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Function to set the user when signed in
const setUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    console.log('User set successfully:');
  } catch (error) {
    console.log('Error setting user:');
  }
};

// Function to remove the user when signed out

export const SignIn = (email, password) => {
  const data = true;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user);
    return true;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert("Error" , errorMessage);
    data = false;
  });
  return data;
}

const Example = () => {
  const navigation = useNavigation();
  const [userData , setUserData] = React.useState({email : "" , password : ""});
  const handlePassword = (params) => {
    setUserData({...userData , password : params});
  }
  const handleEmail = (params) => {
    setUserData({...userData , email : params});
  }
  const handleSignIn = () => {
    if(SignIn(userData.email , userData.password))
    {
      console.log("done")
      navigation.navigate("Chat");
    }
  }
  
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text) => {
               handleEmail(text)
            }}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={(text) => {
              handlePassword(text);
            }} />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button onPress={handleSignIn} mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={() => {
               navigation.navigate("SignUp");
          }}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
};

    export default ({user}) => {
        return (
          <NativeBaseProvider>
          <Center flex={1} px="3">
              <Example />
          </Center>
          </NativeBaseProvider>
        );
    };
    