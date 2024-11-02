import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const Stars = () => {
  const [rating, setRating] = useState(0);
  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };


  return (
    <div>
      <Rating
        count={5}
        value={rating}
        onChange={handleRatingChange}
        size={25}
        activeColor="#F6AA1C"
      />
      
    </div>
  );
};

export default Stars;