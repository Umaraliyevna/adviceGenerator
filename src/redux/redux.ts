import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);
export { store, persistedStore };
