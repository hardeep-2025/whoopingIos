"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiUpArrowAlt } from "react-icons/bi";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const Servies = () => {
  const [active, setActive] = useState(1);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const socialIcons = [
    `/whoppingreact/ser/social/img1.png`,
    `/whoppingreact/ser/social/img2.png`,
    `/whoppingreact/ser/social/img3.png`,
    `/whoppingreact/ser/social/img4.png`,
    `/whoppingreact/ser/social/img5.png`,
  ];

  const companies = [
    `/whoppingreact/ser/compneay/img1.png`,
    `/whoppingreact/ser/compneay/img2.png`,
    `/whoppingreact/ser/compneay/img3.png`,
    `/whoppingreact/ser/compneay/img4.png`,
  ];

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
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setActive(true);
  };
 const makeUsApart = [ {
        id: 1,
        title: "Research & Analysis",
        description:
          "We analyze your business, competitors, and market trends to create a strong foundation.",
        icon: `/whoppingreact/ser/our/img1.png`,
      }, {
        id: 2,
        title: "Strategy Planning",
        description:
          "Custom strategies tailored to your business goals and audience.",
        icon: `/whoppingreact/ser/our/img2.png`,
      }, {
        id: 3,
        title: "Implementation",
        description:
          "Execution of campaigns using advanced tools and expert techniques.",
        icon: `/whoppingreact/ser/our/img3.png`,
      }, {
        id: 4,
        title: "Optimization",
        description:
          "Continuous monitoring and improvement for better performance.",
        icon: `/whoppingreact/ser/our/img4.png`,
      }, {
        id: 5,
        title: "Reporting & Growth",
        description:
          "Detailed reports with insights and future growth planning.",
        icon: `/whoppingreact/ser/our/img5.png`,
      }]
  const services = [
  {
    id: 1,
    title: "Start your digital growth journey today",
    image: `/whoppingreact/Home/sco.png`,
  },
  {
    id: 2,
    title: "Talk to our experts",
    image:`/whoppingreact/friscoDigital/google/img2.png`,
  },
  {
    id: 3,
    title: "Get a free consultation",
    image:`/whoppingreact/friscoDigital/google/img3.png`,
  },
 
 
];
const btnArry = [
  {
    text: "Real Estate",
    icon: `/whoppingreact/seo/btn/img1.png`,
  },
  {
    text: "E-commerce",
    icon: `/whoppingreact/seo/btn/img2.png`,
  },
  {
    text: "Healthcare",
    icon: `/whoppingreact/seo/btn/img3.png`,
  },
  {
    text: "Education",
    icon: `/whoppingreact/seo/btn/img4.png`,
  },
  {
    text: "Travel & Hospitality",
    icon: `/whoppingreact/seo/btn/img5.png`,
  },
  {
    text: "Local Businesses",
    icon: `/whoppingreact/seo/btn/img6.png`,
  },{
    text: "Startups & Enterprises",
    icon: `/whoppingreact/seo/btn/img7.png`,
  },
];

  return (
    <div>
      {/* Banner */}
      <div className="banner relative h-screen max-h-[97vh]! max-[991px]:max-h-none! max-[991px]:h-[100%]! max-[767px]:pt-20!">
        <Image
          src={`/whoppingreact/Home/servies.png`}
          alt="Banner"
          fill
          className="img -z-10 object-cover"
        />

        <Container>
          <Row>
            <Col>
              <section className="bannnerSection w-full h-screen flex items-start lg:max-w-[50%] justify-center flex-col gap-3 text-white">
                <div className="bannerHeading font-bold font-['Poppins']">
                  <h1 className="text-[45px]! leading-[38px] md:text-[45px] md:leading-[50px] font-bold!">
                    We don’t just deliver services we deliver measurable growth.
                  </h1>
                </div>

                <div className="bannerPar">
                  At WhoppingSEO, we combine data-driven strategies,
                  creative execution, and cutting-edge tools to help your
                  business stand out in a crowded digital world. Our
                  approach is focused on performance, scalability, and
                  long-term success.
                </div>

              
                {/* ===== NEW SECTION END ===== */}
              </section>

             
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-black">
        <Container>  
            <Row>
                <Col>
                   {/* ===== NEW SECTION START ===== */}
                    <div className="w-full bg-transparent mt-[6rem] relative z-10">
                  {/* Top Box */}
                  
                  <div className=" backdrop-blur-md rounded-[20px]! overflow-hidden  z-9 bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.81)_5.13%,_rgba(44,12,65,0.81)_96.71%)]">
                     <Image
                      src={`/whoppingreact/Home/serviesH.png`}
                      alt="Background"
                      fill
                      className="absolute inset-0 -z-1 object-cover"
                    />
                    <div className="flex flex-wrap p-5 md:p-7  gap-x-4 gap-y-4 bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.81)_5.13%,_rgba(44,12,65,0.81)_96.71%)]">
                      {[
                        "Result-Oriented Approach",
                        "Certified & Experienced Experts",
                        "Transparent Reporting",
                        "Customized Marketing Strategies",
                        "ROI-Focused Campaigns",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#06183D4F] text-[20px]! border border-white/10! px-4 py-2 rounded-full text-sm md:text-base"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Area */}
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-6">
                    {/* Button */}
                    <button className="bg-[linear-gradient(90deg,_#1B51CC_0%,_#2B0E66_100%)] 
                    hover:opacity-90 transition-all px-8 py-3 
                    !rounded-full text-white font-medium
                    flex items-center gap-2
                    "
                    >

                        View Portfolio <BiUpArrowAlt className="rotate-59 text-[20px]" />
                        </button>

                    {/* Social Icons + Text */}
                    <div className="flex flex-col items-center lg:items-end gap-3">
                      {/* Social Icons */}
                      <div className="flex items-center gap-3">
                        {socialIcons.map((icon, index) => (
                          <div
                            key={index}
                            className="w-[42px] h-[42px] "
                          >
                            <Image
                              src={icon}
                              alt={`social-${index}`}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Text */}
                      <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-[18px]! font-normal  text-white">
                        <span>Proven Result</span>
                        <span>Experienced Team</span>
                        <span>Affordable Pricing</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Logos */}
                  <div className="mt-[6rem]">
                    <div className="flex flex-wrap items-center justify-between gap-10 md:gap-16">
                      {companies.map((logo, index) => (
                        <div key={index} className="relative h-[110px]!">
                          <Image
                            src={logo}
                            alt={`company-${index}`}
                            width={268}
                            height={10}
                            className="object-contain h-[100%] opacity-90 hover:opacity-100 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div> 
                </Col>
            </Row>
        </Container>
      </div>


        <div className=" pt-[6rem] bg-black ">
                         <Container>
                               <Row>
                               <Col>
                             
                                <h2 className='text-[41px]! font-bold! text-white py-4'>Our Proven Process for Digital Success</h2>
            
                                <p className='text-[18px]! pb-10!' >We follow a structured and transparent process to ensure consistent results:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {makeUsApart.map((item) => (
                            <div
                              key={item.id}
                              className="relative  rounded-2xl p-6  border                
                              hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                              hover:border-[#1A62FF]!
                              transition-all duration-300"
                            >
                              {/* Icon */}
                              <div className="rounded-xl  flex items-center justify-start gap-3 mb-6">
                                <img
                                  src={item.icon}
                                  alt={item.title}
                                  className="w-8 h-8 object-contain"
                                />
                                  <h3 className="text-white text-[20px]! font-semibold mb-0">
                                {item.title}
                              </h3>
                              </div>
            
                              {/* Title */}
                            
            
                              {/* Description */}
                              <p className="text-gray-400 text-[16px] leading-relaxed mb-2">
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

     <div className="ourDigitelMarketing  bg-black  !py-[6rem]">
                     <Container>
                           <Row>
                           <Col>
                           
                           <section className="HoemAboutus">
                           
                            <div className=" imagePointSection">
                             <div className="leftSide">
                               <Image
                               src={`/whoppingreact/ser/img1.png`}
                                 alt=""
                                 width={1000}
                                 height={1000}
                                 className="w-full h-[100%]!"
                               />
                             </div>
                              <div className="bg-black text-white">
                             <h2 className='text-[40px]! font-bold! text-white py-4'>We provide tailored digital marketing solutions across various industries:</h2>
                             
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                          {btnArry.map((item, index) => (
                            <div key={index} className="w-full">
                              <button className="w-full text-[20px] bg-[#100404D9]! border border-[#24192B]! rounded-[10px]! flex items-start gap-0 py-4 px-3 text-white">
                                
                                <Image
                                  src={item.icon}
                                  alt={item.icon}
                                  width={24}
                                  height={24}
                                  className="h-[24px]! w-[24px]!"
                                />

                                <span className="text-[20px]! pl-[2px]! flex ">{item.text}</span>
                              </button>
                            </div>
                          ))}
                        </div> 
                         <p className='text-[18px]! py-10!' >No matter your industry, we understand your audience and craft strategies that deliver results.</p>
                              </div>
                              </div>
                          
                                  </section>
                                  </Col>
                                  </Row>
                              </Container>
                       </div>

                       
            <div className="whatiswhoping my-[6rem]">
                                 <Container>
                                       <Row>
                                       <Col>
                                      
                                        <h2 className='text-[35px]! font-bold! text-white py-4'>As a leading digital marketing agency in
                                           <span className="text-[#1A98FF]"> the USA, Whopping SEO </span>
                                            specializes in crafting effective site 
                                        <span className="text-[#1A98FF]"> MARKETING STRATEGIES  </span>
                                            that deliver exceptional ROI.</h2>
                                       <section className="HoemAboutus">
                                     
                                         <div className="noArea   gap-6 items-center justify-between flex-wrap   py-4 px-12 ">
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">                           
                      <div className="numberDiv flex flex-col py-4 z-10 bg-[17171754] "  >
                                                 <span className="no text-[#1A98FF] z-40 bg-[#17171754]">500+</span>
                                                 <span className="notext z-40 max-w-[180px]! bg-[#17171754]">Businesses Grown Across USA</span>
                                               </div>
                                               <div className="numberDiv flex flex-col py-4">
                                                 <span className="no text-[#1A98FF] z-40 bg-[#17171754]">3x</span>
                                                 <span className="notext max-w-[180px]! z-40 bg-[#17171754]">Average Map Pack visibility increase</span>
                                               </div>
                                               <div className="numberDiv flex flex-col py-4">
                                                 <span className="no text-[#1A98FF] z-40 bg-[#17171754]">90</span>
                                                 <span className="notext z-40 max-w-[180px]! bg-[#17171754]">Days to first ranking improvements</span>
                                               </div>
                                               <div className="numberDiv flex flex-col py-4">
                                                 <span className="no text-[#1A98FF] z-40 bg-[#17171754]">98%</span>
                                                 <span className="notext z-40 max-w-[180px]! bg-[#17171754]">Client retention rate</span>
                                               </div>
                                           </div>
                                         </div>
                                       </section>
                                       </Col>
                                       </Row>
                                   </Container>
                    </div>
        
     {/* ================= TOOLS & TECHNOLOGIES SECTION ================= */}

<div className="py-[4rem]  border-[#1A62FF33] bg-[linear-gradient(90deg,_#07133D_0%,_#0B0320_100%)]">
  <Container>
    <Row>
      <Col>
        <div className="relative overflow-hidden  px-6 py-16 text-center">

          {/* Heading */}
          <h2 className="text-white text-[35px]! font-extrabold! md:text-[41px] leading-[1.3]">
            Powered by Advanced{" "}
            <span className="text-[#1A98FF]">
              Tools & Technologies
            </span>
          </h2>

          {/* Sub Heading */}
          <p className="text-[#B8B8B8] text-[16px]! mt-4 mb-10">
            We use industry-leading tools to ensure accuracy,
            efficiency, and results:
          </p>

          {/* Tools Buttons */}
          <div className="flex flex-wrap justify-center gap-4  mx-auto mt-[4rem]">

            {[
              "Google Analytics & Search Console",
              "SEMrush / Ahrefs",
              "Google Ads & Meta Ads Manager",
              "Shopify / WordPress Optimization",
              "Page Speed & Performance Tools",
            ].map((item, index) => (
              <button
                key={index}
                className={`px-7 py-3 rounded-full! border! border-[#FFFFFF9C]! text-white text-[16px] transition-all duration-300
                hover:bg-[#1A98FF]
                  `}
              >
                {item}
              </button>
            ))}

          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>

               <div className="ourDigitelMarketing  bg-black  !py-[6rem]">
                     <Container>
                           <Row>
                           <Col>
                           <section className="HoemAboutus">
                           
                            <div className=" imagePointSection">
                             <div className="leftSide">
                               <Image
                               src={`/whoppingreact/Home/bussnessM.png`}
                                 alt=""
                                 width={1000}
                                 height={1000}
                                 className="w-full h-auto"
                               />
                   
                                 <Image
                                   src={`/whoppingreact/Home/100k.png`}
                                   alt=""
                                   width={245}
                                   height={245}
                                   className="imgeSmall"
                                 />
                             </div>
                              <div className="bg-black text-white">
                                 <div className="textArea">
                             <h2 className="MainHeading font-extrabold!">Ready to Grow Your Business Online?</h2>
                             <span className="!para mt-8 flex flex-col">
                               <p className='text-[16px]! pb-1'>
                             Let’s turn your ideas into measurable success.
                                </p><p className='text-[16px]! pb-8 font-normal!'>Whether you`re looking to increase traffic, generate leads, or boost sales — we have the expertise to make it happen.
                                </p>
                             </span>
                            </div>
                         {services.map((item) => (
                           <div
                             key={item.id}
                           className={`p-4! pl-0! border-b border-gray-700 cursor-pointer
                          flex justify-start items-center align-middle gap-2!
                          
                          transition-all duration-300`}
                           >
                           <span className="imgeDiv">
                                 <Image
                                   src={item.image}
                                   alt={item.title}
                                   width={19}
                                   height={19}
                                 /></span>
                                 <span>
                             <span className="text-[14px] font-normal">
                               {item.title}
                             </span>
                             </span>
                           </div>
                         ))}
                      <button className="bg-[linear-gradient(90deg,_#1B51CC_0%,_#2B0E66_100%)] mt-15! hover:opacity-90 transition-all px-8 py-3 !rounded-full text-white font-medium">
                       Let’s Build Something Great Together
                        </button>

                       </div>
                            </div>
                   
                           </section>
                           </Col>
                           </Row>
                       </Container>
                       </div>

             <div className="Faq  bg-black  !pb-[6rem]">
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
                                                                <div
                                                                  key={index}
                                                                  className={`rounded overflow-hidden transition-all duration-300 ${
                                                         openIndex === index
                                                           ? "bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] "
                                                           : "bg-[#CAC5C51C] hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] "
                                                       }`}
                                                                >
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
                                                    ))}            </div>
                                                              </Col>    
                                                            </Row>
                                                          </Container>
                                                        </div>
                                                            </div>
                                                            </Col>
                                                            </Row>
                                                        </Container>
                                       </div>
    </div>
  );
};

export default Servies;