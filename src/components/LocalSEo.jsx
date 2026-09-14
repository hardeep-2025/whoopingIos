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

const LocalSEo = () => {
      const [hoveredId, setHoveredId] = useState(null);

          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
          const [openIndex, setOpenIndex] = useState(0);
          const toggleFaq = (index) => {
      setOpenIndex(openIndex === index ? null : index);
      setActive(true);
    };
      
    const makeUsApart = [ {
        id: 1,
        title: "AI Automation Built Into Every Campaign",
        description:
          "We use AI tools to monitor your local rankings daily, analyze competitor movements, and optimize your campaign faster than any manual process can. This means you get better results in less time.",
        icon: `/whoppingreact/localSeo/whyChoose/img3.png`,
      }, {
        id: 2,
        title: "True Local Market Knowledge",
        description:
          "We specialize in DFW markets including Frisco, Dallas, and surrounding areas. We know the local search landscape and build strategies that fit your specific competitive environment.",
        icon: `/whoppingreact/localSeo/whyChoose/img2.png`,
      }, {
        id: 3,
        title: "Transparent Monthly Reporting",
        description:
          "You always know exactly what we are doing and what results it is producing. Our monthly reports are written in plain language — no confusing dashboards or technical jargon.",
        icon: `/whoppingreact/localSeo/whyChoose/img1.png`,
      }, {
        id: 4,
        title: "No Long Lock-In Contracts",
        description:
          "We earn your business every single month by delivering results. We are confident enough in our work to operate without forcing you into lengthy contracts that benefit only the agency.We don't work with clients. We work as an extension of your team. Your growth is our growth — which is why 93% of our clients stay with us year after year.",
        icon: `/whoppingreact/localSeo/whyChoose/img3.png`,
      }, {
        id: 5,
        title: "GMB Specialists on Every Account",
        description:
          "Google Business Profile is the cornerstone of local SEO. We have dedicated GMB specialists who manage and optimize your listing every week — not just set it up once and forget it.",
        icon: `/whoppingreact/localSeo/whyChoose/img2.png`,
      }, {
        id: 6,
        title: "Built for Where Local Search is Going",
        description:
          "Most agencies are still doing 2020 local SEO. We build for 2026 — including AI Overviews, voice search, ChatGPT local results, and every surface where your local customers are searching today.",
        icon: `/whoppingreact/localSeo/whyChoose/img1.png`,
      }]
  const faqs = [
  {
    question: "What is local SEO and why does my business need it?",
    answer:
      "Local SEO (Local Search Engine Optimization) is the process of optimizing your online presence to help your business appear in local search results on Google, Google Maps, and other search engines. It helps customers nearby find your products or services when searching for terms like 'near me' or location-specific keywords. If you want to attract more local customers, increase foot traffic, and generate qualified leads, local SEO is essential.",
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
    question:
      "What is Google Business Profile optimization and why does it matter?",
    answer:
      "Google Business Profile optimization involves improving your business listing with accurate information, business categories, services, photos, operating hours, customer reviews, and regular updates. A fully optimized profile increases your chances of appearing in Google Maps and local search results, helping customers find, contact, and visit your business more easily.",
  },
  {
    question:
      "Do you offer local SEO services for businesses in Frisco and Dallas, TX?",
    answer:
      "Yes. We provide professional Local SEO services for businesses in Frisco, Dallas, TX, and surrounding areas. Our services include Google Business Profile optimization, local keyword research, citation management, on-page local SEO, review management, local link building, AEO, GEO, and AI Search Optimization to help your business attract more local customers and generate qualified leads.",
  },
];
    
 const cards = [
  {    id: 1,
    img: "/whoppingreact/localSeo/whatwedo/img1.png",
    hover: "/whoppingreact/localSeo/whatwedo/img1hover.png",
    label: "AI Local SEO",
    title: "AI-Powered Local Optimization",
    desc: "We use AI automation to analyze your local competitors, identify ranking gaps, optimize your content at scale, and monitor your local presence 24/7. What used to take weeks now happens in days — and the results are sharper.",
    maxWidth: true,
  },
  {    id: 2,
    img: "/whoppingreact/localSeo/whatwedo/img2.png",
    hover: "/whoppingreact/localSeo/whatwedo/img2hover.png",
    label: "AEO",
    title: "Answer Engine Optimization for Local Search",
    desc: 'When someone asks "best electrician near me" or "top rated dentist in Frisco" on ChatGPT or Google AI Overviews, AEO makes sure your business is the answer they get. We structure your content, schema, and Q&A to win these positions.',
    target: "Targets: Google AI Overviews · ChatGPT local results · Siri · Alexa",
    pt: "pt-6",
    flex: true,
  },
  {    id: 3,
    img: "/whoppingreact/localSeo/whatwedo/img3.png",
    hover: "/whoppingreact/localSeo/whatwedo/img3hover.png",
    label: "GEO",
    title: "Generative Engine Optimization for Local Visibility",
    desc: "GEO ensures your business gets recommended when AI tools like Gemini and ChatGPT answer local service queries. We build your brand authority, entity signals, and content footprint so AI engines confidently surface your business.",
    target: "Targets: Gemini · Perplexity · ChatGPT · Bing Copilot",
    pt: "pt-3",
  },
];
    return (
        <>
            <div className="banner relative h-screen max-h-[97vh]! max-[991px]:max-h-[100%]! max-[991px]:h-[100%]! max-[767px]:pt-20! max-[991px]:py-20!">
                 <Image
                   src={`/whoppingreact/seo/bg.png`}
                   alt="Banner"
                   fill
                   className="img -z-10 object-cover "
                 />
                   <Container>
                     <Row>
                     <Col lg={7}>
                           <section className="bannnerSection w-full h-screen flex items-start  justify-center  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold  font-['Poppins']">
                                   <h1 className="text-[45px]! leading-[38px] font-extrabold md:text-[45px] md:leading-[50px] font-bold">Local SEO Services That Get Your Business Found on Google Maps, AI Search & Near Me Results
                               </h1>
                             </div>
                             <div className="bannerPar">Stop losing local customers to competitors. WhoppingSEO combines proven local SEO with next-generation AI automation — AEO, GEO, and Google Business Profile mastery — so your business shows up everywhere your local customers are searching in 2026.

                            </div >
                             <div className="flex gap-4 mt-4"> <button className="px-4 py-2! rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                                                Get Your Free Local SEO Audi  
                            <ArrowUpRight size={18} />
                            </button> <button className="px-4 py-2 rounded-full! border hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center">
                                                Explore Our Services
                                                <ArrowUpRight size={18} />
                                              </button>
            
            </div>
                           </section>
                    </Col>

<Col lg={5} className="flex justify-center ">
  <Image
    src={`/whoppingreact/localSeo/img2.png`}
    alt="Banner"
    width={100}
    height={100}
    className="img z-10 object-contain w-[100%]! mx-auto "
  />
</Col>

</Row>
                   </Container>
            </div> 

            <div className="whatiswhoping mt-[12rem]! my-[6rem]">
                         <Container>
                               <Row>
                               <Col>
                               <section className="HoemAboutus">
                             
                                 <div className="noArea  gap-6 items-center justify-between flex-wrap">
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 items-center">                           
              <div className="numberDiv  flex flex-col py-4 z-10  "  >
                                         <span className="no text-[#1A98FF] z-40 ">500+</span>
                                         <span className="notext z-40 max-w-[200px]!">Businesses Grown Across USA</span>
                                       </div>

                                       <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">3x</span>
                                         <span className="notext z-40 max-w-[200px]!">Average Map Pack visibility increase</span>
                                       </div>
                                       <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">90</span>
                                         <span className="notext z-40 max-w-[200px]!">Days to first ranking improvements</span>
                                       </div>
                                       <div className="numberDiv flex flex-col py-4">
                                         <span className="no text-[#1A98FF] z-40 ">98%</span>
                                         <span className="notext z-40 max-w-[200px]!">Client retention rate</span>
                                       </div>
                                   </div>
                                 </div>
                               </section>
                               </Col>
                               </Row>
                           </Container>
            </div>

            <div className=" my-[6rem]">
                         <Container>
                               <Row>
                               <Col>
                               <h4 className='text-[20px]! font-medium! flex items-center gap-1 '>
                                  <Image
                                  src={`/whoppingreact/localSeo/star.png`}
                                  alt="Banner"
                                  width={30}
                                  height={30}
                                  className=""
                                />
                                What We Do</h4>
                                <h2 className='text-[41px]! font-bold! text-white py-4'>What is Local SEO and Why Does Your Business Need It Right Now</h2>
            
                                <p className='text-[18px]! pb-3!' >Every day thousands of people in your area search for the exact services you offer. They type things like "best plumber near me", "dentist in Frisco", or "top-rated restaurant in Dallas". If your business does not show up in those results, that customer goes to your competitor. That is the cost of ignoring local SEO.
                               </p>

                               <p className="text-[18px]! pb-3!">
                                Local SEO is the process of optimizing your entire online presence — your website, your Google Business Profile, your reviews, and your citations — so that search engines and AI tools confidently recommend your business to nearby customers.
                                </p>
                                <p className="pb-15">
                                At WhoppingSEO we go beyond traditional local SEO. We layer in AI-powered SEO strategies including AEO and GEO so your business gets found not just on Google but on ChatGPT, Gemini, voice search, and every AI-powered search surface your customers use.</p >

                        <div className="flex flex-row items-center justify-center gap-25! flex-wrap">
                          <div className=" flex flex-col items-center justify-center  gap-2">
                            <span>
                            <Image 
                            width={44}
                            height={44}
                            src={`/whoppingreact/seo/whatwedo/img3.png`}
                            alt=""
                            /></span>
                            <span className="font-semibold text-[18px] text-center">Rank in Google Maps and Local Pack results</span>
                          </div>
                           <div className=" flex flex-col items-center justify-center gap-2">
                            <span>
                            <Image 
                            width={44}
                            height={44}
                            src={`/whoppingreact/seo/whatwedo/img1.png`}
                            alt=""
                            /></span>
                            <span className="font-semibold text-[18px] text-center"> Appear in AI-generated near me answers </span>
                          </div>
                           <div className=" flex flex-col items-center justify-center gap-2">
                            <span>
                            <Image 
                            width={44}
                            height={44}
                            src={`/whoppingreact/seo/whatwedo/img4.png`}
                            alt=""
                            /></span>
                            <span className="font-semibold text-[18px] text-center">Build trust through reviews and citations</span>
                          </div>
                           <div className=" flex flex-col items-center justify-center gap-2">
                            <span>
                            <Image 
                            width={44}
                            height={44}
                            src={`/whoppingreact/seo/whatwedo/img2.png`}
                            alt=""
                            /></span>
                            <span className="font-semibold text-[18px] text-center">Convert more local visitors into paying customers</span>
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
                                <h2 className='text-[41px]! font-bold! text-white py-4'>How AI Automation, AEO & GEO Are Transforming Local Search in 2026</h2>
            
                                <p className='text-[25px]! font-normal pb-20!' >The way people find local businesses has changed. Most agencies have not caught up. We have.
                               </p>


                        <div className="flex flex-row items-stretch justify-evenly gap-5! flex-wrap">
  {cards.map((card, index) => (
    <div
      key={index}
                                    onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
      className="flex flex-col items-start gap-2 border border-[#ffffff10] px-8 py-8 rounded-2xl 
      bg-[linear-gradient(104.88deg,_rgba(36,25,43,0.77)_-4.64%,_rgba(16,4,4,0.77)_94.31%)]
      hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
      hover:border-[#1A62FF]! transition-all duration-300"
    >
      <div className="text-[14px] font-medium flex items-center gap-3 text-[#FFA742]!">
        <Image
          width={35}
          height={35}
          src={ hoveredId === card.id ? card.hover: card.img}

          alt=""
        />
        {card.label}
      </div>

      <div
        className={`text-[20px] py-3 font-extrabold! ${
          card.maxWidth ? "max-w-[70%]!" : ""
        }`}
      >
        {card.title}
      </div>

      <div
        className={`text-[16px] ${
          card.flex ? "flex flex-col justify-between" : ""
        }`}
      >
        {card.desc}

        {card.target && (
          <p className={card.pt}>{card.target}</p>
        )}
      </div>
    </div>
  ))}
</div>
                        
                               </Col>
                               </Row>
                           </Container>
                           </div>

      <div className="my-[6rem]">
  <Container>
    <Row className="items-center gap-y-10">
<h2 className="text-[35px]! leading-[38px]! font-extrabold! text-white mb-0">
            We Optimize for What Your Local Customers Actually Mean When They Search
          </h2>

          <p className="text-[25px] text-[#d1d1d1] mb-8">
            Keywords are just words. Intent is what drives real customers to your door. Our local SEO strategy is built around all three types of local search intent.

          </p>
      {/* Left Content */}
      <Col lg={6}>
        <div className="mt-5 pr-5">
          

          <div className="flex flex-col gap-2">

            {/* Card 1 */}
            <div className="border border-[#2A2A2A] rounded-2xl px-3 py-4 bg-[#0B0B0B]">
              <div className="flex items-start gap-2.5">
                <div className="p-3 px-4 rounded-full bg-[#16202E] flex items-center justify-center text-[#1A98FF] font-bold">
                  1
                </div>

                <div>
                  <span className="text-[#FFA742] text-[14px] font-medium">
                    Informational
                  </span>

                  <h4 className="text-[20px] font-bold py-2">
                    Customers Researching
                  </h4>

                  <p className="text-[16px] text-[#CFCFCF]">
                    We create locally relevant content that answers questions
                    your customers are asking before they are ready to buy —
                    building trust and bringing them back when they are ready to buy.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
             <div className="border border-[#2A2A2A] rounded-2xl py-4 px-3 bg-[#0B0B0B]">
              <div className="flex items-start gap-2.5">
                <div className="p-3 px-4 rounded-full bg-[#16202E] flex items-center justify-center text-[#1A98FF] font-bold">
                  2
                </div>

                <div>
                  <span className="text-[#FFA742] text-[14px] font-medium">
                    Navigational
                  </span>

                  <h4 className="text-[20px] font-bold py-2">
                    Customers Finding You
                  </h4>

                  <p className="text-[16px] text-[#CFCFCF]">
                    We make sure your business information is consistent and
                    prominent everywhere — Google, Apple Maps, Yelp, Bing, and AI platforms —
                    so customers who already know you can find you instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
             <div className="border border-[#2A2A2A] rounded-2xl py-4 px-3 bg-[#0B0B0B]">
              <div className="flex items-start gap-2.5">
                <div className="p-3 px-4 rounded-full bg-[#16202E] flex items-center justify-center text-[#1A98FF] font-bold">
                  3
                </div>

                <div>
                  <span className="text-[#FFA742] text-[14px] font-medium">
                    Transactional
                  </span>

                  <h4 className="text-[20px] font-bold py-2">
                    Customers Ready To Buy
                  </h4>

                  <p className="text-[16px] text-[#CFCFCF]">
                    We optimize your service pages, GBP listing, and landing
                    pages specifically for high-intent searches like
                    book now and near me that signal a customer ready to
                    take action today.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Col>

      {/* Right Image */}
      <Col lg={6}>
        <div className="h-full flex justify-center items-center pl-5">
          <Image
            src={`/whoppingreact/localSeo/banner.png`}
            alt="Intent SEO"
            width={700}
            height={700}
            className="rounded-3xl object-cover w-full"
          />
        </div>
      </Col>

    </Row>
  </Container>
</div>





<div className="my-[6rem]">
  <Container>
    <Row>
      <Col lg={12}>

        <span className="text-[#1A98FF] text-[14px] font-medium flex gap-1 items-center">
       <Image
                                  src={`/whoppingreact/localSeo/star.png`}
                                  alt="Banner"
                                  width={30}
                                  height={30}
                                  className=""
                                />    Our Services
        </span>

        <h2 className="text-[35px]! leading-[40px]! font-extrabold text-white pt-2">
          Our Complete Local SEO Services That Drive Real Results
        </h2>

        <p className="text-[25px]  font-medium    text-[#CFCFCF] pt-4 pb-10">
          Every service we offer is built to improve your local visibility
          and bring more customers through your door.
        </p>

        <div className="flex flex-col gap-10">

          {/* Service 1 */}
          <div className="border-b border-[#1E293B] pb-4">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                      src={`/whoppingreact/localSeo/servies/img1.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Google Business Profile Optimization
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">
                      Your Google Business Profile is your most powerful local
                      SEO asset. We fully optimize, verify, and actively manage
                      your listing so it ranks higher in Google Maps and the
                      Local Pack.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-10">
                  What we do:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Complete profile setup and verification</li>
                  <li>• Category and service optimization</li>
                  <li>• Regular posts and photo updates</li>
                  <li>• Q&A and review management</li>
                </ul>
              </Col>

            </Row>
          </div>

            <div className="border-b border-[#1E293B] pb-3">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                      src={`/whoppingreact/localSeo/servies/img2.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Local Citation Building & Cleanup
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">Consistent NAP (Name, Address, Phone) data across directories signals trust to Google. We build accurate citations on all major platforms and fix any existing inconsistencies that are hurting your rankings
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-10">
                  Platforms we cover:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Yelp, Bing, Apple Maps, Facebook</li>
                  <li>• Industry-specific directories</li>
                  <li>• Local chamber and community sites</li>
                </ul>
              </Col>

            </Row>
          </div>

            <div className="border-b border-[#1E293B] pb-3">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                     src={`/whoppingreact/localSeo/servies/img4.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Local Keyword Research & On-Page SEO
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">We identify the exact local search terms your customers use and optimize every page on your website to rank for them — including title tags, headers, content, schema, and internal links.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-3">
                  Includes:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Geo-targeted keyword strategy</li>
                  <li>• Location page optimization</li>
                  <li>• Schema markup implementation</li>
                </ul>
              </Col>

            </Row>
          </div>

            <div className="border-b border-[#1E293B] pb-3">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                     src={`/whoppingreact/localSeo/servies/img3.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Reputation Management & Review Strategy
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">Reviews directly impact your local rankings and customer trust. We help you build a steady stream of genuine reviews, respond professionally to feedback, and protect your reputation online
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-4">
                 What we manage:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Review generation campaigns</li>
                  <li>• Response management</li>
                  <li>• Negative review mitigation</li>
                </ul>
              </Col>

            </Row>
          </div>

            <div className="border-b border-[#1E293B] pb-3">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                     src={`/whoppingreact/localSeo/servies/img5.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Local Link Building & Digital PR
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">High-quality local backlinks from relevant community websites, news outlets, and industry directories strengthen your domain authority and push your local rankings higher consistently.

                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-4">
                 We build links from:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Local news and media sites</li>
                  <li>• Community and event pages</li>
                  <li>• Relevant industry directories</li>
                </ul>
              </Col>

            </Row>
          </div>

            <div className=" pb-3">
            <Row className="gap-y-8">

              <Col lg={6}>
                <div className="flex gap-4">
                  <div className="min-w-[60px] h-[60px] rounded-full bg-[#0A84FF] flex items-center justify-center">
                    <Image
                     src={`/whoppingreact/localSeo/servies/img3.png`}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-white">
                      Local Content Marketing & AEO Writing
                    </h4>

                    <p className="text-[#CFCFCF] text-[14px] pt-3">
                      We create locally relevant blog posts, service pages, and FAQ content optimized for both Google and AI search engines. This builds your authority, earns featured snippets, and answers the questions your local customers are actually asking
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={5} className="lg:ms-auto">
                <h5 className="text-[#3CFF00]! text-[16px] font-bold pb-4">
                  Content types:
                </h5>

                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Location-specific service pages</li>
                  <li>• AEO-optimized FAQ content</li>
                  <li>• Community and local news content</li>

                </ul>
              </Col>

            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>



 <div className="my-[6rem]">
  <Container>
    <Row className="items-center gap-y-10">
      <span className="text-[#1A98FF] text-[14px] font-medium flex gap-1 items-center">
        <Image
                                  src={`/whoppingreact/localSeo/star.png`}
                                  alt="Banner"
                                  width={30}
                                  height={30}
                                  className=""
                                />  Local Expertise Matters

        </span>
<h2 className="text-[35px]! leading-[38px]! font-extrabold text-white mb-8">
           Why Searching for an SEO Company Near Me Makes Sense — and How We Deliver
          </h2>

       
      {/* Left Content */}
      <Col lg={6}>
       
        <div className="mt-5 pr-5">
          
  <p className="text-[25px] text-white  font-bold">
           Understanding Your Local Market is Half the Battle
          </p>
          <p className="text-[16px] text-white  ">
          A generic national agency does not understand that your Frisco neighborhood has different buying habits than downtown Dallas. They do not know your local competition or what makes your specific market tick.
          </p>
          <p className="text-[16px] text-white  ">
          WhoppingSEO specializes in local markets across the DFW area including Frisco, Dallas, and surrounding cities. We understand local search patterns, seasonal demand shifts, and the competitive landscape in your specific area
          </p>
        <h2 className="text-[25px]! leading-[38px]! font-extrabold text-white mt-20! mb-10!" >What Local Expertise Delivers For You</h2>
        <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                  <li>• Hyperlocal keyword targeting that generic agencies miss</li>
                  <li>• Competitor analysis specific to your market area</li>
                  <li>• Content that resonates with your actual local audience</li>
                  <li>• Faster results because the strategy fits your real market</li>
                </ul>
        </div>
      </Col>

      {/* Right Image */}
      <Col lg={6}>
        <div className="h-full flex justify-center items-center pl-5">
          <Image
            src={`/whoppingreact/localSeo/img1.png`}
            alt="Intent SEO"
            width={700}
            height={700}
            className="rounded-3xl object-cover w-full"
          />
        </div>
      </Col>

    </Row>
  </Container>
</div>


<div className="my-[6rem] overflow-hidden">
  <Container>
    <Row>
      <Col lg={12}>

        <span className="text-[#FFA742] text-[14px] font-medium flex gap-1 items-center">
          <Image
          src={`/whoppingreact/localSeo/star.png`}
          alt="Banner"
          width={30}
          height={30}
          className=""
        /> How We Work
        </span>

        <h2 className="text-[35px]! leading-[40px]! font-extrabold text-white pt-3">
          Our Simple 5-Step Local SEO Process
        </h2>

        <p className="text-[25px] leading-[35px] pt-3  font-medium">
          Clear, transparent, and built for results from day one
        </p>

        {/* Timeline */}
      <div className="textArea mt-20 relative overflow-hidden">
  {/* Center Vertical Line */}
  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 max-[767px]:hidden!"></div>

 <Container className="relative z-10">
  <Row>
    <Col lg={6}></Col>
    <Col xs={12} lg={6}>
      <div className="flex flex-col gap-8 pl-15 max-[767px]:pl-0">
        <div className="flex gap-2 items-center justify-self-start">
          <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">01</span>
          <span className="text-[25px]! font-bold">Local Audit</span>
        </div>
        <div className="text-[18px] font-medium">
          Full analysis of your current local rankings, GMB, citations, and competitor landscape
        </div>
      </div>
    </Col>
  </Row>

  <Row>
    <Col xs={12} lg={6}>
      <div className="flex flex-col gap-8 pt-12 pr-15 max-[767px]:pr-0">
        <div className="flex gap-3 items-center lg:justify-between lg:flex-row-reverse justify-start">
          <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">02</span>
          <span className="text-[25px]! font-bold">Strategy Build</span>
        </div>
        <div className="text-[18px] font-medium">
          Custom local SEO roadmap including AEO and GEO layers for AI search visibility
        </div>
      </div>
    </Col>
    <Col lg={6}></Col>
  </Row>

  <Row>
    <Col lg={6}></Col>
    <Col xs={12} lg={6}>
      <div className="flex flex-col gap-8 pt-12 pl-15 max-[767px]:pl-0">
        <div className="flex gap-2 items-center justify-self-start">
          <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">03</span>
          <span className="text-[25px]! font-bold">GMB & On-Page</span>
        </div>
        <div className="text-[18px] font-medium">
          Full Google Business Profile optimization and website on-page SEO implementation.
        </div>
      </div>
    </Col>
  </Row>

  <Row>
    <Col xs={12} lg={6}>
      <div className="flex flex-col gap-8 pt-12 pr-15 max-[767px]:pr-0">
        <div className="flex gap-3 items-center lg:justify-between lg:flex-row-reverse justify-start">
          <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">04</span>
          <span className="text-[25px]! font-bold">Citations & Links</span>
        </div>
        <div className="text-[18px] font-medium">
          Building consistent citations and earning quality local backlinks every month.
        </div>
      </div>
    </Col>
    <Col lg={6}></Col>
  </Row>

  <Row>
    <Col lg={6}></Col>
    <Col xs={12} lg={6}>
      <div className="flex flex-col gap-8 pt-12 pl-15 pb-[0rem]! max-[767px]:pl-0">
        <div className="flex gap-2 items-center justify-self-start">
          <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">05</span>
          <span className="text-[25px]! font-bold">Report & Grow</span>
        </div>
        <div className="text-[18px] font-medium">
          Monthly reporting with clear metrics and ongoing strategy refinement.
        </div>
      </div>
    </Col>
  </Row>
</Container>
                                    
    </div>

      </Col>
    </Row>
  </Container>
</div>

            <div className=" py-[6rem] ">
                         <Container>
                               <Row>
                               <Col>
                               <h4 className='text-[14px]! font-black! text-[#1A98FF]! flex gap-1 items-center'>
                              <Image
                              src={`/whoppingreact/localSeo/star.png`}
                              alt="Banner"
                              width={30}
                              height={30}
                              className=""
                            /> Why Choose Us</h4>
                                <h2 className='text-[41px]! font-bold! text-white py-4'>Why Businesses Choose WhoppingSEO for Local SEO Services</h2>
            
                                <p className='text-[18px]! pb-10!' >There are hundreds of agencies. Here is what makes us different for local businesses specifically.
</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {makeUsApart.map((item) => (
                            <div
                              key={item.id}
                              className="relative border border-[#2B1B63] rounded-2xl p-6
                              bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                              hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                              hover:border-[#1A62FF]!
                              hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
                              transition-all duration-300"
                            >
                              {/* Icon */}
                              <div className="w-14 h-10 rounded-xl  flex items-center justify-center mb-3">
                                <img
                                  src={item.icon}
                                  alt={item.title}
                                  className="w-8 h-8 object-contain"
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

          <div className="bg-black">
            <Container>
              <Row>
                <Col>
                <div  className="my-[6rem] flex flex-col gap-4 justify-center items-center py-[5rem] bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] font-bold text-[20px] px-[8rem] text-center rounded-2xl">
                <h3 className="flex items-center justify-center gap-2 text-white text-[20px]! font-bold! ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-white! "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-2 2a4 4 0 105.656 5.656l1-1m3.344-3.344a4 4 0 005.656 0l2-2a4 4 0 00-5.656-5.656l-1 1"
                    />
                  </svg>

                  Explore Related Services & Resources
                </h3>

                <div className="flex flex-wrap justify-center ">
                  {[
                    "SEO Services",
                    "Digital Marketing Services",
                    "Digital Marketing Agency Frisco",
                    "PPC Services",
                    "PPC Agency Dallas",
                    "Social Media Marketing",
                    "SEO Blog & Resources",
                    "About WhoppingSEO",
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-white text-[15px] underline hover:text-[#4F8DFF] transition"
                    >
                      {item},
                    </a>
                  ))}
                </div>
                </div>
                </Col>
              </Row>
            </Container>
          </div>

           <div className="Faq  bg-black  !py-[6rem] ">
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
                                     <div className="bg-black pt-5">
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



             <div className="bg-black py-[6rem]! pb-[12rem]! px-4">
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

export default LocalSEo;
