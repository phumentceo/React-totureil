import React, { useEffect, useState } from 'react'

const StateStorage = () => {



    const [products,setProduct] = useState(() => {
        return JSON.parse(localStorage.getItem('products')) || [];
    });
    const [productEdit,setProductEdit] = useState(null);



    //Effect insert in to localStorage
    useEffect(() =>{
        localStorage.setItem('products',JSON.stringify(products));
    },[products]);

    //Effect for select products from localstorage
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        setProduct(products);
    },[]);

    const handleSave = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let productsData = {
            'id'    : Date.now(),
            'title' : data.get('title'),
            'price' : data.get('price'),
            'qty'   : data.get('qty')
        };

        setProduct([...products,productsData])

        e.target.reset();
    }

    const handleDelete = (id) => {
        if(confirm('Do you want to delete this?')){
            //product filter 
            let productFilter = products.filter(item => item.id  !== id);
            setProduct(productFilter); 
        }
    }

    const handleEdit = (id) => {
        
    }

    


  return (
    <div  className='container'>
        <div className="row mt-5 ">
            <div className="col-lg-6 p-4 border rounded-3">
                <div>
                    <h3>Create Product</h3>
                </div>
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="">Product Title</label>
                        <input type="text" className=' form-control shadow-none mb-3' name="title" defaultValue={products}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Product Price</label>
                        <input type="text" className=' form-control shadow-none mb-3' name="price" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Product Qty</label>
                        <input type="text" className=' form-control shadow-none mb-3' name="qty" id="" />
                    </div>
                    <div className="button-group">
                        <button className=' btn btn-success ms-2' type="submit">Save</button>
                        <button className=' btn btn-danger  ms-2' type="reset">Reset</button>
                    </div>
                </form>
            </div>
            <div className="col-lg-6">
                <div>
                    <h3>Product List</h3>
                    <table className='table table-bordered'>
                        <thead className=' table-dark p-3 text-center'>
                            <tr>
                                <th>Product Id</th>
                                <th>Product title</th>
                                <th>Product Price</th>
                                <th>Product Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=' text-center'>
                        {products.map((value,key) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>${value.price}</td>
                                <td>{value.qty}</td>
                                <td>
                                    <button className=' btn btn-primary btn-sm me-2'>edit</button>
                                    <button onClick={() => handleDelete(value.id)} className=' btn btn-danger btn-sm'>delete</button>
                                </td>
                            </tr>
                        ))} 
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StateStorage