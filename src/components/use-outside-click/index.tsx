import React, { useEffect } from "react";

const UseOutsideClick = (ref: any, handler: Function) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () =>{
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
    }
  }, [handler, ref]);
};

export default UseOutsideClick;
