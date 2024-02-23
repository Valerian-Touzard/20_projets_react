import React from "react";
import MenuItem from "./menu-item";
import { Menu } from "./data";

type Props = {
    list: Menu[]
}

const MenuList = ({ list }: Props) => {
  return <div className="menu-list-container">
    {
        list && list.length ?
        list.map(listItem => <MenuItem item={listItem} />)
        : null
    }
  </div>;
};

export default MenuList;
