import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi.ts';
import Footer from '../Components/Layout/Footer.tsx';
import Header from '../Components/Layout/Header.tsx';
import { menuItemModel } from '../Interfaces';
import Home from '../Pages/Home.tsx';
import MenuItemDetails from '../Pages/MenuItemDetails.tsx';
import NotFound from '../Pages/NotFound.tsx';
import ShoppingCart from '../Pages/ShoppingCart.tsx';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice.ts';

function App() {
  const dispatch = useDispatch();

const {data,isLoading} = useGetShoppingCartQuery("223ad5f1-ef4c-4883-9ced-03862ab4f63f");

useEffect(() => {
  if(!isLoading){
    console.log(data.result);
    dispatch(setShoppingCart(data.result?.cartItems));
  }
},[data]);

   const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

 useEffect(() => {
  fetch("https://nojemenuapi.azurewebsites.net/api/MenuItem")
  .then((response) => response.json ())
  .then((data) => {
    console.log(data);
    setMenuItems(data.result);


  });

 }, []);
 

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
      
     <Route path="*" element={<NotFound />}></Route> 
      </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default App;
