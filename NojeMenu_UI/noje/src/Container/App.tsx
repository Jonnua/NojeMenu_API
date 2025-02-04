import React from 'react';
import Header from '../Components/Layout/Header.tsx';
import Footer from '../Components/Layout/Footer.tsx';
import { useState, useEffect } from "react";
import { menuItemModel } from '../Interfaces';
import Home from '../Pages/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound.tsx';
import MenuItemDetails from '../Pages/MenuItemDetails.tsx';




function App() {
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
     <Route path="/menuItemDetails/:menuItemID"
      element={<MenuItemDetails />}>
     </Route> 
     <Route path="*" element={<NotFound />}></Route> 
     
      </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default App;
