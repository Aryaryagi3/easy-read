import {
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    View,
    Text,
    Button
} from "react-native";
import React from "react";
import Book from "../services/sqlite/Book"
import GlobalStyle from "../../assets/styles/global";

export default function NewBook(props) {
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [genre, setGenre] = React.useState("");

    const send = () => {
        Book.create({
            title: title,
            author: author,
            genre: genre,
        })
            .then(id => props.navigation.push("Sua obra", {id: id}))
            .catch((err) => console.log(err));
    };

    return (
        <SafeAreaView style={GlobalStyle.container}>
            <View>
                <Text>Título:</Text>
                <TextInput onChangeText={setTitle} value={title} />
                <Text>Autor:</Text>
                <TextInput onChangeText={setAuthor} value={author} />
                <Text>Gênero:</Text>
                <TextInput onChangeText={setGenre} value={genre} />
                <Button
                    onPress={send}
                    title="Enviar"
                />
            </View>
        </SafeAreaView>
    );
}
