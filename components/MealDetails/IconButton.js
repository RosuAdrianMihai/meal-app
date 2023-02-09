import { StyleSheet, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPressHandler, icon, color }) {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
