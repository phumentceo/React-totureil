import React, { useState } from 'react'
import { images } from './Data';


const State04 = () => {
  const [imageShow,setImageShow] = useState(0);

  const handleClick = (index) => {
       console.log(index);
       setImageShow(index);
  }

  const imageIndex = images[imageShow];
  return (
    <div>
        <div className=" container">


            <div style={{height: "500px",width: "350px"}} className="row p-0 m-0 bg-dark mx-auto">

                <div style={{height:"80%"}} className="col-12 p-0 m-0 bg-primary">
                    <img className=' w-100 h-100' src={imageIndex.img} alt="" />
                </div>

                <div style={{height:"20%"}}  className="col-12 row m-0 p-0 py-3 bg-secondary">

                    {
                        images.map((value,index) => (
                            <div onClick={ () => handleClick(index) } key={index} className="col-lg-3 col-md-3 h-100">
                              <img className=' w-100 h-100' src={value.img} alt="" />
                            </div>
                        ))
                    }

                    
                </div>

            </div>


        </div>
    </div>
  )
}

export default State04;