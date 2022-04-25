import { SafeAreaView, View, Text } from "react-native";
import React from "react";

import ListBooks from "../components/ListBooks";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Read(props) {
  const [text, onChangeText] = React.useState("Busque pelo título ou autor");

  return (
    <SafeAreaView>
      <View>
        <Text>Capítulo x - Lorem ipsum</Text>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          facilisis ante eu pulvinar. Vivamus et lorem accumsan, ornare ipsum
          quis, venenatis ligula. Cras viverra dapibus turpis at fringilla.
          Praesent dui ligula, dignissim eu dolor eu, pretium hendrerit lacus.
          Etiam quis luctus quam, ut ullamcorper ligula. Duis dapibus eu sapien
          pellentesque ornare. Suspendisse rhoncus, enim vitae mattis molestie,
          augue magna varius ipsum, a hendrerit sapien enim at odio. Duis
          interdum purus auctor arcu rhoncus fermentum. Proin tincidunt, leo nec
          malesuada feugiat, felis justo lacinia magna, ut semper nunc quam in
          neque. Nam accumsan, lorem quis faucibus gravida, tortor nisi
          consectetur lectus, non lobortis nunc nulla a orci. Vivamus at egestas
          neque, ut mattis odio. Nulla facilisi. Proin ut efficitur urna, a
          ornare lacus. Donec purus nunc, sollicitudin quis volutpat ut,
          lobortis at est. Curabitur cursus pretium enim et placerat. Aliquam eu
          interdum velit. Maecenas efficitur, augue id lobortis egestas, quam
          magna cursus massa, ut rhoncus ipsum eros vel dolor. Curabitur feugiat
          lacus quis ipsum gravida porta. Fusce non ipsum consequat, elementum
          nisi ut, egestas leo. Vestibulum aliquam mollis augue, in faucibus
          dolor mollis at. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Maecenas vel nisi nulla. Praesent eget ultrices neque. Nam
          tincidunt quam sapien, vitae maximus enim varius sed. Suspendisse
          massa est, ullamcorper eu eleifend vitae, pharetra eu magna. Maecenas
          id dictum odio. Quisque ex metus, suscipit in accumsan pellentesque,
          malesuada a neque. Aliquam fringilla accumsan quam vitae sagittis.
          Phasellus vestibulum, augue ut convallis aliquet, dui libero mattis
          justo, fermentum sollicitudin mauris elit sed nulla. Etiam interdum,
          lacus vel dignissim mattis, leo magna tempor nunc, vel aliquam urna
          enim nec libero. Donec congue aliquet sagittis. Curabitur tempor dui
          non posuere egestas. Aliquam facilisis accumsan cursus. Sed vel purus
          vitae leo fringilla aliquam nec ut ligula. Suspendisse venenatis
          tortor vitae bibendum eleifend. Vivamus vel massa lectus. Curabitur
          fringilla sodales dolor, in efficitur purus auctor maximus. Nam
          lobortis cursus ex eu dictum. Curabitur in varius neque.
        </Text>
      </View>
    </SafeAreaView>
  );
}
