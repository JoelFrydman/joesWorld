import HomeScreen from "./src/screens/HomeScreen";
import MovieDetails from "./src/components/MovieDetails"
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
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

export default App;
