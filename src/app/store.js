import { persistReducer, persistStore } from "redux-persist";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { dummyJson } from "./services/dummyJson";

const persistCounterConfig = {
    key: "counter",
    storage,
};

const persistThemeConfig = {
    key: "theme",
    storage,
};

const persistedCounterReducer = persistReducer(
    persistCounterConfig,
    counterSlice
);
const persistedThemeReducer = persistReducer(persistThemeConfig, themeSlice);

export const store = configureStore({
    reducer: {
        counter: persistedCounterReducer,
        theme: persistedThemeReducer,
        auth: authSlice,
        dummyJson : dummyJson.reducer
    },
    middleware: () => getDefaultMiddleware({ serializableCheck: false }).concat([dummyJson.middleware]),
});

export const persistor = persistStore(store);
