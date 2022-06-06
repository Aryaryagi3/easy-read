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

export default function YourWork(props) {
  return (
    <SafeAreaView>
      <View style={GlobalStyle.plusIcon}>
        <FontAwesome5 name="plus" size={24} color="white" />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.push("Sua obra");
        }}
      >
        <View>
          <Text>Lorem ipsum dolor sit amet</Text>
          <View>
            <Image
              source={require("../../assets/images/book-cover.jpg")}
            ></Image>
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
                <Text>Capítulos</Text>
                <Text>20</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
