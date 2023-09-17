import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutImage from'../images/about.jpg'
const About = () => {
  return (
    <div>
      <div className="container mt-5 py-5 my-5">
        <div className="row">
          <div className="col-md-6 mt-3">
            <h2 className='pb-4 text-primary' style={{fontWeight:'bold'}}>About us</h2>
            <p className='pb-3' style={{fontWeight:'500',color:'gray',fontSize:'16px'}}>we are a tech store that you can find all you want from out store by one click ,
              we create (ays) store in 2022 and we have many products that you and every one need in most time,
              in his day and we have more than you need.
              we are a tech store that you can find all you want from out store by one click ,
              we create (ays) store in 2022 and we have many products that you and every one need in most time,
              in his day and we have more than you need.
              we are a tech store that you can find all you want from out store by one click ,
              we create (ays) store in 2022 and we have many products that you and every one need in most time,
              in his day and we have more than you need.
            </p>
            <NavLink to='/contact'className='btn btn-outline-primary px-3'>contact us</NavLink>
          </div>
          <div className="col-md-6">
            <img src={aboutImage} alt="aboutus" style={{width:'400px',height:'400px'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About