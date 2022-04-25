import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  Text,
} from "react-native";
import React from "react";

export default function Write(props) {
  const [text, onChangeText] = React.useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis facilisis ante eu pulvinar. Vivamus et lorem accumsan, ornare ipsum quis, venenatis ligula. Cras viverra dapibus turpis at fringilla. Praesent dui ligula, dignissim eu dolor eu, pretium hendrerit lacus."
  );

  return (
    <SafeAreaView>
      <View>
        <TextInput onChangeText={onChangeText} value={text} />
      </View>
    </SafeAreaView>
  );
}
