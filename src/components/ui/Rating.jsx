import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating, onRatingChange }) => {
  const stars = Array(5).fill(0); // Array of 5 stars

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => (
        <FaStar
          key={index}
          size={12}
          color={index < rating ? "#FFD700" : "#C0C0C0"}
          onClick={() => onRatingChange(index + 1)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Rating;
