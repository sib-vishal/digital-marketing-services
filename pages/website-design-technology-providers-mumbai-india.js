import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebsiteDesignTechnologyProvideMumbai() {
  return (
    <div>
        <Helmet>
            <title>Web Designing Technology India Website Technology Mumbai Delhi SIB Infotech</title>
            <meta name="keywords" content="web design company, website development company, web site design, web development, web site development professional, affordable web pages designing, custom ecommerce, flash, internet corportate small business, php website, seo solutions, seo company indi"/>
            <meta name="description" content="SIB Infotech provides custom effective, professional, high-impact Web Design, dynamic database enabled website development. SIB Infotech is one of the leading Indian web design company from most popular web design companies in India."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Website Designing Technology</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Designing Technology </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Designing Technology </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
          <div className="containerFull">
            <div className="row">
              <div className="col-md-1">
                &nbsp;</div>
              <div className="col-md-10">
                <div className="service-sub-title">
                  <p>
                    SIB Infotech equipped with latest website design technologies and can provide website designing services at very competitive prices.</p>
                </div>
              </div>
              <div className="col-md-1">
                &nbsp;</div>
            </div>
            <div className="row">
              <div className="col-md-6 order-lg-1 order-2">
                <div className="custom-content-title">
                  <p>
                    Our website designing services includes</p>
                </div>
                <ul>
                  <li>
                    <p>
                      Static Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Semi Flash Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Flash Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Dynamic Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Microsite Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Web Page Designing</p>
                  </li>
                  <li>
                    <p>
                      Themed Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Conversion Website Designing</p>
                  </li>
                  <li>
                    <p>
                      Website Re-designing</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 order-lg-2 order-1">
                <div className="custom-page-img">
                  <img alt="Website Design Technology Providers in Mumbai" className="img-fluid" src="assets/images/article-submission.png"/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="custom-page-img">
                  <img alt="Website Design Technology Providers in Delhi" className="img-fluid" src="assets/images/article-submission.png"/></div>
              </div>
              <div className="col-md-6">
                <div className="custom-content-title">
                  <p>
                    Tools that we used</p>
                </div>
                <p>
                  We use latest web designing technologies and tools while designing websites.</p>
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Standard Graphic Designing Tools:</p>
                  <p>
                    Adobe Photoshop CS4 Extended, Dream weaver CS4, FrontPage, Macromedia Flash CS4 Professional, Gif Animator, Macromedia Director and Illustrator CS4 Extended all have been used by us. We have team of experts which design websites which are highly functional and appealing.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Scripting &amp; Programming Languages</p>
                  <p>
                    The major scripting &amp; programming languages we use with website designing are java script, AJAX, CSS, xml, DHTML, XHTML, HTML, W3C compliant, flash action script.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
