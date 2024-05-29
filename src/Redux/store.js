import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import productReducer from "./productSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    profile: profileReducer,
  },
});
export default store;
