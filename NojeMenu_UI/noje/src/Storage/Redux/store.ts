import { configureStore } from "@reduxjs/toolkit";
import menuItemApi from "../../Apis/menuItemApi.ts";
import shoppingCartApi from "../../Apis/shoppingCartApi.ts";
import { menuItemReducer } from "../Redux/menuItemSlice.ts";
const store = configureStore({
    reducer: {
      menuItemStore: menuItemReducer,
      [menuItemApi.reducerPath]: menuItemApi.reducer,
      [shoppingCartApi.reducerPath]: shoppingCartApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
    .concat(menuItemApi.middleware)
    .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;