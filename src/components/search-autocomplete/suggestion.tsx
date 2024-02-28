import React from "react";

type Props = {
  data: string[];
  handleClick: (text: string) => void;
};

const Suggestion = ({ data, handleClick }: Props) => {
  const handleItemClick = (item: string) => {
    handleClick(item); // Passer le texte du li au handleClick
  };

  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li style={{ cursor: "pointer" }} onClick={() => handleItemClick(item)} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestion;
