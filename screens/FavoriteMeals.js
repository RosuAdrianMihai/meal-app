// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import MealList from "../components/MealList/MealList";

import { MEALS as meals } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

import { useSelector } from "react-redux";

function FavoriteMeals() {
  // const favoriteMeals = useContext(FavoritesContext);
  const favoriteMeals = useSelector((state) => {
    return state.favoriteMeals.ids;
  });

  const favoriteMealsToDisplay = meals.filter((meal) => {
    // return favoriteMeals.ids.includes(meal.id);
    return favoriteMeals.includes(meal.id);
  });

  if (favoriteMealsToDisplay.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList listOfMeals={favoriteMealsToDisplay} />;
}

export default FavoriteMeals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
