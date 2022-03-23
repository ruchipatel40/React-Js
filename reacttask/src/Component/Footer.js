import React from 'react'
import logo from './images/logo.png'

function Footer() {
  return (
    
            <footer className="footer py-5 bg-footer text-light w-100">
        <div className="container-md container-fluid pb-3">
            <div className="row">
                <div className="col-lg-3 mb-4 mb-lg-0">
                    <img src={logo} width="40" height="30" className="mb-4 img-fluid"/>
                    <p className="fs-5 text-lg-start text-center footer-txt-color">For those seeking the finest in
                        servicesand technology in a dowbtown business center. without the high cost.</p>
                    <div className="d-flex justify-content-lg-start justify-content-center ">
                        <a  className="me-3 text-white fs-5"><i className="fab fa-twitter"></i></a>
                        <a  className="me-3 text-white fs-5"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="me-3 text-white fs-5"><i className="fab fa-github"></i></a>
                        <a href="#" className="me-3 text-white fs-5"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="col-12 col-lg-2 col-sm-3 mb-3 mb-lg-0 ">
                    <h4 className="mb-4 text-center text-lg-start fs-sm-2">About us</h4>
                    <ul className="list-unstyled  text-muted fs-5 text-center text-lg-start">
                        <li className="mb-3 footer-txt-color" >Blog</li>
                        <li className="mb-3 footer-txt-color" >About Us</li>
                        <li className="mb-3 footer-txt-color" >Products</li>
                        <li className="mb-3 footer-txt-color" >Contact Us</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 col-sm-4 mb-3 mb-lg-0">
                    <h4 className="mb-4 text-center text-lg-start fs-sm-2 ">Market</h4>
                    <ul className="list-unstyled  text-muted fs-5 text-center text-lg-start ">
                        <li className="mb-3 footer-txt-color" >Sales FAQ</li>
                        <li className="mb-3 footer-txt-color" >Hoe to Register</li>
                        <li className="mb-3 footer-txt-color" >Sell Goods</li>
                        <li className="mb-3 footer-txt-color" >Receive Payment</li>
                        <li className="mb-3 footer-txt-color" >Sell Goods</li>
                        <li className="mb-3 footer-txt-color" >Receive Patment</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 col-sm-5 mb-3 mb-lg-0">
                    <h4 className="mb-4 text-center text-lg-start fs-sm-2">Subscriber</h4>
                    <p className="fs-5 text-center text-lg-start mb-lg-3 mb-3 footer-txt-color" >Join our mailing
                        list.We write
                        rarely but only the best content.</p>
                    <input type="email" className="form-control w-100 mb-lg-3 mb-3 text-center text-lg-start py-2"
                        placeholder="Email Address"/>
                    <button type="button" className="btn btn-success  w-100 py-2 mb-3 mb-lg-2 fs-6">Subscriber</button>
                    <p className="footer-txt-color">We'll never share your details. See our <span
                            className="text-light">Privacy Policy</span></p>
                </div>
            </div>
            <div className="row text-center d-flex pt-5">
                <p className="fs-6">@2020 Ruchi patel. All right reserved.</p>
            </div>

        </div>

    </footer>
   
  )
}

export default Footer