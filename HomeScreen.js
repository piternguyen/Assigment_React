import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import NewPostScreen from './NewPostScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Item_listViewNews from './itemListNew';

const Stack = createStackNavigator();


const HomeScreen = ({navigation, onSearch}) => {

  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView style = {{flex: 1}}>
        <View style = {{backgroundColor: 'gray', height: 150, paddingTop: 40, paddingLeft: 20, paddingBottom: 20, borderBottomWidth: 1}}>
            <View style = {{flexDirection: 'row'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 25}}>CodeBug</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderWidth: 1, height: 36, width: 250, justifyContent: 'space-between', borderRadius: 8, backgroundColor: 'white', marginLeft: 20}}>
                    <TextInput placeholder='Search...'
                        onChangeText={text => setSearchText(text)}
                        value = {searchText}
                        style = {{padding: 10, fontSize: 13}}/>
                    <TouchableOpacity onPress={() => {
                            if(searchText){
                            onSearch(searchText)
                            }
                        }}>
                        <Ionicons name = "search" size={14} color='black' style = {{padding: 10}}/>
                    </TouchableOpacity>
                </View> 
            </View>
            
            <View style = {{marginTop: 25, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{width: 40, height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <Ionicons name = "people" size={20} color= 'black' onPress={() => navigation.navigate('User')}/>
                    </View>       
                    <TouchableOpacity onPress={() => navigation.navigate('NewPost')} style={{ marginLeft: 10, backgroundColor: 'white', width: 250, height: 25, justifyContent: 'center', borderRadius: 8}}>
                        <Text style = {{padding: 5}}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>      
                </View>
                <Ionicons name = "images" size={20} style = {{paddingEnd: 40}}/>
            </View>
        
        </View>
        <View>
        {dataItem_LVNews.map((item) => (<Item_listViewNews key={item._id} dataLN={item} />))}
        </View>
    </ScrollView>
    
  )
}
const dataItem_LVNews =
    [
        {
            "_id": "1",
            "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
            "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
            "name": "admin",
            "avatar": "./assets/image/avatar.jpg",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""

            }
        },
        {
            "_id": "2",
            "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
            "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
            "name": "admin",
            "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvov.vn%2Fthe-gioi%2Ftong-thong-ukraine-zelensky-se-toi-my-du-dai-hoi-dong-lien-hop-quoc-post1046025.vov&psig=AOvVaw2Lave9cbVzbvMpueMZL4w5&ust=1695645609065000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMD3yaSiw4EDFQAAAAAdAAAAABAD",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "3",
            "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
            "name": "admin",
            "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "4",
            "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
            "name": "admin",
"content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "5",
            "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
            "name": "admin",
            "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
    ]

export default HomeScreen