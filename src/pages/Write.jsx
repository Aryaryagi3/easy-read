import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  Text, Button, Alert,
  KeyboardAvoidingView, StyleSheet,
} from "react-native";
import React, {useEffect, useState} from "react";
import Chapter from "../services/sqlite/Chapter"
import Book from "../services/sqlite/Book";
import GlobalStyle from "../../assets/styles/global";

export default function Write(props) {
  const [chapterName, setChapterName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [volume, setVolume] = React.useState("");

  const [data, setData] = useState([]);

  const { id } = props.route.params;

  const getData = () => {
    let query = Chapter.find(id);
    query.then((result) => {
      setData(result);
    });
  };

  const confirm = () => {
    Alert.alert("Confirmação",
        "Deseja mesmo remover o capítulo?",
        [
          {
            text: "Sim",
            onPress: () => remove()
          },
          {
            text: "Não",
            onPress: () => false
          },
        ]
    );
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setChapterName(data.chapter_name);
    setContent(data.content);
    setVolume(data.volume);
  }, [data.chapter_name, data.content, data.volume]);

  const send = () => {
    Chapter.update(id,{
      chapter_name: chapterName,
      content: content,
      volume: volume,
    })
        .catch((err) => console.log(err));
  };


  const remove = () => {
    Chapter.remove(id,{
    }).then(id => props.navigation.push("Sua obra", {id: id}))
        .catch((err) => console.log(err));
  };

  return (
      <SafeAreaView style={GlobalStyle.container}>
        <View>
          <Button
              onPress={send}
              title="Enviar"
          />
          <Button
              onPress={confirm}
              title="Remover capítulo"
          />
          <Text>Nome do capítulo:</Text>
          <TextInput onChangeText={setChapterName} value={chapterName} />
          <Text>Volume:</Text>
          <TextInput onChangeText={setVolume} value={volume} />
          <Text>Conteúdo:</Text>
          <TextInput style={styles.input} numberOfLines={20} multiline onChangeText={setContent} value={content} />
        </View>

      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
  },
});

