import React from "react";
import { TouchableOpacity, SectionList, View, Text } from "react-native";

import chapters from "../../services/chapters";

export default function ListChapters(props) {
  const Item = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.props.navigation.push(props.title);
        }}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <SectionList
        sections={chapters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { type } }) => <Text>{type}</Text>}
      />
    </View>
  );
}
