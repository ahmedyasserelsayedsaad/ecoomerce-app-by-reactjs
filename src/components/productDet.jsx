import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../data';
import { addproduct, deleteproduct } from '../rtk/slices/cart-slices';
import { useDispatch } from 'react-redux';


const ProductDet = () => {
  const[cartbtn,setCartBtn]=useState('add to cart');
// adding 
const dispatch=useDispatch();
/////////
  const Proid=useParams();
  const prodetailes=Data.filter((x)=>x.id==Proid.id);
  const product=prodetailes[0];
  console.log(product);
  const clicked=(product)=>{
    if(cartbtn==='add to cart'){
      dispatch(addproduct(product))
      setCartBtn('cancel buying')
    }else{
      dispatch(deleteproduct(product))
      setCartBtn('add to cart')
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row mt-5 py-5 ">
          <div className="col-lg-6 d-flex justify-content-center mx-auto">
          <img src={product.image} alt={product.title} className='fw-blod' style={{width:'400px'}} />
          </div>
          <div className="col-lg-6 ">
            <h2 className='fw-blod'>{product.title}</h2>
            <hr />
            <h5>{product.category}</h5>
            <h5>{product.price}$</h5>
            <p>`{product.des}`</p>
            <button type="btn" class="btn btn-outline-primary px-5"
            onClick={()=>clicked(product)}>{cartbtn}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDet;