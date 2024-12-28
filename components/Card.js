import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Job from "../assets/briefcase.svg";
import { MaterialIcons } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";

export default function Card({ passedData }) {
  const navigation = useNavigation();

  const NavigatetoDetails = () => {
    navigation.navigate("Details", { passedData });
  };

  return (
    <Ripple onPress={NavigatetoDetails} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={styles.imgContainer}>
            <Job height={35} width={35}></Job>
          </View>
          <View>
            <Text style={styles.boldText}>
              {passedData.title.length > 20
                ? `${passedData.title.substring(0, 20)}...`
                : passedData.title}
            </Text>
            <Text style={styles.lightText}>{passedData.Place}</Text>
          </View>
        </View>
        <MaterialIcons name="verified" size={24} color="#06BCEE" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "grey" }}>Expected Salary</Text>
        <Text style={{ color: "#2A9FB8", fontFamily: "Poppins_500Medium" }}>
          ₹ {passedData.salary.min}-{passedData.salary.max}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            paddingVertical: 8,
            paddingHorizontal: 8,
            borderRadius: 14,
            backgroundColor: "#CDC1FF",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_300Light",
              color: "grey",
            }}
          >
            {passedData.number}
          </Text>
        </View>
      </View>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "column",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
  },
  imgContainer: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  boldText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    marginBottom: -5,
  },
  lightText: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
  },
});
