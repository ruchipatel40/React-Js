import React from 'react'
import Letsconnect from '../Components/Letsconnect'
import Testimonial from '../Components/Testimonial'
import agroup1 from '../images/agroup1.jpeg'
import agroup2  from '../images/agroup2.jpeg'
import agroup3  from '../images/agroup3.jpeg'
import agirl1 from '../images/agirl1.jpeg'
import agirl2 from '../images/agirl2.jpeg'
import aboy3 from '../images/aboy3.jpeg'
import aboy4 from '../images/aboy4.jpeg'
import aboy5 from '../images/aboy5.jpeg'
import agirl6 from '../images/agirl6.jpeg'
import { HiShieldCheck ,HiOutlineLightBulb} from 'react-icons/hi'
import { MdPersonOutline } from 'react-icons/md'
import { BsTelephone, BsPeople } from 'react-icons/bs'
import { FiTrendingUp } from 'react-icons/fi'


function About() {
  return (
    <div >
       <div className='container'>
        <div className='text-center row justify-content-center py-md-5 py-3 mb-md-5 mb-1'>
            <div className='col-lg-10 col-12 mb-md-5 mb-1'>
                <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>About us</p>
                <h1 className='mt-4 display-3 mb-3'>A small creative team excited to create beautiful things</h1>
                <p className='fontcolor px-md-5 mx-md-5 px-2 mx-2 fs-5'>Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
            <div className='col-lg-10 col-md-8 col-12 py-md-4 py-2 mb-md-5 mb-1' >
                <img  className='w-100 borderadious objectfit' src={agroup1} style={{maxHeight:'690px'}}/>
            </div>
        
        </div>

        <div className='row py-5 mt-5'>
            <div className='col-lg-8 col-12 pe-xl-5 pe-0 mt-md-5 mt-1'>
                <div className='text-sm-start text-center mb-5'>
                        <p className='px-4 d-inline-block py-2 ourservice lineargradiant'>Our vision</p>
                        <h1 className='mt-2 display-5 mb-3'>We believe in the power of creative ideas</h1>
                        <p className='fontcolor fs-5 pe-md-3 pe-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et. Ad cum decore expetenda dissentiet, civibus patrioque referrentur id nec, ei eam simul diceret.</p>
                </div>
                <div className='row text-md-start text-center pb-md-5 pb-2 '>
                    <div className='col-xl-5 col-md-6 col-12  '>
                        <div className='pb-2'>
                            <div className='lineargradiant d-md-inline-block d-block mx-auto ' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                <span className='d-flex justify-content-center pt-3 align-items-center '> <HiShieldCheck style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                            </div>
                            <span className='px-3 fw-bold fs-5'>Full transparency</span>
                        </div>
                        <div><p className='fontcolor ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor.</p></div>
                    </div>
                    <div className='col-xl-5 col-md-6 col-12'>
                        <div className='pb-2'>
                            <div className='lineargradiant d-md-inline-block d-block mx-auto' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                <span className='d-flex justify-content-center pt-3 align-items-center '> <HiOutlineLightBulb style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                            </div>
                            <span className='px-3  fw-bold fs-5'>Product Mindset</span>
                        </div>
                        <div><p className='fontcolor ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor.</p></div>
                    </div>
                </div>
            </div>
               
            <div className='col-lg-4 col-12 pt-lg-0 pt-2 mt-md-5 mt-1'>
              <img src={agroup2} style={{maxHeight:'560px'}} className='w-100 borderadious objectfit'/>
            </div>
        </div>
        <div className='row py-5 my-md-5 my-0'>    
            <div className='col-lg-4 col-12 pt-lg-0 pt-2 '>
              <img src={agroup3} style={{maxHeight:'560px'}} className='w-100  borderadious objectfit mb-lg-0 mb-4'/>
            </div>
            <div className='col-lg-8 col-12 ps-xl-5 ps-lg-3 ps-0'>
                <div className='text-sm-start text-center mb-5'>
                        <p className='px-4 d-inline-block py-2 ourservice lineargradiant'>Our handbook</p>
                        <h1 className='mt-2 display-5 mb-3'>How we work and collaborate with our clients</h1>
                        <p className='fontcolor fs-5 pe-md-3 pe-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et. Ad cum decore expetenda dissentiet, civibus patrioque referrentur id nec, ei eam simul diceret.</p>
                </div>
                <div className='row text-md-start text-center pb-md-5 pb-2'>
                    <div className='col-xl-5 col-md-6 col-12 '>
                        <div className='pb-2'>
                            <div className='lineargradiant d-md-inline-block d-block mx-auto' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                <span className='d-flex justify-content-center pt-3 align-items-center '> <MdPersonOutline style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                            </div>
                            <span className='px-3 fw-bold fs-5'>User focused</span>
                        </div>
                        <div><p className='fontcolor ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor.</p></div>
                    </div>
                    <div className='col-xl-6 col-md-6 col-12'>
                        <div className='pb-2'>
                            <div className='lineargradiant d-md-inline-block d-block mx-auto' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                <span className='d-flex justify-content-center pt-3 align-items-center '> <BsTelephone style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                            </div>
                            <span className='px-3 fw-bold fs-5'>Clear communication</span>
                        </div>
                        <div><p className='fontcolor ms-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor.</p></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <section className='container padding'>
            <div className='text-center row justify-content-center '>
                <div className='col-lg-7 col-12 '>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Our value</p>
                    <h1 className='mt-4 display-5 mb-3'>The values that guide and define our work</h1>
                    <p className='fontcolor fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec.</p>
                </div>
            </div>

            <div className='row justify-content-evenly py-md-5 py-3 '>
                <div className='col-lg-3 col-md-5 col-12 text-center p-5 borderadious mb-lg-0 mb-5 w-ourvalue' style={{backgroundColor:'#23202A'}}>
                    <div className='py-md-5 py-0'>
                        <div className='d-md-inline-block d-block mx-auto mb-4' style={{width:'70px',height:'70px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                            <span className=' mb-2 d-flex justify-content-center pt-3 align-items-center '> <MdPersonOutline className='fontcolor' style={{fontSize:'31px'}}/></span>
                        </div>
                        <h4 className='fw-bold'>Quality</h4>
                        <p className='fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    </div>

                </div>
                <div className='col-lg-3 col-md-5 col-12 text-center p-5  borderadious mb-lg-0 mb-5 w-ourvalue' style={{backgroundColor:'#23202A'}}>
                    <div className='py-md-5 py-0'>
                        <div className=' d-md-inline-block d-block mx-auto mb-4' style={{width:'70px',height:'70px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiTrendingUp className='fa-solid fa-arrow-trend-up fontcolor' style={{fontSize:'31px'}}/></span>
                        </div>
                        <h4 className='fw-bold'>Improvement</h4>
                        <p className='fontcolor'>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-5 col-12 text-center p-5 borderadious w-ourvalue' style={{backgroundColor:'#23202A'}}>
                    <div className='py-md-5 py-0'>
                        <div className='d-md-inline-block d-block mx-auto mb-4' style={{width:'70px',height:'70px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center'> <BsPeople className='fontcolor' style={{fontSize:'31px'}}/></span>
                        </div>
                        <h4 className='fw-bold'>Team work</h4>
                        <p className='fontcolor '>Nemo expedita voluptas culpa sapiente alias molestiae corrupti in laborum sed rerum et corporis.</p>
                    </div>
                </div>
            </div>
            <div className='row text-center row justify-content-center py-md-5 py-3 mt-md-5 mt-0'>
                <div className='col-lg-7 col-12'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>The team</p>
                    <h1 className='mt-4 display-5 mb-3'>Decades of experience in design and development</h1>
                    <p className='fontcolor fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec.</p>
                </div>
            </div>

            <div className='grid-container-about py-md-5 py-2'>
                <div className='about1'>
                    <div className='text-center'>
                        <img src={agirl1} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold fs-5' style={{fontSize:'20px'}} >Kaylen Meyer</div>
                        <p className='fontcolor fs-5'>CEO</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='hover rounded-circle d-inline-block text-center me-3 text-decoration-none' style={{width:'40px',height:'40px'}}>
                            <i className="fa-brands fa-instagram  text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover rounded-circle d-inline-block text-center me-3 text-decoration-none' style={{width:'40px',height:'40px'}}>
                            <i className="fa-brands fa-facebook-f text-center  w-100 h-100  d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover rounded-circle d-inline-block text-center text-decoration-none' style={{width:'40px',height:'40px'}}>
                            <i className="fa-brands fa-twitter text-center w-100 h-100  d-flex justify-content-center align-items-center"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className='about2'>
                    <div className='text-center'>
                        <img src={agirl2} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold' style={{fontSize:'20px'}} >Coriss Ambady</div>
                        <p className='fontcolor fs-5'>Lead Developer</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='hover me-3 icons' >
                            <i className="fa-brands fa-instagram  text-center w-100 h-100  d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover me-3 icons' >
                            <i className="fa-brands fa-facebook-f text-center w-100 h-100  d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover icons' >
                            <i className="fa-brands fa-twitter text-center w-100 h-100  d-flex justify-content-center align-items-center"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className='about3'>
                    <div className='text-center'>
                        <img src={aboy3} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold' style={{fontSize:'20px'}} >Lester Mccall</div>
                        <p className='fontcolor fs-5'> Senior Designer</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='hover icons me-3' >
                            <i className="fa-brands fa-instagram  text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover icons me-3' >
                            <i className="fa-brands fa-facebook-f text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i>
                        </a>
                        <a href='#' className='hover icons' >
                            <i className="fa-brands fa-twitter text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className='about4'>
                <div className='text-center'>
                        <img src={aboy4} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold fs-5' style={{fontSize:'20px'}} >Misha Mustafa</div>
                        <p className='fontcolor fs-5'>Studio Artist</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='icons hover me-3' ><i className="fa-brands fa-instagram text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='icons hover me-3'><i className="fa-brands fa-facebook-f text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='icons hover' ><i className="fa-brands fa-twitter text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                    </div>
                    </div>
                </div>
                <div className='about5'>
                <div className='text-center'>
                        <img src={aboy5} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold fs-5' style={{fontSize:'20px'}} >Stefan Stefancik</div>
                        <p className='fontcolor fs-5'>Designer</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='icons hover me-3' ><i className="fa-brands fa-instagram  text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='icons hover me-3' ><i className="fa-brands fa-facebook-f text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='hover icons' ><i className="fa-brands fa-twitter text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                    </div>
                    </div>
                </div>
                <div className='about6'>
                <div className='text-center'>
                        <img src={agirl6} className="objectfit borderadious mb-3" style={{width:'250px', height:'250px'}}/>
                        <div className='fw-bold fs-5' style={{fontSize:'20px'}} >Vivien Smith</div>
                        <p className='fontcolor fs-5'>Developer</p>
                        <div className='d-flex justify-content-center'>
                        <a href='#' className='hover icons me-3' ><i className="fa-brands fa-instagram  text-center w-100 h-100 text-center d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='hover icons me-3' ><i className="fa-brands fa-facebook-f text-center w-100 h-100 text-center d-flex justify-content-center align-items-center"></i></a>
                        <a href='#' className='hover icons' ><i className="fa-brands fa-twitter text-center  text-center  w-100 h-100 d-flex justify-content-center align-items-center"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial />
       <Letsconnect />
    
    </div>
  )
}

export default About