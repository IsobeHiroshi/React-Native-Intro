import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
};

// AlignSelf overwrites AlignItems in the parent element.
const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  textTwoStyle: {
    /* position: "absolute",
    ...StyleSheet.absoluteFillObject, // top, left, right, bottom === 0 */
    height: 100,
    width: 100,
    backgroundColor: "green",
    top: 100,
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
