// import { configureStore } from "@reduxjs/toolkit";
// import {root} from './reducers';

// export const store = configureStore({
//     reducer:root // cấu hình store
// })

import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { countReducer } from "./reducers/countReducer";
import { profileReducer } from "./reducers/profileReducer";

const RootReducer = combineReducers({
  userStore: userReducer,
  countStore: countReducer,
  profileStore: profileReducer,
});

export type StoreInterface = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer);