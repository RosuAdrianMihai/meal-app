import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealGeneralInfo from "../MealGeneralInfo";

function Meal({ mealData }) {
  const navigation = useNavigation();

  const imageUrl = mealData.imageUrl;

  function onNavigation() {
    navigation.navigate("MealDetails", mealData);
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onNavigation}
        android_ripple={{
          color: "#ccc",
        }}
        android_disableSound={true}
        style={({ pressed }) => (pressed ? styles.buttonPress : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{mealData.title}</Text>
          </View>

          <MealGeneralInfo mealData={mealData} />
        </View>
      </Pressable>
    </View>
  );
}

export default Meal;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.select({
      android: "hidden",
      ios: "visible",
    }),
  },
  buttonPress: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
