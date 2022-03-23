import React from 'react'
import useForm from '../Form/useForm';

const formLogin = () => {

  console.log("Callback function when form is submitted!");
  console.log("Form Values ", values);
}
function Contact() {

  const {handleChange, values, errors,handleSubmit} = useForm(formLogin);
  return (
   <>
      <div className='container py-5'>
        <div className='row '>
          <div className='col-sm-6 p-md-5 p-2 '>
            <div className='row justify-content-center justify-content-md-start'>
              <div className ='col-1'>
              <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className='col-7 mb-4'>
                <h3>Address</h3>
                <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
              </div>
              
            </div>
            <div className='row justify-content-center justify-content-md-start'>
              <div className ='col-1'>
              <i className="fa-solid fa-phone"></i>
              </div>
              <div className='col-7 mb-4'>
                <h3>Let's Talk</h3>
                <a className='text-decoration-none'>+1800 1236879</a>
              </div>
              
            </div>
            <div className='row justify-content-center justify-content-md-start'>
              <div className ='col-1'>
              <i className="fa-solid fa-envelope"></i>
              </div>
              <div className='col-7 mb-4'>
                <h3>General Support</h3>
                <a className='text-decoration-none'>contact@example.com</a>
              </div>
              
            </div>
          </div>
          <div className='col-sm-6'>
            <h1 className='text-center mb-5'>Send us a Message</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
            <div className='col-6 mb-3'>
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" name='firstname' id="formGroupExampleInput" placeholder="First name" onChange={handleChange}/>
              {
                 errors.firstname && <h3>{errors.firstname}</h3>
              }
            </div>
            <div className='col-6 mb-3'>
              <label  className="form-label">Last Name</label>
              <input type="text" className="form-control" name='lastname' id="formGroupExampleInput" placeholder="Last name" onChange={handleChange}  />
              {
                 errors.lastname && <h3>{errors.lastname}</h3>
              }
            </div>
            <div className="col-12 mb-3">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control" name='email' id="inputEmail4" placeholder="example@gmail.com" onChange={handleChange}  />
              {
                 errors.email && <h3>{errors.email}</h3>
              }
            </div>
            <div className='col-12 mb-3'>
              <label  className='form-label'>Phone Number</label>
              <input type='number' className='form-control' name='number' placeholder='1800 000000' onChange={handleChange}  />
              {
                 errors.number && <h3>{errors.number}</h3>
              }
            </div>
            <div className='col-12 mb-3'>
              <label  className='form-label'>Message</label>
              <textarea className="form-control"  placeholder='Write us a message' ></textarea>
              
            </div>
            <div>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </div>
            </div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default Contact