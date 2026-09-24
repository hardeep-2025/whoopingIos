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
    `/whoppingreact/ser/compneay/img5.png`,
    `/whoppingreact/ser/compneay/img6.png`,
    `/whoppingreact/ser/compneay/img7.png`,
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results for a small business?",
      answer:
        "We offer a complete range of digital marketing services including Search Engine Optimization (SEO), Local SEO, Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Email Marketing, Web Design & Development, Link Building, and Online Reputation Management. Every service is customized to your specific business goals and industry.",
    },
    {
      question:
        "What is Answer Engine Optimization (AEO) and why does my business need it?",
      answer:
        "It depends on the service. PPC campaigns can drive targeted traffic within 24–48 hours of launch. SEO typically shows meaningful ranking improvements within 3–6 months, with stronger results building over 6–12 months. Social media and content marketing compound over time. We set clear, realistic expectations at the start so you always know what to expect and when.",
    },
    {
      question:
        "Does WhoppingSEO offers specialized SEO for restaurants and real estate?",
      answer:
        "Our pricing is fully customized based on your business size, goals, industry, and chosen services. We work with startups, SMBs, and established enterprises — with packages built to match different budgets. We believe in complete pricing transparency — no hidden fees, no surprise charges. Get in touch for a free proposal with a clear breakdown.",
    },
    {
      question: "What are AI SEO services for small businesses?",
      answer:
        "We work with businesses of all sizes — from local service providers and small e-commerce stores to large enterprises and multi-location brands. Our strategies are always scaled to your budget and goals. No business is too small to benefit from a smart, well-executed digital marketing plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setActive(true);
  };
  const makeUsApart = [
    {
      id: 1,
      title: "Research & Analysis",
      description:
        "We analyze your business, competitors, and market trends to create a strong foundation.",
      icon: `/whoppingreact/ser/our/img1.png`,
    },
    {
      id: 2,
      title: "Strategy Planning",
      description:
        "Custom strategies tailored to your business goals and audience.",
      icon: `/whoppingreact/ser/our/img2.png`,
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "Execution of campaigns using advanced tools and expert techniques.",
      icon: `/whoppingreact/ser/our/img3.png`,
    },
    {
      id: 4,
      title: "Optimization",
      description:
        "Continuous monitoring and improvement for better performance.",
      icon: `/whoppingreact/ser/our/img4.png`,
    },
    {
      id: 5,
      title: "Reporting & Growth",
      description: "Detailed reports with insights and future growth planning.",
      icon: `/whoppingreact/ser/our/img5.png`,
    },
  ];
  const services = [
    {
      id: 1,
      title: "Start your digital growth journey today",
      image: `/whoppingreact/Home/sco.png`,
    },
    {
      id: 2,
      title: "Talk to our experts",
      image: `/whoppingreact/friscoDigital/google/img2.png`,
    },
    {
      id: 3,
      title: "Get a free consultation",
      image: `/whoppingreact/friscoDigital/google/img3.png`,
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
    },
    {
      text: "Startups & Enterprises",
      icon: `/whoppingreact/seo/btn/img7.png`,
    },
    {
      text: "Restaurant",
      icon: `/whoppingreact/seo/btn/img8.png`,
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative min-h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <Image
          src="/whoppingreact/Home/servies.png"
          alt="Banner"
          fill
          className="img -z-10 object-cover"
          priority
        />

        <Container className="position-relative z-10">
          <Row className="align-items-center">
            {/* Left Content Column */}
            <Col lg={7} className="px-lg-3 ">
              <div className="d-flex flex-column align-items-start">
                {/* Top Badge */}
                {/* <div className="inline-flex mt-5 h-[44px]  items-center rounded-full bg-[#082359] border border-[#FFFFFF] px-4 py-1.5 text-xs md:text-sm text-[#FFFFFF] font-medium">
                Measurable Results
              </div> */}
                <div className="mt-20! mx-13!  max-[767px]:mx-0!  max-[767px]:mb-3 max-[400px]:pt-10! max-[767px]:flex max-[767px]:w-full! max-[767px]:justify-center">
                  <div className="border font-f border-white font-[16px]! text-[#FFFFFF]!  uppercase max-[400px]:py-3! px-4 py-2 rounded-full bg-[#082359] backdrop-blur-sm mb-[30px]! w-max!">
                    Measurable Results
                  </div>
                </div>
                {/* Heading */}
                <h2
                  className="
    text-[45px]!
    text-[#FFFFFF]!
    font-bold!
    leading-[55px]!
    flex
    flex-wrap
    max-[767px]:text-[40px]!
    max-[400px]:pt-6!
    max-[767px]:leading-[50px]!
    max-[767px]:justify-center
    max-[767px]:text-center
  "
                >
                  We don’t just deliver services
                  <span className="text-[#1A98FF]">
                    We deliver measurable growth.
                  </span>
                </h2>
                {/* Description */}
                <p
                  className="
    mt-[40px]!
    text-[18px]!
    leading-[22px]!
    text-[#FFFFFF]
    max-w-xl 

    max-[767px]:mt-3
    max-[767px]:max-w-[90%]
    max-[767px]:mx-auto
    max-[400px]:mt-[27px]!
    max-[767px]:text-center
    max-[767px]:!text-[18px]
    max-[767px]:!leading-[22px]
  "
                >
                  At WhoppingSEO, we combine data-driven strategies, creative
                  execution, and cutting-edge tools to help your business stand
                  out in a crowded digital world. Our approach is focused on
                  performance, scalability, and long-term success.
                </p>
                {/* CTA Button */}
               <button className="flex! mt-[40px]! mb-5! h-[60px]! w-[204px]! items-center! justify-center! gap-2! rounded-full! border! border-white/40! bg-[#B1DCFF]! px-6! text-[16px]! font-bold! text-[#000000]! whitespace-nowrap! max-[767px]:mx-auto!">
  Start Your Journey
  <span className="flex! min-h-[26px]! min-w-[26px]! items-center! justify-center!">
    ↗
  </span>
</button>

              </div>
            </Col>

            {/* Right Graphic/Image Column */}
            <Col
              lg={5}
              className="d-flex justify-content-center align-items-center max-[767px]:!mt-0"
            >
 <div className="relative w-[462px]! h-[448px]! max-w-full! rounded-xl! overflow-hidden! max-[767px]:w-full! max-[767px]:h-[275px]!">
  <Image
    src="/whoppingreact/Home/serviesright.png"
    alt="Measurable Growth Illustration"
    fill
    sizes="(max-width: 768px) 100vw, 462px"
    className="object-contain!"
    priority
  />
</div>


            </Col>
          </Row>
        </Container>
      </div>

      <div className="!bg-black mt-[110px]! max-[767px]:mt-[95px]!">
        <Container>
          <Row>
            <Col>
              {/* ===== NEW SECTION START ===== */}
              <div className="w-full bg-transparent relative z-10">
                {/* Top Box */}

                <div className="backdrop-blur-md rounded-[20px]! overflow-hidden z-9 bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.81)_5.13%,_rgba(44,12,65,0.81)_96.71%)] max-[767px]:mx-[15px]!">
                  <Image
                    src={`/whoppingreact/Home/serviesH.png`}
                    alt="Background"
                    fill
                    className="absolute inset-0 -z-1 object-cover"
                  />
                  <div className="flex flex-wrap p-5 md:p-7  gap-x-[27px]! gap-y-[27px]! bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.81)_5.13%,_rgba(44,12,65,0.81)_96.71%)]">
                    {[
                      "Result-Oriented Approach",
                      "Certified & Experienced Experts",
                      "Transparent Reporting",
                      "Customized Marketing Strategies",
                      "ROI-Focused Campaigns",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#06183D4F] text-[20px]! text-[#FFFFFF]! border border-white/10 px-4! py-2! rounded-full max-[767px]:text-[16px]! max-[767px]:text-center!  "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Area */}
                {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-6">
           
                  <button className="!flex mt-[40px]!  !h-[60px] w-[204px]! !items-center !justify-center !gap-2 !rounded-full !border !border-white/40 !bg-transparent !px-6 !text-[16px] !font-bold !text-[#000000] bg-[#B1DCFF]! !whitespace-nowrap">
                    View Portfolio{" "}
                    <BiUpArrowAlt className="rotate-59 text-[26px]" />
                  </button>

                  <div className="flex flex-col items-center lg:items-end gap-3">
               
                    <div className="flex items-center gap-3">
                      {socialIcons.map((icon, index) => (
                        <div key={index} className="w-[42px] h-[42px] ">
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

               
                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-[18px]! font-normal text-[#FFFFFF]! max-[767px]:flex-col! max-[767px]:items-center! max-[767px]:gap-1! ">
                      <span>Proven Result</span>
                      <span>Experienced Team</span>
                      <span>Affordable Pricing</span>
                    </div>
                  </div>
                </div> */}

                {/* Company Logos */}
                <div className="mt-[110px]! max-[767px]:mt-[95px]! w-full overflow-hidden">
                  <div className="w-full overflow-hidden">
                    <div className="flex w-max items-center gap-[37px] animate-logo-slide-service">
                      {/* First Logos */}
                      {companies.map((logo, index) => (
                        <div
                          key={`first-${index}`}
                          className="
            h-[80px]
            w-[calc((100vw-37px)/2)]
            shrink-0
            md:h-[110px]
            md:w-[calc((100vw-185px)/6)]
          "
                        >
                          <Image
                            src={logo}
                            alt={`company-${index + 1}`}
                            width={268}
                            height={100}
                            className="
              h-full
              w-full
              object-contain
              opacity-90
              transition-opacity
              duration-300
              hover:opacity-100
            "
                          />
                        </div>
                      ))}

                      {/* Duplicate Logos */}
                      {companies.map((logo, index) => (
                        <div
                          key={`second-${index}`}
                          className="
            h-[80px]
            w-[calc((100vw-37px)/2)]
            shrink-0
            md:h-[110px]
            md:w-[calc((100vw-185px)/6)]
          "
                        >
                          <Image
                            src={logo}
                            alt={`company-${index + 1}`}
                            width={268}
                            height={100}
                            className="
              h-full
              w-full
              object-contain
              opacity-90
              transition-opacity
              duration-300
              hover:opacity-100
            "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-[110px]! max-[767px]:mt-[95px]! ">
        <Container>
          <Row>
            <Col>
              <h2 className="text-[35px]! font-bold! text-[#FFFFFF]! py-4 max-[767px]:text-center!">
                Our Proven Process for Digital Success
              </h2>

              <p className="text-[16px]! mt-[25px]!  leading-[20px]! text-[#FFFFFF]  max-[767px]:text-center!">
                We follow a structured and transparent process to ensure
                consistent results:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-[66px]! bg-black!  lg:grid-cols-3 gap-7! max-[767px]:mx-[15px]! max-[767px]:mt-[64px]!">
                {makeUsApart.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-2xl p-6!  border                
                              hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
                              hover:border-[#1A62FF]!
                              transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="rounded-xl  flex items-center justify-start gap-[9px]! mb-[34px]!">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 object-contain"
                      />
                      <h3 className="text-[#FFFFFF]! text-[20px]! pt-2! font-semibold mb-0">
                        {item.title}
                      </h3>
                    </div>

                    {/* Title */}

                    {/* Description */}
                    <p className="text-[#FFFFFF]! text-[16px] leading-[20px]! mb-2">
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

      <div className="ourDigitelMarketing mt-[110px]! max-[767px]:mt-[95px]! max-[767px]:mx-[10px]!">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus ">
                <div className=" imagePointSection">
                  <div className="leftSide">
                    <Image
                      src={`/whoppingreact/ser/img1.png`}
                      alt=""
                      width={1000}
                      height={1000}
                      className="h-[567px]! w-[611px]! max-[767px]:h-[300px]! max-[767px]:object-contain!"
                    />
                  </div>
                  <div className="digital-back text-white max-[767px]:mx-[10px]! max-[767px]:mt-[20px]!">
                    <h2 className="text-[35px]!  leading-[45px]!  font-bold! text-white py-0 max-[767px]:text-center! max-[767px]:text-[32px]! max-[767px]:leading-[40px]!">
                      We provide tailored digital marketing solutions across
                      various industries:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2!  mt-[29px]! w-full max-[767px]:mt-[20px]!">
                      {btnArry.map((item, index) => (
                        <div
                          key={index}
                          className="w-full max-[767px]:flex! max-[767px]:justify-center! gap-2!"
                        >
                          <button
                            type="button"
                            className="
                        flex
                        min-h-[77px]!
                        min-w-[250px]!
                        text-[20px]!
                        items-center
                        gap-[7px]
                        rounded-[6px]!
                        border
                        gap-[13px]!
                        border-[#24192B]!
                        bg-[#100404D9]!
                        px-[10px]!
                        py-[8px]!
                        text-left
                        text-[#FFFFFF]!
                        transition-all
                        duration-200
                        hover:bg-[#1b0808]!

                        max-[767px]:min-h-[48px]
                      "
                          >
                            <Image
                              src={item.icon}
                              alt={item.icon}
                              width={23}
                              height={23}
                              className="h-[24px]! w-[24px]!"
                            />

                            <span className="text-[20px]! pl-[2px]! flex! leading-[20px]!  ">
                              {item.text}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                    <p className="text-[18px]! mt-[29px]!  leading-[20px]! text-[#FFFFFF]! max-[767px]:text-center! max-[767px]:text-[16px]!">
                      No matter your industry, we understand your audience and
                      craft strategies that deliver results.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="whatiswhoping  max-[767px]:mx-[10px]! mt-[110px]! mb-[110px]! max-[767px]:mt-[95px]!  max-[767px]:mb-[95px]! "
     
        style={{ backgroundColor: "#111111" }}
      >
        {" "}
        <Container>
          <Row>
            <Col>
              <h2 className="text-[35px]! font-bold! text-[#FFFFFF]! text-center! py-4 leading-[45px]! max-[767px]:text-center!">
                As a leading digital marketing agency in
                <span className="text-[#1A98FF]"> the USA, WhoppingSEO </span>
                specializes in crafting effective site 
                <span className="text-[#1A98FF]"> MARKETING STRATEGIES  </span>
                that deliver exceptional ROI.
              </h2>
              <section className="HoemAboutus">
                <div className="noArea mt-[56px]! items-center! justify-between! flex-wrap px-12 max-[767px]:py-8! ">
                 <div className="flex flex-wrap lg:flex-nowrap justify-between items-center max-[767px]:!flex-col max-[767px]:!gap-4">
  <div className="numberDiv flex flex-col py-1! z-10 bg-[#17171754] max-[767px]:!mt-[25px] max-[767px]:!items-center">
    <span className="no text-[55px]! leading-[65px]! text-[#1A98FF] z-40 bg-[#17171754] max-[767px]:!text-center">
      500+
    </span>
    <span className="notext text-[18px]! font-semibold! text-[#FFFFFF] z-40 max-w-[180px]! bg-[#17171754] max-[767px]:!text-center">
      Businesses Grown Across USA
    </span>
  </div>

  <div className="numberDiv flex flex-col py-1! max-[767px]:!mt-[25px] max-[767px]:!items-center">
    <span className="no text-[55px]! leading-[65px]! text-[#1A98FF] z-40 bg-[#17171754] max-[767px]:!text-center">
      3x
    </span>
    <span className="notext text-[18px]! font-semibold! text-[#FFFFFF] max-w-[180px]! z-40 bg-[#17171754] max-[767px]:!text-center">
      Average Map Pack visibility increase
    </span>
  </div>

  <div className="numberDiv flex flex-col py-1! max-[767px]:!mt-[25px] max-[767px]:!items-center">
    <span className="no text-[55px]! leading-[65px]! text-[#1A98FF] z-40 bg-[#17171754] max-[767px]:!text-center">
      90
    </span>
    <span className="notext text-[18px]! font-semibold! text-[#FFFFFF] z-40 max-w-[180px]! bg-[#17171754] max-[767px]:!text-center">
      Days to first ranking improvements
    </span>
  </div>

  <div className="numberDiv flex flex-col py-1! max-[767px]:!mt-[25px] max-[767px]:!items-center">
    <span className="no text-[55px]! leading-[65px]! text-[#1A98FF] z-40 bg-[#17171754] max-[767px]:!text-center">
      98%
    </span>
    <span className="notext font-semibold!

 text-[18px]! text-[#FFFFFF] z-40 max-w-[180px]! bg-[#17171754] max-[767px]:!text-center">
      Client retention rate
    </span>
  </div>
</div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================= TOOLS & TECHNOLOGIES SECTION ================= */}

      <div className="border-[#1A62FF33] bg-[linear-gradient(90deg,_#07133D_0%,_#0B0320_100%)]">
        <Container>
          <Row>
            <Col>
              <div className="relative overflow-hidden  px-6 py-10 text-center">
                {/* Heading */}
                <h2 className="text-[#FFFFFF] text-[45px]! font-extrabold! md:text-[41px]! leading-[1.3]">
                  Powered by Advanced{" "}
                  <span className="text-[#1A98FF]">Tools & Technologies</span>
                </h2>

                {/* Sub Heading */}
                <p className="text-[#FFFFFF] text-[16px]! mt-2 mb-10 leading-[20px]! max-[767px]:mt-[27px]! max-[767px]:leading-[20px]!">
                  We use industry-leading tools to ensure accuracy, efficiency,
                  and results:
                </p>

                {/* Tools Buttons */}
                <div className="flex flex-wrap justify-center gap-[15px]! mx-auto mt-[63px]!  max-[767px]:mt-[38px]! ">
                  {[
                    "Google Analytics & Search Console",
                    "Semrush  / Ahrefs",
                    "Google Ads & Meta Ads Manager",
                    "Shopify / WordPress Optimization",
                    "Page Speed & Performance Tools",
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 rounded-full! border!  border-[#FFFFFF9C]! text-[#FFFFFF] text-[20px]!  leading-[20px]! transition-all duration-300
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

      <div className="ourDigitelMarketing   mt-[110px]! max-[767px]:mt-[95px]! max-[767px]:mx-[10px]!">
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
                  <div className=" text-[#FFFFFF]!">
                    <div className="textArea">
                      <h2 className="MainHeading text-[35px]! font-extrabold! max-[767px]:text-center!">
                        Ready to Grow Your Business Online?
                      </h2>
                      <span className="!para mt-7 flex flex-col max-[767px]:mt-30px! max-[767px]:text-center!">
                        <p className="text-[16px]! pb-1">
                          Let’s turn your ideas into measurable success.
                        </p>
                        <p className="text-[16px]! font-normal! max-[767px]:mt-30px! max-[767px]:text-center!">
                          Whether you`re looking to increase traffic, generate
                          leads, or boost sales — we have the expertise to make
                          it happen.
                        </p>
                      </span>
                    </div>
                    {services.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4! pl-0! border-b border-gray-700 cursor-pointer
                          flex justify-start items-center align-middle gap-2!
                           max-[767px]:mt-50px!
                          transition-all duration-300`}
                      >
                        <span className="imgeDiv">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={19}
                            height={19}
                          />
                        </span>
                        <span>
                          <span className="text-[14px] font-normal">
                            {item.title}
                          </span>
                        </span>
                      </div>
                    ))}

<button
  className="
    flex
    mt-[40px]!
    mb-5
    h-[60px]!
    w-[364px]!
    max-[767px]:!max-w-[364px]
    max-[767px]:!mx-auto
    !items-center
    justify-center
    gap-2!
    rounded-full!
    !border
    !border-white/40
    !bg-transparent
    !px-6
    text-[16px]!
    font-bold!
    !text-[#000000]
    bg-[#B1DCFF]!
    whitespace-nowrap!
    max-[767px]:!whitespace-normal
  "
>
  <span className="max-[767px]:!text-center">
    Let’s Build Something
    <br className="max-[767px]:!block hidden" />
    Great Together
  </span>

  <span className="!flex !h-[26px] !w-[26px] !min-w-[26px] !items-center !justify-center">
    ↗
  </span>
</button>
                    {/* <button className="bg-[linear-gradient(90deg,_#1B51CC_0%,_#2B0E66_100%)] mt-15! hover:opacity-90 transition-all px-8 py-3 !rounded-full text-white font-medium">
                     
                    </button> */}
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Faq  mt-[110px]! mb-[110px]!  max-[767px]:mt-[95px]!  max-[767px]:mb-[95px]! ">
        <Container>
          <Row>
            <Col>
              <div className="HoemAboutus">
                <div className="textArea flex flex-col item-center justify-center">
                  <h2 className="MainHeading text-center font-black! text-[#FFFFFF]">
                    Frequently Asked Questions
                  </h2>
                  {/* <span className="!para mt-6 flex flex-col">
                    <p className="text-center ">
                      Everything you need to know before getting started.
                    </p>
                  </span> */}
                </div>
                <div className="mt-[60px]!">
                  <Container>
                    {/* FAQ Column */}
                    <Row className="justify-content-center">
                      <Col lg={10}>
                        <div className="d-flex flex-column gap-3">
                          {faqs.map((faq, index) => (
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

                                  <span className="text-[15px] text-[#FFFFFF]! text-gray-200">
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
                          ))}{" "}
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
    </div>
  );
};

export default Servies;
