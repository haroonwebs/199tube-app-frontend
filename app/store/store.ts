import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slices/VideoSlice";
import UserReducer from "./slices/authSlice";

export const Store = () => {
  return configureStore({
    reducer: {
      videos: videoReducer,
      user: UserReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof Store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
