import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, Button, StyleSheet, View, Image,Text} from 'react-native';
import Hello from "./src/components/Hello";

// キャメルケースで書く
//flex:1で描画可能なエリアを目一杯使用するという意味になる
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    rightContainer: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection:"column",
        padding:10
    },
    text:{
        fontSize:16,
    },
    subText:{
        fontSize:12,
        color:"gray"
    }

});

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{
                            uri: 'https://picsum.photos/id/10/200/200',
                        }}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.text}>
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                    </Text>
                    <Text style={styles.subText}>RIGHTContainer</Text>

                </View>
            </View>
        </View>
    );
}


export default App
