import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { connectActionSheet } from "@expo/react-native-action-sheet";

import "react-native-gesture-handler";
import Routes from "./src/routes";

import Book from "./src/services/sqlite/Book";

function App() {
  return (
      <ActionSheetProvider>
          <Routes />
      </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(App);

export default ConnectedApp;