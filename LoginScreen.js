import {
  Alert,
  Button,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch(
        `https://652670e0917d673fd76c448b.mockapi.io/api/users?email=${mail}`
      );
      if (response.status === 200) {
        const userData = await response.json();
        if (userData.length === 1 && userData[0].password === pass) {
          const userName = userData[0].name;
          const idUser = userData[0].idUser;
          const userRole = userData[0].role;
          const userImage = userData[0].avatar;
          if (idUser) {
            await AsyncStorage.setItem("idUser", idUser);
          }
          if (userName) {
            await AsyncStorage.setItem("userName", userName);
          }
          if (userRole) {
            await AsyncStorage.setItem("userRole", userRole);
          }
          if (userImage) {
            await AsyncStorage.setItem("userAvatar", userImage);
          }
          navigation.navigate("Quay lại");
        } else {
          Alert.alert(
            "Lỗi",
            "Email hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại!"
          );
        }
      } else {
        Alert.alert(
          "Lỗi",
          "Không tìm thấy tài khoản với email đã nhập. Vui lòng kiểm tra lại!"
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Đã có lỗi xảy ra. Vui lòng thử lại sau!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("./assets/image/backgroud.jpg")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            marginBottom: 50,
            fontSize: 35,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          ĐĂNG NHẬP
        </Text>

        <TextInput
          value={mail}
          placeholder="Nhập Email"
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: 35,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 8,
          }}
          onChangeText={(text) => setMail(text)}
        ></TextInput>

        <TextInput
          value={pass}
          placeholder="Nhập Pass"
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: 35,
            width: 300,
            marginBottom: 70,
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 8,
          }}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
        ></TextInput>
        <View
          style={{
            width: 300,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: "white",
          }}
        >
          <Button title="Sign In" onPress={handleSignIn}></Button>
        </View>
        <View style={{ margin: 20, flexDirection: "row" }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "blue" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
