import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

import pay1 from'../images/pay1.jpg'
import pay2 from'../images/pay2.png'
//import sec1 from '../images/sec 1.png'





const Footer = () => {
    return (
        <div className='foot'>
            <div className=" container  mt-3">
                <div className="row ">
                    <div className="col-lg-3 col-md-6">
                        <h2 className='f-heading'>AYS store</h2>
                        <p className='text'>   we are a tech store that you can find all you want from out store by one click ,
                            we create (ays) store in 2022 and we have many products that you and every one need in most time,
                            in his day and we have more than you need.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 links">
                        <Link to='/'>home</Link>
                        <Link to='/products'>products</Link>
                        <Link to='/about'>about us</Link>
                        <Link to='/contact'>contact</Link>
                        <Link to='/cart'>cart</Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control fw-blod" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary px-5">login</button>
                        
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div>
                        <img src={pay1} alt="payments" className='imge' />
                        <img src={pay2} alt="payments" className='imge' />
                        </div>
                        <div className="text-w">
                        <h5> secure payments</h5>
                         <h5> on / offline order</h5>
                         <h5> cal us now </h5>
                         <h5> 20+ 1014567381 </h5>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                     <h5 className='ff'>copy right : <span>a</span>hmed y<span>a</span>asser s<span>a</span>ad </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer