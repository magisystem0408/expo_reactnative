import React from 'react';
import {View,Text,StyleSheet} from "react-native";
import {bool, string} from "prop-types";

function Hello(props) {
    const {children,bang} =props.children
    console.log(children)
    return (
        <View>
            <Text style={styles.text}>test{children}</Text>
            <Text> {`${bang?"neko":"test"}`}</Text>
        </View>
    );
}


Hello.protoTypes={
    children:string.isRequired,
    bang:bool.isRequired,
}

Hello.defaultProps ={
    bang:false
}

const styles =StyleSheet.create({
    text:{
        color:"#fff",
        backgroundColor:"blue",
        fontSize:40,
        fontWeight:"bold",
        padding:16,
    }
})

export default Hello;