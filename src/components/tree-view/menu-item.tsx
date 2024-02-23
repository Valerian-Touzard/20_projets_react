import React from "react";
import { Menu } from "./data";
import MenuList from "./menu-list";

type Props = {
  item: Menu;
};

const MenuItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.label}</p>

      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
