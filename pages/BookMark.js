import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { fetchBookmarks } from "../services";
import { useIsFocused } from "@react-navigation/native";
import Card from "../components/Card";



const renderItem = ({ item }) => {
  return <Card  passedData={item}></Card>;
};

export default function BookMark() {
 
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);

 
  useEffect(() => {
    const getBookMarks = async () => {
      const data = await fetchBookmarks();
      setData(data);
    };
    if (isFocused) {
      getBookMarks();
    }
  }, [isFocused]);

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }}>
        BookMark Collection
      </Text>
      {data.length === 0 && <Text>Nothing in the collection</Text>}
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 38,
    paddingBottom: 108,
    backgroundColor: "#F9F9F0",
  },
});
