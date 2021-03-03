import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Image, TextInput, Button } from "react-native";
import tailwind from "tailwind-rn";

const index = () => {
  const [gif, setGif] = useState("");
  const [term, setTerm] = useState("cats");

  const fetchSearchResult = async () => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=5RY5EmhyUcNdMBtdttuLQ3B9Luibh8ea&q=${term}&limit=1&offset=0&rating=g&lang=en`
    );

    setGif(response.data.data);
  };

  useEffect(() => {
    fetchSearchResult();
  }, []);

  return (
    <View
      style={tailwind("flex flex-1 items-center justify-center bg-green-100")}
    >
      <TextInput
        placeholder="Search for a gif"
        style={tailwind("w-3/4 text-center mb-10 p-3 bg-white rounded")}
        onChangeText={(newValue) => setTerm(newValue)}
      />
      <React.Fragment>
        <Image
          style={tailwind("mb-10 w-64 h-64")}
          source={{
            uri: `${gif[0]?.images?.original?.url}`,
          }}
        />
        <Button onPress={fetchSearchResult} title="Search" />
      </React.Fragment>
    </View>
  );
};

export default index;
