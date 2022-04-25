import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image } from "react-native";

import GlobalStyle from "../../../assets/styles/global";

import books from "../../services/books";

export default function ListBooks(props) {
  const Item = ({ item }) => (
    <View style={GlobalStyle.bookContainer}>
      <TouchableOpacity
        onPress={() => {
          props.props.navigation.navigate("Detalhes");
        }}
      >
        <View>
          <Image
            style={GlobalStyle.bookCover}
            source={require("../../../assets/images/book-cover.jpg")}
          ></Image>
          <View style={GlobalStyle.bookInfo}>
            <Text style={GlobalStyle.bookTitle}>
              {item.title} {item.id}
            </Text>
            <Text style={GlobalStyle.bookAuthor}>{item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={books}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
