import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React, {useEffect, useState} from "react";

import GlobalStyle from "../../assets/styles/global";

import ListChapters from "../components/ListChapters";
import Book from "../services/sqlite/Book";
import Chapter from "../services/sqlite/Chapter";

export default function Details(props) {

  const { id } = props.route.params;

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let query = Book.find(id);
    query.then((result) => {
      setData(result);
    });
  };

  return (
      <SafeAreaView style={GlobalStyle.container}>
        <View>
          <Text>{data.title}</Text>
          <View>
            <Image source={require("../../assets/images/book-cover.jpg")}></Image>
            <View>
              <View>
                <Text>Autor</Text>
                <Text>{data.author}</Text>
              </View>
              <View>
                <Text>Gênero</Text>
                <Text>{data.genre}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text>Capítulos:</Text>
        <ListChapters props={props} id={id} mode={"Ler"}/>
      </SafeAreaView>
  );
}
