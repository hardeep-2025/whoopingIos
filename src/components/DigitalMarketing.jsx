"use client";

import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Container,Row,Col,  } from "react-bootstrap";
import QuickContactForm from './QuickContactForm';

const DigitalMarketing = () => {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const [openIndex, setOpenIndex] = useState(0);
      const toggleFaq = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
   

const faqs = [
  {
    question:
      "What digital marketing services does Whopping SEO offer?",
    answer: "We offer a complete range of digital marketing services including Search Engine Optimization (SEO), Local SEO, Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Email Marketing, Web Design & Development, Link Building, and Online Reputation Management. Every service is customized to your specific business goals and industry.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "It depends on the service. PPC campaigns can drive targeted traffic within 24–48 hours of launch. SEO typically shows meaningful ranking improvements within 3–6 months, with stronger results building over 6–12 months. Social media and content marketing compound over time. We set clear, realistic expectations at the start so you always know what to expect and when.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer: "Our pricing is fully customized based on your business size, goals, industry, and chosen services. We work with startups, SMBs, and established enterprises — with packages built to match different budgets. We believe in complete pricing transparency — no hidden fees, no surprise charges. Get in touch for a free proposal with a clear breakdown.",
  },
  {
    question:
      "Do you work with small businesses or only large companies?",
    answer: "We work with businesses of all sizes — from local service providers and small e-commerce stores to large enterprises and multi-location brands. Our strategies are always scaled to your budget and goals. No business is too small to benefit from a smart, well-executed digital marketing plan.",
  },
  {
    question: "Why should I choose Whopping SEO over other digital marketing agencies?",
    answer: "Three things set us apart: transparency, customization, and real results. We don't use template strategies. Every client gets a custom-built plan. You own all your accounts and data. You get clear monthly reports. And with a 93% client retention rate, our results speak louder than any pitch. We invite you to talk to our existing clients before making a decision.",
  },

];
const helpfull =[{
    title: "SEO Services",
        id: 1,
},{
    title: "Local SEO Service",id: 2,
},{
    title: "PPC Advertising",id: 3,
},{
    title: "Content Marketing",id: 4,
},{
    title: "Social Media Marketing ",id: 5,
},{
    title: "Web Designing",id: 6,
},{
    title: "Email Marketing",id: 7,
},{
    title: "Link Building",id: 8,
},{
    title: "SEO Blog & Resources",id: 9,
},{
    title: "About WhoppingSEO",id: 10,
},{
    title: "Case Studies",id: 11,
},{
    title: "Contact Us",id: 12,
},]
const makeUsApart = [ {
    id: 1,
    title: "Strategy Before Execution",
    description:
      "We start with a deep audit of your website, current rankings, competitors, and target audience. This gives us the full picture before we touch anything.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img2.png`,
  }, {
    id: 2,
    title: "No Cookie-Cutter Plans",
    description:
      "Your business is unique. Your digital marketing plan should be too. We build every campaign from scratch — because what works for your competitor may not work for you.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img4.png`,
  }, {
    id: 3,
    title: "Full Transparency",
    description:
      "You own everything — your accounts, your content, your data. We give you complete access and regular reports so you're never in the dark about your campaigns.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img3.png`,
  }, {
    id: 4,
    title: "Long-Term Partnership",
    description:
      "We don't work with clients. We work as an extension of your team. Your growth is our growth — which is why 93% of our clients stay with us year after year.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img1.png`,
  }, {
    id: 5,
    title: "Speed & Agility",
    description:
      "Digital marketing moves fast. Algorithm changes, market shifts, new opportunities — our team adapts quickly so your campaigns never fall behind.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img5.png`,
  }, {
    id: 6,
    title: "Dedicated Account Manager",
    description:
      "No ticket systems, no waiting in queues. Every client gets a dedicated account manager who knows your business and is available when you need answers.",
    icon: `/whoppingreact/digetilMarkting/sixstep/img6.png`,
  }]

const FourStep = [
  {
    id: 1,
    title: "Discovery & Audit",
    description:
      "We start with a deep audit of your website, current rankings, competitors, and target audience. This gives us the full picture before we touch anything.",
    icon: `/whoppingreact/digetilMarkting/fourstep/img1.png`,
  }, {
    id: 2,
    title: "Strategy & Roadmap",
    description:
      "Based on the audit, we build a custom channel-by-channel strategy with clear goals, timelines, and KPIs. You know exactly what's happening and why.",
    icon: `/whoppingreact/digetilMarkting/fourstep/img4.png`,
  }, {
    id: 3,
    title: "Execute & Optimise",
    description:
      "Our specialists execute the plan — and continuously test, refine, and optimise every element to make sure performance keeps improving month after month.",
    icon: `/whoppingreact/digetilMarkting/fourstep/img2.png`,
  },{
    id: 4,
    title: "Report & Scale",
    description:
      "Monthly reports show exactly what's working. We discuss results, share insights, and scale what's performing — keeping you fully informed at every step.",
    icon: `/whoppingreact/digetilMarkting/fourstep/img3.png`,
  },]
const services = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google and drive consistent organic traffic to your site. Our SEO services cover technical SEO, on-page optimization, content strategy, and link building — all following white-hat best practices that deliver long-term results.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img5.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 2,
    title: "Local SEO",
    description:
      "Dominate your local market and show up in Google Maps and near me searches. Our local SEO strategies help brick-and-mortar businesses, service providers, and multi-location brands capture high-intent customers nearby.",
    icon: `/whoppingreact/digetilMarkting/ourServices/white2.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 3,
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Get in front of the right audience at exactly the right moment. Our certified PPC specialists manage Google Ads, Bing Ads, and display campaigns with precision — maximizing every rupee of your ad spend for the highest possible ROI.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img7.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Build a real community, grow your brand, and drive leads from Instagram, Facebook, LinkedIn, and more. We handle strategy, content creation, community management, and paid social campaigns — all in one place.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img4.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 5,
    title: "Content Marketing",
    description:
      "Content that ranks, educates, and converts. Our content team creates SEO-optimized blog posts, landing pages, infographics, and long-form guides that attract your target audience and guide them through your sales funnel.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img8.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 6,
    title: "Web Design & Development",
    description:
      "Your website is your most powerful sales tool. We design fast, mobile-friendly, conversion-focused websites that look great, rank well, and turn visitors into customers. Built on WordPress or custom frameworks.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img9.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 7,
    title: "Email Marketing",
    description:
      "Email remains the highest-ROI channel in digital marketing. We build your list, craft personalized campaigns, set up automated sequences, and optimize every element — subject lines, send times, CTAs — for maximum open rates and conversions.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img4.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 8,
    title: "Online Reputation Management",
    description:
      "What people say about you online shapes how potential customers see you. We monitor your brand mentions, manage reviews across platforms, respond professionally, and help you build a strong, trustworthy online reputation.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img8.png`,
    link: "Explore SEO Services →",
  },

  {
    id: 9,
    title: "Link Building",
    description:
      "High-quality backlinks remain one of Google's most important ranking signals. Our link building service secures genuine, relevant links from authoritative sites — boosting your domain authority and search rankings sustainably.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img9.png`,
    link: "Explore SEO Services →",
  },
];
const stats = [
  {
    id: 1,
    value: "+312%",
    label: "Organic Traffic Growth",
    sublabel: "E-Commerce Client — 6 Months",
  },
  {
    id: 2,
    value: "+240%",
    label: "Qualified Leads Generated",
    sublabel: "Real Estate Client — 8 Months",
  },
  {
    id: 3,
    value: "−58%",
    label: "Cost Per Lead (PPC)",
    sublabel: "Healthcare Client — 4 Months",
  },
];
    return (
       <main className="digitelMarketing">
  <div className="banner relative h-screen max-h-[97vh]! max-[767px]:h-auto max-[767px]:max-h-auto "               
     style={{
      backgroundImage: `url(/bgAll.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
                  <Image
                    src={`/whoppingreact/seo/bg.png`}
                    alt="Banner"
                    fill
                    className="img -z-10 object-cover "
                  />
                 
                   <Container>
                     <Row>
                     <Col lg={6}>
                           <section className="bannnerSection w-full h-screen flex items-start justify-center  flex-col gap-3 text-white">
                             <div className="bannerHeading font-bold  font-['Poppins']">
                                   <h1 className="text-[45px]! md:text-[45px]  font-bold!">Digital Marketing That Actually Works in the AI Era
                               </h1>
                             </div>
                             <div className="bannerPar text-[20px]!">We don't do guesswork. Every strategy we build is backed by real data, built around your business goals, and measured by results that matter — traffic, leads, and revenue
                            </div>
                             
                           </section>
                    </Col>
<Col lg={6} className="flex justify-center">
  <Image
    src={`/whoppingreact/friscoDigital/bg.png`}
    alt="Banner"
    width={100}
    height={100}
    className="img z-10 object-contain w-[100%]! mx-auto"
  />
</Col>

</Row>
                   </Container>
                   </div> 

          <div className="whatiswhoping mt-[6rem]">
                                    <Container>
                                          <Row>
                                          <Col>
                                          <section className="HoemAboutus">
                                        
                                            <div className="noArea    gap-6 items-center justify-between flex-wrap   py-4 px-12 ">
                       <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">                           
                         <div className="numberDiv flex flex-col py-4 z-10 bg-[17171754] "  >
                                                    <span className="no text-[#1A98FF] z-40 bg-[#17171754]">500+</span>
                                                    <span className="notext z-40 bg-[#17171754]">Businesses Grown Across USA</span>
                                                  </div>
                                                  <div className="numberDiv flex flex-col py-4">
                                                    <span className="no text-[#1A98FF] z-40 bg-[#17171754]">93%</span>
                                                    <span className="notext z-40 bg-[#17171754]">Clients Retention Rate</span>
                                                  </div>
                                                  <div className="numberDiv flex flex-col py-4 w-auto">
                                                    <span className="no text-[#1A98FF] z-40 bg-[#17171754]">8+ yrs</span>
                                                    <span className="notext z-40 bg-[#17171754]">Industry Experience</span>   
                                                  </div>
                                                  <div className="numberDiv flex flex-col py-4">
                                                    <span className="no text-[#1A98FF] z-40 bg-[#17171754]">4.9</span>
                                                    <span className="notext z-40 bg-[#17171754]">Client retention rate</span>
                                                  </div>
                                              </div>
                                            </div>
                                          </section>
                                          </Col>
                                          </Row>
                                      </Container>
          </div>

        <div className=" py-[6rem]">
             <Container>
                   <Row>
                   <Col lg={6}>
                    <div className='textDiv'>
                    <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Why Digital Marketing</h4>
                    <h2 className='text-[41px]! font-bold! text-white py-4'>Your <br/> Customer are online <br/>Are you 
                   <br/> meeting them there?</h2>

                    <p className='text-[18px]! pb-10!' >Over 5 billion people use the internet daily. If your business isn`t showing up where they search, browse, and buy — someone else is. Whopping SEO helps you close that gap with smart, data-driven digital marketing strategies built specifically for your industry and goals.</p>
                        
                    <p className='text-[18px]!' >
                    We are not a generic agency that runs the same playbook for every client. We dig deep into your market, your competitors, and your audience — and then build a plan that`s yours alone. 
                    We are not a generic agency that runs the same playbook for every client. We dig deep into your market, your competitors, and your audience — and then build a plan that`s yours alone.
                    </p>
                    </div>                  
                    </Col>
                   <Col lg={6}>
                   <div className=" p-6 flex flex-col gap-4 fil">
<div
  className="relative border border-[#2B1B63] rounded-2xl p-4
  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
  hover:border-[#1A62FF]
  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
  transition-all duration-300"
>                    <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div className="w-18 h-10 p-.2 rounded-lg bg-[#1A1F35] flex items-center justify-center text-lg">
                        <Image
                        src={`/whoppingreact/digetilMarkting/img1.png`}
                        alt="img1"
                        width={25}
                        height={21}
                        className="img "
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-white text-[20px]! font-semibold">
                        Data Before Decisions
                        </h3>

                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Every Strategy Starts with a full audit of your current digital
                        presence, Competitor landscape, and market opportunity
                        </p>
                    </div>
                    </div>
                </div>
                <div
  className="relative border border-[#2B1B63] rounded-2xl p-4
  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
  hover:border-[#1A62FF]
  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
  transition-all duration-300"
> 
                    <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div className="w-18 h-10 p-.2 rounded-lg bg-[#1A1F35] flex items-center justify-center text-lg">
                        <Image
                        src={`/whoppingreact/digetilMarkting/img2.png`}
                        alt="img2"
                        width={25}
                        height={21}
                        className="img "
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-white text-lg font-semibold">
                        Goal - First Stratgy
                        </h3>

                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        Every Strategy Starts with a full audit of your current digital presence, Competitor landscape, and market opportunity
                        </p>
                    </div>
                    </div>
                </div>
                <div
  className="relative border border-[#2B1B63] rounded-2xl p-4
  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
  hover:border-[#1A62FF]
  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
  transition-all duration-300"
> 
                    <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div className="w-18 h-10 p-.2 rounded-lg bg-[#1A1F35] flex items-center justify-center text-lg">
                        <Image
                        src={`/whoppingreact/digetilMarkting/img4.png`}
                        alt="img4"
                        width={25}
                        height={21}
                        className="img "
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-white text-lg font-semibold">
                        Transparent Reporting
                        </h3>

                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        You always know exactly what’s happening with your campaigns, Monthly
                Report Live Dashboards. Zero Confusion.
                        </p>
                    </div>
                    </div>
                </div>
                <div
  className="relative border border-[#2B1B63] rounded-2xl p-4
  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
  hover:border-[#1A62FF]
  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
  transition-all duration-300"
> 
                    <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div className="w-18 h-10 p-.2 rounded-lg bg-[#1A1F35] flex items-center justify-center text-lg">
                        <Image
                       src={`/whoppingreact/digetilMarkting/img3.png`}
                        alt="img3"
                        width={25}
                        height={21}
                        className="img "
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-white text-lg font-semibold">
                        Continuous Optimization
                        </h3>

                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        We Monitor, Test, and refine your Campaigns Month after Month. Good
                result get better. Underperformers get fixed. 
                        </p>
                    </div>
                    </div>
                </div>


                </div>
                    
                   </Col>
                   </Row>
               </Container>
               </div>
               
               <div className=" py-[6rem]">
             <Container>
                   <Row>
                   <Col>
                   <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Our Services</h4>
                    <h2 className='text-[41px]! font-bold! text-white py-4'>Everything You Need to Grow Online</h2>

                    <p className='text-[18px]! pb-10!' >From getting found on Google to converting visitors into customers — we cover the full digital marketing spectrum.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item) => (
               <div
                  key={item.id}
                  className="relative border border-[#2B1B63] rounded-2xl p-6
                  bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                  hover:border-[#1A62FF]
                  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
                  transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14  flex items-center justify-center mb-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={60}
                      width={65}
                      className=""
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-[20px]! font-semibold mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-[16px] leading-relaxed mb-6">
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

               <div className=" py-[6rem]">
             <Container>
                   <Row>
                   <Col>
                   <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Our Services</h4>
                    <h2 className='text-[41px]! font-bold! text-white py-4'>Our 4-Step Growth Process</h2>

                    <p className='text-[18px]! pb-10!' >Simple, transparent, and built around your goals — not ours.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FourStep.map((item) => (
               <div
                  key={item.id}
                  className="relative border border-[#2B1B63] rounded-2xl p-6
                  bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                  hover:border-[#1A62FF]
                  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
                  transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14  flex items-center justify-center mb-3">
                   <Image
                      src={item.icon}
                      alt={item.title}
                      height={40}
                      width={35}
                      className=""
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
                  


<div className="py-[6rem] bg-[linear-gradient(254.09deg,_#0D0F38_15.15%,_#093142_83.93%)]">
      <Container>
        <Row>
          <Col>
            <p className="text-[#1A62FF]! text-[20px]! font-extrabold! mb-3">
              Real Results
            </p>
            <h2 className="text-[35px]! font-bold! text-white mb-4">
              Numbers That Speak for Themselves
            </h2>
            <p className="text-white! text-[16px]! pb-10! max-w-[520px]">
              Across industries and budgets, our clients see measurable,
              sustained growth.
            </p>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-6
                  bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                  border border-[#3B2E7A]!"
                >
                  <h3 className="text-[#4C9AFF] text-[36px]! font-extrabold! mb-2">
                    {item.value}
                  </h3>
                  <p className="text-white! text-[16px]! font-semibold! mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#9B9BB0]! text-[13px]!">
                    {item.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>

            <div className=" py-[6rem]">
             <Container>
                   <Row>
                   <Col>
                   <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Why Whopping SEO</h4>
                    <h2 className='text-[41px]! font-bold! text-white py-4'>What Makes Us Different</h2>

                    <p className='text-[18px]! pb-10!' >Across industries and budgets, our clients see measurable, sustained growth.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {makeUsApart.map((item) => (
                <div
                key={item.id}
                className="relative border border-[#2B1B63] rounded-2xl p-6
                bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                hover:border-[#1A62FF]
                hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
                transition-all duration-300"
                  >   
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl  flex items-center justify-center mb-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={40}
                      width={35}
                      className=""
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

               <div className=" my-[6rem]">
             <Container>
                   <Row>
                   <Col>
                   <h4 className='text-[20px]! font-black! text-[#1A62FF]!'>Explore More</h4>
                    <h2 className='text-[41px]! font-bold! text-white py-4'>Helpful Pages</h2>

                    <p className='text-[18px]! pb-10!' >Across industries and budgets, our clients see measurable, sustained growth.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpfull.map((item) => (
                <div
                  key={item.id}
                  className="relative border border-[#2B1B63] rounded-2xl p-6
                  bg-[linear-gradient(107.89deg,_#24192B,_#100404)]
                  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                  hover:border-[#1A62FF]
                  hover:shadow-[0_0_20px_rgba(26,98,255,0.4)]
                  transition-all duration-300"
                >           
                  {/* Title */}
                  <h3 className="text-white text-[20px]! font-semibold mb-4">
                    {item.title}
                  </h3>
                    </div>
                  ))}
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

                 
            <div className="Faq  bg-black  !py-[6rem] pb-[12rem]!">
               <Container>
                 <Row>
                  <Col>
                    {/* <div className="HoemAboutus">
                     <div className="textArea flex flex-col item-center justify-center">
                      <h4 className='text-[20px]! text-center font-black! text-[#1A62FF]!'>Ready to Grow?</h4>                                
                       <h2 className=" font-black! MainHeading text-center">Let`s Build Something That <br/> 
                        <span  className='  text-[#1A62FF]!'>
                        Actually Works</span></h2>
                       <span className="!para mt-6 flex flex-col items-center justify-center">
                         <p className="text-center max-w-[475px]! font-black!">
                        Tell us about your business and we'll send you a free, no-obligation digital marketing proposal within 48 hours.
                         </p>
                      </span>

                  <form className="flex max-[767px]:flex-col justify-center items-center mt-5 gap-3">
                  <input type="text" placeholder="Your Website URL" className="px-5 py-7 text-sm text-black placeholder:text-[#5c5c5c]  w-[373px] max-[767px]:w-full 
   bg-[#d9d9d9] rounded-full outline-none"
                  />

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#3b5bff] to-[#5f2dff] 
                    text-white px-5 py-7 rounded-full! text-sm font-medium 
                    hover:opacity-90 transition
                    max-[767px]:w-full"
                  >
                    Get Free Proposal
                  </button>
                </form>
                    </div>
                   </div> */}
                   <QuickContactForm />
                   </Col>    
                  </Row>
                </Container>
              </div>
       </main>
    );
}

export default DigitalMarketing;
