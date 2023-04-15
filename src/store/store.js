import { configureStore } from "@reduxjs/toolkit";
import rootReducer, {persistReducersList}from "@/store/rootReducer";
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


// console.log(reducersToPersist)
const persistConfig = {
  key: 'root',
  storage:storageSession,
  whitelist: persistReducersList
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

const persistor = persistStore(store)

export { store, persistor };
