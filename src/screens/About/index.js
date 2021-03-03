import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const About = () => {
  return (
    <View
      style={tailwind(
        "h-full w-full items-center flex justify-center bg-green-100"
      )}
    >
      <Text
        style={tailwind("uppercase text-lg text-center border-b-2 mb-3 p-3")}
      >
        The Dream Team - Starring:
      </Text>
      <Text>The Spicy Shan</Text>
      <Text>The Daring Diana</Text>
      <Text>The Super Shaf</Text>
    </View>
  );
};

export default About;
