import {combineReducers,createStore} from "redux";
import userReducer from "./reducers/user"

// デバッカー
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    user:userReducer
})

// ステートのは作成
const store =createStore(rootReducer,composeWithDevTools())

export default store