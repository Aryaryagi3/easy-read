import {SafeAreaView, Animated, StyleSheet, TextInput, View, Text, Button} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import React, {useRef} from "react";

import GlobalStyle from "../../assets/styles/global";

import ListBooks from "../components/ListBooks";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Explore(props) {
    const [text, onChangeText] = React.useState("Busque pelo título ou autor");

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000
        }).start();
    };


    return (
        <SafeAreaView style={GlobalStyle.container}>
            <Text style={GlobalStyle.recomendationsText}>Recomendações</Text>
            <View>
                <Button title="Mostrar recomendações" onPress={fadeIn} />
                <Button title="Esconder recomendações" onPress={fadeOut} />
            </View>
            <Animated.View
                style={
                    {
                        opacity: fadeAnim
                    }
                }
            >
                <ListBooks props={props} mode={"Detalhes"} style={GlobalStyle.listBooks}/>
            </Animated.View>
        </SafeAreaView>
    );
}
