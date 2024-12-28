import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  ToastAndroid,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Brief from "../assets/briefcase.svg";
import Chip from "../components/Chip";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";
import { useRoute } from "@react-navigation/native";
import { AddToBookMarks } from "../services";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  //Collects the passed Data
  const data = route.params.passedData;

  const BackIconPressHandler = () => {
    navigation.navigate("Home");
  };

  //Handler that add's to BookMark
  const AddToBookMarksHandler = async () => {
    await AddToBookMarks(data);
    ToastAndroid.show("Succesfully Bookmarked", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Pressable onPress={BackIconPressHandler}>
            <Ionicons name="arrow-back-outline" size={28} color="black" />
          </Pressable>
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 18 }}>
            Job Details
          </Text>
          <Ripple onPress={AddToBookMarksHandler}>
            <MaterialCommunityIcons
              name="bookmark-plus-outline"
              size={30}
              color="black"
            />
          </Ripple>
        </View>
        <View style={styles.midContainer}>
          <View style={styles.imgContainer}>
            <Brief height={45} width={45}></Brief>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {data.title}
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 14 }}>
            {data.Place}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Chip
              key={1}
              type="Expected Salary"
              value={(typeof data.salary.min === 'number' && typeof data.salary.max === 'number') 
                ? `${(data.salary.min / 1000).toFixed(0)}k - ${(data.salary.max / 1000).toFixed(0)}k`
                : '-'}
              icon={<FontAwesome name="money" size={24} color="black" />}
              color="#EBF6F9"
            ></Chip>
            <Chip
              key={2}
              type="Job Type"
              value="FullTime"
              icon={<FontAwesome5 name="briefcase" size={24} color="black" />}
              color="#F9EBEB"
            ></Chip>
          </View>
          <View style={styles.row}>
            <Chip
              key={3}
              type="Views"
              value={data.views}
              icon={<AntDesign name="eyeo" size={24} color="black" />}
              color="#F4F9EB"
            ></Chip>
            <Chip
              key={4}
              type="Openings"
              value={data.openings}
              icon={<Feather name="users" size={24} color="black" />}
              color="#EBECF9"
            ></Chip>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
            Job description
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: "grey",
              fontSize: 13,
            }}
          >
            {data.description}{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 38,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  midContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  imgContainer: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  detailsContainer: {
    gap: 4,
    flexDirection: "column",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  descriptionContainer: {
    flexDirection: "column",
    marginVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 8,
    paddingTop: 8,
  },
});
