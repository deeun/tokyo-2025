import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import {headerReducer} from "./headerSlice";
import { loadingReducer } from "./loadingSlice";

// redux-perist 적용
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [''] // 해당 reducer만 저장
    // blacklist: [''] // 해당 reducer만 제외
};

export const combinedStore = combineReducers({headerReducer, loadingReducer})

export const store = configureStore({
    reducer: persistReducer(persistConfig, combinedStore),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
export const persistor = persistStore(store);
