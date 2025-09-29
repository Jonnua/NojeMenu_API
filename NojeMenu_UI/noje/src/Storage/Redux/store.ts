import { configureStore } from "@reduxjs/toolkit";
import authApi from "../../Apis/authApi.ts";
import menuItemApi from "../../Apis/menuItemApi.ts";
import orderApi from "../../Apis/orderApi.ts";
import paymentApi from "../../Apis/paymentApi.ts";
import shoppingCartApi from "../../Apis/shoppingCartApi.ts";
import { menuItemReducer } from "../Redux/menuItemSlice.ts";
import { shoppingCartReducer } from "./shoppingCartSlice.ts";
import { userAuthReducer } from "./userAuthSlice.ts";
import reservationApi from "../../Apis/reservationApi.ts";
const store = configureStore({
    reducer: {
      menuItemStore: menuItemReducer,
      shoppingCartStore :  shoppingCartReducer,
      userAuthStore :  userAuthReducer,
      [reservationApi.reducerPath]: reservationApi.reducer,
      [menuItemApi.reducerPath]: menuItemApi.reducer,
      [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [paymentApi.reducerPath]: paymentApi.reducer,
      [orderApi.reducerPath]: orderApi.reducer,

    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
    .concat(menuItemApi.middleware)   
    .concat(authApi.middleware)   
     .concat(orderApi.middleware)
    .concat(paymentApi.middleware)
    .concat(shoppingCartApi.middleware)
    .concat(reservationApi.middleware)
    
});

export type RootState = ReturnType<typeof store.getState>;

export default store;