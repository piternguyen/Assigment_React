import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Item_listViewNews from "./itemListNew";

const HomeScreen = ({ navigation }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUserAvatar = async () => {
      try {
        const avatar = await AsyncStorage.getItem("userAvatar");
        setUserAvatar(avatar);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAvatar();

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://652670e0917d673fd76c448b.mockapi.io/api/posts"
        ); // Thay thế URL bằng URL API thực tế của bạn
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "gray",
          height: 150,
          paddingTop: 40,
          paddingLeft: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>CodeBug</Text>
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("User")}>
              {userAvatar ? (
                <Image
                  source={{ uri: userAvatar }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              ) : (
                <Image
                  source={require("./assets/image/avatar.jpg")}
                  style={{ width: 40, height: 40 }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewPost")}
              style={{
                marginLeft: 10,
                backgroundColor: "white",
                width: 250,
                height: 25,
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Text style={{ padding: 5 }}>Bạn đang nghĩ gì?</Text>
            </TouchableOpacity>
          </View>
          <Ionicons name="images" size={20} style={{ paddingEnd: 40 }} />
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item_listViewNews dataLN={item} /> 
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
