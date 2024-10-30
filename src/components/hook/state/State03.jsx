import React, { useState } from 'react'
import { images } from './Data'

const State03 = () => {

  const [slideIndex,setslideIndex] = useState(0);

  const handleNext = () => {
     console.log(slideIndex);
     if(slideIndex < images.length - 1 ){
        setslideIndex(slideIndex + 1);
     }else{
        setslideIndex(0);
     }
     
  }
    
    setTimeout(() => {
        if(slideIndex < images.length - 1 ){
            setslideIndex(slideIndex + 1);
         }else{
            setslideIndex(0);
         }
    },5000);

    

    const handlePrev = () => {
      if(slideIndex > 1){
        setslideIndex(slideIndex - 1);
      }else{
        setslideIndex(images.length - 1);
      }
   }
  
  const imageIndex = images[slideIndex];
  return (
    <div className=' container'>

           <div className="slides w-50 h-50 mx-auto">

               <img className='w-100' height={400} src={imageIndex.img} alt="" />

           </div>

           <div className="d-flex justify-content-between align-items-center w-25 mx-auto mt-5">
               <button onClick={handlePrev} className=' btn btn-danger'>Prev</button>
               <div className="">
                   {slideIndex + 1}/{images.length}
               </div>
               <button onClick={handleNext} className=' btn btn-primary'>Next</button>
           </div>

    </div>
  )
}

export default State03