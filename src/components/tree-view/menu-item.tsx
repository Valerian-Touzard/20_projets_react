import React, { useState } from "react";
import { Menu } from "./data";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  item: Menu;
};

type DisplayCurrentChildren = {
  [key: string]: boolean;
};

const MenuItem = ({ item }: Props) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] =
    useState<DisplayCurrentChildren>({});

  const handleToggleChildren = (label: string) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
            }
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
