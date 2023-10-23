import { View, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Text } from "@rneui/base";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
import { Link } from "expo-router";

export default function _screen() {
  useNavigationExitOnBack();

  return (
    <View style={styles.container}>
      <Text h1>Home</Text>

      <Link href={"/(auth)/(home)/details"}>Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
});
