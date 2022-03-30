import React from 'react'
import img1 from '../images/img1.jpeg'
import group from '../images/group.jpeg'
import group2 from '../images/group2.jpeg'
import group3 from '../images/group3.jpeg'
import group4 from '../images/group4.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'
import Letsconnect from './Letsconnect'
import Service from './Service'
import Ourservice from './Ourservice'
function Home() {
  return (
      <>
      <section className='container py-sm-5 py-3 mb-md-5 mb-0 '>
      <div className=''>
          <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Our Services</p>
          <h1 className='mt-4 display-3 mb-md-5 mb-2'>We Create meaningful digital solutions that level up your business</h1>
      </div>
       <div className='row pb-md-5 pb-0'>
        <div className='col-12 col-md-6 pe-md-5'>
           <p className='fs-5 mb-md-4 mb-3 fontcolor '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.</p>
            {/* <button className='btn px-4 py-3 rounded-pill hover1'>Let's get started</button> */}
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
                    <h1 className='display-5 fw-bold my-4'>Designing for better user experiences</h1>
                    <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Praesent sapien massa, convallis a pellentesque et.</p>
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
                    <p className='fs-5'>Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Praesent sapien massa, convallis a pellentesque et.</p>
                    </div>
                </div>
            </div>
        </div>
       
      </section>
      <Service />
      <Ourservice />
      <Letsconnect />
      
    </>
  )
}

export default Home