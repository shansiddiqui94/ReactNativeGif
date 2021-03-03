import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./screens/Search";
import Gif from "./screens/Gif";
import About from "./screens/About";

const RootStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Gif" component={Gif} />
        <RootStack.Screen name="Search" component={Search} />
        <RootStack.Screen name="About" component={About} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// Jon: All navigations techniques (stack navigation for example)
// in React Navigation need to have the Navigation Container
// component as the wrapping component. RootStack
// is the first level in our navigation hierachy

export default App;
