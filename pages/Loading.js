import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#0A69FD" size="large"></ActivityIndicator>
    </View>
  );
}
