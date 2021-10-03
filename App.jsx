import _ from "lodash";
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import ListItem from "./src/components/ListItem";
import dummyArticles from "./dummies/articles.json"
import Constants from "expo-constants";
import axios from "axios";

const URL =`https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

// キャメルケースで書く
//flex:1で描画可能なエリアを目一杯使用するという意味になる
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        height: 100,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row"
    },
    leftContainer: {
        backgroundColor: "#fff",
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

const Body = () => {
    // const result = !_.isEmpty(articles) ? (
    //         _.map(articles, (article) => (
    //             <ListItem imageUrl={article.urlToImage} title={article.title} auther={article.author}/>)
    //         )
    //     ) :
    //     (<Text>そんなの素材しない</Text>)

    const [aritcles, setArticles] = useState([])

    const fetchAriticles =async ()=>{
        try{
            const response =await axios.get(URL)
            // console.log(response)
            setArticles(response.data.articles)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAriticles()
        //アンマウントされるときに入れられる
        return () => clearTimeout(timer)
    }, [])

    return (<FlatList data={aritcles}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                          <ListItem imageUrl={item.urlToImage}
                                    title={item.title}
                                    auther={item.author}/>)
                      }
    />)
}

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Body/>
        </SafeAreaView>
    );
}


export default App
