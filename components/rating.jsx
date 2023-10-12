import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Rating = ({ value = 0, max = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            size={20}
            color={ratingValue <= value ? "#FFC107" : "#D1D5DB"}
            className="mr-1"
          />
        );
      })}
    </div>
  );
};
