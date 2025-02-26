import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi.ts';
import Footer from '../Components/Layout/Footer.tsx';
import Header from '../Components/Layout/Header.tsx';
import { userModel } from '../Interfaces';
import AccessDenied from '../Pages/AccessDenied.tsx';
import AuthenticationTest from '../Pages/AuthenticationTest.tsx';
import AuthenticationTestAdmin from '../Pages/AuthenticationTestAdmin.tsx';
import Home from '../Pages/Home.tsx';
import Login from '../Pages/Login.tsx';
import MenuItemDetails from '../Pages/MenuItemDetails.tsx';
import NotFound from '../Pages/NotFound.tsx';
import Register from '../Pages/Register.tsx';
import ShoppingCart from '../Pages/ShoppingCart.tsx';
import Payment from '../Pages/Payment.tsx';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice.ts';
import { RootState } from '../Storage/Redux/store.ts';
import { setLoggedInUser } from '../Storage/Redux/userAuthSlice.ts';
function App() {
  const dispatch = useDispatch();
  const userData : userModel = useSelector((state: RootState) => state.userAuthStore);

const {data,isLoading} = useGetShoppingCartQuery(userData.id);


  useEffect(() => {
        const localToken = localStorage.getItem("token");
        if(localToken){
        const {fullName, id, email, role} : userModel = jwtDecode(localToken);
                dispatch(setLoggedInUser({fullName, id, email, role}));
        
      }
  },[]);



useEffect(() => {
  if(!isLoading){
    dispatch(setShoppingCart(data.result?.cartItems));
  }
},[data]);

 

 return ( 
 <div>
    <Header />
    <div className="pb-5">
      <Routes>
     <Route path="/" element={<Home />}></Route> 
     <Route path="/menuItemDetails/:menuItemId"
      element={<MenuItemDetails />}>
     </Route> 
     <Route path="/shoppingCart" element={<ShoppingCart/>}></Route> 
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
     <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
    <Footer />

    </div>
  );
}

export default App;
