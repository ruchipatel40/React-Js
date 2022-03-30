import React from 'react'
import { FiLayers } from 'react-icons/fi'

function Ourservice() {
  return (
    <section className='container py-5'>
    <div className='row'>
        <div className='col-md-7 col-12 mx-auto'>
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
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
                </div>
            </div>
            <h4 className='mt-3'>1. Collect Ideas</h4>
            <p className='fs-5 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                
        </div>
        <div className='col-lg-4 col-md-6 col-12 text-center'>
            <div className='d-flex justify-content-center'>
                <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
                </div>
            </div>
            <h4 className='mt-3'>2. Design Concept</h4>
            <p className='fs-5 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt.</p>
                
        </div>
        <div className='col-lg-4 col-md-6 col-12 text-center'>
            <div className='d-flex justify-content-center'>
                <div className='lineargradiant' style={{width:'65px',height:'65px', borderRadius:'24px'}}>
                    <span className='d-flex justify-content-center pt-3 align-items-center '> <FiLayers style={{fontSize:'30px',color:'rgb(229 236 237 / 54%)'}}/></span>
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