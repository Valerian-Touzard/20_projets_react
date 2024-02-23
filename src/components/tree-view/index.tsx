import React from "react";
import MenuList from "./menu-list";
import { Menu } from "./data";

type Props = {
    menu: Menu[]
}

const TreeView = ({ menu } : Props) => {
  return <div className="tree-view-container">
    <MenuList list={menu} />
  </div>;
};

export default TreeView;
