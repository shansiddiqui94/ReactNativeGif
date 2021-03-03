import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import axios from "axios";
import tailwind from "tailwind-rn";

const Gif = ({ navigation }) => {
  const [randomImg, setRandomImg] = useState(null);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=5RY5EmhyUcNdMBtdttuLQ3B9Luibh8ea&tag=&rating=g`
      );
      setRandomImg(response.data.data.image_original_url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <View
      style={tailwind("flex flex-1 items-center justify-center bg-green-100")}
    >
      <View style={tailwind("flex items-center justify-center")}>
        <Text
          style={tailwind("flex items-center justify-center mb-5 text-2xl")}
        >
          Get a Random Gif
        </Text>
        <View style={tailwind("border-b m-4")}>
          <Image
            style={tailwind("mb-10 w-64 h-64")}
            source={{
              uri: `${randomImg}`,
            }}
          />
        </View>
      </View>
      <View style={tailwind("w-3/4 flex flex-row justify-evenly items-center")}>
        <Button title="Get Another Gif" onPress={fetchRandomImage} />
        <Button title="About Us" onPress={() => navigation.navigate("About")} />
        <Button title="Search" onPress={() => navigation.navigate("Search")} />
      </View>
    </View>
  );
};

export default Gif;
