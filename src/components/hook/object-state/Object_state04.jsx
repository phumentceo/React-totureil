import React, { useState } from 'react'

const Object_state04 = () => {
  const [student, setStudent] = useState({
    'name'    : 'null',
    'contact' : {
        'email' : 'null',
        'phone' : {
            'metfone' :  '+885',
            'smart'   :  '+885',
            'cellcard':  '+885'
        },
    }
  });

  const handleInput = (e) => {
     if(e.target.name === 'name'){
        setStudent(
            function(prev){
                return {
                    ...prev,
                    [e.target.name] : e.target.value
                }
            }
        );
     }else if(e.target.name === 'email'){
        setStudent((prev)=> (
            {
                ...prev,
                contact: {
                   ...prev.contact,
                    [e.target.name]: e.target.value
                }
            }
        ))
     }else{
        setStudent((prev)=> (
            {
                ...prev,
                contact: {
                   ...prev.contact,
                    phone: {
                       ...prev.contact.phone,
                        [e.target.name]: e.target.value
                    }
                }
            }
        ))
     }
  }
  return (
    <div>
        <form action="" className='w-50 mx-auto'>

            <div className="form-group mb-3">
                <label>Name:</label>
                <input type="text" placeholder='Enter Your name' name='name' onInput={handleInput} className=' form-control'/>
            </div>

            <div className="form-group mb-3">
                <label>Email:</label>
                <input type="text" placeholder='Enter Your name' name='email' onInput={handleInput} className=' form-control'/>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="">Phone Number</label>
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" placeholder='Metfone' name='metfone'   onInput={handleInput}  className=' form-control' />
                    </div>
                    <div className="col-lg-4">
                       <input type="text" placeholder='Smart' name='smart'        onInput={handleInput}  className=' form-control' />
                    </div>
                    <div className="col-lg-4">
                        <input type="text" placeholder='Cellcard' name='cellcard' onInput={handleInput}  className=' form-control' />
                    </div>
                </div>
            </div>
            
        </form>

        <div className="w-50 mx-auto border mt-5 p-5 shadow rounded-2">
            <h2>Student Details</h2>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p>Student Name</p>
                <p className='font-weight-bold text-uppercase text-success '>{student.name}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p>Email Contact</p>
                <p>{student.contact.email}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p>Metfone Contact Number</p>
                <p>{student.contact.phone.metfone}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p>Smart Contact Number</p>
                <p>{student.contact.phone.smart}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p>Cellcard Contact Number</p>
                <p>{student.contact.phone.cellcard}</p>
            </div>
        </div>
    </div>
  )
}

export default Object_state04