import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

type StarRatingProps = {
  noOfStars: number;
};

const StarRating = ({ noOfStars }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex: number, e?: React.MouseEvent) => {
    setRating(currentIndex);
  };
  const handleMouseEnter = (currentIndex: number, e?: React.MouseEvent) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = (e?: React.MouseEvent) => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {Array(noOfStars)
        .fill(null)
        .map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
    </div>
  );
};

export default StarRating;
