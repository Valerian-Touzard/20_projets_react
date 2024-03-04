import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Acordian from "../accordian";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";
import menus from "../tree-view/data";

const FeatureFlags = () => {
  const { loading, enabledFlags }: any = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Acordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menu={menus} />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey: string) => {
    return enabledFlags[getCurrentKey];
  };

  if (loading) return <h1>Loading data! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((component) =>
        checkEnabledFlags(component.key) ? component.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
