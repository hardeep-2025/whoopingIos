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
import Link from 'next/link';
const SeoServices = () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const [active, setActive] = useState(1);
      const [openIndex, setOpenIndex] = useState(0);
      const [hoveredId, setHoveredId] = useState(null);
      
      const toggleFaq = (index) => {
  setOpenIndex(openIndex === index ? null : index);
  setActive(true);
};
  
const makeUsApart = [ {
    id: 1,
    title: "Strategy Before Execution",
    description:
      "We start with a deep audit of your website, current rankings, competitors, and target audience. This gives us the full picture before we touch anything.",
    icon: `/whoppingreact/seo/exploreMore/img1.png`,
    hover: `/seo/exploreMore/img1hover.png`,
  }, {
    id: 2,
    title: "No Cookie-Cutter Plans",
    description:
      "Your business is unique. Your digital marketing plan should be too. We build every campaign from scratch — because what works for your competitor may not work for you.",
    hover: `/seo/exploreMore/img2.png`,
    icon: `/whoppingreact/seo/exploreMore/img2hover.png`,
  }, {
    id: 3,
    title: "Full Transparency",
    description:
      "You own everything — your accounts, your content, your data. We give you complete access and regular reports so you're never in the dark about your campaigns.",
    icon: `/whoppingreact/seo/exploreMore/img3.png`,
    hover: `/seo/exploreMore/img3hover.png`,
  }, {
    id: 4,
    title: "Long-Term Partnership",
    description:
      "We don't work with clients. We work as an extension of your team. Your growth is our growth — which is why 93% of our clients stay with us year after year.",
    icon: `/whoppingreact/seo/exploreMore/img4hover.png`,
    hover: `/seo/exploreMore/img4.png`,
  }, {
    id: 5,
    title: "Speed & Agility",
    description:
      "Digital marketing moves fast. Algorithm changes, market shifts, new opportunities — our team adapts quickly so your campaigns never fall behind.",
    icon: `/whoppingreact/seo/exploreMore/img5.png`,
    hover: `/seo/exploreMore/img5hover.png`,
  }, {
    id: 6,
    title: "Dedicated Account Manager",
    description:
      "No ticket systems, no waiting in queues. Every client gets a dedicated account manager who knows your business and is available when you need answers.",
    icon: `/whoppingreact/seo/exploreMore/img6.png`,
    hover: `/seo/exploreMore/img6hover.png`,
  }]
      const faqs = [
  {
    question:
      "How long does SEO take to show results for a small business?",
    answer: "We offer a complete range of digital marketing services including Search Engine Optimization (SEO), Local SEO, Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Email Marketing, Web Design & Development, Link Building, and Online Reputation Management. Every service is customized to your specific business goals and industry.",
  },
  {
    question: "What is Answer Engine Optimization (AEO) and why does my business need it?",
    answer: "It depends on the service. PPC campaigns can drive targeted traffic within 24–48 hours of launch. SEO typically shows meaningful ranking improvements within 3–6 months, with stronger results building over 6–12 months. Social media and content marketing compound over time. We set clear, realistic expectations at the start so you always know what to expect and when.",
  },
  {
    question: "Does WhoppingSEO offers specialized SEO for restaurants and real estate?",
    answer: "Our pricing is fully customized based on your business size, goals, industry, and chosen services. We work with startups, SMBs, and established enterprises — with packages built to match different budgets. We believe in complete pricing transparency — no hidden fees, no surprise charges. Get in touch for a free proposal with a clear breakdown.",
  },
  {
    question:
      "What are AI SEO services for small businesses?",
    answer: "We work with businesses of all sizes — from local service providers and small e-commerce stores to large enterprises and multi-location brands. Our strategies are always scaled to your budget and goals. No business is too small to benefit from a smart, well-executed digital marketing plan.",
  },
  {
    question: "How much does professional SEO service cost at WhoppingSEO?",
    answer: "Three things set us apart: transparency, customization, and real results. We don't use template strategies. Every client gets a custom-built plan. You own all your accounts and data. You get clear monthly reports. And with a 93% client retention rate, our results speak louder than any pitch. We invite you to talk to our existing clients before making a decision.",
  },

];

const services = [
  {
    id: 1,
    title: "AI SEO Services for Small Business",
    description:
      "Our AI SEO services help small businesses automate keyword research, find content gaps, and optimize content faster. From Chandigarh to Frisco, TX, we help businesses compete smarter with AI-driven SEO.",
    icon: `/whoppingreact/seo/followup/img1.png`,
    link: "Get AI SEO Strategy →",
  },

  {
    id: 2,
    title: "Local SEO Services",
    description:
      "Dominate local search results in Frisco, Dallas, Chandigarh, Zirakpur, and beyond. We optimize your Google Business Profile, build local citations, and create location-targeted content that puts your business on the Google Map Pack.",
    icon: `/whoppingreact/seo/followup/img3.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 3,
    title: "Technical SEO",
    description:
      "Content that ranks, educates, and converts. Our content team creates SEO-optimized blog posts, landing pages, infographics, and long-form guides that attract your target audience and guide them through your sales funnel.",
    icon: `/whoppingreact/seo/followup/img6.png`,
    link: "Free Technical Audit →",
  },

  {
    id: 4,
    title: "On-Page SEO & Content",
    description:
      "We optimize every page element — title tags, headers, meta descriptions, internal links, and body content — around keywords your ideal customers actually search. Content that ranks and converts, not just fills space.",
    icon: `/whoppingreact/seo/followup/img5.png`,
    link: "Read Our SEO Blog →",
  },

  {
    id: 5,
    title: "Link Building & Authority",
    description:
      "High-quality backlinks from relevant, authoritative websites remain one of Google’s most powerful ranking signals. We build links that count — through guest posting, digital PR, and strategic outreach that earns your site real authority.",
    icon: `/whoppingreact/seo/followup/img2.png`,
    link: "Build Authority →",
  },

  {
    id: 6,
    title: "E-Commerce SEO",
    description:
      "Product pages, category structures, crawlability, and conversion optimization — our e-commerce SEO services drive more qualified buyers to your online store and turn traffic into revenue through smart on-site strategy.",
    icon: `/whoppingreact/seo/followup/img4.png`,
    link: "Grow Your Store →",
  },
];
    return (
        <>
        {/* {banner} */}
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
                             <div className="bannerHeading font-extrabold!  font-['Poppins']">
                                   <h1 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] font-bold">Professional SEO Services That  <span className=" text-[#1A98FF]">Actually Rank</span> Your Business
                               </h1>
                             </div>
                             <div className="bannerPar">From local SEO and AI-powered optimization to Answer Engine Optimization — we build strategies that put your business in front of the right people at the right moment.
                            </div>
                             <div className="flex gap-4 mt-4 flex-wrap"> <button className="px-4 py-2! rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                            Get Your Free Local SEO Audi 
                            <ArrowUpRight size={18} />
                           </button> <button className="px-4 py-2 rounded-full! border hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                            Explore Our Services
                            <ArrowUpRight size={18} />
                            </button>
                                         
                     </div>
                           </section>
                    </Col>

<Col lg={6} className="flex justify-center">
  <Image
    src={`/whoppingreact/seo/pmg.png`}
    alt="Banner"
    width={100}
    height={100}
    className="img z-10 object-contain w-[100%]! mx-auto"
  />
</Col>

</Row>
                   </Container>
                   </div> 
{/* number section */}
          <div className="whatiswhoping my-[6rem]">
                                   <Container>
                                         <Row>
                                         <Col>
                                         <section className="HoemAboutus">
                                       
                      <div className="noArea   gap-6 items-center justify-between flex-wrap   py-4 px-4">
                      <div className="seoPage flex flex-wrap lg:flex-nowrap justify-between  items-center">                           
                        <div className="numberDiv flex flex-col py-4 z-10 bg-[17171754] items-center justify-center "  >

                                    <span className="text-[45px]! font-bold text-[#1A98FF] z-40 ">500+</span>
                                     <span className="notext   z-40 bg-[#17171754]">Clients Served Globally</span>
                                                 </div>
                         <div className="numberDiv flex flex-col py-4 items-center justify-center">
                                                    <span className=" text-[45px]! font-bold text-[#1A98FF] z-40 ">93%</span>
                                                   <span className="notext   z-40 bg-[#17171754]">Clients Retention Rate</span>
                                                 </div>
            <div className="numberDiv flex flex-col py-4 items-center justify-center ">
                                                    <span className="text-[45px]! w-full! font-bold text-[#1A98FF] z-40 ">8+ yrs</span>
                                                   <span className="notext   z-40 bg-[#17171754]"> Industry Experience </span>
                                                 </div>
                         <div className="numberDiv flex flex-col py-4 items-center justify-center">
                                                   <span className="text-[45px]! font-bold text-[#1A98FF] z-40 ">4.9*</span>
                                                   <span className="notext   z-40 bg-[#17171754]"> Client retention rate</span>
                                                 </div>
                                             </div>
                                           </div>
                                         </section>
                                         </Col>
                                         </Row>
                                     </Container>
                      </div>

            <div className="pb-[6rem]">
                 
                   <Container>
                     <Row>
                     <Col lg={6}>
                           <section className=" w-full flex items-start  justify-start  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold!  font-['Poppins']">
                                   <h2 className="text-[41px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">What is SEO and Why Does Your 
                                    Business Need it?
                               </h2>
                             </div>
                             <div className="text-[18px]! pb-6">
                              <p className="text-[20px]! font-medium! pb-5"> Your customers are searching on Google right now
</p>
                           Search Engine Optimization (SEO) is the process of making yourwebsite show up when potential customers search for your products or services online. If your business does not appear on page one of Google, you are effectively invisible to the majority of your market. In 2026, SEO goes beyond just ranking on Google. 
                           <br />It now includes Answer Engine Optimization (AEO) — ensuring your content getscited in Google AI Overviews, ChatGPT, and Perplexity — and AI SEO services that use machine intelligence to find and capture opportunities faster than ever before.
                          <br />
                          <br />
                          At WhoppingSEO, we build strategies that cover every dimension of modern search — so your business gets found everywhere your customers are looking, from traditional search results to AI-generated answers.

                          </div>
                             <button className="px-4 py-2! rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                            Explore Our Local SEO Services
                            <ArrowUpRight size={18} />
                           </button> 
                           </section>
                     </Col> <Col lg={6}>
                    <div className="bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)] border-1 py-10 mb-6 px-10 border-[#A600FF] rounded-[15px]">

                  <p className="!text-[25px] font-semibold pb-15 !rounded-[4px]">
                    What Good SEO Delivers
                  </p>

                  <div className="pb-4 !text-[18px] font-semibold border-b-2 pt-2 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      01
                    </div>

                    <span>More Qualified Organic Traffic - Zero ad spend</span>
                  </div>

                  <div className="border-b-2 !text-[18px] font-semibold py-4 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      02
                    </div>

                    <span>Higher Google Ranking for Buyer-intent Keywords</span>
                  </div>

                  <div className="border-b-2 !text-[18px] font-semibold py-4 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      03
                    </div>

                    <span>Visibility in Google AI Overview and AI tools</span>
                  </div>

                  <div className="border-b-2 !text-[18px] font-semibold py-4 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      04
                    </div>

                    <span>More Leads, Calls, and Walk-in Customers</span>
                  </div>

                  <div className="border-b-2 !text-[18px] font-semibold py-4 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      05
                    </div>

                    <span>Long-Term ROI that Compounds over time</span>
                  </div>

                  <div className="!text-[18px] font-semibold py-4 border-white flex gap-3 items-start">
                    
                    <div className="bg-[#585555A3] p-2 rounded-[4px] min-w-[55px] text-center">
                      06
                    </div>

                    <span>Stronger Brand Trust and Online Authority</span>
                  </div>

                </div>
                           
                     </Col>
                     </Row>
                   </Container>
            </div> 

            <div className=" my-[6rem]">
              <Container>
                    <Row>
                    <Col>
                    <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Our Services</h4>
                     <h2 className='text-[41px]! font-bold! text-white py-4'>Complete SEO Services Built for Real Growth</h2>
 
                     <p className='text-[18px]! pb-10!' >Every service we offer is built around one goal — driving measurable results for your business through smart, sustainable search optimization.</p>
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {services.map((item) => (
                         <div
  key={item.id}
  className="
    relative
    rounded-2xl
    p-6
    !pb-20
    border border-[#2B1B63]!
    bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
    transition-all duration-300!

    hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]!
  "
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
         
                           {/* Link */}
                           <button className="text-[#1A62FF] text-[20px] font-bold hover:translate-x-1 transition-all duration-300">
                             {item.link}
                           </button>
                         </div>
                       ))}
                     </div>
                    </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-[6rem]!">
                 
                   <Container>

                     <Row>
               <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Our Services</h4>
                   <h2 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">SEO Built for Your Industry
                  </h2>
                  <div className="text-[20px]! max-w-[70%]!">
                    <p className="text-[20px]! pb-5"> Generative SEO strategies rarely win. We Build Industry-Specific SEO Campaigns tailored to how your customers search and what makes them convert.
                    </p>
                    </div>
                    <div className="flex gap-2 pb-5">
                      <button
                    type="submit"
                    className="bg-gradient-to-r from-[#3b5bff] to-[#5f2dff] 
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full flex gap-1 items-center"
                  >
                 <IoRestaurantSharp/>  Restaurants 
                  </button>
                  <button
                    type="submit"
                    className=" flex  bg-[#16161F]
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                   <FaUserDoctor/> Healthcare
                  </button>
                  <button
                    type="submit"
                    className=" flex  bg-[#16161F]
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                  <BiSolidSchool/> Real Estate
                  </button>
                  
                </div>
                     <Col lg={6}>
                           <section className="bannnerSection w-full  flex items-start  justify-start  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold  font-['Poppins']">
                              <h4 className='text-[20px]! font-normal! text-[#1A62FF]!'>SEO AGENCY FOR RESTUARANTS</h4>
                                   <h2 className="text-[25px]! leading-[38px] font-medium md:text-[45px] md:leading-[50px]  font-bold">Get More Reservetions and walk-in Customers From Google
                               </h2>
                             </div>
                             <div className=" ">
                              <p className="text-[18px]! font-medium! pb-2">  As a dedicated SEO agency for restaurants, we understand that hungry customers are searching for "restaurants near me" hundreds of times a day in your area. If your restaurant is not in the Google Map Pack or on page one — those customers are choosing your competitors.
                              </p>
                              We build a complete local SEO strategy for your restaurant — optimizing your Google Business Profile, managing online reviews, creating food and location-based content, and building the local authority that puts you at the top of every relevant local search.
                          </div>
                          <p className="text-[20px]! font-medium pt-10"><span className="text-[#1A62FF]"> 
                             <span className="text-[#1A62FF]! whitespace-nowrap">
        <Link
          href="https://whoppingseo.com/services/seo-services/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1A62FF]! no-underline! hover:text-[#1A62FF]! hover:no-underline!"
        >
           Local SEO Services </Link>
      </span>{" "}

  {" "}  | 
                      <span className="text-[#1A62FF]! whitespace-nowrap">
        <Link
          href="https://whoppingseo.com/services/digital-marketing-agency-in-frisco/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1A62FF]! no-underline! hover:text-[#1A62FF]! hover:no-underline!"
        >
          Digital Marketing Frisco </Link>
      </span>{" "}       


                           </span>
                             
                             </p>
                          
                             
                           </section>
                     </Col> <Col lg={6}>
                           <div className="bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)] rounded-[20px]! border-2 py-10 mb-6 px-10 border-[#A600FF]" >
                            <p className="text-[25px]! font-semibold pb-15">Typical Restaurant SEO Results</p>

                            <div className=" border-b-2 text-[18px]! font-semibold py-4 flex justify-between border-white"> <span> Website Traffic Increase</span><span>200%</span></div>

                             <div className=" border-b-2 text-[18px]! font-semibold py-4 flex justify-between border-white"> <span> Weekend Reservation Growth</span><span>65%</span></div>

                              <div className=" border-b-2 text-[18px]! font-semibold py-4 flex justify-between border-white"> <span> Google Map Pack Ranking</span><span>Top 3</span>
                              </div>
                               <div className="  text-[18px]! font-semibold py-4 flex justify-between"> <span>Time to See Results</span><span>3–5 Months</span></div>
                                
                           </div>
                           
                     </Col>
                     </Row>
                   </Container>
            </div> 

            <div className="py-[6rem]  bg-black">
                 
                   <Container>
                     <Row>
                     <Col lg={6}>
                           <section className=" w-full flex items-start  justify-start  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold  font-['Poppins']">
                                   <h2 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">Answer Engine Optimization – <span className="text-[#1A62FF]!">
                                    The New SEO Frontier</span>
                               </h2>
                             </div>
                             <div className="text-[20px]! ">
                              <p className="pb-1"> In 2026, nearly 48% of Google searches now show AI-generated answers at the top of the page. Millions more searches happen directly inside ChatGPT, Perplexity, and other AI tools. If your website is not structured to be cited by these AI engines — you are missing a massive and growing source of traffic.

                            </p>
                                                      
                            Our Answer Engine Optimization services structure your content in a way that AI systems trust and cite — turning your website into the source that AI tools quote when your ideal customer asks a question relevant to your business.
                          </div>
                             <div className="flex gap-2 mt-10 flex flex-wrap gap-2">
                      <button
                    type="submit"
                    className="bg-[#1A62FF3B] border-1 border-[#747474]
                    text-white px-3 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full flex gap-1 items-center"
                  >
                 Google AI Overviews
                  </button>
                  <button
                    type="submit"
                    className=" flex  bg-[#1A62FF3B] border-1 border-[#747474]
                    text-white px-3 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                  ChatGPT Citations
                  </button>
                  <button
                    type="submit"
                    className=" flex  bg-[#1A62FF3B] border-1 border-[#747474]
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                  Perplexity Visibility
                  </button> <button
                    type="submit"
                    className=" flex  bg-[#1A62FF3B] border-1 border-[#747474]
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                 Featured Snippets
                  </button> <button
                    type="submit"
                    className=" flex  bg-[#1A62FF3B] border-1 border-[#747474]
                    text-white px-4 py-3 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full gap-1 items-center"
                  >
                 People Also Ask
                  </button>
                  
                </div>
                           </section>
                     </Col> <Col lg={6}>
                           <div className=" mb-3 px-10" >
                            <p className="text-[25px]! font-semibold pb-7">What Our AEO & AI SEO Services Include</p>
                            <div className="pb-3 text-[18px]! font-semibold pt-2  flex items-start gap-1"><span className=" text-[#1A62FF] test-[28px]! "><TiTick className="text-[30px]" /></span>  
                            <span>
                              <p>FAQ & Q&A Content Structuring</p>
                            <p className="text-[14px]! font-medium">Writing content in direct question-answer format so AI engines can easily extract and cite your pages.</p>
                            </span>
                            </div>

                            <div className="pb-3 text-[18px]! font-semibold pt-2  flex items-start gap-1"><span className=" text-[#1A62FF] test-[28px]! ">
                              <TiTick className="text-[30px]" /></span>  
                            <span>
                              <p>Schema Markup Implementation</p>
                            <p className="text-[14px]! font-medium">Adding structured data (FAQ, Service, Organization schemas) so search engines fully understand your content.</p>
                            </span>
                            </div>
                              
                            <div className="pb-3 text-[18px]! font-semibold pt-2  flex items-start gap-1"><span className=" text-[#1A62FF] test-[28px]! "><TiTick className="text-[30px]" /></span>  
                            <span>
                              <p>E-E-A-T Optimization</p>
                            <p className="text-[14px]! font-medium">Building your site's Experience, Expertise, Authority and Trust signals — the qualities Google and AI prioritize in 2026.</p>
                            </span>
                            </div>
                           
                            <div className="pb-3 text-[18px]! font-semibold pt-2  flex items-start gap-1"><span className=" text-[#1A62FF] test-[28px]! "><TiTick className="text-[30px]" /></span>  
                            <span>
                              <p> AI Keyword Targeting</p>
                            <p className="text-[14px]! font-medium">Finding the exact queries people ask AI tools about your industry — and creating content that answers them definitively.</p>
                            </span>
                            </div>
                       
                            <div className="pb-3 text-[18px]! font-semibold pt-2  flex items-start gap-1"><span className=" text-[#1A62FF] test-[28px]! "><TiTick className="text-[30px]" /></span>  
                            <span>
                              <p>Generative Engine Optimization (GEO)</p>
                            <p className="text-[14px]! font-medium">Optimizing content to appear in AI-generated responses — the fastest-growing traffic source in 2026.</p>
                            </span>
                            </div>
                            <button className="px-4 py-2! rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                            Start AEO Strategy
                            <ArrowUpRight size={18} />
                           </button> 
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
                                         <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>HOW IT WORKS</h4>

                                   <h2 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">Our Proven  <span className="text-[#1A62FF]!">SEO 4-Step Process</span>
                               </h2>
                             </div>
                             
                             <div className="flex flex-row pt-20  gap-5 flex-wrap">
                              <div className="flex flex-col justify-center items-center p-3 gap-3">
                                <span className="border-3 rounded-full p-3 px-4 border-[#1A62FF]! font-extrabold text-[30px]"> 01</span>
                                <span className="font-bold text-[18px] ">aduit & Discovery</span>
                                <span className="font-medium text-[14px] text-center w-[230px]!">We audit your website, analyze competitors, and identify your biggest opportunities — before writing a single piece of content.</span>
                              </div>
                              <div className="flex flex-col justify-center items-center p-3 gap-3">
                                <span className="border-3 rounded-full p-3 px-3.5 border-[#1A62FF]! font-extrabold text-[30px]">02</span>
                                <span className="font-bold text-[18px] ">Strategy & Keywords</span>
                                <span className="font-medium text-[14px] text-center  w-[230px]!">We build a custom keyword strategy targeting low-competition, high-intent terms that your ideal customers actually search.</span>
                              </div>
                              <div className="flex flex-col justify-center items-center p-3 gap-3">
                                <span className="border-3 rounded-full p-3 px-3.5 border-[#1A62FF]! font-extrabold text-[30px]">03</span>
                                <span className="font-bold text-[18px] ">Optimize & Create</span>
                                <span className="font-medium text-[14px] text-center  w-[230px]!">We optimize existing pages, build new content, fix technical issues, and implement AEO-ready schema markup across your site.</span>
                              </div>
                              <div className="flex flex-col justify-center items-center p-3 gap-3">
                                <span className="border-3 rounded-full p-3 px-3.5 border-[#1A62FF]! font-extrabold text-[30px]">04</span>
                                <span className="font-bold text-[18px] ">Track & Scale</span>
                                <span className="font-medium text-[14px] text-center  w-[230px]!">We deliver clear monthly reports showing ranking movement, traffic growth, and leads — then scale what’s working.</span>
                              </div>
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
                                        <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>WHY WhoppingSEO</h4>

                                   <h2 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] max-w-[70%] font-bold">What Makes Us Different
                               </h2>
                             </div>
                             
                             <div className="flex flex-row  flex-wrap  gap-[5%]">

                              <div
  className="
    flex flex-row
    w-[45%]
    mt-12
    border border-transparent
    py-4
    rounded-2xl
    justify-start
    items-start
    p-3
    gap-3
    transition-all
    duration-300
    hover:border-[#A600FF]!
    hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
  "
>
                                <div className="bg-[#585555A3]!   p-2 font-extrabold text-[30px]">
                                  <Image 
                                  src={`/whoppingreact/seo/howItwork/img1.png`}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className=""
                                  />

                                </div>
                                <span>
                                <div className="font-bold text-[18px] ">Industry-Specific Strategies
                                <div className="font-medium text-[14px] text-left mt-4!">We do not apply generic templates. Whether you need an SEO agency for restaurants, SEO services for real estate agents, or healthcare SEO — we build campaigns around your specific industry and customer behavior.</div>
                                </div>
                                </span>
                              </div>



                             <div
  className="
    flex flex-row
    w-[45%]
    mt-12
    border border-transparent
    py-4
    rounded-2xl
    justify-start
    items-start
    p-3
    gap-3
    transition-all
    duration-300
    hover:border-[#A600FF]!
    hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
  "
>
                                <div className="bg-[#585555A3]!  p-2 font-extrabold text-[30px]">
                                  <Image 
                                  src={`/whoppingreact/seo/howItwork/img3.png`}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className=""
                                  />

                                </div>
                                <span>
                                <div className="font-bold text-[18px] ">Full Transparency & Reporting
                                <div className="font-medium text-[14px] text-left mt-4!">You always know exactly what we are doing and what it is delivering. Weekly keyword reports, monthly traffic analysis, and honest performance reviews — no vague updates or vanity metrics.</div>
                                </div>
                                </span>
                              </div>

                              <div
  className="
    flex flex-row
    w-[45%]
    mt-12
    border border-transparent
    py-4
    rounded-2xl
    justify-start
    items-start
    p-3
    gap-3
    transition-all
    duration-300
    hover:border-[#A600FF]!
    hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
  "
>
                                <div className="bg-[#585555A3]!  p-2 font-extrabold text-[30px]">
                                  <Image 
                                  src={`/whoppingreact/seo/howItwork/img2.png`}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className=""
                                  />

                                </div>
                                <span>
                                <div className="font-bold text-[18px] ">Dual Market Expertise
                                <div className="font-medium text-[14px] text-left mt-4!">We serve businesses across the USA — including Frisco, Dallas, and New Jersey — and in India across Chandigarh, Zirakpur, and Mohali. Two markets, one dedicated team.</div>
                                </div>
                                </span>
                              </div>

                              <div
  className="
    flex flex-row
    w-[45%]
    mt-12
    border border-transparent
    py-4
    rounded-2xl
    justify-start
    items-start
    p-3
    gap-3
    transition-all
    duration-300
    hover:border-[#A600FF]!
    hover:bg-[linear-gradient(93.11deg,_rgba(46,7,72,0.16)_0.19%,_rgba(0,17,255,0.16)_98.23%)]
  "
>
                              <div className=" bg-[#585555A3]!  p-2 font-extrabold text-[30px]">
                                  <Image 
                                  src={`/whoppingreact/seo/howItwork/img4.png`}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className=""
                                  />

                                </div>
                                <span>
                                <div className="font-bold text-[18px] ">AI & AEO Ready
                                <div className="font-medium text-[14px] text-left mt-4!">Most agencies are still catching up to the AI search revolution. Our AI SEO services for small businesses and Answer Engine Optimization strategies are built for where search is heading — not just where it has been.</div>
                                </div>
                                </span>
                              </div>
                             </div>
                     </div>
                     </Col>
                     </Row>
                   </Container>
            </div> 

 <div className="Faq  bg-black  !py-[6rem]">
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
                    <div className="bg-black py-5">
                <Container>
                                          
                                                    {/* FAQ Column */}
                <Row className="justify-content-center">
                <Col lg={10}>
                    <div className="d-flex flex-column gap-3">{
                    faqs.map((faq, index) => (
                     <div key={index}
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
                     <div className=" px-5 py-4 text-sm text-gray-300 pt-0!">
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

            <div className=" py-[8rem] bg-[linear-gradient(254.09deg,_#0D0F38_15.15%,_#093142_83.93%)]">
                         <Container>
                               <Row>
                               <Col>
                                <h2 className='text-[41px]! font-bold! text-white py-4'>Explore More From WhoppingSEO</h2>
            
                                <p className='text-[18px]! pb-10!' >Our ppc services dallas team works with businesses across a wide range of industries. PPC advertising is especially powerful for:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {makeUsApart.map((item) => (
                            <div
                              key={item.id}
                              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
                              className="relative !rounded-[15px] border border-white p-6 hover:border-[#1A62FF]! bg-[linear-gradient(107.89deg,_#24192B,_#100404)]  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] transition-all duration-300 "
                            >
                              {/* Icon */}
                              <div className="w-14 h-14  flex items-center justify-center mb-3">
                                <Image 
                                                  src={ hoveredId === item.id ? item.hover : item.icon}
                                                  alt={item.title}
                                                  width={23}
                                                  height={23}
                                                  className="w-7!  h-7! object-contain"
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
            
                              {/* Link */}
                              <button className="text-[#1A62FF] text-[20px] font-bold hover:translate-x-1 transition-all duration-300">
                                {item.link}
                              </button>
                            </div>
                          ))}
                        </div>
                               </Col>
                               </Row>
                           </Container>
            </div>

            <div className="bg-black pt-[6rem] pb-[12rem]! px-4">
                                                <Container>
                                                  <Row className="justify-center">
                                                    <Col lg={12}>
                                                      <QuickContactForm />
                                                    </Col>
                                                  </Row>
                                                </Container>
                          </div> 
        </>
    );
}

export default SeoServices;
