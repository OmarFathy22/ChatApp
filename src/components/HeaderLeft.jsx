import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderLeft = ({obj}) => {
  const navigation = useNavigation();
  if(!obj){
    return null;
  }
  const {name , photo , id } = obj;


  

  return (
    <View style={styles.LeftContainer}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back" size={35} color="black" />
      </Pressable>
      <View style={styles.ImageContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: photo }}
          style={styles.ImageContainer}
        />
      </View>
      <View>
        <Text style={styles.Name}>{name}</Text>
        <View style={styles.You}>
          <Text style={styles.online}>online</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LeftContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  ImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  online: {
    color: "#060679",
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default HeaderLeft;
