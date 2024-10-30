import React, { useState } from 'react'
import { images } from './SlideData'

const State03 = () => {
    // Create a state to hold the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleChangeImage = (imageIndex) => {
        setCurrentSlide(imageIndex);
    }

   const imgs = images[currentSlide];
  return (
    <div className=' container'>
        <div className="row p-0 m-0 bg-dark mx-auto" style={{width: "500px", height: "700px"}}>
            <div style={{height: "80%"}} className="col-12 p-0">
                <img className='w-100 h-100' src={imgs.img} alt="" />
            </div>
            <div style={{height: "20%"}} className="col-12 bg-primary  row p-3 m-0">

                {
                    images.map((img, index) => (
                        <div key={index} className="col-3">
                            <img onClick={() => handleChangeImage(index) } className='w-100 h-100' src={img.img} alt="" />
                        </div>
                    ))
                }
               

            </div>
        </div>
    </div>
  )
}

export default State03