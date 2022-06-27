import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from "./pages/Explore";
import Details from "./pages/Details";
import YourWork from "./pages/YourWork";
import YourWorkDetails from "./pages/YourWorkDetails";
import Write from "./pages/Write";
import Read from "./pages/Read";
import NewBook from "./pages/NewBook";
import NewChapter from "./pages/NewChapter";

import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const ExploreStack = createStackNavigator();
const YourWorkStack = createStackNavigator();

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
        <ExploreStack.Screen name="Detalhes" component={Details} />
        <ExploreStack.Screen name="Ler" component={Read} />
    </ExploreStack.Navigator>
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
        <YourWorkStack.Screen name="Novo livro" component={NewBook} />
        <YourWorkStack.Screen name="Novo Capítulo" component={NewChapter} />
        <YourWorkStack.Screen name="Escrever" component={Write} />
    </YourWorkStack.Navigator>
);

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === "EXPLORAR") {
                            iconName = "compass";
                        } else if (route.name === "SUAS OBRAS") {
                            iconName = "book-plus";
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
                <Tab.Screen name="EXPLORAR" component={ExploreStackScreen} />
                <Tab.Screen name="SUAS OBRAS" component={YourWorkStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
