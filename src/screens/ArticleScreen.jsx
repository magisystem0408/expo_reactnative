import React from "react";
import {StyleSheet, TouchableOpacity, SafeAreaView, Text} from "react-native";
import {WebView} from "react-native-webview"
import {addClip, deleteClip} from "../../store/actions/user";
import {useDispatch, useSelector} from "react-redux";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

// dispatchのなかにアクションを書く
const ArticleScreen = ({route}) => {
    const dispatch = useDispatch()

    // storeのクリップ情報と比較してクリップされているかどうかを判断する
    const user = useSelector(state => state.user);
    const {clips} = user;

    //クリップされているか否かを判定する
    // 配列のなかにある要素があるかを見るときはsomeを使用する
    const isClipped = () => {
        return clips.some(clip => clip.url === article.url)
    }

    const toggleClip = () => {
        if (isClipped()) {
            dispatch(deleteClip({clip: article}))
        } else {
            dispatch(addClip({clip: article}))
        }
    }

    // articleを引数受け取り
    const {article} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <ClipButton onPress={toggleClip} enabled={isClipped()}/>
            <WebView source={{uri: article.url}}
                     startInLoadingState={true}
                     renderLoading={() => <Loading/>}
            />
        </SafeAreaView>
    )
}

export default ArticleScreen