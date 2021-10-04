import React from 'react';
import {View,Text,StyleSheet} from "react-native";
import {bool, string} from "prop-types";

function Hello(props) {
    const {children,bang} =props.children
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


export default Hello;