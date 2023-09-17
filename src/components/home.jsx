import React from 'react'

import image1 from '../images/image5.jpg'
import image2 from '../images/imge6.jpg'
import image3 from '../images/image3.webp'
import image4 from '../images/imge7.webp'
import image5 from '../images/image 4.jpg'
//import pages
import Products from './product'
import About from './about'
import Contact from './contact'
import Footer from './footer'

const Home = () => {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="images" height={'550px'} />
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="images" height={'550px'} />
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="images" height={'550px'} />
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block w-100" alt="images" height={'550px'} />
    </div>
    <div class="carousel-item">
      <img src={image5} class="d-block w-100" alt="images" height={'550px'} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<About />
<Products />
<Contact />
<Footer />
</>
  )
}

export default Home