import React, { useState } from "react";
import data from "./data";

const Acordian = () => {
  const [selected, setSelected] = useState<string>();

  const handleSingleSelection = (id: string, e: React.MouseEvent) => {
    setSelected(id === selected ? '' : id);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={(e) => handleSingleSelection(dataItem.id, e)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
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
