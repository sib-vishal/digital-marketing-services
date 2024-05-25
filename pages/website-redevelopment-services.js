import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebsiteRedevelopmentServices() {
  return (
    <div>
        <Helmet>
            <title>Website Redevelopment Services</title>
            <meta name="keywords" content="Web Design India, Software Development Companies, Web Development Companies India, Website Design India, Custom Web Design India, Web Design Delhi,indian web design company, india seo company,corporate website design,custom website design services,website"/>
            <meta name="description" content="SIB Infotech being a professional web designing company, offering you a bunch of talented designers to turn your dreams into reality. Good and affordable website design services are the dual keys of success in online business. We offer professional web designing services at affordable rates."/>
            <meta property="og:title" content="Best Website Designing Development & Digital Marketing SEO Company in Mumbai, India" />
            <meta property="og:description" content="SIB Infotech is a leading designing and development company in Mumbai, India offers complete end to end web solutions for designing development services that will help to improve user experience." />
            <link rel="canonical" href="https://www.sibinfotech.com/website-designing-methodology-mumbai-india"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Website Redevelopment Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Redevelopment </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Redevelopment </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-12">
                     <p>
                        Your website is a representation of your business.It is like virtual store for those who are not present at your place make them feel they are greeted warmly. Make your website as a storefront. Main motive is to convert the site visitors into sales. So it becomes a condition that the thing which is representing your business should be best.
                     </p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>
                           When to know if your website needs a redevelopment? For that ask some question first
                        </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>Are my current website visitors being converted into sales?</p>
                        </li>
                        <li>
                           <p>Is my website is as good as my present competitors?</p>
                        </li>
                        <li>
                           <p>Is my website is easily accessible?</p>
                        </li>
                        <li>
                           <p>Is it easy to find all the needed information on website for users?</p>
                        </li>
                        <li>
                           <p>Is it easy for me to update my website?</p>
                        </li>
                        <li>
                           <p>Am I satisfied with its user experience?</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>As technology is developing day by day is there any functionality present that can help me to boost my sales?</p>
                        </li>
                        <li>
                           <p>Does my website represent my business well?</p>
                        </li>
                        <li>
                           <p>Is your website responsive?</p>
                        </li>
                        <li>
                           <p>Does it take more time to load?</p>
                        </li>
                        <li>
                           <p>Search engine ranks are low?</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Website Re-development Services Company in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}
