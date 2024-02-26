import React, { useState } from "react";
import { Tab } from "./tab-test";

type Props = {
  tabsContent: Tab[];
  onChange: (currentTabIndex: number) => void;
};

const Tabs = ({ tabsContent, onChange }: Props) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    /**
     * Permet de changer le composant qui sera affiché
     * @param currentIndex number: Index de l'élémen cliqué
     */
    const handleOnClick = (currentIndex: number) =>{
        setCurrentTabIndex(currentIndex);
        onChange(currentIndex)
    }

  return (
    <div className="wrapper">
      <div className="heading">
        {
            tabsContent.map((tabItem, index) => (
                <div onClick={() => handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>
            ))
        }
      </div>
      <div className="content" style={{color: 'red'}}>
        {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  );
};

export default Tabs;
