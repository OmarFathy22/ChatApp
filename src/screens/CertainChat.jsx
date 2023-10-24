import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { COLORS } from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";
import { Timestamp } from "firebase/firestore";
import HeaderLeft from "../components/HeaderLeft";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';



const CertainChat = ({navigation , route}) => {
   const obj =  route.params;
  // console.log(name , photo , id)
  navigation.setOptions(
    {
      headerShown: true,
      title: "",

      headerLeft: () => <HeaderLeft obj = {obj} />,
      headerRight: () => (
        <View style={styles.HeaderRight}>
          <FontAwesome name="video-camera" size={30} color="#060645" />
          <Ionicons name="ios-call" size={30} color="#060645" />
        </View>
      ),
    }
  );
  const user1 = "7297291937289c";
  const user2 = "3297291933289d";
  const chatId = user1 + user2;
  const [message, setMessage] = useState("");
  const SendNewMessage = async () => {
    const NewMessage = {
      messageId: chatId + Math.random()*10000 + Timestamp.now(),
      senderId:user1,
      content: message,
      timestamp: Timestamp.now(),
    }
    await updateDoc(doc(db, "chat", chatId), {
      messages: arrayUnion(NewMessage),
    });
     
  }
  
  return (
    <View>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.meBox}>
            <Text style={styles.meText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              adipisci aperiam eum esse vel accusamus assumenda, vitae rem sequi
              reprehenderit possimus repellat! Nobis, velit iure suscipit rem
              ullam enim doloremque!
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.otherText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate quasi suscipit! Expedita at deleniti debitis minima
              saepe modi{" "}
            </Text>
          </View>
          <View style={styles.meBox}>
            <Text style={styles.meText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              adipisci aperiam eum esse vel accusamus assumenda, vitae rem sequi
              reprehenderit possimus repellat! Nobis, velit iure suscipit rem
              ullam enim doloremque!
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.otherText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate quasi suscipit! Expedita at deleniti debitis minima
              saepe modi{" "}
            </Text>
          </View>
          <View style={styles.meBox}>
            <Text style={styles.meText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              adipisci aperiam eum esse vel accusamus assumenda, vitae rem sequi
              reprehenderit possimus repellat! Nobis, velit iure suscipit rem
              ullam enim doloremque!
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.otherText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate quasi suscipit! Expedita at deleniti debitis minima
              saepe modi{" "}
            </Text>
          </View>
          <View style={styles.meBox}>
            <Text style={styles.meText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              adipisci aperiam eum esse vel accusamus assumenda, vitae rem sequi
              reprehenderit possimus repellat! Nobis, velit iure suscipit rem
              ullam enim doloremque!
            </Text>
          </View>
          <View style={styles.meBox}>
            <Text style={styles.meText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              adipisci aperiam eum esse vel accusamus assumenda, vitae rem sequi
              reprehenderit possimus repellat! Nobis, velit iure suscipit rem
              ullam enim doloremque!
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.otherText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate quasi suscipit! Expedita at deleniti debitis minima
              saepe modi{" "}
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.otherText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate quasi suscipit! Expedita at deleniti debitis minima
              saepe modi{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.MessageInput}>
        <View style={styles.RightInput}>
          <MaterialCommunityIcons
            name="emoticon-wink-outline"
            size={28}
            color="black"
          />
          <TextInput
            onChangeText={(text) => {
              setMessage(text);
            }}
            onSubmitEditing={SendNewMessage}
            value={message}
            placeholder="Type a message"
          />
        </View>
        <View style={styles.RightInput}>
          <Entypo name="attachment" size={25} color="#344277" />
          <FontAwesome name="microphone" size={25} color="# 344277" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    paddingVertical: 15,
    // backgroundColor: "red",
    gap: 10,
  },
  meBox: {
    width: "70%",
    // height: 50,
    backgroundColor: "#344277",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    alignSelf: "flex-end",
    padding: 10,
    marginHorizontal: 10,
  },
  meText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  otherBox: {
    width: "70%",
    // height: 50,
    backgroundColor: "#A5B1D999",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 10,
    marginHorizontal: 10,
  },
  otherText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  MessageInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    // margin: 20,
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0,
    shadowRadius: 3.84,
    elevation: 5,

    paddingVertical: 10,
  },
  RightInput: {
    flexDirection: "row",
    gap: 10,
  },
  HeaderRight: {
    flexDirection: "row",
    gap: 15,
  },
});

export default CertainChat;
