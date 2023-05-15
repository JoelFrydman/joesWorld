import HomeScreen from "../screens/HomeScreen";
import MovieDetails from "../components/MovieDetails"
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Movie App" }}
        />
        <Stack.Screen
  name="MovieDetails"
  component={MovieDetailsScreen}
  options={{ title: "Movie Details" }}
/>
<Stack.Screen
  name="MovieDetails2" 
  component={MovieDetails}
  options={{ title: "Movie Details" }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
