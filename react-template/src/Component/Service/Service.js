import React from 'react'
import { FiBox,FiTriangle,FiLayers } from 'react-icons/fi'
import { RiVipDiamondLine,RiFocusLine  } from 'react-icons/ri'
import { BsCircleSquare } from 'react-icons/bs'
import group5 from '../images/group5.jpeg'
import group6 from '../images/group6.jpeg'
import Ourservice from './Ourservice'
import Letsconnect from './Letsconnect'
function Service() {
  return (
      <>
    <section className='container py-5'>
        <div className='row' id='whatweoffer'>
            <div className='col-12 col-lg-4 pb-md-0 pb-4'>
            <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>What we offer</p>
            <h1 className='display-5 fw-bold my-4'>We've Got You Covered</h1>
            {/* <button className='btn btn-light px-4 py-2 rounded-pill'>View work</button> */}
               
                  {/* <a type='button' className='btn text-light hover2'>View Work</a> */}
                  <a className='text-center text-decoration-none align-items-center d-inline-flex' style={{width:'auto',heigth:'3.5rem',position:'relative',padding:'0px 2rem',fontWeight:'500'}}>
                      <span className='lineargradiant left-0 top-0 position-absolute hover2 ' >

                      </span>
                      <span className='postion-relative ps-4 pt-3 fontcolor' style={{zIndex:'20'}}>
                            View work   
                      </span>
                  </a>
               
           
            </div>
            <div className='col-12 col-lg-8 pt-md-5 pt-3 mt-3'>
                <div className='row pb-md-5 pb-3 text-md-start text-center'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiBox style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service One</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <RiFocusLine style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
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
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <BsCircleSquare style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Three</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <RiVipDiamondLine style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
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
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
                        </div>
                        </div>
                        <h4 className='mt-3'>Service Five</h4>
                        <p className='fontcolor fw-normal' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-md-start justify-content-center'>
                        <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                            <span className='d-flex justify-content-center pt-3 align-items-center '> <FiTriangle style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
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
                <p className='fs-5'> anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <ul className='liststyleimg my-4'>
                    <li className=''>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className='col-12 col-md-6'>
                <img src={group5} className='w-100 borderadious img-fluid h-100 objectfit' />
            </div>
        </div>
        <div className='row py-5'>
            <div className='col-12 col-md-6 pb-lg-0 pb-5'>
                <img src={group6} className='w-100 borderadious img-fluid h-100 objectfit' />
            </div>
            <div className='col-12 col-md-6 px-lg-4 px-2 py-2'>
                <p className='px-4 d-inline py-2 ourservice mb-5'>Awesome feature</p>
                <h1 className='mt-4 fw-bolder display-5 mb-4'>Let’s make your product a success</h1>
                <p className='fs-5'> anim aute id magna aliqua ad ad non deserunt sunt. qui irure qui lorem cupidatat commodo. elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <ul className='liststyleimg my-4'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}
export default Service