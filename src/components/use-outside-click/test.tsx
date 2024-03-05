import React, { useEffect, useRef, useState } from "react";
import UseOutsideClick from ".";

const UseOnClickOutsideTest = () => {
  const ref = useRef<any>();
  UseOutsideClick(ref, () => setShowContent(false))
  const [showContent, setShowContent] = useState(false);

  useEffect(() =>{

  })

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. it won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
