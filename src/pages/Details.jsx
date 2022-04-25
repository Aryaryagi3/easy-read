import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React from "react";

import GlobalStyle from "../../assets/styles/global";

import ListChapters from "../components/ListChapters";

export default function Details(props) {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View>
        <Text>Lorem ipsum dolor sit amet</Text>
        <View>
          <Image source={require("../../assets/images/book-cover.jpg")}></Image>
          <View>
            <View>
              <Text>Autor</Text>
              <Text>Lorem ipsum</Text>
            </View>
            <View>
              <Text>Gênero</Text>
              <Text>Lorem ipsum</Text>
            </View>
            <View>
              <Text>Volumes</Text>
              <Text>2</Text>
            </View>
            <View>
              <Text>Capítulos</Text>
              <Text>20</Text>
            </View>
          </View>
        </View>
        <ListChapters props={props} title={"Ler"} />
      </View>
    </SafeAreaView>
  );
}
