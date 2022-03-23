import React from 'react'
import wmt from './images/wmt.png'
import logo from './images/logo.png'
function Navbar() {
  return (
    <> 

<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" id="navbar-example2">
            <div className="container-md container-fluid">
                <a className="navbar-brand" href='https://webmobtech.com/'>
                    <img src={logo} width='50px' height='40px'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center navbar-nav-scroll ">
                   
                        <li className="nav-item ">
                          <a className="nav-link  fw-normal" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link  fw-normal" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link fw-normal" href="#footer">About us</a>
                        </li>
  
                      
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle px-2 py-3 me-2" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                       
                       
                        
                        <li className="nav-item ">
                            <a  className="btn btn-primary text-light" type="button" href="#buy">Buy Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar