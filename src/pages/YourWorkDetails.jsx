import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Text, TouchableOpacity, Button, Alert,
} from "react-native";
import React, {useEffect, useState} from "react";

import ListChapters from "../components/ListChapters";
import Book from "../services/sqlite/Book";
import GlobalStyle from "../../assets/styles/global";
import {FontAwesome5} from "@expo/vector-icons";
import Chapter from "../services/sqlite/Chapter";

export default function YourWorkDetails(props) {
  const {id} = props.route.params;

  const [data, setData] = useState([]);

  const getData = () => {
    let query = Book.find(id);
    query.then((result) => {
      setData(result);
    });
  };

    const remove = () => {
        Book.remove(id,{
        })
            .catch((err) => console.log(err));
    };

  const confirm = () => {
    Alert.alert("Confirmação",
        "Deseja mesmo remover o livro?",
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
    setTitle(data.title);
    setAuthor(data.author);
    setGenre(data.genre);
  }, [data.title, data.author, data.genre]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const send = () => {
    let book = Book.update(id, {
      title: title,
      author: author,
      genre: genre,
    })
        .catch((err) => console.log(err));
  };

  return (
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <Text>Título da obra</Text>
            <TextInput onChangeText={setTitle} value={title}/>
          </View>
          <View>
            <Text>Autor da obra</Text>
            <TextInput onChangeText={setAuthor} value={author}/>
          </View>
          <View>
            <Text>Gênero da obra</Text>
            <TextInput onChangeText={setGenre} value={genre}/>
          </View>
        </View>
        <Button
            onPress={send}
            title="Enviar"
        />
          <Button
              onPress={confirm}
              title="Remover livro"
          />
        <TouchableOpacity
            onPress={() => {
              props.navigation.push("Novo Capítulo", {id: id});
            }}
        >
          <View style={GlobalStyle.searchIcon}>
            <FontAwesome5 name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Text>Capítulos:</Text>
        <ListChapters props={props} id={id} mode={"Escrever"}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
