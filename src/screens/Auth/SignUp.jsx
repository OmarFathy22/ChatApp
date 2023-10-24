import * as React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  HStack,
} from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/Config";
import { useNavigation } from "@react-navigation/native";
import { SignIn } from "./SignIn";
import { Alert } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/Config";

const AddNewUser = async (uid, userData) => {
  await setDoc(doc(db, "Users", uid), {
    id: uid,
    name: userData.name,
    email: userData.email,
    password: userData.password,
    photo:
      "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
  });
};
const SignUp = (userData) => {
  const { email, password } = userData;
  const data = true;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      Alert.alert("Success", "User Created Successfully");
      AddNewUser(user.uid, userData);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Error", errorMessage);
      data = false;
      // ..
    });
    return data;
};

const Example = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handlePassword = (params) => {
    setUserData({ ...userData, password: params });
  };
  const handleEmail = (params) => {
    setUserData({ ...userData, email: params });
  };
  const handleName = (params) => {
    setUserData({ ...userData, name: params });
  };
  const handleSignUp = () => {
    if(SignUp(userData))
    {
      navigation.navigate("Chat");
    }
    
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              maxLength={15}
              onChangeText={(text) => {
                handleName(text);
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              onChangeText={(text) => {
                handleEmail(text);
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(text) => {
                handlePassword(text);
              }}
            />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl> */}
          <Button onPress={handleSignUp} mt="2" colorScheme="indigo">
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I already have an Email.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
