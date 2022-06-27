import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  Text, Button, Alert,
} from "react-native";
import React, {useEffect, useState} from "react";
import Chapter from "../services/sqlite/Chapter"
import Book from "../services/sqlite/Book";

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
        "Deseja mesmo fazer essas alterações??",
        [
          {
            text: "Sim",
            onPress: () => send()
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

  return (
      <SafeAreaView>
        <View>
          <Text>Nome do capítulo:</Text>
          <TextInput onChangeText={setChapterName} value={chapterName} />
          <Text>Volume:</Text>
          <TextInput onChangeText={setVolume} value={volume} />
          <Text>Conteúdo:</Text>
          <TextInput onChangeText={setContent} value={content} />
        </View>
        <Button
            onPress={confirm}
            title="Enviar"
        />
      </SafeAreaView>
  );
}
