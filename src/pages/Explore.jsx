import { SafeAreaView, TextInput, View, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import React from "react";

import GlobalStyle from "../../assets/styles/global";

import ListBooks from "../components/ListBooks";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Explore(props) {
  const [text, onChangeText] = React.useState("Busque pelo título ou autor");

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={GlobalStyle.search}>
        <TextInput
          style={GlobalStyle.searchBar}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.push("Buscar");
          }}
        >
          <View style={GlobalStyle.searchIcon}>
            <FontAwesome5 name="search" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={GlobalStyle.recomendationsText}>Recomendações</Text>
      <ListBooks style={GlobalStyle.listBooks} props={props} />
    </SafeAreaView>
  );
}
