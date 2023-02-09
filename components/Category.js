import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function Category({ categoryData, navigateTo }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={navigateTo}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPress : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        android_disableSound={true}
      >
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: categoryData.color,
            },
          ]}
        >
          <Text style={styles.title}>{categoryData.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    height: 150,
    width: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
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
  button: {
    flex: 1,
  },
  buttonPress: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
