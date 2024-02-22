import React, { useEffect, useState } from "react";
import "./style.css";

type FetchData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Product = {
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

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
        {
            disableButton ? <p>You have reached to 100 products</p> : null
        }
      </div>
    </div>
  );
};

export default LoadMoreData;
