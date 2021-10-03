import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";


// キャメルケースで書く
//flex:1で描画可能なエリアを目一杯使用するという意味になる
const styles = StyleSheet.create({

    itemContainer: {
        height: 100,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row"
    },
    leftContainer: {
        backgroundColor: "red",
        width: 100
    },
    //space-betweenで間に適度に並べてくれる
    rightContainer: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        padding: 10,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: "gray",
    }

});

const ListItem = ({imageUrl, title, auther}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                {!!imageUrl && (<Image
                    style={{width: 100, height: 100}}
                    source={{
                        uri: imageUrl,
                    }}
                />)}
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{auther}</Text>
            </View>
        </View>
    );
};

export default ListItem;