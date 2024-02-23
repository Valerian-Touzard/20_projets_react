import React, { useState } from "react";
import { Menu } from "./data";
import MenuList from "./menu-list";

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
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? '-' : '+'
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
