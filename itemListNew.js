import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Item_listviewComment from './itemComment';

function Item_listViewNews(props) {
    const [like, setLike] = useState(true);
    const [comment, setComment] = useState(false);
    const { dataLN } = props;

    const clickLike = () => {
        setLike(!like);
    }

    const clickComment = () => {
        setComment(!comment);
    }

    const imgSource = like ? require('./assets/image/heart_unlike.png') : require('./assets/image/heart_like.png');

    return (
        <View style={styles.container}>
            <View style={styles.Viewname}>
                <Image style={styles.imgavtar} source={{ uri: dataLN.avatar }} />
                <Text style={styles.textname}>{dataLN.name}</Text>
            </View>
            <View>
                <Text style={styles.texttitle}>{dataLN.content}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.imgcontent} source={{ uri: dataLN.image }} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={clickLike}>
                    <Image style={styles.imgicon} source={imgSource} />
                </TouchableOpacity>
                <TouchableOpacity onPress={clickComment}>
                    <Image style={styles.imgicon} source={require('./assets/image/comment.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imgicon} source={require('./assets/image/share.png')} />
                </TouchableOpacity>
            </View>

            {comment && 
              <View style={{ flex: 1, alignItems: 'center' }}>
                  <View style={styles.comment}>
                      <FlatList
                          nestedScrollEnabled
                          contentContainerStyle={{
                              flexGrow: 1,
                          }}
                          data={dataLN.comments}
                          renderItem={({ item }) => <Item_listviewComment dataComment={item} />}
                          keyExtractor={item => item._id}
                      />
                      <View style={styles.styleComment}>
                          <TextInput placeholder='Bình luận' style={styles.TextComment} />
                      </View>
                  </View>
              </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        flexGrow: 1,
    },
    imgavtar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginStart: 15,
        marginEnd: 20
    },
    imgcontent: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    },
    imgicon: {
        width: 40,
        height: 40,
        marginTop: 5,
        marginLeft: 20,
        marginBottom: 10,
    },
    Viewname: {
        flexDirection: 'row',
        marginTop: 10
    },
    textname: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 15
    },
    texttitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 18,
        marginLeft: 20
    },
    comment: {
        flex: 1,
        width: '90%',
        height: 250,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'scroll',
        zIndex: 99999,
    },
    styleComment: {
        width: "95%",
        height: 40,
        paddingStart: 10,
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        margin: 10
    },
    TextComment: {
        fontSize: 15,
    }
});

export default Item_listViewNews;
