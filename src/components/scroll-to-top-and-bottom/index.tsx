import React from "react";
import UseFetch from "../use-fetch";
import { ApiResponse } from "../use-fetch/test";

type FetchResult = {
  data?: ApiResponse;
  error?: string;
  pending?: boolean;
};

const ScrollToTopAndBottom = () => {
  const { data, error, pending }: FetchResult = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  if (error){
    return <h1>Error occured ! Please try again</h1>
  }
  if (pending){
    return <h1>Loading ! Please wait</h1>
  }
  return (
    <div>
      <h1>Scroll To Top And Bottom feature</h1>
      <h3>This is the top section</h3>
      <button>Scroll To Bottom</button>
      <ul style={{listStyle: 'none'}}>
        {data && data.products.length
          ? data.products.map((product) => <li>{product.title}</li>)
          : null}
      </ul>
      <button>Scroll To Top</button>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
