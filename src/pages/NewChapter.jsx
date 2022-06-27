import {
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    View,
    Text,
    Button
} from "react-native";
import React from "react";
import Chapter from "../services/sqlite/Chapter"
import GlobalStyle from "../../assets/styles/global";

export default function NewBook(props) {
    const [chapterName, setChapterName] = React.useState("");
    const [volume, setVolume] = React.useState("");

    const { id } = props.route.params;

    const send = () => {
        Chapter.create({
            chapter_name: chapterName,
            content: '',
            volume: volume,
            book_id: id
        })
            .then(id => props.navigation.push("Escrever", {id: id}))
            .catch((err) => console.log(err));
    };

    return (
        <SafeAreaView style={GlobalStyle.container}>
            <View>
                <Text>Nome do capítulo:</Text>
                <TextInput onChangeText={setChapterName} value={chapterName} />
                <Text>Volume:</Text>
                <TextInput onChangeText={setVolume} value={volume} />
                <Button
                    onPress={send}
                    title="Enviar"
                />
            </View>
        </SafeAreaView>
    );
}
