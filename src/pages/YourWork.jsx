import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React from "react";
import GlobalStyle from "../../assets/styles/global";
import {FontAwesome5} from "@expo/vector-icons";
import ListBooks from "../components/ListBooks";

export default function YourWork(props) {
  return (
      <SafeAreaView>
        <TouchableOpacity
            onPress={() => {
              props.navigation.push("Novo livro");
            }}
        >
          <View style={GlobalStyle.searchIcon}>
            <FontAwesome5 name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <ListBooks props={props} mode={"Sua obra"}/>
        </View>
      </SafeAreaView>
  );
}
