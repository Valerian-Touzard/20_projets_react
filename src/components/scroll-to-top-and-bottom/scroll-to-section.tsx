import React from "react";

const ScrollToSection = () => {
    const data = [
        {
            label: 'First Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'gray'
            }
        },
        {
            label: 'Third Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fourth Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fifth Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'black'
            }
        },
    ]
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button>Click to scroll</button>
      {
        data.map((item, index) => <div key={index}>
            <h3 style={item.style}>{item.label}</h3>
        </div>)
      }
    </div>
  );
};

export default ScrollToSection;
