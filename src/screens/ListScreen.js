import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" /* , key: "1" */ }, // Key should be string and unique
    { name: "Friend #2" /* , key: "2" */ },
    { name: "Friend #3" /* , key: "3" */ },
    { name: "Friend #4" /* , key: "4" */ },
    { name: "Friend #5" /* , key: "5" */ },
    { name: "Friend #6" /* , key: "6" */ },
    { name: "Friend #7" /* , key: "7" */ },
    { name: "Friend #8" /* , key: "8" */ },
    { name: "Friend #9" /* , key: "9" */ },
  ];

  //   friends.element === {item: {name: 'Friend #1'}, index: 0}

  return (
    <FlatList
      keyExtractor={(friend) => friend.name} // Extract key
      data={friends}
      renderItem={({ item }) => {
        //Destructing
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
