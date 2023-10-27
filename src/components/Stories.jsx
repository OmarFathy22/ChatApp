import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.StoriesText}>Stories</Text>
      <FlatList
        style={styles.ListContainer}
        horizontal={true}
        data={Array(18).fill()}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginLeft: index === 0 ? 20 : 0,
                marginRight: index === 17 ? 20 : 0,
              }}
            >
              <Image
                source={require("../../assets/Group5.png")}
                style={{ width: 100, height: 100 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
    // transform: [{ translateX: 20 }],
  },
  ListContainer: {
    // marginHorizontal: 20,
    // borderWidth: 1,
    borderColor: "red",
  },
  StoriesText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#344277",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Stories;
