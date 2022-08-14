import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/ListSlice";

export default configureStore({
  reducer: {
    list: listReducer,
  },
});
