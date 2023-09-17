import React from 'react'
import contactImage from '../images/contact.png'
const Contact = () => {
  return (
    <div>
      <div className="container mt-5 py-5 my-5">
        <div className="row">
          <div className="col-12">
            <h2>Have some questions </h2>
            <hr />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 col-lg-5">
            <img src={contactImage} alt="contact us" style={{ width: '400px', height: '400px' }} />
          </div>
          <div className="col-md-12 col-lg-5">
            <form >
              <div class="mb-3">
                <label for="exampleForm" class="form-label "style={{ color: 'blue', fontWeight:'500',fontSize:'24px' }}>your name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="ahmed yasser" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"style={{ color: 'blue', fontWeight:'500',fontSize:'24px' }}>Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"style={{ color: 'blue', fontWeight:'500',fontSize:'24px' }}>your message box</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              
              <button type="submit" class="btn btn-outline-primary px-5">send message </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;