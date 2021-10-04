import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/user"

// デバッカー
import {composeWithDevTools} from "redux-devtools-extension";

import {persistReducer, persistStore} from "redux-persist";
import {AsyncStorage} from "react-native";

const rootReducer = combineReducers({
    user: userReducer
})


// ホワイトリストで永続化するものをおく
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist:['user']
}

const persistedReducer =persistReducer(persistConfig,rootReducer)


// ステートのは作成
const store = createStore(persistedReducer, composeWithDevTools())

export const persistor =persistStore(store)

export default store