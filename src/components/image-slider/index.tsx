import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css'

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
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

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

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== '') {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((image) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => <button key={index} className="current-indicator"></button>)
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
