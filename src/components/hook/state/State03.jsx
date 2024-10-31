import React, { useState, useEffect } from 'react';
import { images } from './Data';

const State03 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Use useEffect to handle automatic slide transitions
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[slideIndex];

  return (
    <div className="container">
      <div className="slides w-50 h-50 mx-auto">
        <img className="w-100" height={400} src={currentImage.img} alt="" />
      </div>

      <div className="d-flex justify-content-between align-items-center w-25 mx-auto mt-5">
        <button onClick={handlePrev} className="btn btn-danger">Prev</button>
        <div className="">
          {slideIndex + 1}/{images.length}
        </div>
        <button onClick={handleNext} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default State03;