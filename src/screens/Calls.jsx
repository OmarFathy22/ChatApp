import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native"
const Calls = () => {
  const renderItem = useCallback(
    (item, index) => (
      <View style={styles.Box}>
        <View style={styles.LeftContainer}>
          <View style={styles.ImageContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://res.cloudinary.com/docirki1d/image/upload/v1698149317/fiverr/no_avatar_zh6adx.png",
              }}
              style={styles.ImageContainer}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.Name}>{"Omar Fat7y"}</Text>
            <View style={styles.You}>
              {index % 3 == 0 ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <Path
                    d="M1.64666 9.20068L10.6209 0.226415C10.7719 0.0754708 10.964 -1.99792e-06 11.1973 -1.97753e-06C11.4305 -1.95713e-06 11.6226 0.0754709 11.7736 0.226415C11.9245 0.377357 12 0.569467 12 0.802743C12 1.03602 11.9245 1.22813 11.7736 1.37907L2.79932 10.3533L7.40995 10.3533C7.64323 10.3533 7.8389 10.4324 7.99698 10.5905C8.15506 10.7485 8.23383 10.9439 8.23328 11.1767C8.23328 11.4099 8.15424 11.6056 7.99616 11.7637C7.83808 11.9218 7.64268 12.0005 7.40995 12L0.82333 12C0.590055 12 0.394378 11.921 0.236299 11.7629C0.0782194 11.6048 -0.00054545 11.4094 2.933e-06 11.1767L3.50882e-06 4.59005C3.52922e-06 4.35677 0.0790431 4.16109 0.237122 4.00302C0.3952 3.84494 0.590604 3.76617 0.823331 3.76672C1.05661 3.76672 1.25228 3.84576 1.41036 4.00384C1.56844 4.16192 1.64721 4.35732 1.64666 4.59005L1.64666 9.20068Z"
                    fill="#00FF29"
                  />
                </Svg>
              ) : index % 2 == 0 ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <Path
                    d="M10.3533 2.79932L1.37907 11.7736C1.22813 11.9245 1.03602 12 0.802744 12C0.569468 12 0.377358 11.9245 0.226415 11.7736C0.0754714 11.6226 0 11.4305 0 11.1973C0 10.964 0.0754714 10.7719 0.226415 10.6209L9.20068 1.64666L4.59005 1.64666C4.35677 1.64666 4.1611 1.56762 4.00302 1.40954C3.84494 1.25146 3.76617 1.05606 3.76672 0.82333C3.76672 0.590054 3.84576 0.394377 4.00384 0.236298C4.16192 0.0782191 4.35732 -0.000546036 4.59005 2.84888e-06L11.1767 2.84888e-06C11.4099 2.84888e-06 11.6056 0.0790424 11.7637 0.237121C11.9218 0.3952 12.0005 0.590603 12 0.82333L12 7.40995C12 7.64323 11.921 7.8389 11.7629 7.99698C11.6048 8.15506 11.4094 8.23383 11.1767 8.23328C10.9434 8.23328 10.7477 8.15424 10.5896 7.99616C10.4316 7.83808 10.3528 7.64268 10.3533 7.40995L10.3533 2.79932Z"
                    fill="#00FF29"
                  />
                </Svg>
              ) : (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                >
                  <Path
                    d="M14.5658 0.641667L8.25 6.9575L3.12583 1.83333H6.41667C6.92083 1.83333 7.33333 1.42083 7.33333 0.916667C7.33333 0.4125 6.92083 0 6.41667 0H0.916667C0.4125 0 0 0.4125 0 0.916667V6.41667C0 6.92083 0.4125 7.33333 0.916667 7.33333C1.42083 7.33333 1.83333 6.92083 1.83333 6.41667V3.12583L7.59917 8.89167C7.95667 9.24917 8.53417 9.24917 8.89167 8.89167L15.8492 1.93417C15.9341 1.84936 16.0016 1.74863 16.0476 1.63774C16.0936 1.52685 16.1172 1.40797 16.1172 1.28792C16.1172 1.16786 16.0936 1.04899 16.0476 0.938094C16.0016 0.827202 15.9341 0.726471 15.8492 0.641667C15.5008 0.293333 14.9142 0.293333 14.5658 0.641667Z"
                    fill="#FF0000"
                  />
                </Svg>
              )}
              <Text>Today 1:04 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.HeaderRight}>
          <FontAwesome name="video-camera" size={30} color="#060645" />
          <Ionicons name="ios-call" size={30} color="#060645" />
        </View>
      </View>
    ),
    []
  );

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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Calls</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderSetting />
      <View style={{ flex: 1, marginBottom: 105 }}>
        <FlatList
          data={Array(20).fill()}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    alignItems: "center",
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
    alignItems: "center",
    gap: 5,
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  HeaderRight: {
    flexDirection: "row",
    gap: 13,
    // alignItems: "center",
  },
});

export default Calls;
