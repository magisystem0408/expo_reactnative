import React from 'react';
import AppNavigator from "./navigation/AppNavigator";
import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return (
        // storeで作成したものが使用できるようになる
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
}

export default App
