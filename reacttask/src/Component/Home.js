import React from 'react'
import paris from './images/paris.jpeg'
import newyork from './images/newyork.jpeg'
import landon from './images/landon.jpg'
import tokyo from './images/tokyo.jpg'
function Home() {
  return (
      <div>
    <section className=" bg-img mb-5    ">
            <div className="container vh-100 ">
                
                    <div className="row pt-5">
                        <div className="col-md-6 col-xl-5 col-12">
                            <div className="mb-4 ">
                                <h1 className="display-1 mb-lg-4">Welcome to Home </h1>
                                <p className="text-muted mb-3 fs-6">
                                    Your Company will look Attract more visitors, and win more business with Front
                                    template.
                                </p>
                            </div>
                            <div className="d-flex row justify-content-center justify-content-md-start">
                                <div className="col-10 col-lg-4 col-md-5 col-sm-6 mb-md-0 mb-3">
                                    <a className="getstarted btn text-primary w-100 fw-normal py-2 fs-6 fw-normal" style={{ backgroundColor: 'rgb(198 219 255 / 65%)'}}  href='#'>Get Started</a>
                                </div>
                                <div
                                    className="col-10 col-sm-6  d-flex justify-content-center justify-content-lg-start align-items-center mb-md-0 mb-4">
                                    <div className="rounded-circle position-relative me-3 d-inline-block" style={{backgroundColor: "rgb(211 241 211 / 78%)","height" : "50px", "width" : "50px"}}>
                                        <span className="position-absolute play badge rounded-circle "><svg
                                                width="13px" height="15px" fill="#00c9a7" 
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path
                                                    d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                                            </svg></span>
                                    </div>
                                    <div className="py-2 justify-content-center d-inline-block fs-6 fw-normal">Play video
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            
        </section>
    <div className="row d-flex row-cols-2 mb-5 ">
                    <div className="col-12 col-sm-6 col-md-3 text-center px-lg-4 mb-md-0 mb-4">

                        <svg width="70px" height="70px" className="mb-4" fill="#3a4afc" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                        </svg>
                        <h5 className="text-muted">24 Hr Access</h5>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 text-center px-lg-4 mb-md-0 mb-4">
                        <svg width="70px" height="70px" className="mb-4" fill="#3a4afc" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                        </svg>
                        <h5 className="text-muted">Fast Internet</h5>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 text-center px-lg-4 mb-md-0 mb-4">
                        <svg width="70px" height="70px" className="mb-4" fill="#3a4afc" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                        </svg>
                        <h5 className="text-muted">Good Coworker</h5>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 text-center px-lg-4 mb-md-0 mb-4">
                        <svg width="70px" height="70px" className="mb-4" fill="#3a4afc" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path
                                d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" />
                        </svg>
                        <h5 className="text-muted">Mordern Building</h5>
                    </div>
                </div>
                
                <div className="row mt-6 px-md-3 px-0 py-md-5 py-2">
                    <div className="col-md-4 col-12">
                        <h1 className="fs-1 fontsize-lg-1 pb-lg-0 pb-3 fw-light">Explore our 
                            <strong> available</strong> office spaces.
                        </h1>
                    </div>
                    <div className="col-md-4 col-12 text-muted">
                        <p className="ps-lg-5 ps-sm-0 fw-light fs-5">Coworking is not only
                            about the
                            physical place, but about establishing the coworking community first.
                            Its benefits can already be experienced outside of its places, and it is recommended<br/><br/>
                            To start with building a coworking community first before considering opening a Coworking
                            place.
                        </p>
                    </div>
                    <div className="col-md-4 col-12 text-muted">
                        <p className="ps-lg-5 ps-sm-0 fw-light fs-5">However, some coworking places don't build a
                            community:
                            they just get a part of an existing one by combining their opening with
                            An event which attracts their target group. Real-estate cen tric coworking spaces are about
                            selling
                            desks first, with building community as a secondary goal.
                        </p>
                    </div>
                </div>
                <div>
                <div className="row m-t-6 d-flex flex-wrap">
                            <div className="col-12">
                                <h4 className="mb-5">Top Cities</h4>
                            </div>
                            <div className="col-12 col-lg-3 col-sm-6 mb-lg-0 mb-4 position-relative hover">
                                <div className="bg-dark">
                                    <img src={newyork} className="w-100 image fh-400 rounded"/>
                                </div>
                                <div className="d-flex justify-content-center middle">
                                    <div className="text text-light fs-5 fw-bold">NEW YORK</div>
                                </div>

                            </div>
                            <div className="col-12 col-lg-3 col-sm-6 mb-lg-0 mb-4 position-relative hover">
                                <div className="bg-dark">
                                    <img src={paris} className="w-100 image fh-400 rounded"/>
                                </div>
                                <div className="d-flex justify-content-center middle">
                                    <div className="text text-light fs-5 fw-bold">PARIS</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-sm-6 mb-lg-0 mb-4 position-relative hover">
                                <div className="bg-dark">
                                    <img src={landon} className="w-100 image fh-400 rounded"/>
                                </div>
                                <div className="d-flex justify-content-center middle">
                                    <div className="text text-light fs-5 fw-bold">LANDON</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-sm-6 mb-lg-0 mb-4 position-relative hover">
                                <div className="bg-dark">
                                    <img src={tokyo} className="w-100 image fh-400 rounded"/>
                                </div>
                                <div className="d-flex justify-content-center middle">
                                    <div className="text text-light fs-5 fw-bold">TOKYO</div>
                                </div>
                            </div>
                        </div>

            </div>
                </div>
    
  )
}

export default Home