import { StyleSheet, Text } from "react-native";

function Subtitle({ subtitle }) {
  return <Text style={styles.subtitle}>{subtitle}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
