import React from "react";
import {TouchableOpacity, FlatList, View, Text, Image, Alert, Modal, Button} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import GlobalStyle from "../../../assets/styles/global";

import Book from '../../services/sqlite/Book';

import books from '../../services/books';
import button from "react-native-web/dist/exports/Button";

export default function ListBooks(props) {
    const { showActionSheetWithOptions } = useActionSheet();
    const [modalVisible, setModalVisible] = React.useState(false);


    const options = ["Detalhes", "Adicionar a estante", "Amostra", "Cancelar"];
    const cancelButtonIndex = 3;

    const showConfirm = () => {
        Alert.alert("Confirmação",
            "Deseja mesmo adicionar a estante?",
            [
                {
                    text: "Sim",
                    onPress: () => true
                },
                {
                    text: "Não",
                    onPress: () => false
                },
            ]
        );
    }

    const Item = ({ item }) => (
    <View style={GlobalStyle.bookContainer}>
      <TouchableOpacity
        onPress={() => {
          showActionSheetWithOptions(
              {
                  options,
                  cancelButtonIndex
              },
              (buttonIndex) => {
                  switch(buttonIndex) {
                      case 0:
                          props.props.navigation.navigate("Detalhes", {id: item.id});
                      case 1:
                          showConfirm();
                      case 2:
                          setModalVisible(true);
                  }
              }
          )
        }}
      >
        <View>
          <Image
            style={GlobalStyle.bookCover}
            source={require("../../../assets/images/book-cover.jpg")}
          ></Image>
          <View style={GlobalStyle.bookInfo}>
            <Text style={GlobalStyle.bookTitle}>
              {item.title}
            </Text>
            <Text style={GlobalStyle.bookAuthor}>{item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );


  return (
    <View>
        <View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View  style={GlobalStyle.modal}>
                    <Text>Detalhes</Text>
                    <Button title="Fechar" onPress={() => setModalVisible(false)}/>
                </View>
            </Modal>
        </View>
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
