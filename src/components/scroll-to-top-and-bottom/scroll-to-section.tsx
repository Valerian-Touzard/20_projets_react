import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
  ];

  const handleScrollToSection = () =>{
    let pos = ref.current?.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} key={index}>
          <h3 style={item.style}>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
