import { View, FlatList, StyleSheet } from "react-native";

import React from "react";

import { CATEGORIES as categories } from "../data/dummy-data";

import Category from "../components/Category";

function MealCategories({ navigation }) {
  function pressHandler(destination, itemData) {
    navigation.navigate(destination, itemData);
  }

  const categoryItem = (itemData) => {
    return (
      <Category
        categoryData={itemData.item}
        navigateTo={pressHandler.bind(this, "MealsOverview", itemData.item)}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={categories}
        renderItem={categoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default MealCategories;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
});
