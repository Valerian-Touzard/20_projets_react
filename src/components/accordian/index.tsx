import React, { useState } from "react";
import data from "./data";
import "./style.css"

const Acordian = () => {
  const [selected, setSelected] = useState<string>();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleSingleSelection = (id: string, e: React.MouseEvent) => {
    setSelected(id === selected ? "" : id);
  };

  const handleMultiSelection = (id: string, e: React.MouseEvent) => {
    let cpyMultiple: string[] = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);

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
