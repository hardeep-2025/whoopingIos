"use client";
import { User, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoRestaurantSharp } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Minus, Plus } from 'lucide-react';
import QuickContactForm from "./QuickContactForm";

const Smm = () => {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const [openIndex, setOpenIndex] = useState(0);
            const [active, setActive] = useState(1);

const toggleFaq = (index) => {
          setOpenIndex(openIndex === index ? null : index);
          setActive(true);
        };
const services = [
  {
    id: 1,
    title: "Social Media Strategy & Consulting",
    description:
      "We audit your current presence, analyse competitors, and build a custom roadmap aligned to your business goals. No templates — every strategy is unique.",
    icon: `/whoppingreact/smm/servies/img1.png`,
    link: "Get AI SEO Strategy →",
  },

  {
    id: 2,
    title: "Content Creation & Management",
    description:
      "Our creative team produces thumb-stopping posts, Reels, carousels, infographics, and short-form videos tailored for each platform's algorithm and audience",
    icon: `/whoppingreact/smm/servies/img2.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 3,
    title: "Facebook & Instagram Marketing",
    description:
      "Leverage Meta's powerful targeting. We craft organic content and paid ad campaigns that expand reach, drive website traffic, and generate qualified leads.",
    icon: `/whoppingreact/smm/servies/img3.png`,
    link: "Free Technical Audit →",
  },

  {
    id: 4,
    title: "LinkedIn Marketing Services",
    description:
      "For B2B brands, LinkedIn is a goldmine. We build authority through thought leadership content, optimised profiles, and LinkedIn Ads reaching decision-makers.",
    icon: `/whoppingreact/smm/servies/img4.png`,
    link: "Read Our SEO Blog →",
  },

  {
    id: 5,
    title: "YouTube & Video Marketing",
    description:
      "Video is the highest-converting content format. We produce, optimise, and promote YouTube content that builds your brand channel and converts viewers into customers.",
    icon: `/whoppingreact/smm/servies/img5.png`,
    link: "Build Authority →",
  },

  {
    id: 6,
    title: "Paid Social Media Advertising",
    description:
      "Our certified ad specialists design high-ROI paid campaigns with laser-sharp audience targeting, compelling creatives, and regular A/B testing for continuous improvement.",
    icon: `/whoppingreact/smm/servies/img6.png`,
    link: "Grow Your Store →",
  }, {
    id: 7,
    title: "Social Media Audit & Competitor Analysis",
    description:
      "We dissect your current performance, benchmark against competitors, and identify gaps and opportunities to sharpen your competitive edge on every platform.",
    icon: `/whoppingreact/smm/servies/img7.png`,
    link: "Grow Your Store →",
  }, {
    id: 8,
    title: "Community Management & Reputation",
    description:
      "We engage with your audience daily — responding to comments, handling DMs, managing reviews, and turning negative feedback into positive brand moments.",
    icon: `/whoppingreact/smm/servies/img8.png`,
    link: "Grow Your Store →",
  }, {
    id: 9,
    title: "Influencer Marketing",
    description:
      "We identify and collaborate with relevant micro and macro influencers in your niche to extend reach authentically and cost-effectively with measurable ROI.",
    icon: `/whoppingreact/smm/servies/img9.png`,
    link: "Grow Your Store →",
  },
];
      const faqs = [
  {
    question: "What is local SEO and why does my business need it?",
    answer:
      "Local SEO (Local Search Engine Optimization) is the process of optimizing your online presence to help your business appear in local search results on Google, Google Maps, and other search engines. It helps customers nearby find your products or services when searching for 'near me' or location-specific keywords. If you want to attract more local customers, increase foot traffic, and generate qualified leads, local SEO is essential.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "Local SEO typically starts showing noticeable improvements within 3 to 6 months, depending on your industry, competition, and the current state of your website. Businesses with an optimized Google Business Profile and strong local signals may see results sooner. Consistent optimization helps achieve long-term rankings and sustainable growth.",
  },
  {
    question: "What is the difference between regular SEO and local SEO?",
    answer:
      "Regular SEO focuses on improving your website's visibility on a national or global level, while Local SEO targets customers in a specific geographic area. Local SEO includes optimizing your Google Business Profile, local citations, customer reviews, location-based keywords, and Google Maps rankings, making it ideal for businesses serving local communities.",
  },
  {
    question: "What is AEO and GEO and how does it help local businesses?",
    answer:
      "AEO (Answer Engine Optimization) helps your content appear as direct answers in AI-powered platforms and voice search results. GEO (Generative Engine Optimization) focuses on improving your visibility in AI search tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity. By optimizing for both AEO and GEO, local businesses can increase their online visibility, reach more potential customers, and stay competitive as search evolves.",
  },
  {
    question: "Does local SEO work for small businesses with a tight budget?",
    answer:
      "Yes. Local SEO is one of the most cost-effective digital marketing strategies for small businesses. By targeting nearby customers who are actively searching for your services, Local SEO delivers high-quality traffic without requiring a large advertising budget. Even with limited resources, businesses can achieve strong local visibility through consistent optimization.",
  },
  {
    question: "What is Google Business Profile optimization and why does it matter?",
    answer:
      "Google Business Profile optimization involves improving your business listing with accurate information, business categories, services, photos, operating hours, customer reviews, and regular updates. A fully optimized profile increases your chances of appearing in Google Maps and local search results, helping customers find, contact, and visit your business more easily.",
  },
  {
    question: "Do you offer local SEO services for businesses in Frisco and Dallas, TX?",
    answer:
      "Yes. We provide professional Local SEO services for businesses in Frisco, Dallas, TX, and surrounding areas. Our services include Google Business Profile optimization, local keyword research, citation management, on-page local SEO, review management, local link building, AEO, GEO, and AI Search Optimization to help your business attract more local customers and generate qualified leads.",
  },
];
    return (
        <div>
               <div className="banner relative h-screen max-h-[97vh]! max-[991px]:max-h-[100%]! max-[991px]:h-[100%]! max-[767px]:pt-20!  max-[991px]:py-20!">
                             <Image
                               src={`/whoppingreact/seo/bg.png`}
                               alt="Banner"
                               fill
                               className="img -z-10 object-cover "
                             />
                               <Container>
                                 <Row>
                                 <Col lg={6}>
                                       <section className="bannnerSection w-full h-screen flex items-start  justify-center  flex-col gap-3 text-white">
                                         <div className="bannerHeading font-bold  font-['Poppins']">
                                               <h1 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] font-bold">Expert Social Media Marketing Services That Drive Real Results
                                           </h1>
                                         </div>
                                         <div className="bannerPar">Are your competitors dominating social media while your brand stays invisible? At WhoppingSEO, we deliver data-driven social media marketing services engineered to grow your brand, capture your audience`s 
                                        </div>
                                         <div className="flex gap-4 mt-4"> <button className="px-4 py-2! rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                                                                                      Get Your Free Seo Audit  
                                                                   <ArrowUpRight size={18} />
                                                                   </button> <button className="px-4 py-2 rounded-full! border hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                                                                                       Explore Our Services
                                                                                       <ArrowUpRight size={18} />
                                                                                     </button>
                                                   
                                                   </div>  
                                       </section>
                                </Col>
            
            <Col lg={6} className="flex justify-center ">
              <Image
                src={`/whoppingreact/smm/bg.png`}
                alt="Banner"
                width={100}
                height={100}
                className="img z-10 object-contain w-[100%]! mx-auto max-[767px]:mb-12"
              />
            </Col>
            
            </Row>
                               </Container>
                               </div> 

   <div className="whatiswhoping my-[6rem]">
                         <Container>
                               <Row>
                               <Col>
                               <p className="text-[20px] font-medium pb-[4rem]">From strategy to execution, we manage every pillar of your social presence — so you can focus on running your business while we fuel your growth.</p>
                               <section className="HoemAboutus">
                             
                                 <div className="noArea    gap-6 items-center justify-between flex-wrap ">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-[15%] items-center">                           
              <div className="numberDiv flex flex-col py-4 z-10 bg-[17171754] "  >
                <span className="no text-[#1A98FF] z-40 ">500+</span>
                                         <span className="notext z-40 ">Brand Grown</span>
                                       </div>
                     <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">10+</span>
                                         <span className="notext z-40 ">Platform Mastered</span>
                                       </div>
                                       <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">8+</span>
                                         <span className="notext z-40 ">Years Experience</span>
                                       </div>
                                       <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">98%</span>
                                         <span className="notext z-40 ">Client retention rate</span>
                                       </div>
                                   </div>
                                 </div>
                               </section>
                               </Col>
                               </Row>
                           </Container>
            </div>

     <div className="py-[6rem]">
                     
                       <Container>
                         <Row>
                         <Col lg={6}>
                               <section className=" w-full flex items-start  justify-start  flex-col gap-3 text-white">
                                 <div className="bannerHeading font-bold  font-['Poppins']">
                                       <h2 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">What Are Social Media Marketing Services?

                                   </h2>
                                 </div>
                                 <div className="text-[20px]! ">
                       
                              Social media marketing (SMM) is the strategic use of platforms like Facebook, Instagram, LinkedIn, YouTube, Pinterest, and X (Twitter) to promote your brand, build community, and drive measurable business outcomes.

                               <br />
                               <br />
                                WhoppingSEO combines creativity with data science to deliver social media campaigns that perform — not just impress.
                              </div>
                               <div className="flex gap-4 mt-4 max-[767px]:flex-col"> <button className="px-4 py-4! rounded-full! bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                                Explore Our Local SEO Services
                                  <ArrowUpRight size={18} />
                                  </button> 
                                </div>  
                                 
                               </section>
                         </Col> <Col lg={6}>
                               <div className="bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)] border-1 rounded-3xl py-10 mb-6 px-10 border-[#2E0748]" >
                                <p className="text-[25px]! font-semibold pb-15">A professional SMM service goes beyond posting pretty pictures. It involves:
</p>
                                <div className="pb-4 text-[18px]! font-semibold border-b-2 pt-2 border-white"> <span className=" bg-[#585555A3] p-2 mr-2 ">01</span> Audience research and persona building</div>

                                 <div className=" border-b-2 text-[18px]! font-semibold py-4 border-white"> <span className=" bg-[#585555A3] p-2 mr-2 ">02</span> Platform-specific content creation</div>

                                  <div className=" border-b-2 text-[18px]! font-semibold py-4 border-white"> <span className=" bg-[#585555A3] p-2 mr-2 ">03</span> Paid advertising campaign management</div>
                                  
                                   <div className=" border-b-2 text-[18px]! font-semibold py-4 border-white flex items-start"> <span className=" bg-[#585555A3] p-2 mr-2 ">04</span> <p>Community engagement and reputation management</p></div>

                                     <div className=" text-[18px]! font-semibold py-4 border-white"> <span className=" bg-[#585555A3] p-2 mr-2 ">05</span>Analytics, reporting, and continuous optimisation</div>
                               </div>
                               
                         </Col>
                         </Row>
                       </Container>
                </div> 

        <div className=" my-[6rem]">
                      <Container>
                            <Row>
                            <Col>
                             <h2 className='text-[41px]! font-bold! text-white py-4'>Complete Social Media Marketing Services We Offer</h2>
         
                             <p className='text-[18px]! pb-10!' >Don`t get lost in the ever-growing social media landscape. WhoppingSEO provides expert SMM services covering every channel, every format, and every funnel stage.</p>
                              <h2 className='text-[41px]! font-bold! text-white py-4'>services</h2>
                             <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {services.map((item) => (
                         <div
                           key={item.id}
                           className="relative border border-[#2B1B63] rounded-2xl p-6 bg-[linear-gradient(107.89deg,_#24192B,_#100404)]  hover:border-cyan-400 transition-all duration-300

    hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
    hover:border-[#1A62FF]!"

                         >
                           {/* Icon */}
                           <div className="w-16 h-16  flex items-center justify-center mb-3">
                             <img
                               src={item.icon}
                               alt={item.title}
                               className="w-15.75 h-15.75 object-contain"
                             />
                           </div>
         
                           {/* Title */}
                           <h3 className="text-white text-[20px]! font-semibold mb-4">
                             {item.title}
                           </h3>
         
                           {/* Description */}
                           <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                             {item.description}
                           </p>
                         </div>
                       ))}
                     </div>
                            </Col>
                            </Row>
                        </Container>
        </div>

       <div className=" my-[6rem] bg-[#111111] py-27">
                      <Container>
                            <Row>
                            <Col>
                            <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Client Success Stories</h4>

                             <h2 className='text-[41px]! font-bold! text-white py-4'>Real Brands. Real Results.</h2>
         
                             <p className='text-[18px]! pb-10!' >We let the numbers do the talking. Here are three stories from brands that partnered with WhoppingSEO and transformed their social media presence.</p>
                              
                     <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div
                        className="
                            flex flex-col gap-3
                            bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                            py-5 px-5
                            rounded-2xl
                        "
                        >
                        <h4 className='text-[20px]! font-bold!'>
                          Local Fitness Studio — New Jersey
                        </h4>
                        <h2 className="font-bold! text-[40px]! pb-2! ">+12,100</h2>
                        <p className="text-[16px]!">New followers in 6 months (started at 300)</p>
                        <p className="text-[16px]!">
                        We built a Reels-first content strategy and launched a local Facebook Ads campaign. Within 6 months: monthly class bookings increased by 187% and cost-per-lead dropped to under $3.
                        </p>
                      </div>
                      <div
                        className="
                            flex flex-col gap-3
                            bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                            py-5 px-5
                            rounded-2xl
                        "
                        >
                        <h4 className='text-[20px]!  max-w-[80%] font-bold!'>
                          E-Commerce Fashion Brand
                        </h4>
                        <h2 className="font-bold! text-[40px]! pb-2! ">340% ROAS</h2>
                        <p className="text-[16px]!">Return on Ad Spend in 90 days</p>
                        <p className="text-[16px]!">
                        We rebuilt the entire ad funnel — top-of-funnel video ads, mid-funnel carousel retargeting, and dynamic product ads at the bottom. Result: 62% reduction in cost-per-purchase alongside 340% ROAS.
                        </p>
                      </div>
                      <div
                        className="
                            flex flex-col gap-3
                            bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                            py-5 px-5
                            rounded-2xl
                        "
                        >
                        <h4 className='text-[20px]! font-bold!'>
                         B2B SaaS Startup   
                        </h4>
                        <h2 className="font-bold! text-[40px]! pb-2! ">40+ Leads</h2>
                        <p className="text-[16px]!">Qualified demo requests per month from LinkedIn</p>
                        <p className="text-[16px]!">
                        We developed a content authority programme, optimised their company page, and ran targeted InMail campaigns. Within 4 months, they received 40+ qualified demo requests monthly from LinkedIn alone.
                        </p>
                      </div>
                     </div>
                            </Col>
                            </Row>
                        </Container>
        </div>

        <div className="py-[6rem]">
                         
            <Container>
                <Row>
                 <Col >
                  <div>
                    <div className="bannerHeading font-bold  font-['Poppins']">
                       <h2 className="text-[45px]! leading-[38px] font-extrabold! md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">Why Choose WhoppingSEO for Social Media Marketing?
                        </h2>
                        <p className='text-[18px]! pb-10! ' >We`re not just an agency sending monthly invoices. We`re your long-term growth partner — certified, transparent, and obsessed with your results.</p>
                    </div>
                                     
                    <div className="flex flex-row pt-20  justify-center flex-wrap  gap-[25px] gap-y-[40px]">
        
                         <div className="flex flex-row w-[49%] border py-4 pb-5 rounded-2xl  justify-start items-start p-3 gap-3 
                         hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                        hover:border-[#0011FF]!
                          transition-all duration-300">
                                    <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">01</span>
                                     
                                    </div>
                                    <span>
                                    <div className="font-bold text-[18px] ">Certified Social Media Experts
                                    <div className="font-medium text-[14px] text-left mt-4!">Our team holds certifications across Meta Blueprint, Google, and HubSpot. We stay ahead of every algorithm update so your brand does too.</div>
                                    </div>
                                    </span>
                         </div>
                                                     
                         <div className="flex flex-row w-[49%] border rounded-2xl py-4  justify-start items-start p-3 gap-3
                         hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                        hover:border-[#0011FF]!
                          transition-all duration-300
                         ">
                                   <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">02</span>
                                     
                                    </div>
                                <span>
                            <div className="font-bold text-[18px] ">Custom Strategies — No Templates
                            <div className="font-medium text-[14px] text-left mt-4!">We never use the same playbook twice. Every strategy is built around your specific industry, audience, and business goals.</div>
                            </div>
                            </span>
                         </div>

                           <div className="flex flex-row w-[49%] border rounded-2xl py-4 pb-5  justify-start items-start p-3 gap-3
                           hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                         hover:border-[#0011FF]!
                           transition-all duration-300
                           ">
                                   <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">03</span>
                                     
                                    </div>
                                <span>
                            <div className="font-bold text-[18px] ">Transparent Reporting
                            <div className="font-medium text-[14px] text-left mt-4!">You`ll always know exactly how your investment is performing. No vague metrics — clear, actionable data delivered monthly.</div>
                            </div>
                            </span>
                         </div>

                           <div className="flex flex-row w-[49%] border rounded-2xl py-4  justify-start items-start p-3 gap-3
                           hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                         hover:border-[#0011FF]!
                           transition-all duration-300
                           ">
                                   <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">04</span>
                                     
                                    </div>
                                <span>
                            <div className="font-bold text-[18px] ">Full-Funnel Approach
                            <div className="font-medium text-[14px] text-left mt-4!">We don`t just grow follower counts. We build awareness, nurture engagement, and drive conversions — covering the entire customer journey.</div>
                            </div>
                            </span>
                         </div>

                          <div className="flex flex-row w-[49%] border rounded-2xl py-4 pb-5  justify-start items-start p-3 gap-3
                          hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                        hover:border-[#0011FF]!
                          transition-all duration-300
                          ">
                                   <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">05</span>
                                     
                                    </div>
                                <span>
                            <div className="font-bold text-[18px] ">Dedicated Account Manager
                            <div className="font-medium text-[14px] text-left mt-4!">A single point of contact who knows your business inside and out — available whenever you need them, 24/7 support included.</div>
                            </div>
                            </span>
                         </div>

                          <div className="flex flex-row w-[49%] border rounded-2xl py-4  justify-start items-start p-3 gap-3
                          hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
                        hover:border-[#0011FF]!
                          transition-all duration-300
                          ">
                                   <div className=" bg-[#585555A3]  p-2 font-extrabold ">
                                    <span className="text-[20px]!">06</span>
                                     
                                    </div>
                                <span>
                            <div className="font-bold text-[18px] ">Proven ROI Across Industries
                            <div className="font-medium text-[14px] text-left mt-4!">From retail to real estate, healthcare to SaaS, we`ve helped businesses across every sector grow revenue through strategic social media.</div>
                            </div>
                            </span>
                    </div>
                  </div>
                 </div>
                 </Col>
                </Row>
                </Container>
             </div> 
        
        <div className="py-[6rem] bg-black">
        <Container>
            <Row>
            <Col lg={12}>
                <div className="max-w-[950px]">
                
                <h2 className="text-[42px]! font-bold! text-white mb-4!">
                    Our 6-Step Social Media Marketing Process
                </h2>

                <p className="text-[17px]! text-[#CFCFCF] max-w-[800px] mb-14!">
                    A structured, repeatable process that takes your brand from invisible
                    to unstoppable — built on data, creativity, and continuous optimisation.
                </p>
<div className="relative">
  {/* Gradient Timeline Line */}
  <div className="absolute left-[26px] top-[8px] bottom-[28px] w-[4px] bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)]"></div>

  <div className="flex flex-col gap-10 z-[12]!">

                    {/* 01 */}
                    <div className="flex gap-5 items-start">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)] flex items-center justify-center text-white font-bold text-[18px] z-20!">
                        01
                    </div>

                    <div>
                        <h3 className="text-white text-[18px]! font-semibold mb-2!">
                        Discovery & Audit
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        We deep-dive into your brand, target audience, competitors,
                        and current social media performance to understand exactly
                        where you stand and where you need to go.
                        </p>
                    </div>
                    </div>

                    {/* 02 */}
                    <div className="flex gap-5 items-start">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)] flex items-center justify-center text-white font-bold text-[18px]  z-20!">
                        02
                    </div>

                    <div>
                        <h3 className="text-white text-[20px]! font-semibold mb-2!">
                        Strategy Development
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        We build your custom social media roadmap with platform
                        priorities, content pillars, posting cadence, KPIs,
                        and paid ad budget recommendations.
                        </p>
                    </div>
                    </div>

                    {/* 03 */}
                    <div className="flex gap-5 items-start">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)] flex items-center justify-center text-white font-bold text-[18px]  z-20!">
                        03
                    </div>

                    <div>
                        <h3 className="text-white text-[20px]! font-semibold mb-2!">
                        Content Creation
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        Our designers and copywriters produce platform-native content
                        that represents your brand beautifully — scroll-stopping,
                        on-brand, and algorithm-optimised.
                        </p>
                    </div>
                    </div>

                    {/* 04 */}
                    <div className="flex gap-5 items-start">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)]  flex items-center justify-center text-white font-bold text-[18px]  z-20!">
                        04
                    </div>

                    <div>
                        <h3 className="text-white text-[20px]! font-semibold mb-2!">
                        Publishing & Community Management
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        We schedule, post, and actively manage engagement across all
                        your channels — responding to comments, managing DMs,
                        and building your community every single day.
                        </p>
                    </div>
                    </div>

                    {/* 05 */}
                    <div className="flex gap-5 items-start">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)]  flex items-center justify-center text-white font-bold text-[18px]  z-20!">
                        05
                    </div>

                    <div>
                        <h3 className="text-white text-[20px]! font-semibold mb-2!">
                        Paid Amplification
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        Where organic reach has limits, we boost results with
                        strategic paid social campaigns — targeted, tested,
                        and continuously optimised for maximum ROI.
                        </p>
                    </div>
                    </div>

                    {/* 06 */}
                    <div className="flex gap-5 items-start z-20! bg-black">
                    <div className="min-w-[55px] h-[55px] rounded-full bg-[linear-gradient(281.21deg,_#0011FF_4.99%,_#A31AFF_91.73%)]  flex items-center justify-center text-white font-bold text-[18px]  z-20!">
                        06
                    </div>

                    <div>
                        <h3 className="text-white text-[20px]! font-semibold mb-2!">
                        Analyse, Report & Optimise
                        </h3>

                        <p className="text-[#CFCFCF] text-[14px]! leading-[28px]">
                        Monthly reports delivered in plain language. Strategy refined
                        based on what the data tells us — what worked, what didn’t,
                        and where to double down next month.
                        </p>
                    </div>
                    </div>

                </div>
</div>
                
                </div>
            </Col>
            </Row>
        </Container>
        </div>
 
        <div className="Faq py-[6rem]">
            <Container>
            <Row>
            <Col>
                <div className="HoemAboutus">
                    <div className="textArea flex flex-col item-center justify-center">
                    <h2 className="MainHeading text-center font-black!">Frequently Asked Questions</h2>
                    <span className="!para mt-6 flex flex-col">
                    <p className="text-center ">
                     Everything you need to know before getting started.
                    </p>
                    </span>
                   </div>
                    <div className=" pt-5">
                <Container>
                                          
                                                    {/* FAQ Column */}
                <Row className="justify-content-center">
                <Col lg={10}>
                    <div className="d-flex flex-column gap-3">{
                    faqs.map((faq, index) => (
                       <div
                                                          key={index}
                                                          className={`rounded overflow-hidden transition-all duration-300 ${
                                                 openIndex === index
                                                   ? "bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] "
                                                   : "bg-[#CAC5C51C] hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] "
                                               }`}>
                    {/* Question */}
                    <button
                     onClick={() => toggleFaq(index)}
                     className="w-full flex items-center justify-between text-left px-5 py-4 text-white"
                         >
                    <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">
                         Q.{index + 1}
                    </span>
                                          
                    <span className="text-[15px] text-gray-200">
                        {faq.question}
                    </span>
                    </div>
                                          
                    <span>
                        {openIndex === index ? (
                        <Minus size={18} />
                        ) : (
                        <Plus size={18} />
                        )}
                        </span>
                       </button>
                                          
                {/* Answer */}
                {openIndex === index && (
                     <div className=" px-5 py-4 text-sm text-gray-300 pt-0">
                         {faq.answer || "Answer coming soon..."}
                     </div>
                   )}
                     </div>
                ))} 
            </div>
        </Col>    
        </Row>
        </Container>
        </div>
        </div>
        </Col>
        </Row>
        </Container>
       </div>
 
           
              <div className=" py-[6rem] pb-[12rem] px-4">
                                     <Container>
                                       <Row className="justify-center">
                                         <Col lg={12}>
                                           <QuickContactForm />
                                         </Col>
                                       </Row>
                                     </Container>
               </div> 
        </div>

        
    );
}

export default Smm;
