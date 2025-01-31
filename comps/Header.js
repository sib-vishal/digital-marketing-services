"use client"

import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function Header() {
    

//   const router = useRouter();
//   const { pathname } = router;

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

  return (
    <div>
        <header className="header stricky">
            <div className="topHeader d-none d-md-block">
                <div className="containerFull">
                    <div className="inlineHeader">
                        <div className="topHeaderLeft">
                            <ul>
                                <li><Link href="tel:+91-9222260000"><i className="fa fa-phone"></i> +91-9222260000</Link></li>
                                <li><Link href="mailto:contact@sibinfotech.com"><i className="fa fa-envelope"></i> contact@sibinfotech.com</Link></li>
                                <li><Link href="#"><i className="fa fa-map-marker-alt"></i> Mumbai, New Delhi</Link></li>
                            </ul>
                        </div>
                        <div className="topHeaderRight">
                            <ul>
                                <li><Link href="/career">We're Hiring Now</Link></li>
                                <li><Link href="/contact-us">Request a Quote</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainHeader ">
                <div className="container-fluid">
                    <div className="inlineHeader">
                        <div className="leftLogo">
                            <Link href="/">
                                <picture>
                                    <source media="(max-width:650px)" srcSet="https://www.sibinfotech.com//assets/images/m-logo.webp"></source>
                                    <img src="https://www.sibinfotech.com/assets/images/logo.webp" alt="Best Digital Marketing Company in India"/>
                                </picture>
                            </Link>
                        </div>
                        <div className="rightMenu d-md-block d-none">
                            <ul>
                                <li><Link href="/digital-marketing-services">Digital Marketing</Link></li>
                                <li><Link href="/pay-per-click-ppc-management-services">PPC</Link>
                                    <div className="megaMenus shadow">
                                        <div className="row">
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/google-ads-management-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Google Ads Management</h4>
                                                            <p>SIB Infotech is a Certified partner for Google AdWords management company offering all kinds...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/linkedin-ads-management-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">LinkedIn Ads Management</h4>
                                                            <p>We are a professional Linkedin ad management and advertising...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/facebook-ads-management-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Facebook Ads Marketing</h4>
                                                            <p>Our Facebook Specialists manage Facebook PPC Campaigns making your facebook ads reach millions...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/instagram-ads-management-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Instagram Ads Management</h4>
                                                            <p>Best Instagram ad management company in Mumbai, India.  Grow your Instagram account with...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/search-engine-optimization-seo-services">SEO</Link>
                                    <div className="megaMenus shadow">
                                        <div className="row">
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/on-page-seo-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">ON-Page SEO Services</h4>
                                                            <p>SIB Infotech is the Top SEO Company in India offers On-Page SEO & On-Site Optimization...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/off-page-seo-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">OFF-Page SEO Services</h4>
                                                            <p>SIB Infotech is the Top SEO Company in India offers Off-Page SEO Optimization Services....</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/e-commerce-seo-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">E-Commerce SEO</h4>
                                                            <p>SIB Infotech is a leading designing and development company in Mumbai, India offers...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/mobile-seo-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Mobile SEO</h4>
                                                            <p>Top Rated Best Mobile SEO company in India  our focus is in offering customized...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/search-engine-optimization-outsourcing-seo-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">SEO Outsourcing</h4>
                                                            <p>Outsource SEO service to India with SIB Infotech a 100% White Label SEO outsourcing company...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/local-seo-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Local SEO</h4>
                                                            <p>SIB Infotech is rated as Top Local SEO Company In India, we offer local SEO services...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/social-media-optimization-services">SMO</Link>
                                    <div className="megaMenus shadow">
                                        <div className="row">
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/social-media-optimization-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Social Media Optimization</h4>
                                                            <p>SIB Infotech is a social media marketing services company that provides highly customized social...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/content-marketing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Content Marketing</h4>
                                                            <p>Rated best content marketing agency in India telling brand stories better via its quality content...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/digital-marketing-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Digital Marketing</h4>
                                                            <p>SIB infotech is the top leading Digital Marketing agency and Company in Mumbai, India. We are offering...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/online-reputation-management-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Online Reputation Management Services</h4>
                                                            <p>Rated best online reputation management services company...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/blog-management-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Blog Management Service</h4>
                                                            <p>We offer  360<sup>.</sup> Blog Management Service that would bring traffic to your blog & increase your brand...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/influencer-marketing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Influencer Marketing</h4>
                                                            <p>SIB Infotech is leading influencer marketing agency in India , representing top social...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/graphic-designing-services">Graphic Design</Link></li>
                                <li><Link href="/website-designing-services">Website Designing</Link>
                                    <div className="megaMenus shadow">
                                        <div className="row">
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/corporate-website-designing-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Corporate Website Designing</h4>
                                                            <p>SIB Infotech's website design service can provide you can an edge over the contest with...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/responsive-website-designing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Responsive Website Designing</h4>
                                                            <p>A responsive website design means massive increase in the number of visitors...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2">
                                                <Link href="/e-commerce-website-design-development-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">E-commerce Website Designing</h4>
                                                            <p>With the help E-Commerce website you get an opportunity to have products and services available...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/cms-website-design-development-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Content Management Systems</h4>
                                                            <p>Nowadays, Content Management Systems such as WordPress, Joomla, Drupal etc, are usually used...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/wordpress-website-design-development-services">
                                                    <div className="itemMega bgRedMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">WordPress Website Design &amp; Development</h4>
                                                            <p>WordPress is an open source online website creation tool written in PHP and is the most...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4 px-lg-2 mt-3">
                                                <Link href="/custom-website-designing-services">
                                                    <div className="itemMega bgBlueMenu">
                                                        <div className="leftCont">
                                                            <h4 className="title fontWeight700">Custom Website Designing</h4>
                                                            <p>Using this one can start from just one simple page with an Email link, building up to a more complex...</p>
                                                        </div>
                                                        <div className="iconRight">
                                                            <i className="bi bi-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/website-development-services">Web Development</Link></li>
                                <li><Link href="/software-development-services">Software Development</Link></li>
                            </ul>
                        </div>
                        <button className="extraMenu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
        <div className=" offcanvas headerOffcanvas offcanvas-end  " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
        style={{zIndex: "9999"}}>
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">&nbsp;</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="extraMenuItems" id="mobileSub">
                    <ul>
                        <div className="d-block d-md-none">
                            <li data-bs-dismiss="offcanvas"><Link href="/digital-marketing-services">Digital Marketing</Link></li>
                            <li className="itemSub"><Link href="/pay-per-click-ppc-management-services" data-bs-dismiss="offcanvas">PPC Management</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#ppcManagement" aria-expanded="true" aria-controls="ppcManagement"><i className="fa fa-chevron-down"></i></button>
                                <ul id="ppcManagement" className="collapse" data-bs-parent="#mobileSub">
                                  <li data-bs-dismiss="offcanvas"><Link href="/google-ads-management-services">Google Ads Management</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/linkedin-ads-management-services">LinkedIn Ads Management</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/facebook-ads-management-services">Facebook Ads Marketing</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/instagram-ads-management-services">Instagram Ads Management</Link></li>
                                </ul>
                            </li>
                            <li className="itemSub"><Link href="/search-engine-optimization-seo-services" data-bs-dismiss="offcanvas">SEO</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#seoMenu" aria-expanded="true" aria-controls="seoMenu"><i className="fa fa-chevron-down"></i></button>
                                <ul id="seoMenu" className="collapse" data-bs-parent="#mobileSub">
                                <li data-bs-dismiss="offcanvas"><Link href="/on-page-seo-services">ON-Page SEO Services</Link></li>
                                <li data-bs-dismiss="offcanvas"><Link href="/off-page-seo-services">OFF-Page SEO Services</Link></li>
                                <li data-bs-dismiss="offcanvas"><Link href="/e-commerce-seo-services">E-Commerce SEO</Link></li>
                                <li data-bs-dismiss="offcanvas"><Link href="/mobile-seo-services">Mobile SEO</Link></li>
                                <li data-bs-dismiss="offcanvas"><Link href="/search-engine-optimization-outsourcing-seo-services">SEO Outsourcing</Link></li>
                                <li data-bs-dismiss="offcanvas"><Link href="/local-seo-services">Local SEO</Link></li>
                                </ul>
                            </li>
                            <li className="itemSub"><Link href="/social-media-optimization-services" data-bs-dismiss="offcanvas">SMO</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#smoMenu" aria-expanded="true" aria-controls="smoMenu"><i className="fa fa-chevron-down"></i></button>
                                <ul id="smoMenu" className="collapse" data-bs-parent="#mobileSub">
                                    <li data-bs-dismiss="offcanvas"><Link href="/social-media-optimization-services">Social Media Optimization</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link href="/content-marketing-services">Content Marketing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link href="/digital-marketing-services">Digital Marketing</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link href="/online-reputation-management-services">Online Reputation Management Services</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link href="/blog-management-services">Blog Management Service</Link></li>
                                    <li data-bs-dismiss="offcanvas"><Link href="/influencer-marketing-services">Influencer Marketing</Link></li>
                                </ul>
                            </li>
                            <li data-bs-dismiss="offcanvas"><Link href="/graphic-designing-services">Graphic Design</Link></li>
                            <li className="itemSub"><Link href="/website-designing-services" data-bs-dismiss="offcanvas">Website Designing Services</Link> <button className="subBtn" data-bs-toggle="collapse" data-bs-target="#websiteDesign" aria-expanded="true" aria-controls="websiteDesign"><i className="fa fa-chevron-down"></i></button>
                                <ul id="websiteDesign" className="collapse"  data-bs-parent="#mobileSub">
                                  <li data-bs-dismiss="offcanvas"><Link href="/corporate-website-designing-services">Corporate Website Designing</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/responsive-website-designing-services">Responsive Website Designing</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/e-commerce-website-design-development-services">E-commerce Website Designing</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/cms-website-design-development-services">Content Management Systems</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/wordpress-website-design-development-services">WordPress Website Design & Development</Link></li>
                                  <li data-bs-dismiss="offcanvas"><Link href="/custom-website-designing-services">Custom Website Designing</Link></li>
                                </ul>
                            </li>
                            <li data-bs-dismiss="offcanvas"><Link href="/website-development-services">Web Development</Link></li>
                            <li data-bs-dismiss="offcanvas"><Link href="/software-development-services">Software Development</Link></li>
                        </div>
                        <li data-bs-dismiss="offcanvas"><Link href="/about-us">About Us</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="/portfolio">Our Portfolio</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="/blog">Latest Blogs</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="/career">Careers</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="#">Our Clients</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="#">SEO Tools</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="/resource">Resources</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
