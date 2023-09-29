import React from 'react';
import { FlatList, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';

const banner = require('./assets/image/banner.jpg');
const avatar = require('./assets/image/avatar.jpg');

const MenuScreen = () => {
  return (
    
    <ScrollView style = {{flex: 1}}>
        <View>
          <Image source={banner} style = {{width: "100%", height: 250}}/>
        </View>
        <View>
          <Image source={avatar} style = {{width: 150, height: 150, borderRadius: 75, borderColor: 'blue', borderWidth: 2, position: 'absolute', top: -120, left: "20%", marginLeft: -75}}/>
        </View>
        <View>
          <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 40, marginLeft: 30}}>ADMIN</Text>
        </View>
        <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
      <View style = {{paddingLeft: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('./assets/image/avatar.jpg')} style = {{width: 60, height: 60}}/>
        <Text style = {{fontSize: 16, fontWeight: 'bold', paddingLeft: 20}}>Học làm đóe gì</Text>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
