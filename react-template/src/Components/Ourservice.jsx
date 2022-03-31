import React from 'react'
import { FiLayers } from 'react-icons/fi'
import { BiCalendar } from 'react-icons/bi'
import { IoIosRocket } from 'react-icons/io'

function Ourservice() {
  return (
    <section className='container py-5 mt-md-5 mt-0'>
    <div className='row py-md-5 py-1'>
        <div className='col-lg-7 col-md-9 col-12 mx-auto'>
            <div className='text-center'>
            <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Our process</p>
            <h1 className='mt-4 fw-bolder display-5 mb-3'>Experience our simple design process</h1>
            <p className='fs-5 fontcolor'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec.</p>
        </div>
        </div>
    </div>
    <div className='row py-5'>
        <div className='col-lg-4 col-md-6 col-12 text-center'>
            <div className='d-flex justify-content-center'>
                <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <BiCalendar style={{fontSize:'30px',color:'#AEB1C6'}}/></span>
                </div>
            </div>
            <h4 className='mt-3'>1. Collect Ideas</h4>
            <p className='fs-5 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                
        </div>
        <div className='col-lg-4 col-md-6 col-12 text-center'>
            <div className='d-flex justify-content-center'>
                <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'30px',color:'#AEB1C6'}}/></span>
                </div>
            </div>
            <h4 className='mt-3'>2. Design Concept</h4>
            <p className='fs-5 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                
        </div>
        <div className='col-lg-4 col-md-6 col-12 text-center'>
            <div className='d-flex justify-content-center'>
                <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <IoIosRocket style={{fontSize:'30px',color:'#AEB1C6'}}/></span>
                </div>
            </div>
            <h4 className='mt-3'>3. Finalize Product</h4>
            <p className='fs-5 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                
        </div>
    </div>
    
</section>
  )
}

export default Ourservice