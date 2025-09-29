import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi.ts";
import Footer from "../Components/Layout/Footer.tsx";
import Header from "../Components/Layout/Header.tsx";
import { userModel } from "../Interfaces";
import AccessDenied from "../Pages/AccessDenied.tsx";
import AuthenticationTest from "../Pages/AuthenticationTest.tsx";
import AuthenticationTestAdmin from "../Pages/AuthenticationTestAdmin.tsx";
import Home from "../Pages/Home.tsx";
import {
  AllOrders,
  MenuItemList,
  MenuItemUpsert,
  MyOrders,
  OrderConfirmed,
  OrderDetails,
} from "../Pages/index.ts";
import Login from "../Pages/Login.tsx";
import MenuItemDetails from "../Pages/MenuItemDetails.tsx";
import NotFound from "../Pages/NotFound.tsx";
import Payment from "../Pages/Payment.tsx";
import Register from "../Pages/Register.tsx";
import ShoppingCart from "../Pages/ShoppingCart.tsx";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice.ts";
import { RootState } from "../Storage/Redux/store.ts";
import { setLoggedInUser } from "../Storage/Redux/userAuthSlice.ts";
import Reservations from "../Components/Page/Reservation/Reservations.tsx";
import ReservationForm from "../Components/Page/Reservation/ReservationForm.tsx";
function App() {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const { data, isLoading } = useGetShoppingCartQuery(userData.id, {
    skip: skip,
  });

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  useEffect(() => {
    if (userData.id) setSkip(false);
  }, [userData]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/authentication"
            element={<AuthenticationTest />}
          ></Route>
          <Route
            path="/authorization"
            element={<AuthenticationTestAdmin />}
          ></Route>
          <Route path="/accessDenied" element={<AccessDenied />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="order/orderconfirmed/:id"
            element={<OrderConfirmed />}
          ></Route>
          <Route path="/order/myOrders" element={<MyOrders />} />
          <Route path="/order/orderDetails/:id" element={<OrderDetails />} />
          <Route path="/order/allOrders" element={<AllOrders />} />
          <Route path="/menuItem/menuitemlist" element={<MenuItemList />} />
          <Route
            path="/menuItem/menuItemUpsert/:id"
            element={<MenuItemUpsert />}
          />
          <Route path="/menuItem/menuItemUpsert" element={<MenuItemUpsert />} />

          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservations/new" element={<ReservationForm />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
