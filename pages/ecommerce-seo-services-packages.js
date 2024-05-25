import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function EcommerceSeoServicesPackages() {
  return (
    <div>
        <Helmet>
            <title>E-commerce Package</title>
            <meta name="keywords" content="E-commerce Package"/>
            <meta name="description" content="E-commerce Package"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">E-commerce Seo Packages</h3>
                            <h2 class="small_heading fw-bold mt-3 text-white">Increase Online Business Traffic With Our Affordable E-Commerce SEO Packages</h2>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">E-commerce Seo Packages</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">E-commerce Seo Packages</span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section className="customPadding">
          <div className="containerFull">
              <h3 className="customHeading text-center">
                 <span>E-Commerce SEO</span> Packages
              </h3>
              <div className="tabs">
                 <div className="row">
                    <div className="col-lg-3">
                       <div className="tag-line">
                          <img className="image-full" alt="E-Commerce SEO Packages" src="assets/images/seo-packages-3.png"/>
                          <h4>
                             CHOOSE YOUR PLAN
                          </h4>
                          <p className="customText">
                             INCREASE YOUR WEBSITE<br/>
                             CONVERSIONS
                          </p>
                          <Link className="green-btn" href="/contact-us">CALL US NOW</Link>
                       </div>
                       <div className="tab-header">
                          <div className="tab active">
                             <h5>
                                Initial Website Research &amp; Analysis
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                On Page Optimization
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                Off Page Optimization
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                Local Search Optimization
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                Monthly Reporting
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                Customer Support
                             </h5>
                          </div>
                          <div className="tab">
                             <h5>
                                Minimum Contract Duration
                             </h5>
                          </div>
                       </div>
                    </div>
                    <div className="col-lg-9">
                       <div className="tab-content">
                          <div className="active">
                             <h4>
                                Initial Website Research &amp; Analysis
                             </h4>
                             <table className="table">
                                <caption>
                                </caption>
                                <thead>
                                   <tr>
                                      <th>
                                         Deliverables
                                      </th>
                                      <th className="bg-blue-4">
                                         Self Employed
                                      </th>
                                      <th className="bg-blue-4">
                                         Start Up
                                      </th>
                                      <th className="bg-blue-4">
                                         Grow
                                      </th>
                                      <th className="bg-blue-4">
                                         Enterepreneur
                                      </th>
                                      <th className="bg-blue-4">
                                         Wantrepreneur
                                      </th>
                                      <th className="bg-blue-4">
                                         Custom
                                      </th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Key phrases to be Optimized
                                      </td>
                                      <td data-label="Self Employed">
                                         Upto 5
                                      </td>
                                      <td data-label="Start Up">
                                         Upto 10
                                      </td>
                                      <td data-label="Grow">
                                         Upto 25
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Upto 50
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Upto 75
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Initial Website Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Competitor Website Research and Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         2
                                      </td>
                                      <td data-label="Start Up">
                                         3
                                      </td>
                                      <td data-label="Grow">
                                         4
                                      </td>
                                      <td data-label="Enterepreneur">
                                         5
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         6
                                      </td>
                                      <td data-label="Custom">
                                         7
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Keyword Research and Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Keyword Finalization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Keyword URL Mapping
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Pre-SEO Keyword Ranking Report
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Initial Backlinks Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Website Broken Links Checking
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Mobile Usability Issue Checking
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Content Duplicacy Checking
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Website Google Penalty Checking
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         SEO Strategy Analysis &amp; Planning
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Pricing
                                      </td>
                                      <td data-label="Self Employed">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Start Up">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Grow">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Custom">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <div className="">
                             <h4>
                                On Page Optimization
                             </h4>
                             <table className="table">
                                <caption>
                                </caption>
                                <thead>
                                   <tr>
                                      <th>
                                         Deliverables
                                      </th>
                                      <th>
                                         Self Employed
                                      </th>
                                      <th>
                                         Start Up
                                      </th>
                                      <th>
                                         Grow
                                      </th>
                                      <th>
                                         Enterepreneur
                                      </th>
                                      <th>
                                         Wantrepreneur
                                      </th>
                                      <th>
                                         Custom
                                      </th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Key phrases to be Optimized
                                      </td>
                                      <td data-label="Self Employed">
                                         Upto 10
                                      </td>
                                      <td data-label="Start Up">
                                         Upto 15
                                      </td>
                                      <td data-label="Grow">
                                         Upto 30
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Upto 60
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Upto 85
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Shopping Cart Funnel Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Open Graph Markup
                                      </td>
                                      <td data-label="Self Employed">
                                         Optional
                                      </td>
                                      <td data-label="Start Up">
                                         Optional
                                      </td>
                                      <td data-label="Grow">
                                         Optional
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Custom">
                                         Optional
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Structure Data Markup
                                      </td>
                                      <td data-label="Self Employed">
                                         Optional
                                      </td>
                                      <td data-label="Start Up">
                                         Optional
                                      </td>
                                      <td data-label="Grow">
                                         Optional
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Custom">
                                         Optional
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Website Pages to be Optimized
                                      </td>
                                      <td data-label="Self Employed">
                                         5
                                      </td>
                                      <td data-label="Start Up">
                                         10
                                      </td>
                                      <td data-label="Grow">
                                         20
                                      </td>
                                      <td data-label="Enterepreneur">
                                         30
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         50
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Proper URL Structure Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Heading Tag (H1) Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Meta Tags ( Title, Description &amp; Keyword) Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Image Alt Tags Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Keyword Density Analysis
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Content Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Implementation of H-X Tags on Webpaages
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Anchor Tag Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Internal Link Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Canonicalization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Website Page Load Optimization Suggestion
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         HTML Code Cleanup &amp; Optimization Suggestion
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         W3C Validation Check
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Address Tag Integration
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         External Links Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Broken link Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Site Navigation Analysis &amp; Suggestion
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Breadcrumb Analysis &amp; Suggestion
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Data Highlighter
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         On-page Crawl Error Correction (Dynamic: Recommended to Client)
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Anchor Tag Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Thank You Page Creation
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Goal Set-up in Google Analytics
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Custom 404 Page Creation
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Link redirect audit (www or non-www 301 Redirect)
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         HTML sitemap generation &amp; submission
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         XML sitemap generation &amp; submission
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Robots.txt Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Google Webmaster Search Console Setup
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Bing Webmaster Tool Setup
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Product Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Product Page Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Blog Page Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Product Image Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Product Markup – Schema HTML tags
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Category/Product Pages Meta Tags Optimization
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         SSL Implementation
                                      </td>
                                      <td data-label="Self Employed">
                                         Optional
                                      </td>
                                      <td data-label="Start Up">
                                         Optional
                                      </td>
                                      <td data-label="Grow">
                                         Optional
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Optional
                                      </td>
                                      <td data-label="Custom">
                                         Optional
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         AMP Pages
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Pricing
                                      </td>
                                      <td data-label="Self Employed">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Start Up">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Grow">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Custom">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <div className="">
                             <h4>
                                Off Page Optimization
                             </h4>
                             <table className="table">
                                <caption>
                                </caption>
                                <thead>
                                   <tr>
                                      <th>
                                         Deliverables
                                      </th>
                                      <th>
                                         Self Employed
                                      </th>
                                      <th>
                                         Start Up
                                      </th>
                                      <th>
                                         Grow
                                      </th>
                                      <th>
                                         Enterepreneur
                                      </th>
                                      <th>
                                         Wantrepreneur
                                      </th>
                                      <th>
                                         Custom
                                      </th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Key phrases to be Optimized
                                      </td>
                                      <td data-label="Self Employed">
                                         Upto 5
                                      </td>
                                      <td data-label="Start Up">
                                         Upto 10
                                      </td>
                                      <td data-label="Grow">
                                         Upto 25
                                      </td>
                                      <td data-label="Enterepreneur">
                                         Upto 50
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         Upto 75
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Manual Search Engine Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Article Writing
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Article Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Forum Link Building
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Blog creation
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Blog Post Writing
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         1
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         3
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         4
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Guest Blog Writing &amp; Posting
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         1
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         3
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         4
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         PDF/DOC Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         PPT Submission (Provided by Client)
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Blog Commenting
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         1
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         3
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         5
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Question &amp; Answer Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         1
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         3
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         5
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Social Bookmarking
                                      </td>
                                      <td data-label="Self Employed">
                                         3
                                      </td>
                                      <td data-label="Start Up">
                                         6
                                      </td>
                                      <td data-label="Grow">
                                         10
                                      </td>
                                      <td data-label="Enterepreneur">
                                         14
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         22
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Web 2.0 Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Infographics Submissions
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         1
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         2
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         3
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         2D Animated Video Creation (in Six Months)
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         1
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         2
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Video Submissions (provided by client)
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         2
                                      </td>
                                      <td data-label="Enterepreneur">
                                         3
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         6
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Blog Promotions
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         4
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Image Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         1
                                      </td>
                                      <td data-label="Start Up">
                                         2
                                      </td>
                                      <td data-label="Grow">
                                         3
                                      </td>
                                      <td data-label="Enterepreneur">
                                         5
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         7
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Press Release submission
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-times crossIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         1
                                      </td>
                                      <td data-label="Enterepreneur">
                                         2
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         3
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         classNameified Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         3
                                      </td>
                                      <td data-label="Start Up">
                                         6
                                      </td>
                                      <td data-label="Grow">
                                         10
                                      </td>
                                      <td data-label="Enterepreneur">
                                         14
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         22
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Business Listing
                                      </td>
                                      <td data-label="Self Employed">
                                         5
                                      </td>
                                      <td data-label="Start Up">
                                         7
                                      </td>
                                      <td data-label="Grow">
                                         10
                                      </td>
                                      <td data-label="Enterepreneur">
                                         12
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         15
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         classNameified Submission
                                      </td>
                                      <td data-label="Self Employed">
                                         3
                                      </td>
                                      <td data-label="Start Up">
                                         10
                                      </td>
                                      <td data-label="Grow">
                                         10
                                      </td>
                                      <td data-label="Enterepreneur">
                                         14
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         22
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Coupon Distribution
                                      </td>
                                      <td data-label="Self Employed">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Start Up">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Grow">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <i className="fa fa-check checkIcon"></i>
                                      </td>
                                      <td data-label="Custom">
                                         TBD
                                      </td>
                                      <td data-label="Pricing">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Pricing
                                      </td>
                                      <td data-label="Self Employed">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Start Up">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Grow">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Enterepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Wantrepreneur">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                      <td data-label="Custom">
                                         <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <div>
                             <h4>
                                Local Search Optimization
                             </h4>
                             <table className="table">
                                <caption>
                                </caption>
                                <thead>
                                   <tr>
                                      <th>
                                         Deliverables
                                      </th>
                                      <th>
                                         Self Employed
                                      </th>
                                      <th>
                                         Start Up
                                      </th>
                                      <th>
                                         Grow
                                      </th>
                                      <th>
                                         Enterepreneur
                                      </th>
                                      <th>
                                         Wantrepreneur
                                      </th>
                                      <th>
                                         Custom
                                      </th>
                                   </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                      <td data-label="Key phrases to be Optimized">
                                         Key phrases to be Optimized
                                      </td>
                                      <td data-label="Self Employed">
                                         Upto 5
                                      </td>
                                      <td data-label="Start Up">
                                         Upto 10
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
         </section>
    </div>
  )
}
