import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { COLORS } from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { arrayUnion, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";
import { Timestamp } from "firebase/firestore";
import HeaderLeft from "../components/HeaderLeft";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDocument } from "react-firebase-hooks/firestore";
import { G } from "react-native-svg";
import moment from "moment";

const CertainChat = ({ navigation, route }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [chatId, setChatId] = useState("");
  const [chatId2, setChatId2] = useState("");
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  // const [loading, setLoading] = useState(true);
  const obj = route.params;
  useEffect(() => {
    const CheckUser = async () => {
      const res = await AsyncStorage.getItem("user");
      const user = JSON.parse(res);
      setUser1(user?.uid);
      setUser2(obj?.id);
    };
    CheckUser();
  }, []);

  const GetData = async () => {
    const docRef1 = doc(
      db,
      "chat",
      user1 > user2 ? user1 + user2 : user2 + user1
    );
    const docSnap1 = await getDoc(docRef1);
    if (docSnap1.exists()) {
      setChat(docSnap1.data()?.messages);
    } else {
      console.log("No Chat Exist");
    }
  };
  if (user1 && user2) {
    GetData();
  }
  // console.warn(chatId < chatId2)
  // console.warn(chatId , chatId2)
  // console.log(chatId, chatId2);
  // const GetData2 = async () => {
  //   const docRef = doc(db, "chat", chatId2);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     setChat(docSnap.data()?.messages);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //   }
  // };
  // if (chatId) {
  //   GetData1();
  // }
  // else if(chatId2){
  //     GetData2();

  // }
  // else{
  //     // checkChatExist();
  // }

  navigation.setOptions({
    headerShown: true,
    title: "",

    headerLeft: () => <HeaderLeft obj={obj} />,
    headerRight: () => (
      <View style={styles.HeaderRight}>
        <FontAwesome name="video-camera" size={30} color="#060645" />
        <Ionicons name="ios-call" size={30} color="#060645" />
      </View>
    ),
  });

  const SendNewMessage = async () => {
    const NewMessage = {
      messageId: chatId + Math.random() * 1000000 + Timestamp.now(),
      senderId: user1,
      content: message,
      time: moment(Timestamp.now().toDate()).format("LT"),
    };
    setMessage("");
    const docRef = doc(
      db,
      "chat",
      user1 > user2 ? user1 + user2 : user2 + user1
    );
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      // Document exists, update it
      await updateDoc(docRef, {
        messages: arrayUnion(NewMessage),
      });
    } else {
      // Document doesn't exist, create it first
      await setDoc(docRef, {
        messages: [NewMessage],
      });
      setChat([NewMessage]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#a5b1d91a" }}>
      <ScrollView>
        <View style={styles.Container}>
          {chat?.map((item, index) => {
            return (
              <View
                key={index}
                style={item?.senderId == user1 ? styles.meBox : styles.otherBox}
              >
                <Text
                  style={
                    item?.senderId == user1 ? styles.meText : styles.otherText
                  }
                >
                  {item?.content}
                </Text>
                <Text style={styles.timeText}>{item?.time}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.MessageInput}>
        <View style={styles.LeftInput}>
          <MaterialCommunityIcons
            name="emoticon-wink-outline"
            size={28}
            color="#344277"
          />
          <TextInput
            // multiline={true}
            style={styles.TextInput}
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
          <FontAwesome name="microphone" size={25} color="#344277" />
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
    position: "relative",
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
  TextInput: {
    width: "80%",

    // borderColor: "red",
    // minHeight: 50,
  },
  meText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-end",
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
    gap: 7,
    position: "absolute",
    right: 10,
  },
  LeftInput: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  HeaderRight: {
    flexDirection: "row",
    gap: 15,
  },
});

export default CertainChat;
