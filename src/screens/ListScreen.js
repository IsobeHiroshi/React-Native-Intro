import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    // Key should be string and unique
    { name: "Friend #1", age: 20 /* , key: "1" */ },
    { name: "Friend #2", age: 45 /* , key: "2" */ },
    { name: "Friend #3", age: 32 /* , key: "3" */ },
    { name: "Friend #4", age: 27 /* , key: "4" */ },
    { name: "Friend #5", age: 53 /* , key: "5" */ },
    { name: "Friend #6", age: 53 /* , key: "6" */ },
    { name: "Friend #7", age: 30 /* , key: "7" */ },
    { name: "Friend #8", age: 41 /* , key: "8" */ },
    { name: "Friend #9", age: 23 /* , key: "9" */ },
  ];

  //   friends.element === {item: {name: 'Friend #1'}, index: 0}

  return (
    <FlatList
      /* horizontal
      showsHorizontalScrollIndicator={false} */
      keyExtractor={(friend) => friend.name} // Extract key
      data={friends}
      renderItem={({ item }) => {
        //Destructing
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
