import React, { useState } from 'react';
import "./style.css"
import Menu from "./MenuApi.js"
import MenuCard from './MenuCard';
import Navbar from '../Navbar';
const uniqueList = [
    new Set(
        Menu.map((cureElem)=> {
    return cureElem.category;
})
),
]
console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    //console.log(menuData);
    const FilterItems = (category) =>{
    const upadatedList = Menu.filter((cureElem) => {
        return cureElem.category === category;
    } );
    setMenuData(upadatedList)
};
  return (
    <>
    <Navbar FilterItems={FilterItems} menuList={menuList}/>
    <MenuCard menuData = {menuData}/>

    </>
  )
}
export default Resturant
