import React, {useState } from 'react'
import '../css/products.css'
import Data from '../data.js'
import { Link } from 'react-router-dom'
import { addproduct } from '../rtk/slices/cart-slices'
import { useDispatch } from 'react-redux'



const Products = () => {

const [data,setData]=useState(Data);

const DoFilter=(category)=>{
  if(category==='all'){
   return setData(Data)
  }
  else{
const result=Data.filter((curData)=>{
  return curData.category===category;
});
setData(result);
}
}

//const cart=useSelector((state)=>state.cart)
const dispath=useDispatch();



  const carditem=(product)=>{
    const{image,id,title,price}=product
    return(
      <div className="card mb-4" style={{width:"18rem"}} key={product.id}>
  <img src={image} class="card-img" alt="products"  />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-lead">{price}$</p>
    
    <Link to={`/products/${id}`} class="btn btn-outline-primary mx-2" >details</Link>
    <Link  class="btn btn-outline-primary mx-2"on onClick={()=>dispath(addproduct(product))} >add to cart</Link>
  </div>
</div>
    )
  }
  return (
    <div>
      <div className="container py-5">
       <div className="row">
        <div className="col-12">
          <h2 className='heading'>our products</h2>
          <hr />
        </div>
       </div>
      </div>
      <div className="container">
        <div className="row justify-content-around ">
          <div className="col-lg-12 md-12 mb-5 ">
          <button className="btn btn-light mx-4"onClick={()=>setData(Data)} >all</button>
           <button className="btn btn-danger mx-4"onClick={()=>DoFilter('laptop')} >laptop</button>
            <button className="btn btn-warning mx-4" onClick={()=>DoFilter('phone')}>phone</button>
            <button className="btn btn-dark mx-4"onClick={()=>DoFilter('headphone')}>airpodes</button>
            <button className="btn btn-primary mx-4"onClick={()=>DoFilter('cam')}>cam</button>
            <button className="btn btn-danger mx-4"onClick={()=>DoFilter('power')} >power-bank</button>
  
          </div>

         {
          data.map((carditem))
         }
        </div>
      </div>
      </div>
  )
}

export default Products