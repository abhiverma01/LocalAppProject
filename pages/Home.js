import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import User from "../assets/user.svg";
import Card from "../components/Card";
import { FlatList } from "react-native";
import Loading from "./Loading";
import axios from "axios";
import { URL } from "../services";

const renderItem = ({ item }) => {
  const passedData = {};

  passedData.Place = item.primary_details?.Place
    ? item.primary_details.Place
    : "Not Defined";
  passedData.title = item.title ? item.title : "Not Defined";
  passedData.number = item.whatsapp_no ? item.whatsapp_no : "Not defined";
  passedData.openings = item.openings_count ? item.openings_count : "-";
  passedData.views = item.views ? item.views : "-";
  passedData.salary = {
    min: item.salary_min ? item.salary_min : '-',
    max: item.salary_max ? item.salary_max : '-',
  };
  passedData.description = item.other_details
    ? item.other_details
    : "Not available";
  passedData.id = item.id ? item.id : `${Math.random()}${Date.now()}`;

  return (
    <Card key={passedData.id} passedData={passedData}></Card>
  );
};

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(URL);
        const data = response.data;
        setData(data.results);
      } catch (err) {
        setIsError(true);
        console.log("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) return <Loading></Loading>;

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View>
          <User height={45} width={45}></User>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Poppins_600SemiBold",
              marginBottom: -8,
            }}
          >
            Hi !👋
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "grey",
              fontFamily: "Poppins_300Light",
            }}
          >
             Job updates
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }}>
          Latest jobs for you
        </Text>
      </View>
      <View style={{ flexDirection: "col" }}>
        {data.length===0&&<Text>No Data Available</Text>}
        {isError && <Text>Something went wrong.But Show Bookmarks</Text>}
        {data.length>0&&<FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) =>item.id?item.id:`${Math.random()}${Date.now()}`}
        />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 38,
    paddingBottom: 108,
    backgroundColor: "#EFF3EA",
  },
  headerContainer: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 12,
  },
});
