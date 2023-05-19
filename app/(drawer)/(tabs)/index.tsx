import { View, FlatList, StyleSheet, Pressable } from "react-native";
import Tweet from "../../../components/Tweet";
import tweets from "../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Pressable style={styles.floatingButton}>
        <Link href="/new-tweet" asChild>
          <Entypo name="plus" size={24} color="white" />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // the below is how we position the button ON TOP OF our FlatList:
    position: "absolute",
    right: 15,
    bottom: 15,
    // using react native shadow generator:
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
