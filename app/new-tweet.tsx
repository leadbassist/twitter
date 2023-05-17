import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useState } from "react";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  //   const navigation = useNavigation();
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("Posting new tweet: ", text);

    // reset text to empty string:
    setText("");
    // also go back to Homepage
    // navigation.goBack();
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>

          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            // we pass the STATE variable "text" here via "value" key:
            value={text}
            // we are using a simplified arrow function here:
            // it was: onChangeText={(newValue) => setText(newValue)}
            onChangeText={setText}
            placeholder="What's new?"
            // ensure word-wrap functionality
            multiline
            // specify how many lines allowable
            numberOfLines={5}
            // even with word-wrap, text was partially seen spilling outside the screen
            // this will further ensure word-wrap is "visibly" working
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
