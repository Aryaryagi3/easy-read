import { SafeAreaView, View, Text } from "react-native";
import React, {useEffect, useState} from "react";

import ListBooks from "../components/ListBooks";

import { FontAwesome5 } from "@expo/vector-icons";
import Chapter from "../services/sqlite/Chapter";
import GlobalStyle from "../../assets/styles/global";

export default function Read(props) {
  const [data, setData] = useState([]);

  const { id } = props.route.params;

  const getData = () => {
    let query = Chapter.find(id);
    query.then((result) => {
      setData(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <SafeAreaView style={GlobalStyle.container}>
        <View>
          <Text>{data.chapter_name}</Text>
          <Text>
            {data.content}
          </Text>
        </View>
      </SafeAreaView>
  );
}
