import React, { useState, useEffect } from "react";
import { menuItemModel } from "../../../Interfaces";
import MenuItemCard from "../MenuItems/MenuItemCard.tsx";
import { useGetMenuItemsQuery } from "../../../Apis/menuItemApi.ts";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../Storage/Redux/menuItemSlice.ts";

function MenuItemList() {

 //const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

 const dispatch = useDispatch();
 const { data, isLoading } = useGetMenuItemsQuery(null);

  useEffect(()=>{
    if(!isLoading){
      dispatch(setMenuItem(data.result));
    }
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  }
  
    
   return (
    <div className="container row">
      {data.result.length > 0 &&
      data.result.map((menuItem: menuItemModel, index: number) => (
        <MenuItemCard menuItem={menuItem} key={index} />
      ))}
    </div>
  );
}

export default MenuItemList;
