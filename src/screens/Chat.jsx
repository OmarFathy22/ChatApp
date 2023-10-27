import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { fromCSS } from "@bacons/css-to-expo-linear-gradient";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import ChatBox from "../components/ChatBox";
import Stories from "../components/Stories";
import IStory from "../components/InstaStory";

const App = () => {
  const [index, setIndex] = useState(0);
  const bottomSheetModalRef = useRef();
  const snapPoints = useMemo(() => ["80%", "80%", "100%"], []);

  useLayoutEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    setIndex(index);
  }, []);

  // renders
  return (
    <>
      <View style={{ flex: 1 }}>
        <IStory />
      </View>
      <BottomSheetModalProvider>
        {/* temporary */}
        <LinearGradient colors={["black", "#0D1329"]} style={{ flex: 1 }}>
          <View style={{ flex: 1 }}></View>
        </LinearGradient>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            topInset={0}
            handleIndicatorStyle={{
              backgroundColor: index === 2 ? "transparent" : "grey",
            }}
            handleStyle={{
              // display: index === 2 ? "none" : "block",
              display: "none",
            }}
            enablePanDownToClose={false}
          >
            <View style={styles.contentContainer}>
              {/* <Text>Awesome 🎉</Text> */}
              <ChatBox />
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    // backgroundColor:"#0D1329"
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundGradient: { flex: 1 },
});

export default App;
