import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from '@expo/vector-icons';
import HomeScreen from "../src/screens/HomeScreen";
import ArticleScreen from "../src/screens/ArticleScreen";
import ClipsScreen from "../src/screens/ClipsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

// それぞれのページを定義
//ホームスクリーン用
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Article" component={ArticleScreen}/>
        </Stack.Navigator>
    )
}

//クリップ用
const ClipsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Clip" component={ClipsScreen}/>
            <Stack.Screen name="Article" component={ArticleScreen}/>
        </Stack.Navigator>
    )
}

// アイコンの名前切り替え
const screenOption = ({route}) => ({
    tabBarIcon: ({forced, color, size}) => {
        let iconName
        if(route.name ==="Home"){
            iconName ="home"
        }else if (route.name==="Clip"){
            iconName ="bookmark";
        }
    return <FontAwesome name={iconName} size={size} color={color} />
    }

})



const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={screenOption}>
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Clip" component={ClipsStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator