import React, { useRef } from "react";
import UseFetch from "../use-fetch";
import { ApiResponse } from "../use-fetch/test";

type FetchResult = {
  data?: ApiResponse;
  error?: string;
  pending?: boolean;
};

const ScrollToTopAndBottom = () => {
  const { data, error, pending }: FetchResult = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

    const bottomRef = useRef<HTMLDivElement>(null)

  /**
   * Permet de "remonter" la page en haut du site de manière douce
   */
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  /**
   * Permet de "descendre" la page en bas du site de manière douce
   */
  const handleScrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
        behavior: 'smooth'
    })
  };

  if (error) {
    return <h1>Error occured ! Please try again</h1>;
  }
  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }
  return (
    <div>
      <h1>Scroll To Top And Bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products.length
          ? data.products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
