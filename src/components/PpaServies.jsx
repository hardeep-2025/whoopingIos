"use client";
import { User, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Minus, Plus } from 'lucide-react';
import QuickContactForm from "./QuickContactForm";
import Link from 'next/link';
const PpaServies = () => {
const [hoveredId, setHoveredId] = useState(null);
      const [active, setActive] = useState(1);
      const [openIndex, setOpenIndex] = useState(0);
        const toggleFaq = (index) => {
      setOpenIndex(openIndex === index ? null : index);
      setActive(true);
    };
    const whatweDo = [ {
    id: 1,
    title: "Search Engine Optimization",
    description:
      "Search Engine Optimization that gets you to page one of Google",
    icon: `/whoppingreact/friscoDigital/whatweDo/img1.png`,
  }, {
    id: 2,
    title: "Google Ads",
    description:
      "Google Ads campaigns that bring real leads not just clicks",
    icon: `/whoppingreact/friscoDigital/whatweDo/img2.png`,
  }, {
    id: 3,
    title: "Social Media Marketing ",
    description:
      "Social media marketing that keeps your brand visible and active",
    icon: `/whoppingreact/friscoDigital/whatweDo/img3.png`,
  }, {
    id: 4,
    title: "Website Design",
    description:
      "Website design and optimization built for conversions",
    icon: `/whoppingreact/friscoDigital/whatweDo/img4.png`,
  }, {
    id: 5,
    title: "Content Marketing ",
    description:
      "Content marketing that attracts the right customers to your business",
    icon: `/whoppingreact/friscoDigital/whatweDo/img5.png`,
  }, {
    id: 6,
    title: "Local SEO",
    description:
      "Local SEO that puts you on the map literally in Frisco and surrounding areas",
    icon: `/whoppingreact/friscoDigital/whatweDo/img6.png`,
  }]   
const makeUsApart = [ {
    id: 1,
    title: "Google Ads Campaign Management",
    description:
      "We create and manage high-converting Google Search Ads, Display Ads, and Performance Max (PMax) campaigns. In 2026, PMax uses Google’s powerful AI to show your ads across Search, YouTube, Gmail, Maps, and Discover from a single campaign.",
    icon: `/whoppingreact/ppc/makeUsapart/img4.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img4hover.png`,
  }, {
    id: 2,
    title: "Social Media PPC Advertising",
    description:
      "Run result-oriented campaigns on Facebook, Instagram, LinkedIn, and YouTube. Perfect for brand awareness, lead generation, and remarketing.",
    icon: `/whoppingreact/ppc/makeUsapart/img5.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img5hover.png`,
  }, {
    id: 3,
    title: "Google Shopping Ads & E-commerce PPC",
    description:
      "Boost online sales with visually appealing product ads that drive direct purchases.",
    icon: `/whoppingreact/ppc/makeUsapart/img3.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img3hover.png`,
  }, {
    id: 4,
    title: "Local Service Ads & Geo-Targeted PPC",
    description:
      "Attract more customers from Chandigarh, Zirakpur, Mohali, Panchkula, and nearby areas with hyper-local targeting.",
    icon: `/whoppingreact/ppc/makeUsapart/img1.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img1hover.png`,
  }, {
    id: 5,
    title: "Remarketing & Conversion Rate Optimization",
    description:
      "Re-engage website visitors and turn more clicks into customers through strategic landing page optimization.",
    icon: `/whoppingreact/ppc/makeUsapart/img6.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img6hover.png`,
  },]
  const GoogleAds = [
  {
    id: 1,
    image: `/whoppingreact/friscoDigital/whatweDo/img1.png`,
    desc: "Higher quality leads and conversions",
  },
  {
    id: 2,
    image: `/whoppingreact/friscoDigital/whatweDo/img2.png`,
    desc: "Reduced wasted ad spend",
  },
  {
    id: 3,
    image: `/whoppingreact/friscoDigital/whatweDo/img3.png`,
    desc: "Better return on ad spend (ROAS)",
  },
  {
    id: 4,
    image: `/whoppingreact/friscoDigital/whatweDo/img4.png`,
    desc: "Scalable growth as your business expands",
  },
  {
    id: 5,
    image: `/whoppingreact/friscoDigital/whatweDo/img5.png`,
    desc: "Full transparency – you always know where your money is going",
  },

 
];

 const faqs = [
  {
    question: "What is PPC and how does it work?",
    answer:
      "PPC (Pay-Per-Click) is a digital advertising model where you pay only when someone clicks on your ad. Platforms like Google Ads display your ads to users searching for relevant products or services. PPC helps businesses generate targeted traffic, quality leads, and faster conversions by reaching customers who are actively looking for what you offer.",
  },
  {
    question: "How much do PPC services cost in Chandigarh?",
    answer:
      "The cost of PPC services in Chandigarh depends on factors such as your industry, competition, target keywords, and monthly advertising budget. Most businesses can start with a flexible budget, while management fees vary based on campaign size and complexity. We create customized PPC strategies to maximize your return on investment (ROI).",
  },
  {
    question: "Is PPC better than SEO?",
    answer:
      "PPC and SEO serve different purposes. PPC delivers immediate visibility and quick lead generation, while SEO focuses on building long-term organic traffic and sustainable growth. Businesses looking for both short-term results and long-term success often achieve the best outcomes by combining PPC with SEO.",
  },
  {
    question: "Can PPC work for local businesses in Zirakpur and Mohali?",
    answer:
      "Yes. PPC is highly effective for local businesses in Zirakpur, Mohali, and nearby areas. Location-targeted Google Ads help you reach customers searching for your products or services in your service area, increasing phone calls, website visits, store visits, and qualified leads.",
  },
  {
    question: "How do you measure PPC success?",
    answer:
      "We measure PPC success using key performance indicators (KPIs) such as Click-Through Rate (CTR), Cost Per Click (CPC), Conversion Rate, Cost Per Lead (CPL), Return on Ad Spend (ROAS), Quality Score, and overall campaign ROI. Regular reporting and optimization ensure your campaigns continue to deliver the best possible results.",
  },
  {
    question: "Do you manage existing Google Ads accounts?",
    answer:
      "Yes. We can audit, optimize, and manage your existing Google Ads account. Our team reviews campaign structure, keyword targeting, bidding strategies, ad copy, conversion tracking, and landing page performance to improve efficiency, reduce wasted ad spend, and increase conversions.",
  },
  {
    question: "How soon can I expect results from PPC?",
    answer:
      "Unlike SEO, PPC campaigns can start generating traffic and leads as soon as your ads are approved and launched. While initial results are often visible within a few days, campaign performance typically improves over the first few weeks as we optimize keywords, bidding strategies, audience targeting, and ad creatives.",
  },
  {
    question: "Ready to turn clicks into customers?",
    answer:
      "Our PPC experts create data-driven Google Ads campaigns designed to attract qualified leads, increase conversions, and maximize your advertising budget. Whether you're a local business in Chandigarh, Zirakpur, Mohali, or a company targeting a wider audience, we can help you achieve measurable growth through strategic PPC management.",
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
                     <Col lg={7}>
                           <section className="bannnerSection w-full h-screen flex items-start  justify-center  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold  font-['Poppins']">
                                   <h1 className="text-[45px]! leading-[38px] font-extrabold! md:text-[45px] md:leading-[50px] font-bold pb-4">Expert PPC Management Services: Drive Instant Results with AI-Powered Pay Per Click Advertising
                               </h1>
                             </div>
                             <div className="bannerPar">In today’s fast-paced digital world, businesses in Chandigarh, Mohali, Zirakpur, and the Tricity region need quick, measurable results. That’s exactly what PPC services (Pay-Per-Click) deliver. Unlike SEO, which takes months to show results, well-managed PPC campaigns can bring qualified leads and sales within days.

                            </div >
                           </section>
                           </Col>

                        <Col lg={5} className="flex justify-center">
                        <Image
                            src={`/whoppingreact/ppc/gif.png`}
                            alt="Banner"
                            width={100}
                            height={100}
                            className="img z-10 object-contain w-[100%]! mx-auto"
                        />
                        </Col>

                        </Row>
                   </Container>
            </div> 

                <div className="whatiswhoping my-[6rem]">
              <Container>
                    <Row>
                    <Col>
                    <section className="HoemAboutus">
                     <div className="textArea">
                      <span className="!para mt-12 flex flex-col">
                        <p className="text-[18px]">At WhoppingSEO, we provide result-driven PPC management services that combine smart strategy, advanced AI tools, and continuous optimization. Whether you run a local business, e-commerce store, real estate project, or service-based company, our expert team helps you maximize every rupee spent on advertising.</p>
                      </span>
                     </div>
                      
                    </section>
                    </Col>
                    </Row>
                </Container>
                </div>

                <div className="py-[6rem] bg-[#161515]">
                  <Container>
                    <Row>
                      <Col lg={12}>
                        <div className="flex flex-col gap-10">
                
                          {/* Service 1 */}
                          <div className="border-b border-[#1E293B] pb-10">
                            <Row className="gap-y-8">
                
                              <Col lg={6}>
                                <div className="flex gap-4">
                                  <div>
                                    <h2 className="text-[40px]! font-extrabold text-white">
                                      What Are PPC Services and Why Do They Matter in 2026?
                                    </h2>
                
                                    <p className="text-[#CFCFCF] text-[14px] pt-3">
                                      PPC advertising lets you appear at the top of Google search results and across social platforms by paying only when someone clicks your ad. In 2026, PPC has evolved significantly with AI automation, Performance Max campaigns, and privacy-first targeting.
                                    </p>
                                  </div>
                                </div>
                              </Col>
                
                              <Col lg={5} className="lg:ms-auto">
                                <h3 className="text-[#1A62FF]! text-[16px] font-bold pb-4">
                                 Businesses choose PPC because it offers:
                                </h3>
                
                                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                                  <li>• Instant visibility</li>
                                  <li>• Precise targeting (location, age, interests, devices)</li>
                                  <li>• Full control over budget</li>
                                  <li>• Clear measurement of ROI</li>
                                </ul>
                              </Col>
                
                            </Row>
                          </div>
                
                            <div className="border-b border-[#1E293B] pb-10">
                            <Row className="gap-y-8">
                
                              <Col lg={6}>
                                <div className="flex gap-4">
                                  <div>
                                    <h2 className="text-[40px]! font-extrabold text-white">
                                     Why Choose WhoppingSEO for Your PPC Management Services?
                                    </h2>
                
                                    <p className="text-[#CFCFCF] text-[14px] pt-3">
                                      We are a trusted PPC agency in Chandigarh that focuses on real business growth, not just clicks. Our approach is data-driven, transparent, and tailored to local markets like Zirakpur, Mohali, and Chandigarh.
                                    </p>
                                  </div>
                                </div>
                              </Col>



                
                              <Col lg={5} className="lg:ms-auto">
                                <h3 className="text-[#1A62FF]! text-[16px] font-bold pb-4">
                                Key benefits of partnering with us:
                                </h3>
                
                                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                                  <li>• Dedicated PPC experts who understand the Tricity market</li>
                                  <li>• AI-powered campaign automation for better performance</li>
                                  <li>• Regular reporting and monthly strategy calls</li>
                                  <li>• Integration with your website, SEO, and landing pages</li>
                                  <li>• Regular reporting and monthly strategy calls</li>
                                  <li>• Focus on lowering Cost Per Acquisition (CPA) while increasing conversion rate</li>
                                </ul>
                              </Col>
                
                            </Row>
                          </div>

                           <div className="">
                            <Row className="gap-y-8">
                
                              <Col lg={6}>
                                <div className="flex gap-4">
                                  <div>
                                    <h2 className="text-[40px]! font-extrabold text-white pb-[40px]!">
                                      Our Comprehensive PPC Services
                                    </h2>
                                  </div>
                                </div>
                              </Col>
                
                              <Col lg={5} className="lg:ms-auto">
                                <h3 className="text-[#1A62FF]! text-[16px] font-bold ">
                                 Key benefits of partnering with us:
                                </h3>
                
                                <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px] font-bold pl-0!">
                                  <li>• Dedicated PPC experts who understand the Tricity market</li>
                                  <li>• AI-powered campaign automation for better performance</li>
                                  <li>• Regular reporting and monthly strategy calls</li>
                                  <li>• Integration with your website, SEO, and landing pages</li>
                                  <li>• Focus on lowering Cost Per Acquisition (CPA) while increasing conversion rate</li>
                                  
                                </ul>
                              </Col>
                
                            </Row>
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
                                                <h2 className='text-[40px]! font-bold! text-white pb-12'>Our Comprehensive PPC Services</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {makeUsApart.map((item) => (
                                            <div
                                            key={item.id}
                                             onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
                                            className="relative rounded-2xl p-6 border border-[#2B1B63] bg-[linear-gradient(107.89deg,#24192B,#100404)] hover:bg-[linear-gradient(146.49deg,rgba(17,58,146,0.4)_5.13%,rgba(44,12,65,0.4)_96.71%)] hover:border-[#1A62FF] transition-all duration-300 ease-in-out"
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



<div className="py-[8rem] bg-black">
  <Container>
    <Row>
      <Col lg={12}>
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-white text-[35px]! font-bold! leading-tight mb-4">
            That We Master for Our Clients
          </h2>

          <p className="text-[#BDBDBD] font-normal text-[25px]">
            The PPC landscape is changing rapidly. Here are the biggest trends
            we implement:
          </p>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#8b8b8b63]  py-18 gap-y-10">

          {/* Item */}
          <div className="lg:border-r border-[#8b8b8b63] lg:pr-8">
            <div className="mb-5">
              <Image
                src={`/whoppingreact/ppc/trends/icon1.png`}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-white text-[20px]! font-semibold leading-[30px] mb-4">
              AI Automation & Smart Bidding
            </h3>

            <p className="text-[#9F9F9F] text-[14px] leading-[24px]">
              We use AI for bidding, ad creative generation, and audience
              discovery.
            </p>
          </div>

          {/* Item */}
          <div className="lg:border-r border-[#8b8b8b63]  lg:px-8">
            <div className="mb-5">
              <Image
                src={`/whoppingreact/ppc/trends/icon2.png`}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-white text-[24px]! font-semibold leading-[30px] mb-4">
              Performance Max Campaigns
            </h3>

            <p className="text-[#9F9F9F] text-[15px] leading-[24px]">
              One campaign to rule all Google channels with AI optimization.
            </p>
          </div>

          {/* Item */}
          <div className="lg:border-r border-[#8b8b8b63]  lg:px-8">
            <div className="mb-5">
              <Image
                src={`/whoppingreact/ppc/trends/icon3.png`}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-white text-[24px]! font-semibold leading-[30px] mb-4">
              First-Party Data Strategies
            </h3>

            <p className="text-[#9F9F9F] text-[15px] leading-[24px]">
              Replacing cookies with your own customer data for privacy-compliant targeting.
            </p>
          </div>

          {/* Item */}
          <div className="lg:pl-8">
            <div className="mb-5">
              <Image
                src={`/whoppingreact/ppc/trends/icon4.png`}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-white text-[24px]! font-semibold leading-[30px] mb-4">
              Video & Visual-First Advertising
            </h3>

            <p className="text-[#9F9F9F] text-[15px] leading-[24px]">
              Short videos and dynamic creatives perform better than text ads.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 pt-12 items-center">

          {/* Left */}
          <div className="lg:border-r border-[#8b8b8b63]  lg:pr-8">
            <div className="mb-5">
              <Image
                src={`/whoppingreact/ppc/trends/icon5.png`}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-white text-[24px]! font-semibold mb-4">
              Omnichannel PPC
            </h3>

            <p className="text-[#9F9F9F] text-[15px] leading-[24px]">
              Seamless advertising across Search, Social, and Display.
            </p>
          </div>

          {/* Right Box */}
          <div className="rounded-2xl border border-[#1A62FF]! 
          bg-[linear-gradient(90deg,#0A1B5E_0%,#19051F_100%)]
          px-10 py-10">

            <p className="text-white text-[24px] leading-[38px] font-medium">
              By staying ahead of these trends, we help our clients in
              Chandigarh achieve stronger ROI even in competitive markets.
            </p>
          </div>

        </div>
      </Col>
    </Row>
  </Container>
</div>


<div className="py-[6rem]">
  <Container>
    <Row className="items-start gap-y-10">
    <h2 className="text-[35px]! leading-[38px]! font-extrabold text-white mb-0">
            We Optimize for What Your Local Customers Actually Mean When They Search
          </h2>

          <p className="text-[25px] text-[#d1d1d1] mb-8">
            Keywords are just words. Intent is what drives real customers to your door. Our {" "}
             <span className="text-[#ffa742]! whitespace-nowrap">
                    <Link
                      href="https://whoppingseo.com/services/local-seo-services/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffa742]! no-underline! hover:text-[#ffa742]! hover:no-underline!"
                    >
                        local SEO </Link>
                  </span>{" "}
            
             strategy is built around all three types of local search intent.

          </p>
      {/* Left Content */}
      <Col lg={6}>
        <div className="mt-5 pr-5">
<ol className="list-decimal pl-5 flex flex-col gap-3 text-white">
              <li className="text-[18px]! font-bold">Discovery & Goal Setting — Understand your business, target audience, and objectives.</li>
<li className="text-[18px]! font-bold">
In-depth Keyword Research & Competitor Analysis
</li>
<li className="text-[18px]! font-bold">
Campaign Strategy & Setup — Using AI tools where effective.
</li>
<li className="text-[18px]! font-bold">
Ad Copywriting & Creative Development
</li>
<li className="text-[18px]! font-bold">
Landing Page Optimization (we can help improve your existing pages)
</li>
<li className="text-[18px]! font-bold">
Launch, Monitor & Optimize Daily
</li>
<li className="text-[18px]! font-bold">
Detailed Monthly Reports + Strategy Calls</li>
          </ol>
        </div>
      </Col>

      {/* Right Image */}
      <Col lg={6}>
        <div className=" flex justify-center items-center pl-5">
          <Image
            src={`/whoppingreact/localSeo/banner.png`}
            alt="Intent SEO"
            width={600}
            height={300}
            className="rounded-3xl w-[600px] h-[400px]! object-cover"
          />
        </div>
      </Col>

    </Row>
  </Container>
</div>


  <div className=" py-[6rem]">
                                <Container>
                                      <Row>
                                      <Col>
                                       <h2 className='text-[41px]! font-bold! text-white py-9 mb-10!'>Real Results You Can Expect from Our PPC Services
                                       </h2>
                   
                                      
                                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                 {GoogleAds.map((item) => (
                                   <div
                                     key={item.id}
                                     className="relative border 
                                     border-[#2B1B63] rounded-2xl p-6 pb-1 bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                                     max-h-[180px]!
                                     min-h-[180px]!

                                      hover:border-cyan-400 transition-all duration-300"
                                   >
                                     {/* Icon */}
                                     <div className="w-14 h-14 rounded-xl flex items-center justify-start mb-0">
                                        <Image 
                                                         src={item.image}
                                                         alt=""
                                                         width={23}
                                                         height={23}
                                                         className="w-7!  h-7! object-contain"
                                                       />
                                     </div>

                                     <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                                       {item.desc}
                                     </p>
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
       <div   className="my-[6rem] flex justify-center items-center py-[5rem] bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] font-bold text-[20px] px-[8rem] text-center rounded-2xl">
        Many of our clients in real estate, education, healthcare, and e-commerce have seen 3x to 8x returns on their PPC investment.

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
                                                        <div className="bg-black ">
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
                   
                   
                   
                               <div className="bg-black pb-[12rem] pt-[6rem]! px-4">
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

export default PpaServies;
