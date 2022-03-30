import React from 'react'
import girl from '../images/girl.jpeg'
import boy from '../images/boy.jpeg'
import boy2 from '../images/boy2.jpeg'
import girl2 from '../images/girl2.jpeg'
function Testimonial() {
  return (
    <>
        <section className='py-md-5 pt-5 container'>
        <div className='row py-3'>
            <div className='col-12 col-md-7 mx-auto'>
                <div className='text-center'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Testimonials</p>
                    <h1 className='mt-4 fw-bolder display-5 mb-3'>What they say about us</h1>
                    <p className='fs-5 fontcolor'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                </div>
            </div>
        </div>
        <div className="grid-container">
        <div className="item1">
                <div className='p-md-5 p-4 text-center'>
                    <h1 className='mt-4 fw-bolder display-5 mb-3'>Discover why so many companies trust us</h1>
                    <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet.</p>
                    <div className='py-2'>
                        <h1 className='mt-4 fw-bolder display-5 mb-3'>69</h1>
                        <p className='fs-5 text-muted'>Happy clients</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='mt-4 fw-bolder display-5 mb-3'>420</h1>
                        <p className='fs-5 text-muted'>Projects completed</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='mt-4 fw-bolder display-5 mb-3'>20</h1>
                        <p className='fs-5 text-muted'>Years in business</p>
                    </div>
                </div>
            </div>
            <div className="item2">
                <div className='p-md-5 p-4 text-center'>
                    <p className='mb-4'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    <img src={girl} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                    <p className='fs-5'>Katy Perry</p>
                    <p className='text-muted mb-md-5 mb-0'>CEO, Spotify</p>
                </div>
            </div>
            <div className="item3">
                <div className='p-md-5 p-4 text-center'>
                    <p className='mb-4'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    <img src={boy} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                    <p className='fs-5'>Henry Krasner</p>
                    <p className='text-muted mb-md-5 mb-0'>CTO, Twitter</p>
                </div>
            </div>
            <div className="item4">
                 <div className='p-md-5  p-4 text-center'>
                    <p className='mb-4'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    <img src={boy2} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                    <p className='fs-5'>Bob Foster</p>
                    <p className='text-muted mb-md-5 mb-0'>CEO, Amazon</p>
                </div>
            </div>  
            <div className="item5">
                <div className='p-md-5 p-4 text-center'>
                    <p className='mb-4'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    <img src={girl2} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                    <p className='fs-5'>Ema Roberts</p>
                    <p className='text-muted mb-md-5 mb-0'>Owner, Dropbox</p>
                </div>
            </div>
          
            
        </div>
        
    </section>
    </>
  )
}

export default Testimonial