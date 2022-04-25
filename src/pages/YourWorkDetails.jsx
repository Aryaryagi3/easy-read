import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
} from "react-native";
import React from "react";

import ListChapters from "../components/ListChapters";

export default function YourWorkDetails(props) {
  const [text, onChangeText] = React.useState("Lorem Ipsum");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text>Título da obra</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
        <View>
          <Text>Autor da obra</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
        <View>
          <Text>Gênero da obra</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
        <View>
          <Text>Sinopse da obra</Text>
          <TextInput onChangeText={onChangeText} value={text} />
        </View>
      </View>
      <ListChapters props={props} title={"Escrever"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
