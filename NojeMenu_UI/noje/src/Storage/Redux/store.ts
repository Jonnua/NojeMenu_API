import { configureStore } from "@reduxjs/toolkit";
import authApi from "../../Apis/authApi.ts";
import menuItemApi from "../../Apis/menuItemApi.ts";
import shoppingCartApi from "../../Apis/shoppingCartApi.ts";
import { menuItemReducer } from "../Redux/menuItemSlice.ts";
import { shoppingCartReducer } from "./shoppingCartSlice.ts";
import { userAuthReducer } from "./userAuthSlice.ts";

const store = configureStore({
    reducer: {
      menuItemStore: menuItemReducer,
      shoppingCartStore :  shoppingCartReducer,
      userAuthStore :  userAuthReducer,
      [menuItemApi.reducerPath]: menuItemApi.reducer,
      [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
    .concat(menuItemApi.middleware)   
    .concat(authApi.middleware)
    .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;