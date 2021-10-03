import React from 'react';
import {SafeAreaView,View,StyleSheet} from "react-native";

const styles =StyleSheet.create({
    //alineItemsはflexDirectionの垂直方向に対して調整する
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around"
    },
    box:{
        width:100,
        height:100,
    }
})

const Layout = () => {
    return (
        <SafeAreaView style ={styles.container}>
            <View style={[styles.box,{backgroundColor:"red"}]} />
            <View style={[styles.box,{backgroundColor:"blue"}]} />
            <View style={[styles.box,{backgroundColor:"green"}]} />

        </SafeAreaView>
    );
};

export default Layout;