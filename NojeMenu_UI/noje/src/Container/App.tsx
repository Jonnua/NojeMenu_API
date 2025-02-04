import React from 'react';
import Header from '../Components/Layout/Header.tsx';
import Footer from '../Components/Layout/Footer.tsx';
import { useState, useEffect } from "react";
import { menuItemModel } from '../Interfaces';
import Home from '../Pages/Home.tsx';




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
    <Home/>
    <Footer />
    </div>
  );
}

export default App;
