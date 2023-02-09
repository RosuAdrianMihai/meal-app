import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import MealGeneralInfo from "../components/MealGeneralInfo";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/MealDetails/IconButton";

import { useLayoutEffect, useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetails({ route, navigation }) {
  const data = route.params;

  // const favoritesContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => {
    return state.favoriteMeals.ids;
  });

  const dispatch = useDispatch();

  // const mealsIsFavorite = favoritesContext.ids.includes(data.id);

  const mealsIsFavorite = favoriteMealIds.includes(data.id);

  function changeFavoriteStatusHandler() {
    if (mealsIsFavorite) {
      // favoritesContext.removeFavorite(data.id);
      dispatch(removeFavorite({ id: data.id }));
    } else {
      // favoritesContext.addFavorite(data.id);
      dispatch(addFavorite({ id: data.id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPressHandler={changeFavoriteStatusHandler}
            icon={mealsIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: data.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{data.title}</Text>

      <MealGeneralInfo mealData={data} textStyle={styles.detailText} />

      <View style={styles.innerContainer}>
        <Subtitle subtitle="Ingredients" />
        <List data={data.ingredients} />

        <Subtitle subtitle="Steps" />
        <List data={data.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 8,
    marginBottom: 24,
    width: "80%",
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
