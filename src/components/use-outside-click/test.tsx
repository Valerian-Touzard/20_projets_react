import React, { useState } from "react";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div>
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
