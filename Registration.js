import { Alert, Button, ImageBackground, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View, DatePickerIOS, Modal} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import React from "react";
import { useState } from "react";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistrationInformation = ({navigation}) => {
    const [ten, setTen] = useState('');
    const [tenDem, setTenDem] = useState('');
    const [ho, setHo] = useState('');
    const [ngaySinh, setNgaySinh] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gioiTinh, setGioiTinh] = useState('');
    const [showGenderModal, setShowGenderModal] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');

    const openGenderModal = () => {
        setShowGenderModal(true);
      };
      



     const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setNgaySinh(selectedDate);
      setShowDatePicker(false);
    } else {
      setShowDatePicker(false);
    }
  };
    
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={require('./assets/image/backgroud.jpg')} style = {{width: "100%", height: "100%", alignItems: "center", flex: 1, justifyContent: "center"}}>
            <Text style={{marginBottom: 50, fontSize: 35, fontWeight: "bold", color: 'blue'}}>ĐĂNG KÝ</Text>

            <TextInput
                value={ten}
                placeholder="Nhập tên"
                style={{ borderColor: "white", borderWidth: 1, height: 35, width: 300, marginBottom: 10, paddingHorizontal: 10}}
                onChangeText={(text) => setTen(text)}
            ></TextInput>

            <TextInput
                value={tenDem}
                placeholder="Nhập tên đệm"
                style={{borderColor: "white", borderWidth: 1, height: 35, width: 300, marginBottom: 10, paddingHorizontal: 10}}
                onChangeText={(text) => setTenDem(text)}
                secureTextEntry={true}   
            ></TextInput>

            <TextInput
                value={ho}
                placeholder="Nhập họ"
                style={{borderColor: "white", borderWidth: 1, height: 35, width: 300, marginBottom: 10, paddingHorizontal: 10}}
                onChangeText={(text) => setHo(text)}
                secureTextEntry={true}   
            ></TextInput>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={{ borderColor: "white", borderWidth: 1, height: 35, width: 300, marginBottom: 10, paddingHorizontal: 10, justifyContent: 'center' }}
            >
              <Text>{ngaySinh.toDateString()}</Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker value={ngaySinh} mode="date" onChange={handleDateChange} />
            )}


            <TouchableOpacity
              onPress={openGenderModal}
              style={{ borderColor: "white", borderWidth: 1, height: 35, width: 300, marginBottom: 10, paddingHorizontal: 10, justifyContent: 'center' }}
            >
              <Text>{selectedGender || "Chọn giới tính"}</Text>
            </TouchableOpacity>


            <Modal animationType="slide" transparent={true} visible={showGenderModal} onRequestClose={() => {
              setShowGenderModal(false);
            }}
            >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 250 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Chọn giới tính</Text>
                <TouchableOpacity onPress={() => setSelectedGender("Nam")}>
                  <Text>Nam</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedGender("Nữ")}>
                  <Text>Nữ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedGender("Khác")}>
                  <Text>Khác</Text>
                </TouchableOpacity>
                <Button title="Đóng" onPress={() => setShowGenderModal(false)} />
                </View>
            </View>
            </Modal>


            <View style = {{flexDirection: "row"}}>
                <View style = {{width: 145}}>
                    <Button title="Tiếp tục" onPress={() => {navigation.navigate('SignUp')}}></Button>
                </View>
                <View style = {{width: 145, marginLeft: 10}}>
                    <Button title="Hủy" onPress={() => navigation.navigate('Login')} style = {{marginLeft: 10}}></Button>
                </View>
            </View>
            
            
            </ImageBackground>
        </TouchableWithoutFeedback>
        
    )
}


export default RegistrationInformation