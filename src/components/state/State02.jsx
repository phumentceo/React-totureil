import React, { useState } from 'react'
import { images } from './SlideData';

const State02 = () => {

  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
   
    if (imageIndex < images.length - 1 ) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }
  const handlePrevious = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(images.length - 1);
    }
  }
  const slideIndex = images[imageIndex];
  return (
    <div className=' container d-flex justify-content-center'>

        <div className="">
            <div className="slide">
                <img width={400} height={300} src={slideIndex.img} alt="" />
            </div>

            <div className="mt-3 d-flex justify-content-between  align-items-center">
                <button className='btn btn-danger' onClick={handlePrevious}>previous</button>
                <div className="">
                    {imageIndex}/{images.length}
                </div>
                <button className=' btn btn-primary' onClick={handleNext}>next</button>
            </div>
        </div>

    </div>
  )
}

export default State02