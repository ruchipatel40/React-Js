import React from 'react'
function Footer() {
  return (
    <>
        <footer className='container py-5 mt-5 px-md-5 px-3 top-100 bottom-0'>
            <div className='row text-start '>
                <div className='col-lg-3 col-md-6 col-12 pb-3 pb-md-0'>
                    <div className='pb-3'>
                        <span className="fw-bold fs-4">Carator</span> <span className="fw-bold fs-4 " style={{color:'#adadadb8'}}>Studio</span>
                    </div>
                    <p className='fs-5 fontcolor'>© 2021 Crator Studio.<br/>All rights reserved.</p>
                </div>
                <div className='col-lg-3 col-md-6 col-12 pb-3 pb-md-0'>
                    <h5>Get in touch</h5>
                    <p className='fontcolor'>123 West Kanye Street Los Angeles, CA 90001</p>
                    <p className='fontcolor'>(123) 456-789
                    hello@crator.com</p>
                </div>
                <div className='col-lg-3 col-md-6 col-12 pb-3 pb-md-0'>
                   <h5>Company</h5>
                   <ul className='list-unstyled fontcolor'>
                       <li>Home</li>
                       <li>About</li>
                       <li>Services</li>
                       <li>Work</li>
                       <li>Contact us</li>
                   </ul>
                </div>
                <div className='col-lg-3 col-md-6 col-12 pb-3 pb-md-0 '>
                    <h5>Follow us on social media</h5>
                    <p className='fontcolor pe-md-5 pe-0'>Lorem ipsum dolor sit amet consect adipis elit.</p>
                    <div className='d-flex justify-content-start'>
                        <a href='#' className='hover rounded-circle d-inline-block text-center me-3' style={{width:'50px',height:'50px'}}><i className="fa-brands fa-instagram  text-center pt-3 w-100 h-100"></i></a>
                        <a href='#' className='hover rounded-circle d-inline-block text-center me-3' style={{width:'50px',height:'50px'}}><i className="fa-brands fa-facebook-f text-center pt-3 w-100 h-100"></i></a>
                        <a href='#' className='hover rounded-circle d-inline-block text-center me-3' style={{width:'50px',height:'50px'}}><i className="fa-brands fa-twitter text-center pt-3 w-100 h-100"></i></a>
                    </div>
                    
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer