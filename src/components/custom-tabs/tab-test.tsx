import React, { ReactNode } from "react";
import Tabs from "./tabs";
import "./style.css"

const RandomComponent = () => {
  return <div>Random Component</div>;
};

export type Tab = {
  label: string;
  content: ReactNode;
}

const TabTest = () => {
  const tabs: Tab[] = [
    {
      label: "tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "tab 3",
      content: <RandomComponent />,
    },
  ];

  /**
   * Permet d'afficher en console l'index de l'éléments afficher
   * @param currentTabIndex 
   */
  const handleChange = (currentTabIndex: number) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
