"use client";
import { User, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import QuickContactForm from "./QuickContactForm";
const DigitalMarketingInFisco = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const [hoveredId, setHoveredId] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [active, setActive] = useState();
  const whatweDo = [
    {
      id: 1,
      title: "Search Engine Optimization",
      description:
        "Search Engine Optimization that gets you to page one of Google",
      icon: `/whoppingreact/friscoDigital/whatweDo/img4.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img4hover.png`,
    },
    {
      id: 2,
      title: "Google Ads",
      description: "Google Ads campaigns that bring real leads not just clicks",
      icon: `/whoppingreact/friscoDigital/whatweDo/img3.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img3hover.png`,
    },
    {
      id: 3,
      title: "Social Media Marketing ",
      description:
        "Social media marketing that keeps your brand visible and active",
      icon: `/whoppingreact/friscoDigital/whatweDo/img1.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img1hover.png`,
    },
    {
      id: 4,
      title: "Website Design",
      description: "Website design and optimization built for conversions",
      icon: `/whoppingreact/friscoDigital/whatweDo/img5.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img5hover.png`,
    },
    {
      id: 5,
      title: "Content Marketing ",
      description:
        "Content marketing that attracts the right customers to your business",
      icon: `/whoppingreact/friscoDigital/whatweDo/img6.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img6hover.png`,
    },
    {
      id: 6,
      title: "Local SEO",
      description:
        "Local SEO that puts you on the map literally in Frisco and surrounding areas",
      icon: `/whoppingreact/friscoDigital/whatweDo/img2.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img2hover.png`,
    },
  ];
  const faqs = [
    {
      question:
        "What digital marketing services does WhoppingSEO offer in Frisco TX",
      answer:
        "WhoppingSEO provides a complete range of digital marketing services for businesses in Frisco, TX. Our services include SEO (Search Engine Optimization), Local SEO, Google Ads (PPC), Social Media Marketing, Web Design & Development, Content Marketing, Online Reputation Management, Conversion Rate Optimization (CRO), and AI Search Optimization. We create customized strategies to help businesses improve online visibility, generate qualified leads, and increase revenue.",
    },
    {
      question:
        "How long does it take to see SEO results for my Frisco business?",
      answer:
        "SEO is a long-term investment, and results depend on your website's current performance, competition, and industry. Most Frisco businesses begin noticing improvements in keyword rankings and organic traffic within 3 to 6 months, while more competitive industries may take 6 to 12 months. We focus on sustainable growth through ethical SEO practices that deliver lasting results.",
    },
    {
      question:
        "What makes WhoppingSEO different from other digital marketing agencies in Frisco?",
      answer:
        "WhoppingSEO stands out by offering customized, data-driven marketing strategies instead of one-size-fits-all solutions. We provide transparent reporting, dedicated account management, AI-powered SEO strategies, and continuous campaign optimization. Our goal is not just to improve rankings but to generate real leads, conversions, and measurable business growth for every client.",
    },
    {
      question: "How much does digital marketing cost for a Frisco business?",
      answer:
        "Digital marketing costs vary based on your business goals, competition, and the services you need. Whether you're looking for SEO, PPC, social media marketing, or a complete digital marketing strategy, we offer flexible pricing tailored to your budget. Contact WhoppingSEO for a free consultation and a customized marketing plan.",
    },
    {
      question: "Can WhoppingSEO help my Frisco business rank on Google Maps?",
      answer:
        "Yes. Our Local SEO services are designed to improve your visibility on Google Maps and in local search results. We optimize your Google Business Profile, build local citations, manage customer reviews, improve local keywords, and implement location-based SEO strategies to help your business attract more local customers in Frisco.",
    },
    ,
    {
      question: "Does WhoppingSEO offer Google Ads management in Frisco?",
      answer:
        "Absolutely. We provide professional Google Ads management services for businesses in Frisco, TX. Our PPC experts handle keyword research, campaign setup, ad copy creation, bid optimization, landing page recommendations, conversion tracking, and ongoing performance optimization to maximize your return on ad spend (ROAS) while reducing unnecessary ad costs.",
    },
  ];
  const testimonials = [
    {
      text: "WhoppingSEO exceeded my expectations in every way. Their skill level with web design and SEO is top notch. I have had several developers throughout the years — some good, most just hold you hostage and never seem to finish. Utkarsh and his team are the real deal.",
      author: "— Paul Azzurro, Business Owner",
    },
    {
      text: "Their SEO and digital marketing strategy helped us generate consistent leads every month. The communication and support were excellent throughout the project.",
      author: "— Michael Brown, CEO",
    },
    {
      text: "The team completely transformed our online presence. We saw better rankings, more traffic, and higher conversions within months.",
      author: "— Sarah Williams, Founder",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const processStep = [
    {
      id: 1,
      title: "Free Discovery and Audit",
      description:
        "We start with a free consultation and full digital marketing audit of your current website, Google Business Profile, search rankings, and competitor landscape in Frisco. This gives us — and you — a crystal clear picture of where you are and what opportunity exists",
      icon: `/whoppingreact/friscoDigital/sixstep/img1.png`,
    },
    {
      id: 2,
      title: "Custom Strategy Development",
      description:
        "Based on the audit, we build a tailored digital marketing strategy specific to your Frisco business, your target customers, your budget, and your growth goals. You will see exactly what we plan to do and why — before we start any work",
      icon: `/whoppingreact/friscoDigital/sixstep/img2.png`,
    },
    {
      id: 3,
      title: "Implementation and Optimization ",
      description:
        "Our team executes the strategy — optimizing your website, setting up and running campaigns, building content, and managing your digital presence across all relevant channels. Every action is tracked and measured.",
      icon: `/whoppingreact/friscoDigital/sixstep/img3.png`,
    },
    {
      id: 4,
      title: "Monthly Reporting and Strategy Reviews",
      description:
        "Every month you receive a clear report and we schedule a review call to discuss performance, what we learned, and what we are adjusting to keep improving your results in the Frisco market.",
      icon: `/whoppingreact/friscoDigital/sixstep/img4.png`,
    },
    {
      id: 5,
      title: "Ongoing Growth and Scaling",
      description:
        "As your Frisco business grows, we scale your digital marketing accordingly — expanding into new services, keywords, and channels to keep accelerating your results over time.",
      icon: `/whoppingreact/friscoDigital/sixstep/img5.png`,
    },
  ];
  const dfwArear = [
    {
      id: 1,
      title: "Frisco TX",
      desc: "Our primary focus and deepest local expertise",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 2,
      title: "Plano TX",
      desc: "Corporate headquarters area with high-value B2B opportunities",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 3,
      title: "McKinney TX",
      desc: "Fast-growing residential and commercial market",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 4,
      title: "Allen TX",
      desc: "Strong retail and service business environment",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 5,
      title: "Prosper TX",
      desc: " High-income residential growth area adjacent to Frisco",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 6,
      title: "The Colony TX",
      desc: "Growing community west of Frisco along Lake Lewisville",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 7,
      title: "Dallas TX",
      desc: "Broad metropolitan coverage for regional businesses",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
    {
      id: 8,
      title: "Celina TX",
      desc: "Rapidly expanding community north of Frisco",
      image: `/whoppingreact/friscoDigital/dot.png`,
    },
  ];

  const GoogleAds = [
    {
      id: 1,
      image: `/whoppingreact/friscoDigital/whatweDo/img4.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img4hover.png`,
      desc: "Full campaign setup and keyword research tailored to Frisco TX market",
    },
    {
      id: 2,
      image: `/whoppingreact/friscoDigital/whatweDo/img3.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img3hover.png`,
      desc: "Ad copywriting that gets clicks from the right customers",
    },
    {
      id: 3,
      image: `/whoppingreact/friscoDigital/whatweDo/img1.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img1hover.png`,
      desc: "Landing page optimization to turn those clicks into actual leads",
    },
    {
      id: 4,
      image: `/whoppingreact/friscoDigital/whatweDo/img5.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img5hover.png`,
      desc: "Ongoing bid management to make every dollar work harder",
    },
    {
      id: 5,
      image: `/whoppingreact/friscoDigital/whatweDo/img6.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img6hover.png`,
      desc: "Monthly performance reports so you always know what is happening",
    },
    {
      id: 6,
      image: `/whoppingreact/friscoDigital/whatweDo/img2.png`,
      hover: `/whoppingreact/friscoDigital/whatweDo/img2hover.png`,
      desc: "Conversion tracking so we measure real results not vanity metrics",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Local SEO for Frisco TX",
      image: `/whoppingreact/Home/sco.png`,
      desc: "We optimize your Google Business Profile, build local citations, and make sure your business shows up in the Frisco map pack when nearby customers are searching.",
    },
    {
      id: 2,
      title: "On Page SEO",
      image: `/whoppingreact/friscoDigital/google/img2.png`,
      desc: " We fix everything on your website that is holding your rankings back. Page titles, meta descriptions, heading structure, internal linking, content quality and more.",
    },
    {
      id: 3,
      title: "Technical SEO",
      image: `/whoppingreact/friscoDigital/google/img3.png`,
      desc: " We make sure your website loads fast, works perfectly on mobile, has clean code, and is easy for Google to crawl and index.",
    },
    {
      id: 4,
      title: "Content Strategy",
      image: `/whoppingreact/friscoDigital/google/img4.png`,
      desc: "FWe create helpful and relevant content around keywords your Frisco customers are actually searching for. This builds your authority over time and keeps bringing in organic traffic.",
    },
    {
      id: 5,
      title: "Link Building",
      image: `/whoppingreact/friscoDigital/google/img5.png`,
      desc: "We earn quality backlinks from trusted websites that tell Google your business is credible and worth ranking higher.",
    },
  ];
  return (
    <div className="bg-black">
      <div
        className="banner relative h-screen max-h-[97vh]! max-[991px]:max-h-[100%]! max-[991px]:h-[100%]! max-[767px]:pt-20!  max-[991px]:py-20!"
        style={{
          backgroundImage: `url(/bgAll.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
                  <h1 className="text-[45px]! md:text-[45px]  font-bold!">
                    <span className=" text-[#1A98FF]">
                      Frisco Digital Marketing
                    </span>{" "}
                    Services That Grow Your{" "}
                    <span className=" text-[#1A98FF]">Business</span>
                  </h1>
                </div>
                <div className="bannerPar text-[20px]!">
                  If you are a business owner in Frisco TX and your phone is not
                  ringing as much as it should, your website is probably not
                  showing up where your customers are looking. That is exactly
                  the problem we solve at WhoppingSEO.
                  <br />
                  <br />
                  We are a results driven digital marketing agency in Frisco
                  that helps local businesses get found online, generate more
                  leads, and grow faster without wasting money on strategies
                  that do not work.
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

      <div className="py-[6rem]!">
        <Container>
          <Row>
            <Col>
              <div className="bg-[linear-gradient(180deg,_#113A92,_#2C0C41)] border border-[#1A2BFF]! rounded-2xl px-8 py-10 text-center  mx-auto">
                <p className="text-white text-[20px] leading-[1.6] font-extrabold">
                  Whether you run a restaurant in the Star District, a dental
                  practice near Eldorado Parkway, a real estate agency serving
                  Stonebriar or The Colony, or a contracting company covering
                  Frisco and surrounding areas — WhoppingSEO has the local
                  expertise to help you rank higher, get found faster, and grow
                  your business consistently.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="  bg-[#111111]! py-[6rem]">
        <Container>
          <Row>
            <Col>
              <h2 className="text-[41px]! font-bold! text-white pb-4">
                What We Do for
                <span className=" text-[#1A98FF]"> Frisco Businesses</span>
              </h2>

              <p className="text-[18px]! pb-10!">
                At WhoppingSEO we do not believe in one size fits all marketing.
                Every Frisco business is different and your digital marketing
                strategy should reflect that. Here is what we help you with:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whatweDo.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative border border-[#2B1B63]! min-h-[190px]! max-h-[280px]! rounded-2xl p-4 pb-1 bg-[linear-gradient(104.88deg,_rgba(36,25,43,0.77)_-4.64%,_rgba(16,4,4,0.77)_94.31%)] hover:border-[#1A98FF] hover:-translate-y-2  hover:border-[#1A62FF]! hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] transition-all duration-500"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                      <Image
                        src={hoveredId === item.id ? item.hover : item.icon}
                        alt={item.title}
                        width={23}
                        height={23}
                        className="w-7!  h-7! object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-[20px]! font-bold mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-[18px]! leading-relaxed mb-6">
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
                <div className="textArea">
                  <h2 className="text-[35px]! font-extrabold!">
                    SEO Company in Frisco — Rank Higher on Google{" "}
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      When someone in Frisco searches for a service you offer,
                      where does your business show up? If the answer is not
                      page one, you are losing customers every single day to
                      your competitors.
                    </p>
                    <p className="text-[20px]! pt-4!">
                      As a trusted SEO company in Frisco we help your website
                      climb to the top of Google search results through a proven
                      and transparent process.
                    </p>
                  </span>
                </div>
                <div className=" imagePointSection">
                  <div className=" relative width-[40%]!">
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
                    <h4 className="text-[25px]! font-extrabold! pb-[32px]!">
                      Here is what our SEO service includes:
                    </h4>
                    {services.map((item) => (
                      <div
                        key={item.id}
                        className={`p-2  py-5! pl-0! border-b border-gray-700 cursor-pointer
                          flex justify-start items-start align-middle gap-3.5
                           hover:border-blue-500 
                          transition-all duration-300  max-h-[140px]! min-h-[120px]`}
                      >
                        <span
                          className="bg-blue-500 rounded-full! h-[49px]! w-[49px]! min-w-[49px]! flex
                           items-center justify-center p-2 "
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={39}
                            height={39}
                            className=""
                          />
                        </span>
                        <span>
                          <span className="text-[20px]! font-bold">
                            {item.title}
                          </span>

                          <p className=" text-[14px]! mt-2">{item.desc}</p>
                        </span>
                      </div>
                    ))}
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
              <h2 className="text-[41px]! font-bold! text-white py-4">
                <span className=" text-[#1A98FF]">Google Ads</span> Management
                in <span className=" text-[#1A98FF]">Frisco</span>
              </h2>

              <p className="text-[20px]! pb-5!">
                SEO builds long term growth but sometimes you need leads right
                now. That is where Google Ads comes in.
              </p>
              <p className="text-[20px]! pb-10!">
                We have managed Google Ads for Frisco businesses across multiple
                industries and we know what it takes to get a strong return on
                your ad spend in this local market.
              </p>
              <p className="text-[25px]! pb-10! font-extrabold">
                Here is how we manage your Google Ads campaigns:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9!">
                {GoogleAds.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className=" relative border border-[#2B1B63]! rounded-[15px]! p-6 pb-1 bg-[linear-gradient(107.89deg,_#24192B,_#100404)]  hover:border-[#1A62FF]!  hover:bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] transition-all duration-50 "
                  >
                    <div className="relative w-7 h-7">
                      <Image
                        src={hoveredId === item.id ? item.hover : item.image}
                        alt=""
                        fill
                        className={`object-contain transition-opacity duration-300 `}
                      />
                    </div>

                    <p className="text-gray-400 text-[16px] leading-relaxed py-4">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[20px]! pt-20!">
                Our Google Ads management in Frisco service is designed to get
                your business in front of the right people at the exact moment
                they are ready to buy. No wasted budget. No guessing. Just
                targeted ads that bring real results.
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
                  <h2 className="MainHeading">
                    Serving Businesses Across{" "}
                    <span className=" text-[#1A98FF]">Frisco TX </span>
                    and the
                    <span className=" text-[#1A98FF]"> DFW Area</span>
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      We understand Frisco because we work here. From the busy
                      commercial corridors along Preston Road and the Dallas
                      North Tollway to the growing neighborhoods of Starwood,
                      Newman Village, Grayhawk, and Stonebriar — we know this
                      city and we know its people.
                    </p>
                    <p className="text-[20px]!">
                      Frisco is one of the fastest growing cities in Texas and
                      that means the competition for local customers is getting
                      stronger every single year. Whether your business is based
                      in the heart of Frisco near the Ford Center or out towards
                      the Frisco Square area,
                      <span className="text-[#FFA742] whitespace-nowrap">
                        <Link
                          href="https://whoppingseo.com"
                          target="_blank"
                          className="text-[#FFA742]! no-underline! hover:text-[#FFA742]! hover:no-underline!"
                        >
                          WhoppingSEO
                        </Link>
                      </span>{" "}
                      has the local knowledge and digital expertise to help you
                      win online. We also serve businesses across the wider DFW
                      area including Plano, McKinney, Allen, Prosper, Celina,
                      Little Elm, and The Colony. So if you are looking to grow
                      your reach beyond Frisco we have got you covered.
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className="MainHeading">
                    <span className=" text-[#1A98FF]">Digital Marketing </span>
                    for Every Type of
                    <span className=" text-[#1A98FF]"> Frisco Business</span>
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Every Frisco business is different. That is why we do not
                      offer cookie-cutter packages. We start by understanding
                      your goals, your customers, and your competitive landscape
                      — then we build a strategy that actually fits your
                      business.
                    </p>
                    <p className="text-[20px]!">
                      Here is what our digital marketing agency in Frisco
                      offers:
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className=" text-[25px]! ">
                    <span className=" text-[#1A98FF]">Frisco Restaurants</span>{" "}
                    <br />— Get More Tables Filled
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Frisco has one of the most competitive restaurant scenes
                      in North Texas with The Star entertainment district, the
                      Fields development, and dozens of new neighborhoods
                      attracting food-loving families every year. If your Frisco
                      restaurant is not showing up on Google Maps and in the top
                      search results for local dining queries, you are missing
                      tables every single night.
                    </p>
                    <p className="text-[20px]!">
                      Our digital marketing for Frisco restaurants includes
                      Google Business Profile optimization to appear in Maps,
                      review management to maintain your star rating, social
                      media content showing your menu and atmosphere, and
                      targeted Google Ads reaching hungry people searching near
                      your location right now.
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className=" text-[25px]! ">
                    <span className=" text-[#1A98FF]">
                      Frisco Real Estate Agents
                    </span>{" "}
                    <br />— More Buyers and Sellers Finding You
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Frisco TX is one of the fastest-growing real estate
                      markets in the entire United States with neighborhoods
                      like Starwood, Plantation Resort, and Richwoods attracting
                      buyers from across the country. Real estate agents in
                      Frisco face intense competition — and the ones winning
                      online are investing in strong SEO and paid search
                      strategies.
                    </p>
                    <p className="text-[20px]!">
                      We help Frisco real estate agents rank for
                      neighborhood-specific keywords, build authority as a local
                      market expert, and run Google Ads campaigns targeting
                      buyers and sellers in specific Frisco zip codes including
                      75033, 75034, and 75035.
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className=" text-[25px]! ">
                    <span className=" text-[#1A98FF]">
                      Frisco Dental Practices —
                    </span>{" "}
                    <br />
                    Fill Your Appointment Book
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      People searching for a dentist in Frisco TX want to find
                      someone nearby, trusted, and accepting new patients. Our
                      dental marketing strategy for Frisco practices combines{" "}

                         <span className="text-[#FFA742] whitespace-nowrap">
                        <Link
                          href="https://whoppingseo.com/services/local-seo-services/"
                          target="_blank"
                          className="text-[#FFA742]! no-underline! hover:text-[#FFA742]! hover:no-underline!"
                        >
                             local SEO
                        </Link>
                      </span>{" "}
                  
                      
                       to rank for terms like "dentist Frisco TX,"
                      Google Ads for immediate new patient acquisition, and
                      review management to maintain the five-star reputation
                      that new patients look for when choosing a provider near
                      the Eldorado Parkway or Dallas Parkway corridors.
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className=" text-[25px]! ">
                    <span className=" text-[#1A98FF]">Frisco Law Firms</span>{" "}
                    <br />— Get Found by Clients Who Need You
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Legal searches in Frisco carry extremely high commercial
                      intent — people searching divorce attorney Frisco TX or
                      personal injury lawyer near me are ready to hire. Our PPC
                      campaigns for Frisco law firms are designed to capture
                      this high-intent traffic efficiently and convert website
                      visitors into consultations. We also build long-term SEO
                      authority that keeps bringing in cases month after month
                    </p>
                  </span>
                </div>
                <div className="textArea mt-18">
                  <h2 className=" text-[25px]! ">
                    <span className=" text-[#1A98FF]">
                      Frisco Contractors and Home Services
                    </span>{" "}
                    <br />— Win More Local Jobs
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Frisco`s rapid residential growth in areas like Lawler
                      Ranch, Grayhawk, and Villages of Stonebriar means constant
                      demand for HVAC, roofing, plumbing, landscaping, and
                      remodeling services. Our digital marketing for Frisco
                      contractors focuses on Google Local Service Ads,
                      traditional Google Ads, and local SEO to ensure you show
                      up when homeowners in Frisco and neighboring Prosper,
                      Allen, and McKinney are ready to hire.
                    </p>
                  </span>
                </div>

                <div className="textArea mt-20">
                  <h2 className="MainHeading">
                    Why
                    <span className=" text-[#1A98FF]"> Local Knowledge </span>
                    Makes All the Difference in
                    <span className=" text-[#1A98FF]">
                      {" "}
                      Frisco Digital Marketing
                    </span>
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      Frisco TX is not just any city. It is one of the
                      fastest-growing cities in the entire United States —
                      consistently ranked among the best places to live, work,
                      and do business in Texas. That growth means opportunity.
                      But it also means competition. Here is what makes Frisco
                      unique from a digital marketing perspective — and why
                      working with an agency that understands this market
                      matters:
                    </p>
                  </span>
                  <ul className="list-disc pl-6 space-y-4 marker:text-[#1A98FF] text-[20px] text-white">
                    <li>
                      <span className="text-[#1A98FF] font-semibold">
                        Population growth:
                      </span>{" "}
                      Frisco has grown from 33,000 residents in 2000 to over
                      230,000 today — bringing new consumers and new businesses
                      simultaneously
                    </li>

                    <li>
                      <span className="text-[#1A98FF] font-semibold">
                        High household income:
                      </span>{" "}
                      Frisco ranks among the highest median household incomes in
                      Texas — customers here expect quality and are willing to
                      pay for it
                    </li>

                    <li>
                      <span className="text-[#1A98FF] font-semibold">
                        Competitive business environment:
                      </span>{" "}
                      Every major service category from dental to real estate to
                      legal has dozens of Frisco competitors all fighting for
                      the same customers online
                    </li>

                    <li>
                      <span className="text-[#1A98FF] font-semibold">
                        Major developments driving search behavior:
                      </span>{" "}
                      The Star (Dallas Cowboys HQ), PGA of America headquarters,
                      Fields development, and Frisco Square attract searches
                      from across the DFW metroplex
                    </li>

                    <li>
                      <span className="text-[#1A98FF] font-semibold">
                        Diverse neighborhoods with different customer profiles:
                      </span>{" "}
                      From the family neighborhoods of Hunters Creek and The
                      Trails to the upscale homes near Stonebriar Country Club —
                      Frisco audiences are not all the same
                    </li>
                  </ul>
                  <p className="text-[20px]! py-[70px] pb-[6rem]  border-b-2 border-[#1A98FF]">
                    Our digital marketing agency in Frisco understands these
                    nuances. We do not treat Frisco like it is the same as any
                    other Texas city. We build strategies specific to the Frisco
                    market, the DFW competitive landscape, and the exact
                    customers you are trying to reach
                  </p>
                </div>
                <div className="textArea mt-[6rem]!">
                  <h2 className=" text-[25px]! ">
                    Why Frisco Businesses Choose WhoppingSEO
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      There are dozens of
                        <span className="text-[#FFA742] whitespace-nowrap"> {" "}
                        <Link
                          href="https://whoppingseo.com"
                          target="_blank"
                          className="text-[#FFA742]! no-underline! hover:text-[#FFA742]! hover:no-underline!"
                        >
                         digital marketing agencies
                        </Link>
                      </span>{" "}
                        claiming to
                      serve the Frisco TX market. Here is what makes WhoppingSEO
                      genuinely different — and why local businesses keep
                      choosing us
                    </p>
                  </span>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="textArea bg-black relative overflow-hidden mb-[8rem]!">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white  -translate-x-1/2"></div>

        <Container className="relative z-10">
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="flex flex-col gap-15 pl-15">
                <div className="flex gap-2 items-center justify-self-start">
                  {" "}
                  <span className="p-2.5 px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">
                    01
                  </span>
                  <span className="text-[25px]! font-bold">
                    We Are Transparent About Everything{" "}
                  </span>
                </div>
                <div className="text-[18px] font-medium">
                  No black-box reporting. No confusing metrics that mean nothing
                  to your business. Every month you receive a clear,
                  easy-to-understand report showing exactly what we did, what it
                  achieved, and what we are doing next. You will always know
                  exactly where your marketing budget is going and what results
                  it is delivering for your Frisco business.
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="flex flex-col gap-15 pt-12 pr-15">
                <div className="flex gap-3 items-center justify-between flex-row-reverse">
                  {" "}
                  <span className="py-[14px] px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">
                    02
                  </span>
                  <span className="text-[25px]! font-bold">
                    We Are Google-Certified Professionals
                  </span>
                </div>
                <div className="text-[18px] font-medium">
                  Our team holds Google Ads certifications, HubSpot inbound
                  marketing certifications, and stays continuously updated with
                  Google's evolving algorithms and advertising policies. When
                  you work with WhoppingSEO, you are getting qualified experts —
                  not junior team members learning on your budget.
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="flex flex-col gap-15  pt-12 pl-15">
                <div className="flex gap-2 items-center justify-self-start">
                  {" "}
                  <span className="py-[14px] px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">
                    03
                  </span>
                  <span className="text-[25px]! font-bold">
                    We Do Not Lock You Into Long Contracts
                  </span>
                </div>
                <div className="text-[18px] font-medium">
                  We earn your business every month by delivering results. Our
                  flexible arrangements mean you are never trapped in a
                  long-term contract with an agency that stops performing. We
                  believe in transparency and trust — not contractual lock-ins
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="flex flex-col gap-15 pt-12 pr-15">
                <div className="flex gap-3 items-center justify-between flex-row-reverse">
                  {" "}
                  <span className="py-[14px] px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">
                    04
                  </span>
                  <span className="text-[25px]! font-bold">
                    We Build Strategies Around Your Goals — Not Our Templates
                  </span>
                </div>
                <div className="text-[18px] font-medium">
                  A Frisco restaurant has completely different goals from a
                  Frisco law firm or real estate agency. We start every client
                  relationship with a deep discovery conversation to understand
                  your specific business, your ideal customers, your competitive
                  landscape, and what success truly means for you. Then we build
                  around that — not a template
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="flex flex-col gap-15  pt-12 pl-15 ">
                <div className="flex gap-2 items-center justify-self-start">
                  {" "}
                  <span className="py-[14px] px-3 bg-[#1A98FF] rounded-full! text-[22px]! font-bold">
                    05
                  </span>
                  <span className="text-[25px]! font-bold">
                    Real Results for Real Frisco Businesses
                  </span>
                </div>
                <div className="text-[18px] font-medium">
                  Our clients — including businesses across the DFW area — have
                  seen their organic traffic double within six months, their
                  Google Ads cost per lead cut in half, and their phone ringing
                  consistently with qualified new customer inquiries. We measure
                  our success by your business growth — not vanity metrics.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="textArea mt-0 bg-[#00113D] flex flex-col items-center justify-center  py-[6rem]">
        <Container>
          <Row>
            <Col>
              <h2 className="MainHeading">
                -<span className=" text-[#1A98FF]"> WhoppingSEO</span>
              </h2>
              <span className="!para mt-8 flex flex-col">
                <p className="text-[20px]!">
                  Do not just take our word for it. Here is what real clients
                  say about working with WhoppingSEO:
                </p>
              </span>
              <div className="flex items-center justify-center py-20">
                <div className="w-full max-w-[950px]  relative">
                  <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center cursor-pointer text-white">
                    ❮
                  </div>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {testimonials.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="flex justify-center pt-9">
                          <div
                            className="
        relative
        bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
        border border-[#1A62FF]
        rounded-[18px]
        px-10
        pt-14
        pb-10
        max-w-[720px]
        w-full
        backdrop-blur-md
      "
                          >
                            {/* Quote Icon */}
                            <div
                              className="
          absolute
          left-6
          top-0
          -translate-y-1/2
          h-[64px]!
          w-[64px]!
          min-h-[64px]!
      
          rounded-full
          bg-[#1A98FF]
          flex
          items-center
          justify-center
          z-20
          shadow-lg
        "
                            >
                              <span className="text-white ">
                                <Image
                                  src={`/whoppingreact/about/quote.png`}
                                  alt=""
                                  width={30}
                                  height={30}
                                  className="w-full h-auto"
                                />
                              </span>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-white text-[18px] leading-[32px] italic">
                              {item.text}
                            </p>

                            {/* Author */}
                            <div className="pt-8">
                              <h4 className="font-black text-white text-[20px] leading-[28px]">
                                {item.author}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center cursor-pointer text-white">
                    ❯
                  </div>
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
              <h2 className="text-[41px]! font-bold! text-white py-4">
                Our
                <span className=" text-[#1A98FF]"> Digital Marketing </span>
                Process for
                <span className=" text-[#1A98FF]"> Frisco Businesses</span>
              </h2>

              <p className="text-[18px]! pb-10!">
                We follow a clear and proven process for every Frisco business
                we work with. Here is what happens when you partner with
                WhoppingSEO:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processStep.map((item) => (
                  <div
                    key={item.id}
                    className="relative  rounded-2xl p-6 pb-1  transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl  flex items-center justify-center mb-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-20 h-15 object-contain"
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

      <div className="ourDigitelMarketing  bg-black  !py-[6rem]">
        <Container>
          <Row>
            <Col>
              <section className="HoemAboutus">
                <div className="textArea">
                  <h2 className="MainHeading">
                    Serving Frisco and the Entire DFW Area
                  </h2>
                  <span className="!para mt-8 flex flex-col">
                    <p className="text-[20px]!">
                      While we specialize in digital marketing for Frisco TX
                      businesses, our team serves companies across the entire
                      Dallas-Fort Worth metroplex. If your business serves
                      customers in any of these areas, we can help you grow
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
                    {dfwArear.map((item) => (
                      <div
                        key={item.id}
                        className={`p-2 border-b border-gray-700 cursor-pointerflex justify-start items-start align-middle gap-3.5 hover:border-l-4 hover:border-blue-500 hover:bg-[#111] transition-all duration-300 flex gap-2`}
                      >
                        <span className="p-3!">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={15}
                            height={9}
                          />
                        </span>
                        <span>
                          <span className="text-[20px] font-bold">
                            {item.title}
                          </span>

                          <p className="text-gray-400 text-[14px] mt-2">
                            {item.desc}
                          </p>
                        </span>
                      </div>
                    ))}
                  </div>
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
                  <h2 className="MainHeading text-center font-black!">
                    Frequently Asked Questions
                  </h2>
                  <span className="!para mt-6 flex flex-col"></span>
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
};

export default DigitalMarketingInFisco;
