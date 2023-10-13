import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "react-native-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewPostScreen = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const name = await AsyncStorage.getItem("userName");
        const avatar = await AsyncStorage.getItem("userAvatar");
        if (name !== null) {
          setUserName(name);
        }
        if (avatar !== null) {
          setUserAvatar(avatar);
        }
      } catch (e) {
        console.error("Error getting user data from AsyncStorage:", e);
      }
    };

    getUserData();
  }, []);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      // Check if the user has picked an image
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setImage(response.uri);
      }
    });
  };

  const handleSubmit = async () => {
    const postData = {
      image: image,
      content: content,
      name: userName,
      avatar: userAvatar,
    };

    try {
      const response = await axios.post(
        "https://652670e0917d673fd76c448b.mockapi.io/api/posts",
        postData
      );
      console.log("Response from mock API:", response.data);

      // Navigate to home screen with the data
      navigation.navigate("Home", {
        post: response.data,
      });
    } catch (error) {
      console.error("Error posting data to the server:", error);
      Alert.alert("Lỗi", "Đã có lỗi xảy ra. Vui lòng thử lại sau!");
    }
  };

  return (
    <View style={{ margin: 10 }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {userAvatar && (
        <Image
          source={{ uri: userAvatar }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      )}
      <Text>{userName}</Text>
      <TextInput
        style={{ borderColor: "white", borderWidth: 1, height: 300 }}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={{
          borderBlockColor: "white",
          width: 70,
          height: 30,
          marginTop: 15,
          backgroundColor: "aqua",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={pickImage}
      >
        <Text>Select Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBlockColor: "white",
          width: 70,
          height: 30,
          marginTop: 15,
          backgroundColor: "aqua",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPostScreen;
