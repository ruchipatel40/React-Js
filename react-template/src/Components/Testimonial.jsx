import React from 'react'
import girl from '../images/girl.jpeg'
import boy from '../images/boy.jpeg'
import boy2 from '../images/boy2.jpeg'
import girl2 from '../images/girl2.jpeg'
function Testimonial() {
  return (
    <>
        <section className='py-md-5 container padding'>
        <div className='row py-md-5 py-2 mt-md-5 mt-0'>
            <div className='col-12 col-md-7 mx-auto'>
                <div className='text-center'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Testimonials</p>
                    <h1 className='mt-4 fw-bolder display-5 mb-3'>What they say about us</h1>
                    <p className='fs-5 fontcolor'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                </div>
            </div>
        </div>
        <div className='row pb-5'>
            <div className='col-lg-4 col-12 borderadious mb-lg-0 mb-5' style={{backgroundColor:'#23202A'}}>
                <div className='py-md-5 py-4 px-md-3 px-2 text-center'>
                    <h1 className='mt-4 fw-bolder mb-3'>Discover why so many companies trust us</h1>
                    <p className='fs-5 fontcolor px-lg-4 px-0'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet.</p>
                    <div className='py-2'>
                        <h1 className='mt-2 fw-bolder display-5 '>69</h1>
                        <p className='fs-5 fontcolor'>Happy clients</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='mt-2 fw-bolder display-5'>420</h1>
                        <p className='fs-5 fontcolor'>Projects completed</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='mt-2 fw-bolder display-5 mb-3'>20</h1>
                        <p className='fs-5 fontcolor'>Years in business</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-12 '>
                <div className='row justify-content-evenly pb-5'>
                    <div className='col-md-5 col-12 borderadious mb-md-0 mb-5' style={{backgroundColor:'#23202A'}}>
                        <div className='p-md-5 p-4 text-center'>
                            <p className='mb-4 fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                            <img src={girl} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                            <p className='fs-5'>Katy Perry</p>
                            <p className='fontcolor mb-md-5 mb-0'>CEO, Spotify</p>
                         </div>
                    </div>
                    <div className='col-md-5 col-12 borderadious' style={{backgroundColor:'#23202A'}}>
                        <div className='p-md-5 p-4 text-center'>
                            <p className='mb-4 fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                            <img src={boy} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                            <p className='fs-5'>Henry Krasner</p>
                            <p className='fontcolor mb-md-5 mb-0'>CTO, Twitter</p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-evenly'>
                    <div className='col-md-5 col-12 borderadious mb-md-0 mb-5' style={{backgroundColor:'#23202A'}}>
                        <div className='p-md-5  p-4 text-center'>
                            <p className='mb-4 fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                            <img src={boy2} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                            <p className='fs-5'>Bob Foster</p>
                            <p className='fontcolor mb-md-5 mb-0'>CEO, Amazon</p>
                        </div>
                    </div>
                    <div className='col-md-5 col-12  borderadious' style={{backgroundColor:'#23202A'}}>
                        <div className='p-md-5 p-4 text-center'>
                            <p className='mb-4 fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                            <img src={girl2} className='img-fluid rounded-circle mb-3 objectfit' style={{width:'50px',height:'50px'}}/>
                            <p className='fs-5'>Ema Roberts</p>
                            <p className='fontcolor mb-md-5 mb-0'>Owner, Dropbox</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Testimonial