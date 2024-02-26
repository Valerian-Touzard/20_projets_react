import React, { useEffect, useState } from "react";

// Typage pour les informations que l'on reçois
type Props = {
  url: string;
};

// Typage pour l'ensemble des données que l'on reçois depuis l'API dummyJson
type DataProps = {
  limit: number;
  skip: number;
  total: number;
  products: ProductProps[];
};

// Typage des données qui nous intérèsse
type ProductProps = {
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

const ScrollIndicator = ({ url }: Props) => {
  // Les données bruts que l'on reçois depuis l'API
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(false);
  //   Stocke le message d'erreur si il y en as
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Apelle de notre fonction de récupération de données
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);

  /**
   * Récupère les données depui l'API et les stockent dans le state "data"
   * @param url String : L'url de l'API où l'on vas récupérer les données
   */
  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      // Récupéreation puis stockage des données récupérer, dans notre state "data", depuis notre api
      const response = await fetch(url);
      const data: DataProps = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage((error as Error).message);
    }
  };

  /**
   * Permet de calculer le "pourcentage" de scroll de l'utilisateur
   * et le stocker dans notre state "scrollPercentage"
   */
  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

      setScrollPercentage((howMuchScrolled/height)*100)
    };

  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
        {data && data.products.length > 0
          ? data.products.map((product) => (
              <p key={product.id}>{product.title}</p>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
