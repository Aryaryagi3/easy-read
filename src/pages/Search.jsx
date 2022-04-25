import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  Text,
} from "react-native";
import React from "react";

import GlobalStyle from "../../assets/styles/global";

import ListBooks from "../components/ListBooks";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Search(props) {
  const [text, onChangeText] = React.useState("Busque pelo título ou autor");

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Text style={GlobalStyle.searchText}>Buscas por:</Text>
      <Text style={GlobalStyle.searchText}>Lorem Ipsum</Text>
      <ListBooks />
    </SafeAreaView>
  );
}
