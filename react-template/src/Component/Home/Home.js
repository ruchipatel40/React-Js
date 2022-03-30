import React from 'react'
import hgroup1 from '../images/hgroup1.jpeg'
import shopify from '../images/shopify.svg'
import amazon from '../images/amazon.svg'
import adobe from '../images/adobe.svg'
import { BsCircleSquare } from 'react-icons/bs'
import { BiCodeAlt } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'
import hgroup2 from '../images/hgroup2.jpeg'
import hgroup3 from '../images/hgroup3.jpeg'
import hgroup4 from '../images/hgroup4.jpeg'
import hgroup6 from '../images/hgroup6.jpg'
import hgroup7 from '../images/hgroup7.jpg'
import hgroup8 from '../images/hgroup8.jpg'
import hgroup9 from '../images/hgroup9.jpg'

import Ourservice from '../Service/Ourservice'
import Letsconnect from '../Service/Letsconnect'
import Footer from '../Service/Footer'
import Navbar from '../Service/Navbar'
import Testimonial from './Testimonial'


function Home() {
  return (
      <>
     
    <section className='container-fluid'>
        <div className=' borderadious mb-5 text-center text-md-start linearservice px-md-5 px-2' style={{ maxHeight:'800px'}}>
        <div className='row p-md-5 p-2'>
            <div className='col-12 col-md-6 py-5'> 
                <p className='px-4 d-inline py-2 ourservice mb-5' style={{backgroundColor:'#1A1921'}}>Welcome</p>
                <h1 className='mt-4 fw-bold display-4 mb-md-4 mb-2'>Let’s make your product a success</h1>
                <p className='fs-5 mb-4'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                {/* <button className='btn px-4 py-3 rounded-pill hover1 me-3 wbutton'>Let's get started</button>
                <button className='btn btn-light py-3 rounded-pill mt-md-0 mt-2 hover1 wbutton'>Learn more</button> */}
                <a className='btn px-4 py-3 rounded-pill hover1 me-3  fs-5'>Let's get started</a>
                <a className='text-center text-decoration-none align-items-center d-inline-flex' style={{width:'auto',heigth:'3.5rem',position:'relative',padding:'0px 2rem',fontWeight:'500'}}>
                      <span className='opacity-75 left-0 top-0 position-absolute hover2 ' style={{backgroundColor:'#0000008f'}}>
                      </span>
                      <span className='postion-relative ps-4 pt-3 fontcolor' style={{zIndex:'20'}}>
                      Learn more
                      </span>
                  </a>
            </div>
            <div className='col-12 col-md-6 p-sm-5 px-3 pb-5'>
                <img src={hgroup1} className='w-100 borderadious h-100 objectfit'/>
            </div>
        </div>
        </div>

        <div className='text-center py-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7 col-12'>
                    <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant '>Our partners</p>
                    <h1 className='display-5 fw-bold my-4'>Trusted by the best companies in the business</h1>
                    <p className='fs-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8 col-12'>
                <div className='grid-container2 '>
                <div className="upwork hoversvg borderadious">
                    <div className='borderadious'>
                        <svg style={{width:'100px',height:'150px'}} fill="white" viewBox="0 0 512 153" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967z"></path><path d="M244.043 37.557l13.306 53.636 14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636 13.306-53.636h16.754v.038zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042 0 22.677 18.403 41.043 41.042 41.043 22.677 0 41.08-18.366 41.08-41.043 0-22.676-18.403-41.042-41.08-41.042zm0 65.218c-13.343 0-24.138-10.795-24.138-24.138 0-13.344 10.832-24.138 24.138-24.138 13.344 0 24.138 10.794 24.138 24.138 0 13.306-10.794 24.138-24.138 24.138zm90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392h-7.084zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578V115.03h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065l-30.697-41.754z"></path></svg>
                    </div>
                </div>
                <div className="shopify hoversvg borderadious ">
                    <div className='borderadious' >
                         <svg width="100px" height="150px" viewBox="0 0 115 33" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M24.8058 6.25011C24.7833 6.08619 24.6421 5.99585 24.5244 5.98503C24.4067 5.97421 22.1228 5.94013 22.1228 5.94013L20.0234 3.87357C19.8346 3.6826 19.466 3.74049 19.328 3.78377C19.3264 3.78485 18.9697 3.89629 18.3684 4.08455C18.2498 3.69061 18.096 3.30836 17.909 2.94254C17.2286 1.62957 16.2327 0.940898 15.0286 0.933324C14.9404 0.933324 14.8575 0.941439 14.774 0.948472L14.6654 0.821341C14.1354 0.25439 13.463 -0.0225938 12.6575 0.00175049C11.1031 0.0466521 9.55516 1.18218 8.29926 3.19896C7.4167 4.61796 6.74381 6.40159 6.5534 7.78109L3.49279 8.74134C2.59151 9.02806 2.56316 9.05511 2.44549 9.91527L0 29.0023L19.7586 32.4591L28.3167 30.306L24.8004 6.25065L24.8058 6.25011ZM17.373 4.39291L15.8395 4.87277C15.8277 4.07644 15.7347 2.9685 15.3677 2.01205C16.5477 2.23818 17.1275 3.58793 17.3736 4.39237L17.373 4.39291ZM14.8056 5.19682L11.507 6.23009C11.8257 4.99557 12.4302 3.76646 13.1726 2.96039C13.4486 2.66068 13.8348 2.32636 14.2926 2.13539C14.7227 3.04316 14.8168 4.328 14.8061 5.19736L14.8056 5.19682ZM12.6874 1.04747C13.0522 1.03936 13.3598 1.1205 13.6224 1.29524C13.202 1.51596 12.796 1.83298 12.4152 2.24629C11.4278 3.31744 10.6715 4.98096 10.3693 6.58606L7.66007 7.43432C8.19495 4.90793 10.2885 1.1178 12.688 1.04801L12.6874 1.04747Z" fill="currentColor"></path><path d="M24.525 5.98652C24.4084 5.97678 22.1234 5.94162 22.1234 5.94162L20.0251 3.87344C19.9545 3.80203 19.8646 3.76524 19.7598 3.75009L19.7608 32.4579L28.3227 30.3059L24.8064 6.25106C24.7839 6.08714 24.6416 5.9968 24.525 5.98598V5.98652Z" fill="currentColor"></path><path d="M15.013 10.4394L14.0181 14.2024C14.0181 14.2024 12.9088 13.6917 11.5935 13.7751C9.6647 13.8984 9.64437 15.1286 9.66416 15.4375C9.769 17.12 14.1465 17.4932 14.3925 21.4305C14.5851 24.532 12.7665 26.6537 10.144 26.8209C6.9967 27.021 5.26367 25.1438 5.26367 25.1438L5.93067 22.275C5.93067 22.275 7.67439 23.6058 9.07044 23.5171C9.98242 23.4587 10.3082 22.7083 10.275 22.1782C10.1381 19.9828 6.5736 20.1116 6.34788 16.5049C6.158 13.4699 8.12904 10.3928 12.4787 10.1213C14.1545 10.0131 15.0119 10.4448 15.0119 10.4448L15.013 10.4394Z" fill="#121212"></path><path d="M39.5994 18.3199C38.6152 17.7789 38.1087 17.3245 38.1087 16.698C38.1087 15.9011 38.8115 15.3888 39.9096 15.3888C41.1934 15.3888 42.3284 15.9298 42.3284 15.9298L43.2281 13.1416C43.2281 13.1416 42.4006 12.4924 39.9653 12.4924C36.5757 12.4924 34.227 14.4562 34.227 17.2152C34.227 18.7802 35.3235 19.9753 36.787 20.8279C37.9637 21.5095 38.3906 21.9942 38.3906 22.7051C38.3906 23.4446 37.7995 24.0424 36.703 24.0424C35.0684 24.0424 33.5247 23.1887 33.5247 23.1887L32.5684 25.9775C32.5684 25.9775 33.9944 26.9448 36.3938 26.9448C39.8824 26.9448 42.3856 25.2093 42.3856 22.0797C42.3845 20.4027 41.119 19.2125 39.6042 18.3253L39.5994 18.3199ZM53.4957 12.4589C51.7798 12.4589 50.4292 13.2844 49.3888 14.5362L49.3321 14.5076L50.8229 6.62705H46.9423L43.173 26.6846H47.0552L48.3496 19.8287C48.8556 17.2395 50.1778 15.6469 51.4155 15.6469C52.2874 15.6469 52.6254 16.2441 52.6254 17.0983C52.6254 17.6393 52.5687 18.2885 52.4569 18.8338L50.9946 26.6856H54.8768L56.3958 18.5774C56.5648 17.7237 56.6777 16.7002 56.6777 16.0169C56.6761 13.7972 55.5224 12.4605 53.4978 12.4605L53.4957 12.4589ZM65.4503 12.4589C60.7808 12.4589 57.687 16.7326 57.687 21.477C57.687 24.5212 59.5431 26.968 63.0316 26.968C67.6166 26.968 70.7109 22.8149 70.7109 17.9498C70.7109 15.1335 69.0795 12.4589 65.4503 12.4589V12.4589ZM63.5376 23.9531C62.2154 23.9531 61.6527 22.8154 61.6527 21.3927C61.6527 19.1454 62.8064 15.4754 64.9155 15.4754C66.2938 15.4754 66.7432 16.6655 66.7432 17.8368C66.7432 20.255 65.591 23.9531 63.5371 23.9531H63.5376ZM80.6405 12.4589C78.0196 12.4589 76.5326 14.7921 76.5326 14.7921H76.477L76.7016 12.6823H73.2698L72.4825 17.8887L69.7813 32.2556H73.6635L74.7316 26.4519H74.8172C74.8172 26.4519 75.6195 26.9637 77.0958 26.9637C81.653 26.9637 84.6339 22.2409 84.6339 17.4613C84.6339 14.8105 83.4802 12.4551 80.6394 12.4551L80.6405 12.4589ZM76.9273 24.0089C75.9196 24.0089 75.3227 23.4397 75.3227 23.4397L75.9645 19.7697C76.4149 17.3234 77.6805 15.7015 79.031 15.7015C80.2078 15.7015 80.5779 16.8105 80.5779 17.8638C80.5779 20.3956 79.0872 24.0094 76.9215 24.0094L76.9273 24.0089ZM90.1818 6.82559C88.9446 6.82559 87.9599 7.821 87.9599 9.10151C87.9599 10.2679 88.691 11.0653 89.7881 11.0653H89.8442C91.0542 11.0653 92.0945 10.2397 92.1228 8.78936C92.1228 7.65113 91.3633 6.82559 90.1812 6.82559H90.1818ZM84.7473 26.6835H88.6285L91.2735 12.7721H87.3688L84.7479 26.6835H84.7473ZM101.147 12.7434H98.4457L98.5859 12.0942C98.8105 10.7569 99.5989 9.56243 100.893 9.56243C101.588 9.56243 102.13 9.76151 102.13 9.76151L102.89 6.68872C102.89 6.68872 102.215 6.3479 100.779 6.3479C99.401 6.3479 98.0237 6.74606 96.9817 7.65708C95.6595 8.79531 95.0401 10.4448 94.7315 12.0953L94.6245 12.7445H92.8235L92.2608 15.7037H94.0618L92.0078 26.6856H95.89L97.944 15.7037H100.616L101.151 12.7445L101.147 12.7434ZM110.486 12.7726C110.486 12.7726 108.059 18.9561 106.97 22.3318H106.913C106.839 21.2498 105.957 12.7726 105.957 12.7726H101.878L104.213 25.5398C104.27 25.8239 104.242 25.9953 104.129 26.189C103.678 27.0708 102.919 27.9245 102.019 28.5504C101.288 29.0914 100.472 29.4322 99.8257 29.6594L100.894 33C101.682 32.8296 103.313 32.1745 104.692 30.8664C106.465 29.1882 108.096 26.5926 109.783 23.0762L114.537 12.7769H110.487V12.778L110.486 12.7726Z" fill="currentColor"></path></svg>
                    </div>
                </div>
                <div className="amazon hoversvg borderadious">
                    <div className='borderadious' >
                        <svg viewBox="163.5 263.1 285 85.8" width="100px" height='150px' fill="white" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z"></path><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z"></path><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"></path></g></svg>

                    </div>
                </div>  
                <div className="adobe hoversvg borderadious">
                    <div className='borderadious' >
                        <svg width="100px" height="150px" viewBox="0 0 107 26" fill="" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6314 18.9397L40.1707 25.6957H36.8231L42.3618 1.10638H46.318L51.5524 25.6957H48.1439L46.7441 18.8789H41.6314V18.9397ZM46.3789 16.2008L45.2224 10.2969C44.9181 8.59273 44.5529 6.40161 44.3095 4.6974H44.1877C43.9443 6.46247 43.5791 8.77533 43.2139 10.2969L42.0575 16.2008H46.3789Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.3948 0.43689V21.1309C64.3948 22.4699 64.4557 24.4784 64.5165 25.6957H61.5342L61.2907 23.5654H61.169C60.5603 24.7827 59.2213 26 57.4562 26C54.1695 26 52.161 22.409 52.161 16.9312C52.161 10.6621 54.8391 7.67978 57.6388 7.67978C59.0387 7.67978 60.1951 8.34929 60.8038 9.68831H60.8647V0.43689H64.3948ZM60.9864 14.7401C60.9864 14.4358 60.9864 14.0097 60.9255 13.6445C60.7429 12.062 59.83 10.6621 58.6127 10.6621C56.4824 10.6621 55.752 13.6445 55.752 16.9312C55.752 20.5831 56.7259 23.1394 58.5518 23.1394C59.343 23.1394 60.3169 22.7133 60.9255 20.6439C60.9864 20.3396 61.0472 19.9136 61.0472 19.4875V14.7401H60.9864Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72.6115 26C69.0813 26 66.525 22.9568 66.525 16.8703C66.525 10.4187 69.5683 7.67978 72.7941 7.67978C76.3242 7.67978 78.8197 10.8447 78.8197 16.8095C78.8197 23.8698 75.3504 26 72.6115 26ZM72.6724 23.322C74.8026 23.322 75.2895 19.5484 75.2895 16.8703C75.2895 14.1923 74.8026 10.4187 72.6115 10.4187C70.3595 10.4187 69.9334 14.1923 69.9334 16.8703C69.9334 19.7918 70.4204 23.322 72.6724 23.322Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.8891 0.43689H84.2975V9.99264H84.3584C85.2713 8.41016 86.4886 7.67978 88.0711 7.67978C91.1143 7.67978 93.0012 11.0882 93.0012 16.566C93.0012 22.8959 90.384 26 87.4625 26C85.6974 26 84.7236 25.0262 83.9323 23.5046H83.8106L83.628 25.7566H80.6456C80.7065 24.5393 80.7674 22.5307 80.7674 21.1917V0.43689H80.8891ZM84.2975 19.4267C84.2975 19.8527 84.3584 20.2179 84.4192 20.5222C84.967 22.6525 86.0017 23.1394 86.7321 23.1394C88.8015 23.1394 89.5319 20.4614 89.5319 16.8095C89.5319 13.4011 88.7406 10.6621 86.6712 10.6621C85.5148 10.6621 84.6018 12.0012 84.3584 13.2793C84.2975 13.6445 84.2366 14.1314 84.2366 14.4966V19.4267H84.2975Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M98.1137 17.5398C98.1746 22.1047 100.122 23.2611 102.192 23.2611C103.409 23.2611 104.504 22.9568 105.235 22.5916L105.722 25.087C104.687 25.6348 103.044 25.9392 101.461 25.9392C97.0181 25.9392 94.6444 22.5916 94.6444 17.1138C94.6444 11.3316 97.3224 7.74063 100.974 7.74063C104.687 7.74063 106.391 11.2708 106.391 15.7139C106.391 16.566 106.33 17.1138 106.33 17.6007L98.1137 17.5398ZM103.226 15.1053C103.287 11.9403 102.192 10.2969 100.792 10.2969C99.0267 10.2969 98.1746 12.9141 98.1137 15.1053H103.226Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4681 1.16727H27.7543V25.6957L17.4681 1.16727Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2861 1.16727H0V25.6957L10.2861 1.16727Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8772 10.1752L20.3897 25.6957H16.1291L14.1815 20.7656H9.37317L13.8772 10.1752Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M106.209 7.6189C106.635 7.6189 107 7.98408 107 8.41014C107 8.83619 106.635 9.20138 106.209 9.20138C105.783 9.20138 105.417 8.83619 105.417 8.41014C105.417 7.98408 105.783 7.6189 106.209 7.6189ZM106.209 7.74063C105.844 7.74063 105.6 8.04495 105.6 8.41014C105.6 8.77532 105.904 9.07965 106.209 9.07965C106.574 9.07965 106.817 8.77532 106.817 8.41014C106.817 8.04495 106.574 7.74063 106.209 7.74063ZM106.026 8.89705H105.904V8.04495C105.965 8.04495 106.026 8.04495 106.148 8.04495C106.27 8.04495 106.391 8.04495 106.391 8.10581C106.452 8.16668 106.452 8.22754 106.452 8.28841C106.452 8.41014 106.391 8.471 106.27 8.53187C106.33 8.53187 106.391 8.59273 106.391 8.77532C106.391 8.89705 106.452 8.95792 106.452 9.01878H106.33C106.33 9.01878 106.27 8.89705 106.27 8.77532C106.27 8.65359 106.209 8.59273 106.087 8.59273H105.965V8.89705H106.026ZM106.026 8.41014H106.148C106.27 8.41014 106.391 8.34927 106.391 8.28841C106.391 8.22754 106.33 8.10581 106.148 8.10581C106.087 8.10581 106.087 8.10581 106.026 8.10581V8.41014Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.0934 1.16727C29.5194 1.16727 29.8846 1.53245 29.8846 1.95851C29.8846 2.38456 29.5194 2.74975 29.0934 2.74975C28.6673 2.74975 28.3021 2.38456 28.3021 1.95851C28.3021 1.53245 28.6673 1.16727 29.0934 1.16727ZM29.0934 1.289C28.7282 1.289 28.4847 1.59332 28.4847 1.95851C28.4847 2.32369 28.789 2.62802 29.0934 2.62802C29.4586 2.62802 29.702 2.32369 29.702 1.95851C29.702 1.59332 29.4586 1.289 29.0934 1.289ZM28.9108 2.38456H28.789V1.53245C28.8499 1.53245 28.9108 1.53245 29.0325 1.53245C29.1542 1.53245 29.276 1.53245 29.276 1.59332C29.3368 1.65418 29.3368 1.71505 29.3368 1.77591C29.3368 1.89764 29.276 1.95851 29.1542 2.01937C29.2151 2.01937 29.276 2.08024 29.276 2.26283C29.276 2.38456 29.3368 2.44542 29.3368 2.50629H29.2151C29.2151 2.50629 29.1542 2.38456 29.1542 2.26283C29.1542 2.1411 29.0934 2.08024 28.9716 2.08024H28.8499V2.38456H28.9108ZM28.9108 1.89764H29.0325C29.1542 1.89764 29.276 1.83678 29.276 1.77591C29.276 1.71505 29.2151 1.59332 29.0325 1.59332C28.9716 1.59332 28.9716 1.59332 28.9108 1.59332V1.89764Z" fill="currentColor"></path></svg>

                    </div>
                </div>
                <div className="amazon1 hoversvg borderadious">
                    <div className='borderadious'>
                        <svg viewBox="163.5 263.1 285 85.8" width="100px" height='150px' fill="white" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z"></path><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z"></path><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"></path></g></svg>
                    </div>
                   </div>
                <div className="amazon2 hoversvg borderadious">
                    <div className='borderadious'>
                        <svg viewBox="163.5 263.1 285 85.8" width="100px" height='150px' fill="white" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z"></path><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z"></path><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"></path></g></svg>
                    </div>
                   </div>  
             </div>
                </div>
            </div>
        </div>
    </section>
    <section>
    <div className='py-md-5 py-3 container text-md-start text-center'>
            <p className='px-4 d-inline-block py-2 ourservice mb-5 lineargradiant'>What we do</p>
            <div className='row mb-md-5 mb-2'>
                <div className='col-md-7 col-12'>
                    <h1 className='display-5 fw-bold '>We create digital products that help you get ahead</h1>
                </div>
                <div className='col-md-5 col-12'>
                    <p className='fs-5 pb-4 fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                </div>
            </div>

            <div className='row px-md-5 px-1'>
                <div className='col-12 col-lg-6 '>
                        <div className=' mx-md-5 mx-2 mb-4'>
                            <div className='row p-3 ' style={{borderRadius:'1rem', backgroundColor:'#23202A'}}>
                                <div className='col-md-2 col-12 mb-md-0 mb-3'>
                                    <div className='d-flex justify-content-md-start justify-content-center'>
                                        <div className='' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                            <span className='d-flex justify-content-center pt-3 align-items-center '> <BsCircleSquare style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                                        </div>
                                    </div> 
                                </div>
                                <div className='col-md-9 col-12'>
                                    <h5>Web Design</h5>
                                    <div>
                                        <p className='fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pe-md-5 px-2 mb-4'>
                        <div className='pe-md-5 pe-0'>
                            <div className='row p-3'  style={{borderRadius:'1rem',backgroundColor:'#23202A'}}>
                                <div className='col-md-2 col-12 mb-md-0 mb-3'>
                                    <div className='d-flex justify-content-md-start justify-content-center'>
                                            <div className='' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                                <span className='d-flex justify-content-center pt-3 align-items-center '> <BiCodeAlt style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                                            </div>
                                    </div> 
                                </div>
                                <div className='col-md-9 col-12'>
                                    <h5>Web Development</h5>
                                    <div>
                                        <p className='fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        <div className=' mx-md-5 mx-2 mb-4'>
                            <div className='row p-3 ' style={{borderRadius:'1rem', backgroundColor:'#23202A'}}>
                                <div className='col-md-2 col-12 mb-md-0 mb-3'>
                                    <div className='d-flex justify-content-md-start justify-content-center'>
                                        <div className='' style={{width:'53px',height:'53px',backgroundColor:'#1A1921', borderRadius:'23px'}}>
                                            <span className='d-flex justify-content-center pt-3 align-items-center '> <BsCircleSquare style={{fontSize:'20px',color:'rgb(229 236 237 / 54%)'}}/></span>
                                        </div>
                                    </div> 
                                </div>
                                <div className='col-md-9 col-12 '>
                                    <h5>Maintenance & Optimization</h5>
                                    <div>
                                        <p className='fontcolor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='col-12 col-lg-6 '>
                    <div className='row'>
                        <div className='col-md-6 col-12'><img src={hgroup2} className='objectfit img-fluid borderadious mb-4'/></div>
                        <div className='col-md-6 col-12'>
                            <img src={hgroup3} className='objectfit img-fluid borderadious mb-4'/>
                            <img src={hgroup4} className='objectfit img-fluid borderadious'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Ourservice />
    <section className='container py-5 '>
        <div className='row'>
            <div className='col-md-7 col-12 mx-auto'>
                <div className='text-center'>
                <p className='px-4 d-inline py-2 ourservice mb-5 lineargradiant'>Our work</p>
                <h1 className='mt-4 fw-bolder display-5 mb-3'>Check out some of our recent & current work</h1>
            </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='position-relative' >
                <div className='position-relative pe-lg-5 pe-0' style={{backgroundSize:'cover ',backgroundPosition:'50%'}}>
                    <img src={hgroup6} className='borderadious1 imgwidth objectfit' style={{maxHeight:'600px'}}/>
                </div>
                <div className='position-absolute h-100 lgdevice end1 bottom1' style={{maxHeight:'600px'}}>
                <div className='p-md-5 p-3 borderadious2' style={{  backgroundColor:'#23202A'}}>
                    <div className='flex-column d-flex justify-content-between height1'>
                        <div>
                            <p className='px-4 d-inline py-2 ourservice mb-5'>Ecommerce</p>
                        </div>
                        <div >
                            <h1>Nedia</h1>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget sed, convallis at tellus.</p>
                        </div>
                        <div >
                            <button className='btn btn-light px-4 py-3 rounded-pill'>Case study</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='row py-md-0 py-5 mb-md-0 mb-5'>
                <div className='py-5 mb-5'></div>
            </div>
        </div>

        <div className='py-md-2 py-5'>
            <div className='position-relative' >
                    <div className='h-75 position-relative ps-lg-5 ms-lg-5 img-fluid' style={{backgroundSize:'cover ',backgroundPosition:'50%'}}>
                        <img src={hgroup7} className='borderadious1 objectfit imgwidth'  style={{maxHeight:'600px'}}/>
                    </div>
                    <div className='position-absolute h-100 lgdevice start1 bottom1' style={{maxHeight:'600px'}}>
                    <div className='p-md-5 p-3 borderadious1 ' style={{backgroundColor:'#23202A'}}>
                        <div className='flex-column d-flex justify-content-between height1' >
                            <div className=''>
                                <p className='px-4 d-inline py-2 ourservice mb-5'>App</p>
                            </div>
                            <div className=''>
                                <h1>Sigma</h1>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget sed, convallis at tellus.</p>
                            </div>
                            <div className=''>
                                <button className='btn btn-light px-4 py-3 rounded-pill'>Case study</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row py-md-0 py-5 mb-md-0 mb-5'>
                    <div className='py-5 mb-5'></div>
                </div>
        </div>
        <div className='py-5'>
            <div className='position-relative' >
                <div className='position-relative pe-lg-5 pe-0' style={{backgroundSize:'cover ',backgroundPosition:'50%'}}>
                    <img src={hgroup8} className='borderadious1 imgwidth objectfit' style={{maxHeight:'600px'}}/>
                </div>
                <div className='position-absolute h-100 lgdevice end1 bottom1' style={{maxHeight:'600px'}}>
                <div className='p-md-5 p-3 borderadious2' style={{  backgroundColor:'#23202A'}}>
                    <div className='flex-column d-flex justify-content-between height1'>
                        <div>
                            <p className='px-4 d-inline py-2 ourservice mb-5'>Sass</p>
                        </div>
                        <div >
                            <h1>Sastastic</h1>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget sed, convallis at tellus.</p>
                        </div>
                        <div >
                            <button className='btn btn-light px-4 py-3 rounded-pill'>Case study</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='row py-md-0 py-5 mb-md-0 mb-5'>
                <div className='py-5 mb-5'></div>
            </div>
        </div>

        <div className='py-md-2 py-5'>
            <div className='position-relative' >
                    <div className='h-75 position-relative ps-lg-5 ms-lg-5 img-fluid' style={{backgroundSize:'cover ',backgroundPosition:'50%'}}>
                        <img src={hgroup9} className='borderadious1 objectfit imgwidth'  style={{maxHeight:'600px'}}/>
                    </div>
                    <div className='position-absolute h-100 lgdevice start1 bottom1' style={{maxHeight:'600px'}}>
                    <div className='p-md-5 p-3 borderadious1 ' style={{backgroundColor:'#23202A'}}>
                        <div className='flex-column d-flex justify-content-between height1' >
                            <div className=''>
                                <p className='px-4 d-inline py-2 ourservice mb-5'>App</p>
                            </div>
                            <div className=''>
                                <h1>Pantone</h1>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget sed, convallis at tellus.</p>
                            </div>
                            <div className=''>
                                <button className='btn btn-light px-4 py-3 rounded-pill'>Case study</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row py-md-0 py-5 mb-md-0 mb-5'>
                    <div className='py-5 mb-5'></div>
                </div>
        </div>
        
    </section>
    <Testimonial />
    <Letsconnect />
    
    </>
  )
}

export default Home