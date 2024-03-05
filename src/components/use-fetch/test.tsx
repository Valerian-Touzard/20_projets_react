import React from "react";
import UseFetch from ".";

export type ApiResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type FetchResult = {
  data?: ApiResponse;
  error?: string;
  pending?: boolean;
};

const UseFetchHookTest = () => {
  const { data, error, pending }: FetchResult = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>An error occured</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
