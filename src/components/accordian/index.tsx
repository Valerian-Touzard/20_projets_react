import React, { useState } from "react";
import data from "./data";
import "./style.css"

const Acordian = () => {
  const [selected, setSelected] = useState<string>();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  /**
   * Permet de modifier le menu qui doit être dérouler
   * @param id String: L'id du menu que l'on souhaite dérouler
   * @param e React.MouseEvent: l'évènement du click
   */
  const handleSingleSelection = (id: string, e: React.MouseEvent) => {
    setSelected(id === selected ? "" : id);
  };

  /**
   * Permet de modifier le comportement du menu pour que tout les menu ce déroule
   * @param id String: 
   * @param e React.MouseEvent: l'évènement du click
   */
  const handleMultiSelection = (id: string, e: React.MouseEvent) => {
    let cpyMultiple: string[] = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {
          enableMultiSelection ? "Disable multi selection" : "Enable multi selection"
        }
        
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? (e) => handleMultiSelection(dataItem.id, e)
                    : (e) => handleSingleSelection(dataItem.id, e)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Acordian;
