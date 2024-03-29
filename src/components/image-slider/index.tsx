import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

type Props = {
  url: string;
  page: string;
  limit: string;
};

type Image = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: "string";
  width: number;
};

const ImageSlider = ({ url, page, limit }: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  /**
   * Permet de récupérer les images depuis l'API
   * @param url String: l'url de l'api sur laquelle on récupère les data
   */
  const fetchImages = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg((e as Error).message);
      setLoading(false);
    }
  };

  /**
   * Permet de passer à l'image précédente
   * Si il n'y a plus d'image, alors on montre la dernière images
   */
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  /**
   * Permet de passer à l'image suivante
   * Si il n'y a plus d'image, alors on montre la première images
   */
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };


  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== "") {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
