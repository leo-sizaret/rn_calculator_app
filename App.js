import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from '@use-expo/font';
import { Entypo } from '@expo/vector-icons';

import ExerciseSelectionScreen from "./screens/ExerciseSelectionScreen"
import PercentageExercise from "./screens/PercentageExercise";
import MultiplicationExercise from "./screens/MultiplicationExercise"
import LargeZeroesExercise from "./screens/LargeZeroesExercise";
import HomeScreen from "./screens/HomeScreen";
import { AppLoading } from "expo";

// {/* <MultiplicationExercise /> */}
// <ExerciseSelectionBox difficulty={"hard"} />
// <ExerciseSelectionScreen />

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'NotoSerif-Regular': require('./assets/fonts/NotoSerif-Regular.ttf'),
    'NotoSerif-Bold': require('./assets/fonts/NotoSerif-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          {/* Homescreen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "",
              headerShown: false,
            }} />

          {/* Exercise selection screen */}
          <Stack.Screen
            name="Exercises"
            component={ExerciseSelectionScreen}
            options={{
              title: "",
              headerStyle: { backgroundColor: "white" },
              headerBackImage: () => (
                <Entypo name="chevron-thin-left" size={24} color="black" />
              ),
            }} />

          {/* Multiplication exercise screen */}
          <Stack.Screen
            name="MultiplicationExercise"
            component={MultiplicationExercise}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor: "white",
              headerBackImage: () => (
                <Entypo name="chevron-thin-left" size={24} color="white" />
              )
            }}
          />

          {/* Percentage exercise screen */}
          <Stack.Screen
            name="PercentageExercise"
            component={PercentageExercise}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor: "white",
              headerBackImage: () => (
                <Entypo name="chevron-thin-left" size={24} color="white" />
              )
            }} />

          {/* Zero exercise screen */}
          <Stack.Screen
            name="LargeZeroesExercise"
            component={LargeZeroesExercise}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor: "white",
              headerBackImage: () => (
                <Entypo name="chevron-thin-left" size={24} color="white" />
              )
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

