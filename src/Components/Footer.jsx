import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="text-center text-lg-start text-light">
    <div className="container-fluid">
      <h3 className='ps-4'> Coffee Day</h3>
      <div className="row">
        <div className="col-lg-4">
            <p>  Our shop offer a space for people to connect, work, and relax. They also contribute to the local economy, support other businesses, and provide a venue for social and cultural events</p>
          <strong><p>Opening Times</p></strong>
          <p>09:30 AM – 12:00 AM Every Day</p>
        </div>
        <div className="col-lg-4 ps-4" style={{textAlign:'center'}}>
         <p className='fs-5'>About Us</p>
         <ul style={{textAlign:'center',listStyleType:'none', color:'orange'}}><li></li>
         <li>Features</li>
         <li>Community</li>
         <li>Support</li></ul>
        </div>
        <div className="col-lg-4 ">
        <strong><p className='fs-5 fw-bolder'>Social Media</p></strong>
          <i style={{color:'orange',cursor:'pointer'}}  className="fa-brands fa-facebook-f me-5" >
            <a href="https://www.facebook.com/"></a>
          </i>
          <i style={{color:'orange',cursor:'pointer'}} className="fa-brands fa-instagram me-5" ><a href="https://www.instagram.com/"></a></i>
          
          <i style={{color:'orange',cursor:'pointer'}} className="fa-brands fa-twitter" ><a href="https://twitter.com/?lang=en"></a></i>
        
        </div>
      </div>
    </div>
    <div className="text-center p-3 text-warning">
      © 2024 Copyright:
      <a className="text-warning" href="#">Cofee Day</a>
    </div>
    </footer>
        
    </div>
  )
}

export default Footer