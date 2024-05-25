import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Link from "next/link";
import BannerForm from "../BannerForm";
import HeroDigitalMarketing from "./HeroDigitalMarketing";
import BestCompany from "./BestCompany";
import WeOffer from "./WeOffer";
import Benefits from "./Benefits";
import OurSteps from "./OurSteps";
import SpecializedServices from "./SpecializedServices";
import Why from "./Why";
import MarketingTools from "./MarketingTools";
import Faqs from "./Faqs";

const DigitalMarkServices = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Best Digital Marketing Company in India, Top Digital Marketing Agency
          in Mumbai & Delhi
        </title>
        <meta
          name="description"
          content="SIB Infotech is an award winning best digital marketing agency in India offering comprehensive digital marketing services like SEO, social media management ,PPC & content marketing to elevate your company’s online presence. Our digital marketing strategies help you to engage with your audiences, drive growth and achieve success online."
        />
        <meta
          name="keywords"
          content="digital marketing agency malad, best digital marketing company in malad west mumbai, content marketing agency in malad, top digital marketing agency in mumbai, best digital marketing company in mumbai, digital marketing agency in malad west, best digital marketing company in janakpuri, digital marketing company in mumbai, best digital marketing agency in mumbai, top digital marketing company in india, best digital marketing agency in delhi, digital marketing services in mumbai, digital marketing company in india, digital marketing service in mumbai, media company in mumbai, seo strategies, social media marketing, local digital marketing consultancy in mumbai, web promotion strategies for local businesses, local digital marketing sgency in mumbai, best digital marketing agency Mumbai"
        />
        <link
          rel="canonical"
          href="https://www.sibinfotech.com/digital-marketing-services"
        />
      </Head>
      <HeroDigitalMarketing />
      <BestCompany />

      {/* <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-md-5">
              <div className="rightSeoImgInner ps-lg-0">
                <div className="itemInfographic shadow" data-aos="zoom-in">
                  <div className="iconDigi py-0 h-auto">
                    <img
                      src="assets/images/icons/digital-marketing-copmany-in-mumbai.svg"
                      alt="Increase Brand Awareness"
                    />
                  </div>
                  <p className="mt-2">Increase Brand Awareness</p>
                </div>
                <div className="itemInfographic shadow" data-aos="zoom-in">
                  <div className="iconDigi py-0 h-auto">
                    <img
                      src="assets/images/icons/digital-marketing-company-in-delhi.svg"
                      alt="Increase Sales"
                    />
                  </div>
                  <p className="mt-2">Increase Sales</p>
                </div>
                <div className="itemInfographic shadow" data-aos="zoom-in">
                  <div className="iconDigi py-0 h-auto">
                    <img
                      src="assets/images/icons/digital-marketing-agency-in-india.svg"
                      alt="Increase customer Engagement"
                    />
                  </div>
                  <p className="mt-2">Increase Customer Engagement</p>
                </div>
                <div className="itemInfographic shadow" data-aos="zoom-in">
                  <div className="iconDigi py-0 h-auto">
                    <img
                      src="assets/images/icons/digital-marketing-agency-in-mumbai.svg"
                      alt="Maximize your ROI"
                    />
                  </div>
                  <p className="mt-2">Maximize your ROI</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="ps-lg-4">
                <h2 className="sub_heading fontHeading fontWeight600">
                  Best{" "}
                  <span className="text_red">
                    Digital Marketing Company in India
                  </span>
                </h2>
                <p className="customText text-justify mt-3">
                  SIB Infotech is a leading customer acquisition digital
                  marketing agency based in India with offices in Mumbai and New
                  Delhi. We deliver personal and tailored services to our
                  clients to rapidly grow their businesses, providing them with
                  a sustainable and scalable competitive advantage by combining
                  our proprietary Artificial Intelligence and Predictive
                  Behavior model by improvising visibility of our clients brand
                  and focus on Increased ROI and reach their targeted audiences.
                </p>
                <p className="customText">
                  Our multi-media specialists and digital marketing experts
                  offer you bespoke innovative digital marketing services that
                  helps you see into your marketing future. Every business is
                  different and has different needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <WeOffer />

      {/* <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-8">
              <div className="leftBenefits">
                <h4 className="sub_heading fontHeading fontWeight700">
                  Benefits of getting the Digital Marketing Services from the
                  Best Digital Marketing Company in India
                </h4>
                <p className="mt-3">
                  SIB Infotech, a leading Digital Marketing company in India,
                  offers businesses an easy-to-scale and adaptable approach to
                  reaching their real customers. Not only is it more
                  cost-effective compared to traditional marketing methods, but
                  it also allows new businesses to quickly establish their brand
                  reputation. With a higher engagement rate, huge return on
                  investment, and wider reach, digital marketing provides
                  unparalleled opportunities for growth. Its power lies in
                  segmentation, automation, and personalization, enabling
                  tailored messages to specific audiences at the right time.
                  Moreover, digital marketing is highly measurable, allowing
                  businesses to track and analyze their performance accurately,
                  ensuring every marketing effort delivers tangible results.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rightBenefit">
                <ul>
                  <li>Budget-friendly</li>
                  <li>Measurable Results</li>
                  <li>Improved Brand Awareness</li>
                  <li>Strong Engagement</li>
                  <li>Strong ROI Potential</li>
                  <li>Global and Regional Reach</li>
                  <li>Flexibility</li>
                  <li>Relationship Building</li>
                  <li>Immediate Connection</li>
                  <li>Dynamic Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Benefits />
      {/* <section className="seoCallAction">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="leftAction">
                <h4 className="sub_heading text-white fontHeading fontWeight500">
                  Do you Want More Traffic, More Leads, More Sales?
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rightAction text-center">
                <Link href="#bannerSection" className="btnAction">
                  Speak with one of our Experts in India today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="containerFull">
          <div className="text-center">
            <h3 className="small_heading fontHeading">
              How to Create an Effective Winning Digital Marketing Strategy in{" "}
              {new Date().getFullYear()}
            </h3>
            <h4 className="sub_heading">
              Our 4 Step Digital Marketing Process Key to SEO Success.
            </h4>
          </div>
          <div className="row mt-lg-4">
            <div className="col-lg-3">
              <div className="itemProccess">
                <div className="numberLeft">
                  <h5 className="textNumber textStrokeDarkBlue">1</h5>
                </div>
                <div className="numberRight">
                  <div className="processHeader">
                    <h4 className="small_heading text_dark_blue fontHeading fontWeight600">
                      Strategy Development
                    </h4>
                  </div>
                  <ul>
                    <li>Identify Target Audience</li>
                    <li>Define Goals</li>
                    <li>Market Research</li>
                    <li>Tactics and Channels</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="itemProccess">
                <div className="numberLeft">
                  <h5 className="textNumber textStrokeRed">2</h5>
                </div>
                <div className="numberRight">
                  <div className="processHeader">
                    <h4 className="small_heading text_red fontHeading fontWeight600">
                      Implementation
                    </h4>
                  </div>
                  <ul>
                    <li>Website and Social media Optimization</li>
                    <li>Content Creation</li>
                    <li>Advertising Campaigns</li>
                    <li>Audience Engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="itemProccess">
                <div className="numberLeft">
                  <h5 className="textNumber textStrokeBlue">3</h5>
                </div>
                <div className="numberRight">
                  <div className="processHeader">
                    <h4 className="small_heading text_light_blue fontHeading fontWeight600">
                      Analysis and Optimization
                    </h4>
                  </div>
                  <ul>
                    <li>Performance Monitoring</li>
                    <li>Data Analysis</li>
                    <li>A/B Testing</li>
                    <li>Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="itemProccess">
                <div className="numberLeft">
                  <h5 className="textNumber textStrokeRed">4</h5>
                </div>
                <div className="numberRight">
                  <div className="processHeader">
                    <h4 className="small_heading text_red fontHeading fontWeight600">
                      Report & Monitoring
                    </h4>
                  </div>
                  <ul>
                    <li>KPI Tracking</li>
                    <li>Reporting</li>
                    <li>Analysis and Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <OurSteps />
      <SpecializedServices />
      {/* <section className="bgSpecialized">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-10">
              <h3 className="sub_heading text-white fontWeight500 fontHeading">
                Our Specialized Digital Marketing Services:
              </h3>
            </div>
          </div>
          <div className="mt-lg-4 row row-cols-2 row-cols-lg-5">
            <div className="col">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <img src="assets/images/icons/meta.png" alt="Meta Ads" />
                  </picture>
                </div>
                <p className="title fontHeading">Meta ADS</p>
              </div>
            </div>
            <div className="col">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <img src="assets/images/icons/g-ads.png" alt="Google Ads" />
                  </picture>
                </div>
                <p className="title fontHeading">Google ADS</p>
              </div>
            </div>
            <div className="col">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <img
                      src="assets/images/icons/amazon.png"
                      alt="Amazon Ads"
                    />
                  </picture>
                </div>
                <p className="title fontHeading">Amazon Ads</p>
              </div>
            </div>
            <div className="col">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <img
                      src="assets/images/icons/linkedin-logo.png"
                      alt="Linkedin Ads"
                    />
                  </picture>
                </div>
                <p className="title fontHeading">Linkedin Ads</p>
              </div>
            </div>
            <div className="col">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <img
                      src="assets/images/icons/instagram.png"
                      alt="Instagram Ads"
                    />
                  </picture>
                </div>
                <p className="title fontHeading">Instagram Ads</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftSeoCompany">
                <img src="assets/images/seo-company.jpg" alt="SEO Company" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rightSeoCompany">
                <h4 className="sub_heading fontHeading">
                  We're more than just a Digital Marketing Company
                </h4>
                <p className="mt-3">
                  As a leading Digital Marketing agency in India, we pride
                  ourselves on a remarkable track record, successfully managing
                  over 1350+ projects within distinct niches. Our dedicated
                  teams specialize in various sectors, ensuring businesses
                  achieve top rankings. Whether its real estate SEO, healthcare
                  SEO, education SEO, or technology-based SEO, Google Ads, Meta
                  Ads, Social Media Marketing, Email Marketing each niche
                  benefits from a specialized team with the requisite skills and
                  extensive industry experience. This targeted approach allows
                  us to comprehend specific business requirements, leading to
                  outstanding results.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Digital Marketing Experts</li>
                      <li>Customizable Strategies</li>
                      <li>Transparent Reporting</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>24/7 Support & Care</li>
                      <li>Affordable Packages</li>
                      <li>Guaranteed 100% Client Satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Why />
      {/* <section className="bgAction2">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="leftAction">
                <h4 className="sub_heading text-white fontHeading fontWeight500">
                  We are an award winning Digital Marketing Agency in India
                </h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="rightAction text-center">
                <Link href="#bannerSection" className="btnAction mt-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="sub_heading fontWeight500 fontHeading">
                Some of the Best Digital Marketing Tools
              </h3>
            </div>
          </div>
          <div className="row mt-lg-3">
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/google-analytics.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/images/google-analytics.png"
                    alt="Google Analytics"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/google-adsense.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/images/google-adsense.png"
                    alt="Google Adsense"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/meta-business.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/images/meta-business.png"
                    alt="Meta Bussiness"
                  />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/mailchimp.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/mailchimp.png" alt="Mail Chimp" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/hubspot.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/hubspot.png" alt="HubsSpot" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/semrush.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/semrush.png" alt="Semrush" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source srcSet="assets/images/canva.webp" type="image/webp" />
                  <img src="assets/images/canva.png" alt="Canva" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/ahrefs.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/ahrefs.png" alt="ahref" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/wordpress.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/wordpress.png" alt="WordPress" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/hootsuite.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/hootsuite.png" alt="Hootsuite" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source srcSet="assets/images/zoom.webp" type="image/webp" />
                  <img src="assets/images/zoom.png" alt="Zoom" />
                </picture>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-sm-3">
              <div className="toolsLogo">
                <picture>
                  <source
                    srcSet="assets/images/shopify.webp"
                    type="image/webp"
                  />
                  <img src="assets/images/shopify.png" alt="Shopify" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <MarketingTools />
      {/* <section className="faqsBg">
        <div className="containerFull">
          <h3 className="sub_heading fontWeight500 text-white fontHeading">
            Do you have questions about working with Digital Marketing Agency in
            India? <br className="d-none d-lg-block" /> We’ve got your answers.
          </h3>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="faqRight mt-lg-4 mt-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        1. What is Digital Marketing?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Also known as online marketing, digital marketing
                          communicates messages through digital channels
                          accessed through electronic devices, including phones,
                          computers and tablets.
                        </p>
                        <p className="mt-2">
                          Digital marketing and traditional marketing, such as
                          print ads and direct mail, share the same ultimate
                          goal: generating product awareness and influencing
                          purchasing decisions to drive sales. The main
                          difference between traditional and digital marketing
                          is that digital marketing uses internet-connected
                          technologies to communicate and engage with targeted
                          audiences.
                        </p>
                        <p className="mt-2">
                          The launch of the World Wide Web in 1989 set the stage
                          for the emergence of digital marketing. The
                          proliferation of business websites, advancements in
                          email technologies and the introduction of wildly
                          popular social channels have sparked meteoric growth
                          in digital marketing. Online marketing is now a key
                          component in most businesses’ marketing plans
                          primarily because of the widespread use of digital
                          technologies but also because it can deliver
                          outstanding results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        2. What are the Key performance indicators (KPIs) and
                        metrics in digital marketing?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="customText">
                          When it comes to digital marketing, there are a range
                          of metrics you can measure, including:
                        </p>
                        <ul className="listFlexItem">
                          <li>
                            <strong>Website traffic:</strong> The number of
                            users who visit your website.
                          </li>
                          <li>
                            <strong>Traffic source:</strong> Where your website
                            traffic comes from, like search engines, social
                            media, or paid ads.
                          </li>
                          <li>
                            <strong>Pageviews:</strong> The number of times
                            users viewed your page.
                          </li>
                          <li>
                            <strong>Bounce rate:</strong> The percentage of
                            sessions where a user left your website and did not
                            interact with your page or visit another page on
                            your website.
                          </li>
                          <li>
                            <strong>Time on page:</strong> The amount of time
                            users spend on your page.
                          </li>
                          <li>
                            <strong>Click-through rate (CTR):</strong> The
                            percentage of users who saw and clicked on your
                            website, page, or ad.
                          </li>
                          <li>
                            <strong>Conversion rate:</strong> The percentage of
                            users who completed your desired action, like making
                            a purchase.
                          </li>
                          <li>
                            <strong>Open rate:</strong> The percentage of users
                            who received and opened your email.
                          </li>
                          <li>
                            <strong>Follows:</strong> The number of users who
                            follow your page or account.
                          </li>
                          <li>
                            <strong>Share:</strong> The number of times your
                            post was shared by users.
                          </li>
                          <li>
                            <strong>ROI:</strong> The total revenue driven by
                            your digital marketing strategy after any costs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        3. What does a digital marketing agency do?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          A digital marketing agency will cover your business’s
                          digital marketing needs by implementing and managing
                          innovative strategies to market your products and
                          services online.
                        </p>
                        <p className="mt-2">
                          A full-service digital marketing agency (like SIB
                          INFOTECH) can manage your social media accounts,
                          redesign your website, optimize your web pages and
                          content for search engines, and more.
                        </p>
                        <p className="mt-2">
                          Meanwhile, boutique agencies specialize in one or two
                          digital marketing strategies. They may also specialize
                          in specific industries, like food and beverage
                          manufacturing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqRight mt-lg-4 mt-0">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        4. How is digital marketing different from traditional
                        marketing?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          A traditional marketing campaign, for example, may use
                          billboards, print ads, and mailers, while a digital
                          marketing campaign may use social media, blog posts,
                          and email to promote a business and its offerings.
                        </p>
                        <p className="mt-2">
                          In recent years, the line between “traditional
                          marketing” and “digital marketing” has begun to blur
                          as even traditional channels like billboards, TV ads,
                          and direct mail have developed a digital component to
                          them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        5. How Much Will Digital Marketing Cost My Business?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          The simple answer is that there is a digital marketing
                          strategy for every budget. The flexibility of digital
                          marketing strategies yields benefits for just about
                          every size of business, from small to large. With such
                          a wide range of methods and strategies, it is not
                          possible to provide a one-size-fits-all price tag for
                          digital marketing.
                        </p>
                        <p className="mt-2">
                          Instead, it is helpful to examine the digital
                          marketing spend for different levels of business, as
                          small companies will spend less than larger ones. For
                          example:
                        </p>
                        <p className="mt-2">
                          <strong>Basic Digital Marketing —</strong> Startups
                          and small businesses do not generally have a large
                          budget available for digital marketing. These
                          businesses focus on low-cost methods, typically
                          leveraging websites, blogs and social media to drive
                          revenue at a low price point. The cost for basic
                          digital marketing can be several hundred dollars per
                          month.{" "}
                        </p>
                        <p className="mt-2">
                          <strong>Intermediate Digital Marketing — </strong>{" "}
                          Medium-sized businesses tend to have established
                          revenue streams and the capability to spend more on
                          digital marketing. This is where SEO, SEM, PPC and
                          email marketing start to become prevalent. The cost
                          for intermediate digital marketing can be several
                          thousand dollars per month.
                        </p>
                        <p className="mt-2">
                          <strong>Advanced Digital Marketing — </strong> Large
                          or enterprise businesses will use digital marketing in
                          a comprehensive and often global manner. These
                          businesses tend to have developed strategies across
                          most digital marketing channels. These businesses
                          often spend substantial resources developing a digital
                          marketing strategy across many available channels. The
                          cost for advanced digital marketing can be tens of
                          thousands of dollars per month.
                        </p>
                        <p className="mt-2">
                          As demonstrated above, the cost of digital marketing
                          varies greatly based on business size, revenue and
                          goals. Smaller companies will often start with a basic
                          strategy and develop intermediate or advanced methods
                          down the road. Ultimately, it is possible for just
                          about every business to create and implement a digital
                          marketing strategy that meets their needs and budget.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        6. How can my business use digital marketing?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          Now that you know digital marketing’s definition, you
                          might wonder how your business can take advantage of
                          digital marketing’s many benefits.
                        </p>
                        <p className="mt-2">
                          If you’re curious about how your company can use
                          digital marketing, here are some examples:
                        </p>
                        <ul className="listFlexItem">
                          <li>
                            Build brand awareness with a social media ad
                            campaign on Facebook
                          </li>
                          <li>
                            Increase qualified website traffic with a content
                            marketing strategy
                          </li>
                          <li>
                            Generate purchases and leads with a PPC ad campaign
                          </li>
                          <li>
                            Improve website conversion rates with conversion
                            rate optimization (CRO) tests
                          </li>
                          <li>
                            Grow qualified website traffic, search result
                            visibility, and sales with an SEO strategy
                          </li>
                          <li>
                            Target competitor locations and qualified leads with
                            geofencing advertising
                          </li>
                          <li>
                            Convert high-value leads with a dedicated
                            account-based marketing plan
                          </li>
                          <li>
                            Encourage customer loyalty and repeat purchases with
                            an email marketing campaign
                          </li>
                          <li>
                            Increase time on page and conversion rates by
                            improving your site’s page speed
                          </li>
                          <li>
                            Expand reach with marketing strategies on Amazon,
                            Walmart Marketplace, and Target+
                          </li>
                          <li>These are just 10 digital marketing ideas.</li>
                        </ul>
                        <p className="mt-2">
                          Whether you’re in the business-to-business (B2B) or
                          business-to-consumer (B2C) market, you can find
                          creative ways to reach your audience through online
                          channels. The customization and versatility of online
                          marketing techniques make them useful for every kind
                          of company. Here at sib infotech, we’re both a B2B
                          digital marketing agency and a B2C digital marketing
                          agency!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Faqs />
    </>
  );
};

export default DigitalMarkServices;
