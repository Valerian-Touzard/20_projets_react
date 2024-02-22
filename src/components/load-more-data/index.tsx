import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
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
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>)
          : null}
      </div>
      <div className="button-container">
        <button>Load more products</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
