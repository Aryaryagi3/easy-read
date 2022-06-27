import React,{useEffect, useState} from "react";
import {TouchableOpacity, FlatList, View, Text, Image, Alert, Modal, Button} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

import GlobalStyle from "../../../assets/styles/global";

import Book from '../../services/sqlite/Book';

export default function ListBooks(props) {
    const { showActionSheetWithOptions } = useActionSheet();
    const [modalVisible, setModalVisible] = React.useState(false);
    const { mode } = props;

    const [books, setBooks] = useState([]);

    const cancelButtonIndex = 2;
    let options;

    if (mode === "Sua obra") {
        options = ["Editar", "Amostra", "Cancelar"];
    } else {
        options = ["Detalhes", "Amostra", "Cancelar"];
    }

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        Book.all().then((data) => {
            setBooks(data);
        });
    };

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
                                    props.props.navigation.push(mode, {id: item.id});
                                    break;
                                case 1:
                                    setModalVisible(true);
                                    break;
                            }
                        }
                    )
                }}
            >
                <View>
                    <Image
                        style={GlobalStyle.bookCover}
                        source={require("../../../assets/images/book-cover.jpg")}
                    />
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
