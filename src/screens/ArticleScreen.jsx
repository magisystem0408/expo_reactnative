import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
import {WebView} from "react-native-webview"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})


const ArticleScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
           <WebView source={{uri:"https://www.yahoo.co.jp"}}/>
        </SafeAreaView>
    )
}

export default ArticleScreen