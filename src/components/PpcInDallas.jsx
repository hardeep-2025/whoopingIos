"use client";
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import QuickContactForm from './QuickContactForm';

const PpcInDallas = () => {
  const [openIndex, setOpenIndex] = useState(0);
          const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        setActive(true);
      };
    const makeUsApart = [ {
    id: 1,
    title: "Local Service Businesses",
    description:
      "Plumbers, electricians, HVAC companies, roofers, and contractors who need consistent local lead flow in Dallas and surrounding DFW communities.",
    icon: `/whoppingreact/ppc/makeUsapart/img4.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img4hover.png`,
  }, {
    id: 2,
    title: "Law Firms and Legal Services",
    description:
      "Personal injury, family law, criminal defense, and immigration attorneys competing for high-value clients in the Dallas legal market.",
    icon: `/whoppingreact/ppc/makeUsapart/img5.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img5hover.png`,
  }, {
    id: 3,
    title: "Medical and Dental Practices",
    description:
      "Healthcare providers looking to fill appointment slots and attract patients searching for specific procedures or specialists in Dallas",
    icon: `/whoppingreact/ppc/makeUsapart/img3.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img3hover.png`,
  }, {
    id: 4,
    title: "Real Estate Professionals",
    description:
      "Agents and brokers targeting home buyers and sellers actively searching in specific Dallas neighborhoods and zip codes.",
    icon: `/whoppingreact/ppc/makeUsapart/img1.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img1hover.png`,
  }, {
    id: 5,
    title: "E-Commerce Businesses",
    description:
      "Online stores selling to Dallas customers via Google Shopping and Search campaigns optimized for revenue and ROAS",
    icon: `/whoppingreact/ppc/makeUsapart/img6.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img6hover.png`,
  }, {
    id: 6,
    title: "B2B Service Companies",
    description:
      "Businesses targeting Dallas-area decision makers for software, professional services, consulting, and business solutions.",
    icon: `/whoppingreact/ppc/makeUsapart/img1.png`,
    hover: `/whoppingreact/ppc/makeUsapart/img1hover.png`,
  }]
  const [hoveredId, setHoveredId] = useState(null);
  
    const services = [
  {
    id: 1,
    title: "We Are Google Ads Certified",
    image: `/whoppingreact/Home/sco.png`,
    desc: "Every campaign we manage is handled by certified Google Ads professionals who understand the platform inside and out — from Smart Bidding strategies and Performance Max to keyword match types and Quality Score optimization. We do not guess. We use data.",
  },
  {
    id: 2,
    title: "We Are Transparent With Everything",
    image: `/whoppingreact/Home/ser/img2.png`,
    desc: "Every dollar you spend is tracked and accounted for. We send clear monthly reports that show exactly what happened with your budget — clicks, impressions, conversion rates, cost per lead, and return on ad spend. No confusing dashboards. No hidden fees. Just honest numbers.",
  },
  {
    id: 3,
    title: "We Are Local to Dallas",
    image: `/whoppingreact/Home/ser/img3.png`,
    desc: "Certified Google Ads management for Dallas TX businesses. Smart bidding, daily optimization, and conversion tracking that maximizes every dollar of your ad budget",
  },
  {
    id: 4,
    title: "We Start With Your Goals",
    image: `/whoppingreact/Home/ser/img4.png`,
    desc: "Not Our Templates Before we run a single ad, we sit down and understand your business objectives, your ideal customer, your competitors, and your budget. Every campaign we build is designed specifically around what success looks like for your business — not a copy-paste template from another client",
  },
 
];
const servicesPiont = [
  {
    id: 1,
    title: "Google Search Ads",
    description:
      "The most powerful way to reach customers who are actively searching for what you sell. Our team conducts deep keyword research, writes compelling ad copy, builds structured campaigns, and manages bids daily to ensure maximum visibility at the lowest possible cost per click. This is the foundation of effective ppc services dallas businesses rely on for consistent lead generation.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img5.png`,
  },

  {
    id: 2,
    title: "Google Performance Max Campaigns",
    description:
      "Google's newest fully automated campaign type runs ads across Search, YouTube, Gmail, Maps, and Display simultaneously. Our certified experts configure Performance Max with the right asset groups, audience signals, and conversion goals to maximize your reach across every Google property.",
    icon: `/whoppingreact/digetilMarkting/ourServices/white2.png`,
  },

  {
    id: 3,
    title: "Retargeting and Remarketing Campaigns",
    description:
      "Most website visitors do not convert on their first visit. Our retargeting campaigns bring them back at the exact right moment — when they are ready to make a decision. We set up custom audiences, create compelling retargeting ads, and manage frequency caps so your brand stays visible without becoming annoying.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img7.png`,
  },

  {
    id: 4,
    title: "Bing and Microsoft Ads Management",
    description:
      "Bing Ads reach a significant portion of the Dallas market — particularly older, higher-income demographics. Many businesses in Dallas ignore Bing entirely, which means less competition and lower costs per click. Our ppc management dallas team runs fully managed Bing campaigns alongside your Google Ads for maximum coverage.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img4.png`,
  },

  {
    id: 5,
    title: "Landing Page Optimization",
    description:
      "Getting the click is only half the battle. If your landing page does not convince visitors to take action, you are paying for traffic that never converts. Our team reviews and improves your landing pages — headlines, calls to action, trust signals, form placement, and page speed — to turn more clicks into real leads and sales",
    icon: `/whoppingreact/digetilMarkting/ourServices/img8.png`,
  },

  {
    id: 6,
    title: "Campaign Audits for Existing Accounts",
    description:
      "Already running Google Ads but not seeing results? We conduct comprehensive audits of your existing account — identifying wasted spend, poor performing keywords, missing negative keywords, low Quality Scores, and structural issues. Most businesses we audit discover they have been wasting 30 to 50 percent of their ad budget on things that were never going to convert.",
    icon: `/whoppingreact/digetilMarkting/ourServices/img1.png`,
  },

 
];
const caseStudies = [
  {
    id: 1,
    title: "Case Study 1 — Dallas Home Services Company",
    challenge:
      "A Dallas-based HVAC and plumbing company was spending $12,500 per month on Google Ads but generating only 6 to 8 leads per month — a cost per lead of over $350.",
    whatWeDid:
      "Rebuilt their campaign structure from scratch, eliminated 40+ irrelevant keywords, added 12 negative keywords, rewrote all ad copy to focus on emergency service intent, and implemented call tracking to measure real conversions.",
    results: [
      "Leads increased from 12 to 41 per month within 90 days",
      "Cost per lead dropped from $350 to $89",
      "Same monthly budget — 3.4X more leads",
    ],
    image: "/whoppingreact/dallas/case-study-home-services.png",
  },
  {
    id: 2,
    title: "Case Study 2 — Dallas Legal Services Firm",
    challenge:
      "A personal injury law firm in Dallas was running ads but competing against massive law-firm budgets with no differentiation. Their click-through rate was under 2 percent and cost per click was over $45.",
    whatWeDid:
      "Identified high-intent, long-tail keywords competitors were ignoring, built hyper-specific ad groups for each practice area, created custom landing pages for each campaign, and implemented Smart Bidding targeting cost per acquisition.",
    results: [
      "Click-through rate improved from 1.8% to 6.4%",
      "Cost per click reduced from $45 to $28",
      "Monthly qualified consultations increased by 220% over six months",
    ],
    image: "/whoppingreact/dallas/case-study-legal-services.png",
  },
  {
    id: 3,
    title: "Case Study 3 — Dallas E-Commerce Store",
    challenge:
      "A Dallas retail business selling home decor products online was getting traffic from Google Shopping but with a return on ad spend (ROAS) of only 1.8X — barely covering the cost of advertising.",
    whatWeDid:
      "Restructured Shopping campaigns by product category and margin, optimized product feed titles and descriptions, added audience overlays for past purchasers, and shifted budget to highest-margin products.",
    results: [
      "ROAS improved from 1.8X to 5.2X within four months",
      "Revenue from paid search increased 188%",
      "Advertising cost of sale reduced 41%",
    ],
    image: "/whoppingreact/dallas/case-study-ecommerce.png",
  },
];
const faqs = [
  {
    question: "What does a PPC company in Dallas charge?",
    answer:
      "The cost of PPC services in Dallas depends on your advertising budget, industry, competition, and campaign goals. Most PPC agencies charge either a fixed monthly management fee or a percentage of your ad spend. We offer customized PPC solutions designed to maximize your return on investment (ROI) while keeping your advertising costs efficient and transparent.",
  },
  {
    question: " How long does Dallas PPC management take to show results?",
    answer:
      "One of the biggest advantages of PPC is speed. Once your Google Ads campaigns are approved, they can begin driving targeted traffic almost immediately. While initial results can be seen within a few days, campaign performance typically improves over the first 30 to 90 days as we optimize keywords, bidding strategies, audience targeting, and ad creatives for better conversions.",
  },
  {
    question: "What makes a good Dallas PPC firm?",
    answer:
      "A reliable Dallas PPC agency focuses on more than just increasing clicks. The right partner develops data-driven strategies, performs detailed keyword research, creates compelling ad copy, continuously optimizes campaigns, tracks conversions, and provides transparent reporting. Their goal should be to generate qualified leads and maximize your return on ad spend (ROAS), not simply increase traffic.",
  },
  {
    question: "Is PPC or SEO better for my Dallas business?",
    answer:
      "PPC and SEO work best when used together. PPC provides immediate visibility and generates leads quickly, making it ideal for short-term growth. SEO builds long-term organic rankings and sustainable traffic over time. Combining both strategies helps Dallas businesses achieve faster results while building a strong online presence for the future.",
  },
  {
    question: "Do you only manage Google Ads?",
    answer:
      "No. While Google Ads is one of our core services, we also manage Microsoft Ads (Bing), YouTube Ads, Google Display campaigns, Google Shopping campaigns, Performance Max campaigns, and remarketing campaigns. We recommend the best advertising platforms based on your business goals, target audience, and budget.",
  },
  {
    question: "Can I keep my Google Ads account if we stop working together?",
    answer:
      "Yes. You always retain ownership of your Google Ads account. We believe in complete transparency, so your campaigns, historical performance data, conversion tracking, and account access remain yours. If you decide to work with another agency or manage the account internally, you'll continue to have full control over your advertising account.",
  },
  {
    question: "Why Choose Our Dallas PPC Services?",
    answer:
      "Our PPC specialists create data-driven campaigns that help businesses across Dallas generate qualified leads, reduce wasted ad spend, and improve ROI. From campaign setup and keyword research to ongoing optimization and conversion tracking, we manage every aspect of your paid advertising to deliver measurable business growth.",
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
                       <h1 className="text-[45px]! leading-[38px] font-extrabold! md  [45px] md:leading-[50px] font-bold pb-4">Top Pay Per Click Agency  Dallas — More Leads, Better ROI
                      </h1>
                      </div>
                      <div className="bannerPar">Running Google Ads without expert help is one of the fastest ways to burn through your budget and get zero results. Dallas businesses that partner with a professional pay per click agency in Dallas consistently outperform competitors, generate higher quality leads, and see measurable returns on every dollar they invest.
                  </div >
                  </section>
                  </Col>
            
              <Col lg={5} className="flex justify-end items-center p-12!">
              <Image
                  src={`/whoppingreact/dallas/banner.png`}
                  alt="Banner"
                  width={100}
                  height={100}
                  className="img z-10 object-contain w-[100%]! mx-auto"
              />
               </Col>
            
              </Row>
          </Container>
         </div> 
         <div className='bg-black  !py-[6rem]'>
            <Container>
                <Row>
                    <Col className='flex flex-col gap-12 '>
                       <span className='flex flex-col gap-2 text-[18px]!'>
                          At WhoppingSEO, we are not just another Dallas PPC company that sets up campaigns and disappears. We are a hands-on, data-driven paid advertising partner that monitors, optimizes, and scales your campaigns every single week — so your business keeps growing while you focus on what you do best.
                       <span className='pt-4'>
                        Whether you are running your first Google Ads campaign or looking to take over from an agency that has let you down, our pay per click agency in Dallas is built to deliver results that actually move the needle
                        </span>
                       </span>

                       <div className='mt-20!'>
                        <h2 className='text-[35px]! font-bold! mb-5'>Why WhoppingSEO Is the #1 Dallas PPC Company</h2>
                    <span className="flex flex-col gap-2 text-[18px]!">
  <span>
    When you search for a dallas ppc company, you will find dozens of agencies
    all promising the same things — more clicks, more leads, better ROI. So what
    makes{" "}
    <span className="text-[#FFA742] whitespace-nowrap">
      WhoppingSEO
    </span>{" "}
    different from every other dallas ppc agency in the DFW area?
  </span>

  <span className="pt-[5rem]!">
    The answer is simple: we have built our entire practice around one thing —
    making every dollar you spend on paid advertising work as hard as humanly
    possible.
  </span>
</span>
                       </div>
                    </Col>
                </Row>
            </Container>
         </div>
         <div>
             <div className="ourDigitelMarketing  bg-black  !py-[6rem]">
                <Container>
                  <Row>
                    <Col>
                        <section className="HoemAboutus">
                            <div className="textArea">
                                <span className="!para mt-8 flex flex-col">
                                    <p className='text-[18px]! font-extrabold!'>
                                    Here is what separates us from every other PPC agency in Dallas:
                                    </p>
                                </span>
                            </div>
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
                                {services.map((item) => (
                                    <div
                                    key={item.id}
                                    className="p-2 border-b border-gray-700 cursor-pointer hover:border-l-4 hover:border-blue-500 hover:bg-[#111] transition-all duration-300 flex justify-start items-start! align-middle gap-3.5"
                                    >
                                    <span className="imgeDiv">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={59}
                                            height={59}
                                        /></span>
                                        <span>
                                    <span className="text-[20px]! font-bold">
                                        {item.title}
                                    </span>
                            
                                    <p className=" text-[14px]! mt-2">
                                        {item.desc}
                                    </p>
                                    </span>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <p className='text-[18px]! pt-20!'>
                              We Do Not Lock You Into Long Contracts We earn your business every single month by delivering real results. Our low-risk engagement model means you are never trapped in a contract with an agency that has stopped performing
                            </p>
                        </section>
                    </Col>
                 </Row>
                </Container>
            </div>


         </div>
         <div className=" py-[6rem]">
             <Container>
                   <Row>
                   <Col>
                    <h2 className='text-[35px]! font-bold! text-white py-4'>Our Dallas PPC Management Services</h2>

                    <p className='text-[18px]! pb-10!' >As a full-service dallas ppc company, WhoppingSEO offers end-to-end PPC management across every major platform your customers use. Here is exactly what our ppc management dallas team handles for your business:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesPiont.map((item) => (
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
                  <p className="text-white! text-[16px] leading-relaxed mb-6">
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
                    <div className="py-[6rem]">
      <Container>
        <Row>
          <Col>
            <h2 className="text-[35px]! font-bold! text-white py-4">
              Real Results From Our Dallas PPC Campaigns
            </h2>
            <p className="text-[18px]! pb-10!">
              Numbers tell the story better than we can. Here is exactly how
              our dallas ppc company approach has performed for real clients
              across different industries.
            </p>
 
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16">
                    {caseStudies.map((item, index) => {
                        const imageRight = index % 2 === 0;

                        return (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Text */}
                            <div
                            className={`w-full ${
                                imageRight ? "lg:order-1" : "lg:order-2"
                            }`}
                            >
                            <h3 className="text-white !text-[22px] !font-bold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-white !text-[16px] leading-relaxed mb-4">
                                <span className="font-bold">Challenge: </span>
                                {item.challenge}
                            </p>

                            <p className="text-white !text-[16px] leading-relaxed mb-4">
                                <span className="font-bold">What We Did: </span>
                                {item.whatWeDid}
                            </p>

                            <h4 className="text-white !text-[18px] !font-semibold mb-3">
                                Results Achieved:
                            </h4>

                            <ul className="list-disc list-inside space-y-2">
                                {item.results.map((result, i) => (
                                <li
                                    key={i}
                                    className="text-white !text-[16px] leading-relaxed"
                                >
                                    {result}
                                </li>
                                ))}
                            </ul>
                            </div>

                            {/* Image */}
                            <div
                            className={`w-full h-[300px] lg:h-[350px] rounded-xl overflow-hidden ${
                                imageRight ? "lg:order-2" : "lg:order-1"
                            }`}
                            >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={500}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>
                        );
                    })}
                </div>
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
                    <span className="text-[25px]! font-bold">Discovery and Strategy</span>
                    </div>
                    <div className="text-[18px] font-medium">
                     We start by understanding your business deeply — your goals, your ideal customer, your competitors, your current campaigns, and your market position in Dallas. We conduct keyword research, competitive analysis, and audience mapping to build your campaign blueprint.

                    </div>
                </div>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} lg={6}>
                <div className="flex flex-col gap-8 pt-12 pr-15 max-[767px]:pr-0">
                    <div className="flex gap-3 items-center lg:justify-between lg:flex-row-reverse justify-start">
                    <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">02</span>
                    <span className="text-[25px]! font-bold">Campaign Build</span>
                    </div>
                    <div className="text-[18px] font-medium">
                    Our team builds your Google Ads campaigns from scratch — or rebuilds your existing ones — with clean campaign structure, tightly themed ad groups, keyword match type strategy, and compelling ad copy that speaks directly to your Dallas audience
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
                    <span className="text-[25px]! font-bold"> Launch and Initial Optimization</span>
                    </div>
                    <div className="text-[18px] font-medium">
                    Campaigns go live with close daily monitoring. We watch for search term performance, Quality Scores, impression share, and early conversion signals. Any issues are addressed within 24 hours — not 30 days.

                    </div>
                </div>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} lg={6}>
                <div className="flex flex-col gap-8 pt-12 pr-15 max-[767px]:pr-0">
                    <div className="flex gap-3 items-center lg:justify-between lg:flex-row-reverse justify-start">
                    <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">04</span>
                    <span className="text-[25px]! font-bold">Ongoing — Monthly Optimization and Reporting</span>
                    </div>
                    <div className="text-[18px] font-medium">
                    Every month we review performance data, adjust bids, refresh ad copy, expand negative keyword lists, and identify new opportunities. You receive a clear monthly report with plain-language explanations of what happened and what we are doing next.

                    </div>
                </div>
                </Col>
                <Col lg={6}></Col>
            </Row>

            </Container>                                       
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      <div className=" py-[8rem] bg-[linear-gradient(254.09deg,_#0D0F38_15.15%,_#093142_83.93%)]">
            <Container>
               <Row>
                 <Col>
                    <h2 className='text-[40px]! font-bold! text-white pb-8'>Who Benefits Most From Dallas PPC Management</h2>
                      <p className='text-[25px]! font-semibold! pb-15'>
                        Our ppc services dallas team works with businesses across a wide range of industries. PPC advertising is especially powerful for:
                      </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {makeUsApart.map((item) => (
                        <div
                          key={item.id}
                          onMouseEnter={() => setHoveredId(item.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          className="relative rounded-2xl p-6 border-[0.5]! border-white! bg-[linear-gradient(107.89deg,#24192B,#100404)] hover:bg-[linear-gradient(146.49deg,rgba(17,58,146,0.4)_5.13%,rgba(44,12,65,0.4)_96.71%)] hover:border-[#1A62FF] transition-all duration-300 ease-in-out"
                        >
                          <div className="w-14 h-14  flex items-center justify-center mb-3">
                               <Image 
                                   src={ hoveredId === item.id ? item.hover : item.icon}
                                   alt={item.title}
                                   width={23}
                                   height={23}
                                   className="w-7!  h-7! object-contain"
                               />
                           </div>
                              <h3 className="text-white text-[20px]! font-semibold mb-4">
                              {item.title}
                              </h3>
                              <p className=" text-[16px]! leading-relaxed mb-6">
                              {item.description}
                              </p>
                              <button className="text-[#1A62FF] text-[20px] font-bold hover:translate-x-1 transition-all duration-300">
                              {item.link}
                              </button>
                          </div>
                          ))}
                      </div>
                      <p className='text-[18px]! py-15 pb-0!'>
                        If your customers are searching on Google for what you offer — and they almost certainly are — a properly managed dallas ppc company will get your business in front of them at exactly the right moment.

                      </p>
                    </Col>
                    </Row>
                </Container>
            </div>
             <div className="ourDigitelMarketing  bg-black  !py-[6rem]">
                <Container>
                  <Row>
                    <Col>
                      <section className="HoemAboutus">
                          <div className="textArea">
                             <h2 className="MainHeading">Why Dallas Businesses Need a Local PPC Expert in 2026
                                </h2>
                                <span className="!para mt-8 flex flex-col">
                                <p className='text-[20px]!'>
                                 The paid search landscape in Dallas is more competitive than ever. Here is what has changed and why working with an experienced pay per click agency in Dallas matters more in 2026 than it ever has:
                                </p>
                                </span>
                               </div>
                                <div className="textArea mt-18 flex flex-col gap-4">
                                <p className="text-[18px]! pb-2 mb-2 ">
                                <span className=" text-[#1A98FF] font-bold!">AI-Powered Bidding Requires Expert </span>
                               Oversight Google`s Smart Bidding uses machine learning to optimize bids automatically — but it only works well when fed the right data and configured correctly. Without expert oversight, Smart Bidding can dramatically overspend or underperform. Our dallas ppc agency knows exactly how to set up, guide, and monitor these systems for maximum results. 
                                </p>
                                <p className="text-[18px]! pb-2 mb-2 ">
                                <span className=" text-[#1A98FF] font-bold!">Google`s Search Generative Experience Is Changing Click Behavior </span>
                                 AI-generated answers now appear at the top of many Google searches, which means organic click-through rates are declining. Paid search ads remain prominently placed and are increasingly important for businesses that need consistent traffic and leads from Google. 
                                </p>
                                <p className="text-[18px]! pb-10 ">
                                <span className=" text-[#1A98FF] font-bold!">Competition in Dallas Has Increased  </span>
                               More Dallas businesses are running Google Ads than ever before. Without professional keyword strategy, bid management, and ad copy optimization, your ads are competing against well-managed campaigns with larger budgets. A professional <span className=" text-[#1A98FF] font-bold!">dallas ppc company </span>levels the playing field. 
                                </p>
                                
                         </div>
                   </section>
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
                          {openIndex === index && (
                            <div className=" px-5 py-4 text-sm text-gray-300 pt-0!">
                              {faq.answer || "Answer coming soon..."}
                            </div>
                          )}
                        </div>))}         
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
             <div className="my-[6rem]">
              <Container>
                <Row className="items-center gap-y-8">
                  <h2 className="text-[35px]! leading-[38px]! font-extrabold text-white mb-4">
                    Get Your Free Dallas PPC Audit Today
                  </h2>
                  <Col lg={6}>
                   
                    <div className="mt-0 pr-5">
                      
                      <p className="text-[16px] text-white  ">
                     If you are currently running Google Ads in Dallas and not seeing the results you expected — or if you are thinking about starting paid advertising for the first time — our free PPC audit is the perfect first step.
                      </p>
                      
                    <h2 className="text-[16px]! leading-[38px]! font-extrabold! text-white mt-14! mb-10!" >In your free audit, our pay per click agency in Dallas team will review:</h2>
                    <ul className="flex flex-col gap-3 text-[#E5E5E5] text-[16px]! pl-0!">
                      <li>• Your current campaign structure and keyword strategy</li>
                      <li>• Where your budget is being wasted</li>
                      <li>• Your Quality Scores and ad relevance</li>
                      <li>• Faster results because the strategy fits your real market</li>
                      <li>• What your top Dallas competitors are doing differently</li>
                      <li>• A custom recommendation for how to improve your results</li>
                    </ul>
                    <p className="text-[16px] text-white mt-5 ">
                     There is no obligation and no hard sell. Just an honest assessment of where your PPC stands today and what it would take to significantly improve it.



                      </p>
                    </div>
                  </Col>
            
                  {/* Right Image */}
                  <Col lg={6}>
                    <div className="h-full flex justify-center items-center pl-5">
                      <Image
                        src={`/whoppingreact/localSeo/img1.png`}
                        alt="Intent SEO"
                        width={600}
                        height={540}
                        className="rounded-3xl object-cover w-full"
                      />
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
                            
                            <h2 className='text-[25px]! font-bold!'><span className='text-[#1A98FF]!'>Call us today at +91-9915841204</span>  or <span className='text-[#1A98FF]!'> fill out the contact form</span> on our website to request your free PPC audit. Our Dallas PPC team responds within one business day — usually the same day.</h2>
                            </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                              <div className="bg-black py-24 px-4 pb-[12rem]!">
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

export default PpcInDallas;
