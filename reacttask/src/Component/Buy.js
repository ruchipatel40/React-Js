import React from "react";
import newyork from './images/newyork.jpeg'
import coworking from './images/coworking.jpeg'
import meeting from './images/meeting.jpg'
function Buy() {
  return (
    <>
           <div className="row d-flex flex-wrap ">
                    <div className="col-12">
                        <h4 className="mb-5">Trending Space</h4>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 ">
                        <div className="card mb-4 border-light shadow">
                            <img className="card-img-top  w-100" height="200px" src={newyork} />

                            <div className="card-body p-4">
                                <h4>Collaborative Workspace</h4>
                                <div className="my-3">
                                    <span className="text-muted"><svg width="20px" height="20px" fill="#6c757d" className="me-2"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                        </svg>
                                        New York, Manhattan, USA
                                    </span>
                                </div>
                                <div className="d-flex pt-2">

                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span
                                        className="badge rounded-pill bg-success ms-3 px-3 py-1  d-flex align-items-center fs-7 mt-1">
                                        5.0 </span>
                                </div>

                            </div>
                            <div className="card-footer  border-light px-4" >
                                <div className="d-flex justify-content-between">
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Monthly</span>
                                        <h4>2100$</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">People</span>
                                        <h4>12</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Sq.Ft</span>
                                        <h4>1200</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card mb-4  border-light shadow">
            
                            <img className="card-img-top  w-100" height="200px" src={coworking}/>

                            <div className="card-body p-4">
                                <h4>Coworking Workspace</h4>
                                <div className="my-3">
                                    <span className="text-muted"><svg width="20px" height="20px" fill="#6c757d" className="me-2"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                        </svg>
                                        Bucharest, sector 2,Romania
                                    </span>
                                </div>
                                <div className="d-flex pt-2">

                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#d7dbdb" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#d7dbdb" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">

                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span
                                        className="badge rounded-pill bg-success ms-3 px-3 py-1  d-flex align-items-center fs-7 mt-1">
                                        3.0 </span>
                                </div>

                            </div>
                            <div className="card-footer border-light px-4" >
                                <div className="d-flex justify-content-between">
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Monthly</span>
                                        <h4>300$</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">People</span>
                                        <h4>24</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Sq.Ft</span>
                                        <h4>3000</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card mb-4  border-light shadow">
                            <img className="card-img-top w-100" height="200px" src={meeting}/>

                            <div className="card-body p-4">
                                <h4>Meeting Office Space</h4>
                                <div className="my-3">
                                    <span className="text-muted"><svg width="20px" height="20px" fill="#6c757d" className="me-2"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                        </svg>
                                        Landon, Canary wharf UK
                                    </span>
                                </div>
                                <div className="d-flex pt-2">

                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#f0b400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <svg width="20px" height="20px" fill="#d7dbdb" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span
                                        className="badge rounded-pill bg-success ms-3 px-3 py-1  d-flex align-items-center fs-7 mt-1">
                                        4.0 </span>
                                </div>

                            </div>
                            <div className="card-footer px-4" >
                                <div className="d-flex justify-content-between">
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Hourly</span>
                                        <h4>50$</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">People</span>
                                        <h4>3-4</h4>
                                    </div>
                                    <div className="col">
                                        <span className="d-block text-muted pb-3">Sq.Ft</span>
                                        <h4>400</h4>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                    <section className='py-5'>
                           
                        <div className="row d-flex justify-content-center mb-lg-5 mb-4">
                            <div className="col-md-8 col-12 text-center">
                                <h1 className="fw-normal">Choose a <strong>plan </strong>for your space</h1>
                                <p className="mt-4 fs-6 text-muted">Upgrade your space for higher
                                    ranking, powerful
                                    features & more ways to connect with potential customers.</p>
                            </div>
                        </div>
                        <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="card mb-lg-0 mb-4  ">
                                    <div className="card-body px-lg-4 py-lg-5 p-4">
                                        <h1 className="text-center text-muted">Free</h1>
                                       
                                        <div
                                            className="row justify-content-lg-start  justify-content-center px-lg-2 text-muted">
                                            <h5 className="mb-4">Get listed in the directory:</h5>
                                            <ul className="text-left list-unstyled fs-5 ">
                                                <li className="ulimg">Unlimited photos</li>
                                                <li className="ulimg">Unlimited videos</li>
                                                <li className="ulimg">Receive messages</li>
                                                <li className="ulimg">Dispaly your contact info</li>
                                            </ul>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="button" className="btn border-primary col-lg-6">
                                                <svg width="30px" height="30px" fill="#0d6efd" className="me-3"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path
                                                        d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                                </svg>
                                                Add to Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card mb-lg-0 mb-4 ">
                                    <div className="card-body px-lg-4 py-lg-5 p-4">
                                        <h1 className="text-center text-muted">Sliver</h1>
                                       
                                        <div
                                            className="row justify-content-lg-start  justify-content-center px-lg-2 text-muted">
                                            <h5 className="mb-4">Everything in the free Plane:</h5>
                                            <ul className="text-left list-unstyled fs-5 ">
                                                <li className="ulimg">Rank booster</li>
                                                <li className="ulimg">Lead capturing buttons</li>
                                                <li className="ulimg">Connect your social media</li>
                                                <li className="ulimg">Dispaly your contact info</li>
                                                <li className="ulimg">Link to your website</li>
                                                <li className="ulimg">Promote your best review</li>
                                                <li className="ulimg">Booking & Lead Logs</li>
                                                <li className="ulimg">Priority customer support </li>

                                            </ul>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="button" className="btn border-primary col-lg-6">
                                                <svg width="30px" height="30px" fill="#0d6efd" className="me-3"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path
                                                        d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                                </svg>
                                                Add to Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card mb-lg-0 mb-4 ">
                                    <div className="card-body px-lg-4 py-lg-5 p-4">
                                        <h1 className="text-center text-muted">Gold</h1>
                                       
                                        <div
                                            className="row justify-content-lg-start  justify-content-center px-lg-2 text-muted">
                                            <h5 className="mb-4">Everything in the other Plans:</h5>
                                            <ul className="text-left list-unstyled fs-5 ">
                                                <li className="ulimg">Appear at top of your city's search page</li>
                                                <li className="ulimg">Appear at top of popular spaces page</li>
                                                <li className="ulimg">Receive a special "Popular Now" banner</li>
                                                <li className="ulimg">A custom pin drop on the map</li>
                                                <li className="ulimg">Spaces Instagram takeover (*annual subscriber)
                                                </li>
                                                <li className="ulimg">Advertising campaign</li>

                                            </ul>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="button" className="btn border-primary col-lg-6">
                                                <svg width="30px" height="30px" fill="#0d6efd" className="me-3"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path
                                                        d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                                </svg>
                                                Add to Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </section>
    </>
  )
}

export default Buy