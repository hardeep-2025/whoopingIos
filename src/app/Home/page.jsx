"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight, Star } from "lucide-react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Home = () => {
  const [active, setActive] = useState(1);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const faqs = [
    {
      question:
        "What makes WhoppingSEO the best digital marketing agency in USA?",
      answer:
        "WhoppingSEO combines AI-powered SEO strategies, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and human expertise to help businesses rank not just on Google but across AI search platforms like ChatGPT and Perplexity. Our Google-certified team delivers transparent, measurable results with no long-term contracts and no hidden fees.",
    },
    {
      question: "What digital marketing services does WhoppingSEO offer?",
      answer:
        "WhoppingSEO offers SEO services, local SEO, pay per click agency services in Dallas TX, digital marketing agency services in Frisco TX, social media marketing, Amazon marketing, page speed optimization, lead generation, and online reputation management. All services are AI-assisted and data-driven for maximum results.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Google Ads and PPC campaigns can show results within 24 to 48 hours of launch. Local SEO improvements typically appear within 4 to 8 weeks. Organic SEO results build over 3 to 6 months with consistent compounding growth every month. We provide monthly reports so you always see exactly what progress is being made for your business.",
    },
    {
      question:
        "What is Answer Engine Optimization and does WhoppingSEO offer it?",
      answer:
        "Answer Engine Optimization (AEO) is the process of optimizing your website content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and voice search results. Yes — WhoppingSEO offers AEO and GEO (Generative Engine Optimization) as core parts of our advanced 2026 SEO service packages.",
    },
    {
      question: "Does WhoppingSEO work with small businesses?",
      answer:
        "Absolutely. WhoppingSEO works with businesses of all sizes — from small local businesses in Frisco TX and Dallas TX to large national enterprises across the USA. Our digital marketing packages are fully flexible and scalable to fit any budget while still delivering real measurable growth every single month.",
    },
    {
      question: "Does WhoppingSEO offer a free consultation or audit?",
      answer:
        "Yes. WhoppingSEO offers a completely free digital marketing audit and consultation for all new clients. We review your website, current rankings, competitor landscape, ad performance, and AI search visibility — then provide honest expert recommendations with absolutely no obligation and no sales pressure.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setActive(true);
  };
  const cards = [
    {
      id: "01",
      title: "Free AI Marketing Audit and Discovery",
      icon: `/whoppingreact/Home/slider/img1.png`,
      desc: "We start with a completely free audit of your website, current Google rankings, Google Ads performance, competitor landscape, and AI search visibility. This gives us — and you — a clear picture of exactly where you stand and what opportunities exist for fast growth",
    },
    {
      id: "02",
      title: "Custom AI-Powered Strategy Development",
      icon: `/whoppingreact/Home/slider/img2.png`,
      desc: "Using AI-powered research tools we analyze your market, your competitors, and your ideal customers to build a customized digital marketing strategy designed specifically around your business goals, your budget, and your target audience — not a template",
      active: true,
    },
    {
      id: "03",
      title: "Full Implementation by Certified Specialists",
      icon: `/whoppingreact/Home/slider/img3.png`,
      desc: "Our dedicated team of certified SEO specialists, Google Ads managers, and content strategists executes your strategy with precision — optimizing your website, launching campaigns, building content, and establishing your presence across Google and AI search platforms simultaneously.",
    },
    {
      id: "04",
      title: "Continuous AI-Assisted Optimization",
      icon: `/whoppingreact/Home/slider/img4.png`,
      desc: "Unlike agencies that set campaigns and forget them, WhoppingSEO uses AI-powered monitoring tools that analyze your campaign performance daily — automatically identifying what is working, what needs adjustment, and what new opportunities have emerged in your market.",
    },
    {
      id: "05",
      title: "Transparent Monthly Reporting and Growth Review",
      icon: `/whoppingreact/Home/slider/img5.png`,
      desc: "Every month you receive a clear, easy-to-understand report showing keyword rankings, traffic growth, leads generated, ad spend, and return on investment. We then schedule a review call to discuss results, answer your questions, and align on the strategy for the next month.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "SEO Services",
      image: `/whoppingreact/Home/sco.png`,
      desc: "AI-powered keyword research, on-page optimization, technical SEO, and authoritative link building to rank your website higher on Google and AI search platforms",
    },
    {
      id: 2,
      title: "Local SEO Services",
      image: `/whoppingreact/Home/ser/img2.png`,
      desc: "Google Business Profile optimization, local citation building, and review management to dominate local search results and Google Maps in your area",
    },
    {
      id: 3,
      title: "PPC Agency",
      image: `/whoppingreact/Home/ser/img3.png`,
      desc: "Certified Google Ads management for Dallas TX businesses. Smart bidding, daily optimization, and conversion tracking that maximizes every dollar of your ad budget",
    },
    {
      id: 4,
      title: "Social Media Marketing",
      image: `/whoppingreact/Home/ser/img4.png`,
      desc: "Full-service digital marketing for Frisco TX businesses including SEO, Google Ads, social media, and local search optimization tailored for the DFW market",
    },
    {
      id: 5,
      title: "Social Media Marketing",
      image: `/whoppingreact/Home/ser/img5.png`,
      desc: "Strategic social media management and paid advertising on Facebook, Instagram, LinkedIn, and TikTok that builds your brand and generates real customers",
    },
    {
      id: 6,
      title: "Amazon Marketing",
      image: `/whoppingreact/Home/ser/img6.png`,
      desc: "Comprehensive Amazon SEO, sponsored ads management, and listing optimization that improves your Amazon rankings and drives more product sales.",
    },
    {
      id: 7,
      title: "Page Speed Optimization",
      image: `/whoppingreact/Home/ser/img7.png`,
      desc: "Core Web Vitals improvement, image optimization, caching, and technical performance fixes that make your website load faster and rank higher.",
    },
    {
      id: 8,
      title: "Lead Generation",
      image: `/whoppingreact/Home/ser/img8.png`,
      desc: "Complete lead generation funnels combining Google Ads, landing page optimization, and CRM integration to consistently deliver qualified leads to your sales team.",
    },
  ];
  return (
    <main className="home">
      <div className="banner relative min-h-screen max-h-[700px] overflow-hidden max-[991px]:h-auto max-[991px]:min-h-0 max-[991px]:max-h-none max-[767px]:pt-20">
        {" "}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/Home/poster.jpg"
          className="absolute -z-20 inset-0 h-full w-full object-cover"
        >
          <source src={`/whoppingreact/Home/ser/home.mp4`} type="video/mp4" />
        </video>
        <Container>
          <Row>
            <Col>
              {/* <section className="bannnerSection flex h-screen w-full flex-col items-start justify-center text-white lg:max-w-[65%]">
              <div className="bannerHeading font-bold  font-['Poppins']">
<h1 className="!text-[45px] leading-[38px] md:!text-[45px] md:leading-[50px] !font-bold max-[525px]:!text-[25px] max-[525px]:!leading-[30px]">
                      <span className="text-[#1A98FF]"> AI-Powered Digital Marketing </span>Agency in USA That Gets You Found Everywhere
                </h1>
              </div>

           <div className="bannerPar mt-[63px] mb-[43px] w-full max-w-[600px] text-center text-[18px] leading-[28px] md:!text-left lg:text-left">
  We help brands stand out from the crowd and succeed with our innovative ideas and top-notch services?
</div>


              <div className="bannerBtn  flex flex-col! gap-2.5 md:flex-row! ">
            <Link href="/contact" className="!no-underline">
  <button className="min-h-[60px] md:text-[15px] border-2 border-[#b1dcff] px-4 py-2 !rounded-[50px] bg-[#b1dcff] mr-3 !text-[#000000] font-bold flex items-center gap-2">
    <span>Get Your Free AI Marketing Audit</span>

    <ArrowUpRight
      size={18}
      strokeWidth={2.5}
      className="text-black shrink-0"
    />
  </button>
</Link>

<Link
  href="/services"
  className="!text-white !no-underline"
>
  <button className="min-h-[60px] border md:text-[15px] text-white border-white px-4 py-2 !rounded-[50px] ml-3 flex items-center gap-2 whitespace-nowrap !no-underline font-bold">
    <span>See Our Services</span>

    <ArrowUpRight
      size={18}
      strokeWidth={2.5}
      className="text-white shrink-0"
    />
  </button>
</Link>

              </div>
            </section> */}
              <section className="bannnerSection flex min-h-screen w-full flex-col items-start justify-center text-white lg:max-w-[65%] max-[991px]:min-h-0 max-[991px]:py-20 max-[400px]:items-center">
                <div className="bannerHeading font-bold font-['Poppins'] max-[400px]:text-center">
                  <h1 className="!text-[45px] leading-[50px] md:!text-[45px] md:leading-[50px] !font-bold max-[525px]:!text-[25px] max-[525px]:!leading-[30px] max-[400px]:!text-center">
                    <span className="text-[#00BBFF]">
                      AI-Powered Digital Marketing
                    </span>{" "}
                    Agency in USA That Gets You Found Everywhere
                  </h1>
                </div>

                <div className="bannerPar mt-[50px] mb-[43px] w-full max-w-[600px] text-center text-[18px] leading-[20px] md:!text-left lg:text-left max-[400px]:!text-center max-[400px]:!mt-[9px] max-[400px]:!text-[20px]   max-[400px]:!leading-[24px] max-[400px]:!mb-[22px]">
                  We help brands stand out from the crowd and succeed with our
                  innovative ideas and top-notch services
                </div>

                <div className="bannerBtn flex flex-col! gap-2.5 md:flex-row! max-[400px]:items-center max-[400px]:gap-2">
                  <Link href="/contact" className="!no-underline">
                    <button className="min-h-[60px] md:text-[15px] border-2 border-[#b1dcff] px-4 py-2 !rounded-[50px] bg-[#B1DCFF] mr-3 !text-[#000000] font-bold flex items-center gap-2 max-[400px]:!mr-0">
                      <span>Get Your Free AI Marketing Audit</span>

                      <ArrowUpRight
                        size={26}
                        strokeWidth={2.5}
                        className="text-black shrink-0"
                      />
                    </button>
                  </Link>

                  <Link href="/services" className="!text-white !no-underline">
                    <button className="min-h-[60px] border md:text-[15px] text-white border-white px-4 py-2 !rounded-[50px] ml-3 flex items-center gap-2 whitespace-nowrap !no-underline font-bold max-[400px]:!ml-0 max-[400px]:!mt-2">
                      <span>See Our Services</span>

                      <ArrowUpRight
                        size={26}
                        strokeWidth={2.5}
                        className="text-white shrink-0"
                      />
                    </button>
                  </Link>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="whatiswhoping mt-[82px]">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus">
                <div className="textArea mx-auto w-full lg:px-0 max-[400px]:text-center">
                  <div className="MainHeading !text-[35px] !font-bold text-[#FFFFFF]">
                    What Is WhoppingSEO and How Do We Grow Your Business?{" "}
                  </div>
                  <span className="!para mt-6 flex flex-col text-[18px] leading-[22px]">
                    <p>
                      WhoppingSEO is a results-driven{" "}
                      <Link
                        href="/services/digital-marketing-services/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1A98FF]">
                          {" "}
                          digital marketing agency in USA{" "}
                        </span>
                      </Link>
                      that combines human expertise with AI-powered tools to
                      help businesses of all sizes grow their online presence,
                      generate consistent leads, and increase revenue.
                    </p>
                    <p>
                      In 2026 digital marketing has fundamentally changed. Your
                      customers are no longer just typing keywords into Google.
                      They are asking ChatGPT for recommendations. They are
                      getting answers from Google AI Overviews. They are using
                      Perplexity and voice search to find local businesses. If
                      your business is not optimized for all of these platforms
                      — you are invisible to a growing segment of your potential
                      customers every single day.
                    </p>

                    <p>
                      That is exactly what we fix at WhoppingSEO. We use
                      <span className="text-[#1A98FF]">
                        {" "}
                        AI-powered SEO, Answer Engine Optimization (AEO) ,
                        Generative Engine Optimization (GEO){" "}
                      </span>
                      , and advanced paid advertising strategies to make sure
                      your business shows up everywhere your customers are
                      searching — not just traditional Google results.
                    </p>
                  </span>
                </div>

                <div className="noArea mt-[3rem]">
                  <div className="numbering flex justify-center gap-[9%] align-middle ">
                    <div className="numberDiv flex flex-col py-4 z-40  ">
                      <span className="no text-[#1A98FF] ">500+</span>
                      <span className="notext whitespace-nowrap text-center text-[#ffffff] text-[18px] ">
                        Businesses Grown
                      </span>
                    </div>
                    <div className="numberDiv flex flex-col py-4">
                      <span className="no text-[#1A98FF]">10+</span>
                      <span className="notext whitespace-nowrap text-centerc text-[#ffffff] text-[18px] ">
                        Years of Expertise
                      </span>
                    </div>
                    <div className="numberDiv flex flex-col py-4">
                      <span className="no text-[#1A98FF]">8M+</span>
                      <span className="notext whitespace-nowrap text-center text-[#ffffff]  text-[18px] ">
                        Keyword Ranking
                      </span>
                    </div>
                    <div className="numberDiv flex flex-col py-4">
                      <span className="no flex items-center whitespace-nowrap text-[#1A98FF]">
                        4.9
                        <Star
                          size={35}
                          fill="#1A98FF"
                          stroke="#1A98FF"
                          strokeWidth={0}
                          className="ml-1 shrink-0"
                        />
                      </span>
                      <span className="notext whitespace-nowrap text-center text-[18px] ">
                        Average Client Rating
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ourDigitelMarketing bg-black pt-[3rem]! max-[767px]:pt-0!">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus">
                <div className="textArea">
                  <h2 className="MainHeading w-full font-bold! text-[55px]! max-[400px]:!text-center max-[400px]:!text-[35px]">
                    Our{" "}
                    <span className="text-[#1A98FF]">
                      Digital Marketing Services —
                    </span>{" "}
                    Everything Your Business Needs to Grow Online
                  </h2>

                  {/* <h2 className="MainHeading max-[400px]:!text-center font-bold max-[400px]:!text-[35px]">Our <span className="text-[#1A98FF]" > Digital Marketing Services —</span> Everything Your <br /> Business Needs to Grow Online </h2> */}
                  <span className="!para mt-7 max-[380px]:mt-[8px]! flex flex-col text-[18px] text-[#ffffff] max-[400px]:text-center">
                    <p>
                      WhoppingSEO offer a complete suite of AI-powered digital
                      marketing services designed to grow your business across
                      every online channel. Every service is data-driven,
                      transparent, and built around your specific goals
                    </p>
                  </span>
                </div>
                <div className="imagePointSection flex flex-col lg:flex-row items-start justify-between gap-[6%] mt-16 mb-12 bg-black">
                  {/* LEFT SIDE */}
                  <div
                    className="
      leftSide
      relative
      w-full
      lg:w-[47%]
      shrink-0
      flex
      flex-col
      items-center
      mb-[180px]
      lg:mb-[70px]
    "
                  >
                    {/* MAIN IMAGE */}
                    <Image
                      src="/whoppingreact/Home/bussnessM.png"
                      alt="Business Meeting"
                      width={1000}
                      height={1000}
                      className="
       w-[450px]!
      h-[615px]!
        object-cover
        rounded-[18px]

             max-[767px]:w-[278px]!
         max-[767px]:h-[313px]!
        lg:w-full!
        lg:h-[615px]!
      "
                    />

                    {/* 100K TRAFFIC IMAGE */}
                    <Image
                      src="/whoppingreact/Home/100k.png"
                      alt="Monthly Traffic"
                      width={245}
                      height={245}
                      className="
        imgeSmall
        absolute
        w-[75%]!
        max-w-[245px]!
        h-auto!
        top-[215px]
        left-1/2
        -translate-x-1/2
        z-10
        lg:w-[245px]!
        lg:top-auto
        lg:left-auto
        lg:right-[-4%]
        max-[767px]:w-[254px]!
         max-[767px]:h-[246px]!
        lg:bottom-[-30px]
        lg:translate-x-0
      "
                    />
                  </div>

                  {/* RIGHT SIDE SERVICES */}
                  <div className="w-full lg:w-[47%]  min-w-0 max-[767px]:mt-[140px]! bg-black text-white">
                    {services.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className="relative p-2 pr-10 border-b  border-gray-700 cursor-pointer hover:border-l-4 hover:border-blue-500 hover:bg-[#111] transition-all duration-300 flex justify-start items-start gap-3.5"
                      >
                        <span className="imgeDiv shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={30}
                            height={30}
                          />
                        </span>

                        <span>
                          <span className="text-[20px]! font-bold">
                            {item.title}
                          </span>

                          <p className="text-[14px]! mt-2  ">{item.desc}</p>
                        </span>

                        {/* Arrow bottom-right */}
                        <ArrowUpRight
                          size={23}
                          strokeWidth={2.5}
                          className="absolute bottom-3 right-3 pt-2 text-white"
                        />
                      </div>
                    ))}

                    <div />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="grow5item !pt-[6rem] bg-[#0a0a0a] max-[480px]:!pt-[3rem]">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus">
                <div className="grow5item bg-transparent overflow-hidden">
                  <Container>
                    <Row>
                      <Col>
                        <section className="HoemAboutus">
                          {/* Heading */}
                          <div className="textArea">
                            <h2 className="MainHeading text-[#ffffff] max-[400px]:text-center text-[35px]! font-bold!">
                              How{" "}
                              <span className="text-[#1A98FF]">
                                WhoppingSEO{" "}
                              </span>
                              Turns Strategy Into Business Growth — Our 5 Step
                              Process
                            </h2>

                            <span className="para mt-6 text-[#ffffff] flex flex-col max-[400px]:text-center">
                              <p>
                                We believe in complete transparency. Here is
                                exactly how we work with every new client from
                                the very first conversation to consistent
                                monthly growth:
                              </p>
                            </span>
                          </div>

                          {/* Slider */}
                          <div className="bg-[#0a0a0a] py-[96px] max-[400px]:pt-[57px]! max-[400px]:pb-[0px]!  overflow-visible">
                            <Swiper
                              modules={[Autoplay]}
                              spaceBetween={30}
                              slidesPerView={3}
                              loop={true}
                              speed={600}
                              autoplay={{
                                delay: 1200,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                              }}
                              breakpoints={{
                                320: {
                                  slidesPerView: 1,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                                1024: {
                                  slidesPerView: 3,
                                },
                              }}
                              className="overflow-visible pt-10"
                            >
                              {cards.map((item) => (
                                <SwiperSlide key={item.id} className="flex">
                                  <div
                                    className="
      service-card
      group
      border border-gray-700
      h-[450px]!
      rounded-[16px]
      px-8 pt-16 pb-8
      flex flex-col
      bg-[#0a0a0a]
      transition-all duration-500
      hover:bg-gradient-to-b
      hover:from-[#113A92]
      hover:to-[#2C0C41]
      hover:border-blue-500
      overflow-visible
    "
                                  >
                                    {/* Number Circle */}
                                    <div
                                      className="
        number-circle
        absolute -top-8 left-6
        w-[70px] h-[70px]
        rounded-full
              bg-[#747474]
        flex items-center justify-center
        text-[28px] font-bold
        bg-gray-500 text-white
        transition-all duration-300
        z-20
        group-hover:bg-[#1A98FF]
      "
                                    >
                                      {item.id}
                                    </div>

                                    {/* Title + Icon */}
                                    <div className="flex items-start gap-3">
                                      <Image
                                        width={70}
                                        height={70}
                                        src={item.icon}
                                        alt=""
                                      />

                                      <h3 className="text-white text-[20px]! leading-[22px]! font-bold!">
                                        {item.title}
                                      </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#FFFFFF] pt-3 !text-[18px] !leading-[20px] flex-grow font-poppins font-normal">
                                      {item.desc}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </section>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Faq  bg-black  !py-[4rem]">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus">
                <div className="textArea flex flex-col item-center justify-center">
                  <h2 className="MainHeading text-center text-[#ffffff] !text-[35px] !font-bold ">
                    Frequently Asked Questions About WhoppingSEO
                  </h2>
                  <span className="!para mt-6 flex flex-col">
                    <p className="text-center !text-[18px] !font-normal">
                      We believe in complete transparency. Here is exactly how
                      we work with every new client from the very first
                      conversation to consistent monthly growth:
                    </p>
                  </span>
                </div>
                <div className="bg-black py-5">
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
                                className="w-full flex items-start justify-between text-left px-5 py-3 text-white"
                              >
                                <div className="flex items-start gap-3">
                                  <span className="text-[20px] font-normal!">
                                    Q.{index + 1}
                                  </span>

                                  <span className="text-[18px] leading-[20px]! text-gray-200  max-[400px]:text-[16px]! max-[400px]:text-[16px]! ">
                                    {faq.question}
                                  </span>
                                </div>

                                <span>
                                  {openIndex === index ? (
                                    <Minus size={25} />
                                  ) : (
                                    <Plus size={25} />
                                  )}
                                </span>
                              </button>

                              {/* Answer */}
                              {openIndex === index && (
                                <div className=" px-5 py-4 text-sm pt-0! text-gray-300">
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
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Home;
