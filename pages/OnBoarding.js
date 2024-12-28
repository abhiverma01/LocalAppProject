import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "../assets/JobSearch.svg";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function OnBoarding() {
  const navigation = useNavigation();

  const onProccedHadler = () => {
    navigation.navigate("HomeStack");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Logo height={height / 2.5} width={width}></Logo>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.lgText}>
          Find the Jobs{" "}
          <Ionicons name="bag-sharp" size={24} color="white" />
        </Text>
        <View style={{ paddingHorizontal: 14 }}>
          <Text style={styles.smText}>
          Find your perfect role and take your career to the next level!
          </Text>
        </View>
        <Ripple onPress={onProccedHadler} style={styles.btn}>
          <AntDesign name="forward" size={40} color="blue" />
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "white" },
  imgContainer: {
    position: "absolute",
    top: "10%",
    height: height / 2,
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    height: height / 2.5,
    width: "100%",
    backgroundColor: "#074799",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 85,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  lgText: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  smText: { color: "#A5BFCC", marginTop: 6, fontSize: 17, textAlign: "center" },
  btn: {
    height: 75,
    width: 75,
    backgroundColor: "white",
    borderRadius: 75,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
