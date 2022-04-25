import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";

import ListBooks from "../components/ListBooks";

import GlobalStyle from "../../assets/styles/global";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Bookshelf(props) {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={GlobalStyle.plusIcon}>
        <FontAwesome5 name="plus" size={24} color="white" />
      </View>
      <Text style={GlobalStyle.bookShelfText}>Sua estante</Text>
      <ListBooks props={props} />
    </SafeAreaView>
  );
}
