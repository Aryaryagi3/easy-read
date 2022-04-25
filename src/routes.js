import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from "./pages/Explore";
import Bookshelf from "./pages/Bookshelf";
import Details from "./pages/Details";
import YourWork from "./pages/YourWork";
import Options from "./pages/Options";
import Search from "./pages/Search";
import YourWorkDetails from "./pages/YourWorkDetails";
import Write from "./pages/Write";
import Read from "./pages/Read";

import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const ExploreStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const YourWorkStack = createStackNavigator();
const BookshelfStack = createStackNavigator();
const OptionsStack = createStackNavigator();

const ExploreStackScreen = () => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#B85042" },
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <ExploreStack.Screen name="Explorar" component={Explore} />
    <ExploreStack.Screen name="Buscar" component={Search} />
  </ExploreStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#B85042" },
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <DetailsStack.Screen name="Detalhes" component={Details} />
    <DetailsStack.Screen name="Ler" component={Read} />
  </DetailsStack.Navigator>
);

const YourWorkStackScreen = () => (
  <YourWorkStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#B85042" },
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <YourWorkStack.Screen name="Suas obras" component={YourWork} />
    <YourWorkStack.Screen name="Sua obra" component={YourWorkDetails} />
    <YourWorkStack.Screen name="Escrever" component={Write} />
  </YourWorkStack.Navigator>
);

const BookshelfStackScreen = () => (
  <BookshelfStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#B85042" },
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <BookshelfStack.Screen name="Suas obras" component={Bookshelf} />
  </BookshelfStack.Navigator>
);

const OptionsStackScreen = () => (
  <OptionsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#B85042" },
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <OptionsStack.Screen name="Suas obras" component={Options} />
  </OptionsStack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { color: "A7BEAE" },
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Explorar") {
              iconName = "compass";
            } else if (route.name === "Estante") {
              iconName = "bookshelf";
            } else if (route.name === "Detalhes") {
              iconName = "book-open";
            } else if (route.name === "Suas obras") {
              iconName = "book-plus";
            } else if (route.name === "Opções") {
              iconName = "cog";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#B85042",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#A7BEAE",
          },
        })}
      >
        <Tab.Screen name="Explorar" component={ExploreStackScreen} />
        <Tab.Screen name="Estante" component={BookshelfStackScreen} />
        <Tab.Screen name="Detalhes" component={DetailsStackScreen} />
        <Tab.Screen name="Suas obras" component={YourWorkStackScreen} />
        <Tab.Screen name="Opções" component={OptionsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
