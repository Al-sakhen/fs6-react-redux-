import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import themeSlice from "../features/theme/themeSlice";
import counterSlice from "./../features/counter/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistCounterConfig = {
    key: "counter",
    storage,
};

const persistThemeConfig = {
    key: "theme",
    storage,
};

const persistedCounterReducer = persistReducer(persistCounterConfig,counterSlice )
const persistedThemeReducer = persistReducer(persistThemeConfig,themeSlice )


export const store = configureStore({
    reducer: {
        counter: persistedCounterReducer,
        theme: persistedThemeReducer,
        auth: authSlice,
    },
    middleware : () => getDefaultMiddleware({serializableCheck : false})
});

export const persistor = persistStore(store)
