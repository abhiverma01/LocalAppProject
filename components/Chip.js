import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Chip({ type, value, icon, color }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: color,
          height: 40,
          width: 40,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            marginBottom: -5,
          }}
        >
          {type}
        </Text>
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 20 }}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: "#CFCFCF",
    gap: 8,
    // borderWidth:1,
    width: "50%",
    alignItems: "center",
  },
});
