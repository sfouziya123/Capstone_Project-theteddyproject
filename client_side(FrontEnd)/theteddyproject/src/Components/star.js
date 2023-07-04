import React from 'react';
// import Rating from 'react-rating';

const star = () => {
  const handleRatingChange = (rating) => {
    // Do something with the selected rating
    console.log('Selected rating:', rating);
  };

  return (
    <div>
      <Rating
        initialRating={3} // Set the initial rating value
        emptySymbol="far fa-star" // Font Awesome class for empty star
        fullSymbol="fas fa-star" // Font Awesome class for full star
        onChange={handleRatingChange} // Handle rating change event
      />
    </div>
  );
};

export default star;
