import React from 'react'

function Letsconnect() {
  return (
    <>
      <div className='container py-md-0 py-3 px-md-4 px-3'>
      <div className='row  justify-content-between align-items-center borderadious p-sm-5 p-4 linearletsconnect' >
        <div className='col-md-7 col-12'>
            <h1 className='mt-4 fw-bolder display-5 mb-3 text-center text-md-start'>Let's make something great together.</h1> 
        </div>
        <div className='col-md-5 col-12'>
        <div className='d-flex justify-content-md-end justify-content-center mb-4 mb-md-0 '>
            {/* <button className='btn hover1 px-4 py-3 rounded-pill mb-mb-0'>Let's connect</button> */}
            <a className='btn hover1 px-4 py-3 rounded-pill mb-md-0'>Let's connect</a>
        </div>
        </div>
    </div>
      </div>
      
    </>
  )
}

export default Letsconnect