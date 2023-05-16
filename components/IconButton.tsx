import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { IconButtonProps } from "../types";

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* ICON */}
      <EvilIcons name={icon} size={22} color="gray" />
      {/* number */}
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
