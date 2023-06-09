import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "../components/IconButton";
import { Link } from "expo-router";

import { TweetProps } from "../types";

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.userName}>{tweet.user.username}</Text>
            <Text style={styles.userName}>• 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && <Image src={tweet.image} style={styles.Image} />}
          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
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
  name: {
    fontWeight: "600",
  },
  userName: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  Image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

export default Tweet;
