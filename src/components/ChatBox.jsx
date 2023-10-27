import React, { useState,useCallback, useMemo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/Config";
import { collection, query, getDocs , setDoc , doc , Timestamp } from "firebase/firestore";


const ChatBox = () => {
  const [Users, setUsers] = useState([]);
  const [loading , setLoading] = useState(true);
  const navigation = useNavigation();
  const GetUsers = async() => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    setUsers(querySnapshot?.docs?.map((doc) => doc.data()));
    setLoading(false);
    // console.log("Users", Users)
  }
  useEffect(() => {
    GetUsers();
  }, [loading]);
  const data = Users;
  const NewChat = async () => {
    const user1 = "7297291937289c";
    const user2 = "3297291933289d";
    const chatId = user1 + user2;
    try {
      const docRef = await setDoc(doc(db, "chat", chatId), {
        chatId: user1 + user2,
        participants: [user1, user2],
        messages: [],
        createdAt: Timestamp.now(),
      });
      // console.log("Document written with ID: ", docRef.id);
      // docRef.id = user1 + user2;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const renderItem = useCallback(
    (item, index) => (
      <Pressable
      key={index}
        onPress={() => {
          navigation.navigate("CertainChat" , {
            name:item?.name,
            photo:item?.photo,
            id:item?.id,
          });
          // NewChat();
        }}
      >
        <View style={styles.Box} >
          <View style={styles.LeftContainer}>
            <View style={styles.ImageContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: item?.photo }}
                style={styles.ImageContainer}
              />
            </View>
            <View>
              <Text style={styles.Name}>{item?.name}</Text>
              <View style={styles.You}>
                <Text>You:</Text>
                <Text>Tegy valorant</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Yesterday</Text>
            <Feather name="eye" size={24} color="black" />
          </View>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <View style={styles.BoxContainer}>
      {loading? <ActivityIndicator/>:<BottomSheetScrollView>{data.map(renderItem)}</BottomSheetScrollView>}
    </View>
  );
};

const styles = StyleSheet.create({
  BoxContainer: {
    flex: 1,
    width: "100%",
    gap: 10,
    // borderWidth:1,
    // borderColor:"red",
  },
  Box: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    transform: [{ translateY: 10 }],
    marginBottom: 15,
  },
  LeftContainer: {
    flexDirection: "row",
    gap: 10,

    // borderWidth:1,
  },
  ImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  You: {
    flexDirection: "row",
    gap: 2,
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default ChatBox;
