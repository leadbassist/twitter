import { Text, View, Image, StyleSheet } from "react-native";

import { TweetProps } from "../types";

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.userName}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    // "StyleSheet.hairlineWidth" is the smallest width the computer can give you for the border
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    // change background color to see how much space this "container" is taking..
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
