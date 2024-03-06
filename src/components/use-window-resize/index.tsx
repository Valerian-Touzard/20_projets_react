import React, { useLayoutEffect, useState } from "react";

const UseWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    with: 0,
    height: 0,
  });

  /**
   * A la différence du use Effect, le useLayoutEffect effectue la logique avant que les éléments du DOM ne soit affichés
   */
  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Permet de stocker les changements de taille d'écrans dans le state
   */
  const handleResize = () => {
    setWindowSize({
      with: window.innerWidth,
      height: window.innerHeight,
    });
  };

  return windowSize
};

export default UseWindowResize;
