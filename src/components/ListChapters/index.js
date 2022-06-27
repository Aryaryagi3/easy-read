import React, { useEffect, useState } from "react";
import { TouchableOpacity, SectionList, View, Text } from "react-native";

import Chapter from "../../services/sqlite/Chapter";
import listToSectionList from "../../helpers/listToSectionList";

export default function ListChapters(props) {
    const [chapters, setChapters] = useState([]);
    const {id, mode} = props;

    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        Chapter.findByBook(id).then((data) => {
            setChapters(listToSectionList(data));
        }).then(data => {console.log(data)});
    };

    const Item = ({ item }) => (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.props.navigation.push(mode, {id: item.id});
                }}
            >
                <View>
                    <Text>{item.chapter_name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    console.log(chapters);

    return (
        <View>
            <SectionList
                sections={chapters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Item item={item} />}
                renderSectionHeader={({ section: { volume } }) => <Text>{volume}</Text>}
            />
        </View>
    );
}
