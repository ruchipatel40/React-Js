import React from 'react'
import img1 from '../images/img1.jpeg'
import group from '../images/group.jpeg'
import group2 from '../images/group2.jpeg'
import group3 from '../images/group3.jpeg'
import group4 from '../images/group4.jpeg'
import Letsconnect from '../Components/Letsconnect'
import Ourservice from '../Components/Ourservice'
import { FiBox,FiTriangle,FiLayers } from 'react-icons/fi'
import { RiVipDiamondLine,RiFocusLine  } from 'react-icons/ri'
import { BsCircleSquare } from 'react-icons/bs'
import group5 from '../images/group5.jpeg'
import group6 from '../images/group6.jpeg'
function Service() {
  return (
      <>
      <section className='container py-sm-5 py-3 mb-md-5 mb-0 '>
      <div>
          <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Our Services</p>
          <h1 className='mt-4 display-3 mb-md-5 mb-2'>We Create meaningful digital solutions that level up your business</h1>
      </div>
       <div className='row pb-md-5 pb-0'>
        <div className='col-12 col-md-6 pe-lg-5 pe-2'>
           <p className='fs-5 mb-md-4 mb-3 fontcolor '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.</p>
            <a className='btn rounded-pill hover1 fw-bold' type='button' style={{padding:'1rem 2rem',fontSize:'16px'}} >Let’s get started</a>
        </div>
        <div className='col-12 col-md-6 pt-md-0 pt-5'>
        <div className='row'>
           <div className='col-12 col-md-6 pe-2 '>
                <img src={img1}  className='w-100 borderadious objectfit' height='400px' />
           </div>
           <div className='col-12 col-md-6 pt-md-0 pt-4'>
                <img src={group} className='w-100 borderadious objectfit' height='400px' />
           </div>
        </div>
        </div>
       </div>

        <div className='py-md-5 py-3 my-md-5 my-0 '>
            <div className='row justify-content-between '>
                <div className='col-12 col-md-5 pb-5 pb-md-0'>
                    <img src={group2} className='w-100 borderadious h-100 objectfit' />
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center py-5'>
                    <div className='p-md-5 px-2 '>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Product development</p>
                    <h1 className='display-5 fw-bold my-4'>Innovative digital solutions</h1>
                    <p className=' fs-5 fontcolor'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Praesent sapien massa, convallis a pellentesque et.</p>
                    </div>
               
                </div>
            </div>
        </div>

        <div className='py-md-5 py-3 my-md-6 my-0'>
            <div className='row justify-content-between'>
                
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center py-5'>
                    <div className='p-md-5 px-2'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Design</p>
                    <h1 className='display-5 fw-bold my-4 '>Designing for better user experiences</h1>
                    <p className='fs-5 fontcolor'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Praesent sapien massa, convallis a pellentesque et.</p>
                    </div>
               
                </div>
                <div className='col-12 col-md-5 pb-5 pb-md-0'>
                    <img src={group3} className='w-100 borderadious h-100 objectfit'/>
                </div>
            </div>
        </div>

        <div className='py-md-5 py-3 my-md-6 my-0'>
            <div className='row justify-content-between'>
            <div className='col-12 col-md-5 '>
                    <img src={group4} className='w-100 borderadious h-100'/>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center py-5'>
                    <div className='p-md-5 px-2'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Optimization</p>
                    <h1 className='display-5 fw-bold my-4'>State of the art performance</h1>
                    <p className='fs-5 fontcolor'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Praesent sapien massa, convallis a pellentesque et.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='container py-5 '>
        <div className='row mt-md-5 mt-0 py-md-5 pt-0'>
            <div className='col-12 col-lg-4 pb-md-0 pb-4'>
            <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>What we offer</p>
            <h1 className='display-5 fw-bold my-4'>We've Got You Covered</h1>
            <a href="#" class="circletorec1" style={{color:'white'}}>
                 <span className='span'>Learn more</span>
            </a>
               
           
            </div>
            <div className='col-12 col-lg-8 pt-md-5 pt-3 mt-3'>
                <div className='row pb-md-5 pb-3 text-md-start text-center'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiBox style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service One</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <RiFocusLine style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Two</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                   
                </div>

                <div className='row pb-md-5 pb-3 text-md-start text-center'>
                    <div className='col-12 col-md-6 pb-3'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <BsCircleSquare style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Three</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <RiVipDiamondLine style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Four</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                   
                </div>

                <div className='row pb-md-5 pb-3 text-md-start text-center'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Five</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiTriangle style={{fontSize:'27px',color:'rgb(255 255 255 / 69%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Six</h4>
                        <p className=' fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                   
                </div>
                
                
            </div>
        </div>
    </section>
    
    <section className='container py-md-5 py-2'>
        <div className='row py-4'>
            <div className='col-12 col-md-6 pb-lg-0 pb-4'>
                <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Cool feature</p>
                <h1 className='mt-4 fw-bolder display-5 mb-4'>Let’s make your product a success</h1>
                <p className='fs-5 fontcolor'> anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <ul className='liststyleimg my-4 fontcolor'>
                    <li className=''>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className='col-12 col-md-6'>
                <img src={group5} className='w-100 borderadious img-fluid h-100 objectfit' />
            </div>
        </div>
        <div className='row py-5 mt-md-5 mt-0'>
            <div className='col-12 col-md-6 pb-lg-0 pb-5'>
                <img src={group6} className='w-100 borderadious img-fluid h-100 objectfit' />
            </div>
            <div className='col-12 col-md-6 px-lg-4 px-2 py-2'>
                <p className='px-4 d-inline py-2 ourservice mb-5'>Awesome feature</p>
                <h1 className='mt-4 fw-bolder display-5 mb-4'>Let’s make your product a success</h1>
                <p className='fs-5 fontcolor'> anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <ul className='liststyleimg my-4 fontcolor'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    </section>
      <Ourservice />
      <Letsconnect />
      
    </>
  )
}

export default Service