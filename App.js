import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealCategories from "./screens/MealCategories";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import FavoriteMeals from "./screens/FavoriteMeals";

// import FavoritesContextProvider from "./store/context/favorites-context";

import { store } from "./store/redux/store";

import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MealCategories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={MealCategories}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="FavoriteMeals"
        component={FavoriteMeals}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />

      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealCategories"
            screenOptions={{
              headerBackTitle: "Back",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverview}
              options={({ route }) => ({
                title: route.params.title,
              })}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              options={({ route }) => ({
                title: route.params.title,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
