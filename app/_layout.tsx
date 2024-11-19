import { View, Text, StatusBar } from "react-native";
import "../global.css";
import React from "react";
import { Stack, Tabs } from "expo-router";

const Rootlayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}></Stack>;
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
    </>
  );
};

export default Rootlayout;
