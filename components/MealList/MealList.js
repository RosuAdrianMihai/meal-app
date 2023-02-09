import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealList({ listOfMeals }) {
  const mealToDisplay = (itemData) => {
    return <MealItem mealData={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listOfMeals}
        renderItem={mealToDisplay}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
