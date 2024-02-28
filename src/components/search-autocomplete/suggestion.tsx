import React from "react";

type Props = {
  data: string[];
};

const Suggestion = ({ data }: Props) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li key={index}>{item}</li>)
        : null}
    </ul>
  );
};

export default Suggestion;
