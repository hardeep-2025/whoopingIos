"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TiArrowUpOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
const AboutUs = () => {
  const [active, setActive] = useState(1);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let interval;

    const startSlider = () => {
      // Only run slider on mobile
      if (window.innerWidth >= 768) return;

      interval = setInterval(() => {
        if (!slider) return;

        const card = slider.querySelector(".team-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 16;

        const maxScroll = slider.scrollWidth - slider.clientWidth;

        // If reached last card, smoothly go back to first
        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollTo({
            left: slider.scrollLeft + cardWidth + gap,
            behavior: "smooth",
          });
        }
      }, 3000);
    };

    startSlider();

    // Restart when screen size changes
    const handleResize = () => {
      clearInterval(interval);
      startSlider();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="relative banner h-screen !max-h-[97vh] max-[767px]:h-auto max-[767px]:!max-h-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={`/whoppingreact/about/bg1.png`}
          alt="Banner"
          fill
          className="object-cover -z-20"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(146.49deg,rgba(17,58,146,0.4)_5.13%,rgba(44,12,65,0.4)_96.71%)] -z-10" />

        <Container>
          <Row>
            <Col className="flex items-end justify-end z-10 w-full">
              <section className="bannerSection relative w-full h-screen max-[767px]:h-auto flex flex-col justify-center text-white z-20 pb-32  max-[767px]:items-center max-[767px]:mt-[95px]!">
                {/* Content wrapper - constrained width on desktop, full on mobile */}
                <div className="max-w-[640px]  mt-[66px]!  max-[767px]:max-w-full w-full px-4 max-[767px]:px-0 max-[767px]:text-center">
                  {/* Badge */}
                  <div className="max-[767px]:mb-3  max-[767px]:pt-8 max-[767px]:flex max-[767px]:justify-center">
                    <div className="border mb-[30px]! w-max! border-white font-[16px]! text-[#FFFFFF]  tracking-wide uppercase max-[400px]:py-3! px-4 py-2 rounded-full bg-[#082359] backdrop-blur-sm">
                      Digital Marketing Agency
                    </div>
                  </div>

                  {/* Heading */}
                  <div className="bannerHeading">
                    <h1
                      className="
    font-bold!
    text-[50px]!
    leading-[60px]!
    max-[991px]:!text-[50px]
    max-[991px]:!leading-[44px]
    max-[767px]:!text-[40px]
    max-[767px]:!leading-[50px]!
    max-[767px]:text-center
    max-[400px]:!mt-6
  "
                    >
                      <div className="text-[#FFFFFF]">Your Partner in</div>

                      <div className="text-[#1A98FF] max-[400px]:!mt-[4px]">
                        Digital Success
                      </div>
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-[18px]!  leading-[28px]! max-[767px]:leading-[28px]! font-medium!  max-[767px]:mt-[32px]! max-[767px]:mt-3 text-[#FFFFFF]  max-[767px]:max-w-[90%] max-[767px]:mx-auto max-[767px]:text-[18px]!">
                    Data Driven Strategies and innovative Solutions that grow
                    Your Brand, Attract the Right Audience, And Deliver
                    Measurable Result.
                  </p>

                  {/* Buttons */}
                  <div className="mt-[54px]! flex! !flex-row !items-start gap-4! pb-1 max-[767px]:mt-[46px]! max-[767px]:!flex-col max-[767px]:!items-center max-[767px]:!justify-center max-[767px]:gap-5!">
                    <button className="!flex h-[60px]! w-[210px]! !items-center !justify-center !gap-2 !rounded-full !bg-[#B1DCFF] !px-6 !text-[16px] !font-bold !text-[#000000] !whitespace-nowrap">
                      Get Started Now
                      <span className="flex! min-h-[26px]! min-w-[26px]! !items-center justify-center!">
                        {" "}
                        ↗
                      </span>
                    </button>

                    <button className="!flex h-[60px]! w-[210px]! !items-center !justify-center !gap-2 !rounded-full !border !border-white/40 !bg-transparent !px-6 text-[16px]! !font-bold !text-[#FFFFFF] !whitespace-nowrap">
                      See Our Services
                      <span className="flex! min-h-[26px]! min-w-[26px]! !items-center justify-center!">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="
    absolute
    left-1/2
    mt-[64px]!
    -translate-x-1/2
    -bottom-25
    z-[100]
    max-w-[1197px]

    max-[991px]:bottom-8

    max-[767px]:static
    max-[767px]:left-0
    max-[767px]:translate-x-0
    max-[767px]:-mt-[80px]!
    max-[767px]:px-6
  "
      >
        <div
          className="
      relative
      z-[100]
      rounded-2xl
      flex
      justify-between
      items-center
      py-2
      h-[94px]!
      max-[991px]:px-5
      max-[991px]:flex-wrap
      max-[991px]:gap-y-6
      max-[991px]:justify-center

      max-[767px]:flex-col
      max-[767px]:items-stretch
      max-[767px]:p-3
          max-[767px]:h-auto!

      max-[767px]:gap-0
    "
          style={{
            border: "0.5px solid transparent",
            borderRadius: "20px",
            background: `
    linear-gradient(360deg, #2C0C41  2.14%, #00153B 100%) padding-box,
    linear-gradient(360deg, #A31AFF 2.14%, #1A62FF 100%) border-box
  `,
          }}
        >
          {[
            {
              icon: "/whoppingreact/about/Result.png",
              title: "Result-Driven Strategies",
              desc: "Focused on real Growth",
            },
            {
              icon: "/whoppingreact/about/Innovating.png",
              title: "Innovating Solutions",
              desc: "Ahead of Digital Trends",
            },
            {
              icon: "/whoppingreact/about/Expert.png",
              title: "Expert Team",
              desc: "Certified & experienced",
            },
            {
              icon: "/whoppingreact/about/Transparent.png",
              title: "Transparent & Reliable",
              desc: "Clear report, Real result",
            },
          ].map((item, i, arr) => (
            <div
              key={i}
              className="
          flex
          items-center
          w-full

          max-[767px]:w-full
          max-[767px]:flex-col
        "
            >
              {/* Content */}
              <div
                className="
            flex
            items-center
          gap-[15px]!
            px-4
            py-3
            flex-1
            max-[767px]:w-full
            max-[767px]:py-4
          "
              >
                {/* Icon */}
                <span className="w-[28px]! h-[28px]! shrink-0 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </span>

                {/* Text */}
                <div className="text-left">
                  <p
                    className="text-white whitespace-nowrap mb-[10px]!"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    className="text-white/60 whitespace-nowrap mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Desktop Vertical Divider */}
              {i < arr.length - 1 && (
                <div
                  className="
              w-px
              h-15
              bg-[#535353]/40
              mx-2
              max-[767px]:hidden
            "
                />
              )}

              {/* Mobile Horizontal Divider */}
              {i < arr.length - 1 && (
                <div
                  className="
              hidden
              max-[767px]:block
              w-full
              h-px
              bg-[#535353]/40
            "
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-black  max-[767px]:mt-[95px]!"
        style={{ marginTop: "120px" }}
      >
        {" "}
      </div>
      <div className="flex max-[767px]:flex-col">
        <div className="w-1/3 max-[767px]:w-full ">
          <Image
            width={400}
            height={400}
            src={`/whoppingreact/about/blackbg2.png`}
            alt=""
            className="w-full h-full -z-20 max-[767px]:w-[393px]! max-[767px]:h-[450px]!"
          />
        </div>
        <div
          className="
    w-1/3 flex flex-col py-4 px-7
    max-[767px]:w-full
    max-[767px]:items-center
    bg-[#110C0C]
  "
        >
          <span className="flex items-center gap-[6px]! text-[25px] font-semibold text-[#A7A3A3] leading-[35px]!">
            Advantages
            <span className="hidden max-[767px]:block w-[80px] h-[2px] bg-[#A7A3A3]"></span>
          </span>

          {/* Heading */}
          <div className="flex flex-col text-[55px]! max-[767px]:text-[50px]!  text-[#FFFFFF] w-full font-weight-400 leading-[70px]! mt-7!">
            <span className="text-left">Things</span>
            <span className="text-center">Creative</span>
            <span>Everyday</span>
          </div>

          {/* 19px gap from heading */}
          <span className="text-[16px] text-[#FFFFFF] font-medium! leading-[18px]! mt-[19px]! max-[767px]:mt-[25px]!">
            At Whopping React, we believe every business deserves a digital
            presence that delivers real value. Our experienced team specializes
            in web development, mobile app development, UI/UX design, and
            digital marketing, helping businesses transform ideas into scalable
            digital solutions. By combining innovation, performance, and
            user-focused design, we build products that enhance customer
            experiences and support long-term business growth.
          </span>
        </div>

        <div className="w-1/3 max-[767px]:w-full">
          <Image
            width={400}
            height={400}
            src={`/whoppingreact/about/blackbg1.png`}
            alt=""
            className="w-full h-full -z-20 max-[767px]:w-[393px]! max-[767px]:h-[417px]!"
          />
        </div>
      </div>

      <div className="mt-[121px]! max-[767px]:mt-[90px]!">
        <Container>
          <Row>
            <Col lg={6} className="p-0!">
              <Image
                width={400}
                height={400}
                src="/whoppingreact/about/partner.png"
                alt=""
                className="
      w-full
      max-h-[513px]!
      max-w-[556px]!
      object-contain
      max-[767px]:px-[46px]!
    "
              />
            </Col>

            <Col
              lg={6}
              className="px-[22px]! pb-5! max-[700px]:mt-[58px]!
 "
            >
              <h2
                className="
            text-[35px]!
            max-[400px]:text-center!
            max-[767px]:mt-6!
            font-bold!
            leading-[40px]!
            text-[#FFFFFF]!
          "
              >
                WhoppingSEO: Your Partner in Digital Success
              </h2>

              <div className="text-[18px]  max-[767px]:mt-[32px]! leading-[22px]! text-[#FFFFFF]! max-[400px]:text-center">
                <p>
                  At WhoppingSEO, we help businesses grow through SEO, AI SEO,
                  Local SEO, PPC, content marketing, social media, and AI search
                  optimization. Our results-driven strategies focus on improving
                  visibility, generating qualified leads, increasing
                  conversions, and driving sustainable revenue growth.
                </p>

                <p className="font-[800] mt-[25px]!">Why choose WhoppingSEO?</p>

                <ul className="mt-[10px] pl-0! list-none space-y-1 px-0! text-[17px]!">
                  <li>
                    <span className="font-semibold">Proven Expertise :</span>Our
                    team brings practical experience and industry knowledge
                  </li>

                  <li>
                    <span className="font-semibold">
                      Results-Oriented Approach :
                    </span>{" "}
                    We focus on strategies that deliver measurable business
                    outcomes.
                  </li>

                  <li>
                    <span className="font-semibold">
                      Client-Centric Focus :
                    </span>{" "}
                    Your goals and growth remain at the heart of our strategy.
                  </li>

                  <li>
                    <span className="font-semibold">
                      Comprehensive Solutions :
                    </span>{" "}
                    From SEO and Local SEO to PPC, content, and AI search, we
                    provide solutions designed for modern businesses.
                  </li>

                  <li>
                    <span className="font-semibold">Ongoing Support :</span> We
                    continuously monitor performance, identify opportunities,
                    and refine strategies for long-term growth.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-[89px]! max-[767px]:mt-[90px]!">
        <Container>
          <Row>
            <Col>
              <h2
                className="
    text-[35px]!
    uppercase
    font-bold!
    leading-[105px]!
    pb-[2rem]!
    text-[#FFFFFF]!
    max-[776px]:max-w-[300px]
    max-[776px]:mx-auto
    max-[776px]:leading-[45px]!
    max-[776px]:text-center!
  "
              >
                Our Core
                <br className="max-[776px]:block hidden" /> Values:
              </h2>
            </Col>
          </Row>
        </Container>
        <div className="flex bg-[#110C0C] max-[767px]:flex-col">
          <Container className="flex flex-wrap">
            <div className="w-1/3 p-10 px-0! flex flex-col gap-0 items-center max-[767px]:w-full! justify-center">
              <Image
                width={60}
                height={80}
                src={`/whoppingreact/about/coreValue/img1.png`}
                alt=""
                className=""
              />

              <h2 className="text-[35px]! font-bold! pt-[39px]! pb-[31px]! leading-[35px]! text-[#FFFFFF]">
                {" "}
                Integrity
              </h2>
              <p className="text-[14px]! max-[776px]:leading-[18x]! text-[#FFFFFF]! font-semibold text-center max-w-[220px]!">
                Honesty and transparency are our cornerstones.
              </p>
            </div>
            <div className="w-1/3 p-10 flex flex-col gap-0 items-center justify-center bg-[#0A0606] max-[767px]:w-full!">
              <Image
                width={60}
                height={80}
                src={`/whoppingreact/about/coreValue/img2.png`}
                alt=""
                className=""
              />

              <h2 className="text-[35px]! font-bold! pt-[39px]! pb-[31px]! leading-[35px]! text-[#FFFFFF]">
                {" "}
                Innovation{" "}
              </h2>
              <p className="text-[14px]!  max-[776px]:leading-[18x]! text-[#FFFFFF]! font-semibold text-center max-w-[220px]!">
                We’re always one step ahead with innovative solutions.
              </p>
            </div>
            <div className="w-1/3 p-10 flex flex-col gap-0 items-center justify-center max-[767px]:w-full">
              <Image
                width={60}
                height={80}
                src={`/whoppingreact/about/coreValue/img3.png`}
                alt=""
                className=""
              />

              <h2 className="text-[35px]! font-bold! pt-[39px]! pb-[31px]! leading-[35px]! text-[#FFFFFF]">
                {" "}
                Excellence
              </h2>
              <p className="text-[14px]! max-[776px]:leading-[18x]! text-[#FFFFFF]! font-semibold text-center">
                Excellence is our unwavering pursuit.Ready to take your business
                to new heights?
              </p>
            </div>
          </Container>
        </div>
      </div>

      <div className="mt-[119px]! max-[767px]:mt-[90px]!">
        <Container>
          <Row>
            <Col>
              <h2
                className="
    text-[35px]!
    text-[#FFFFFF]!
    leading-[40px]!
    font-bold!
    pb-3
    flex
    items-center
    gap-4
    max-[776px]:flex-col
    max-[776px]:justify-center
    max-[776px]:text-center!
    max-[776px]:gap-1!
  "
              >
                <Image
                  width={44}
                  height={44}
                  src="/whoppingreact/about/bluetick.png"
                  alt=""
                />

                <span>
                  Ready, Set,
                  <br className="max-[776px]:block hidden" />
                  Go!
                </span>
              </h2>
              <p className="text-[20px]! font-medium pb-[42px]!  max-[767px]:mt-[13px]! text-[#FFFFFF] leading-[28px]! max-[400px]:text-[20px]! max-[400px]:text-center!">
                Beyond marketing, we’re your trusted partner in growth. <br />
                At WhoppingSEO, we’re dedicated to helping businesses achieve
                their online goals through personalized, results-driven
                strategies. No cookie-cutter solutions here. We craft tailored
                plans that align perfectly with your unique needs and
                aspirations.
              </p>

              <div className="flex border-b pb-4 border-[#FFFFFF87] max-[767px]:flex-col">
                <div className="w-1/3 p-10 flex max-[767px]:py-[61px]! flex-col gap-3 py-2 px-1 max-[400px]:px-3! items-start justify-start max-[767px]:w-full ">
                  <Image
                    width={81}
                    height={81}
                    src={`/whoppingreact/about/go/img1.png`}
                    alt=""
                    className="min-h-[81px]! min-w-[81px]!"
                  />

                  <h2 className="text-[20px]! text-[#FFFFFF] leading-[22px]! font-bold! mt-[27px]!">
                    {" "}
                    Our Diverse Team, Your Success{" "}
                  </h2>
                  <p className="text-[18px]! leading-[20px]! mt-[24px]! font-normal max-w-[100%]! ">
                    Our team is a vibrant tapestry of individuals, each bringing
                    their own expertise and passion to the table. From seasoned
                    strategists to creative wizards, we’re committed to making
                    you feel like a rock star throughout the planning and
                    execution process.
                  </p>
                </div>

                <div
                  className="w-1/3 p-10 flex flex-col  max-[767px]:py-[61px]! gap-3 py-2  px-3 max-[400px]:px-3! items-start justify-start border-x border-[#FFFFFF87] max-[767px]:w-full
                            max-[767px]:border-x-0 max-[767px]:border-y
                            "
                >
                  <Image
                    width={81}
                    height={81}
                    src={`/whoppingreact/about/go/img2.png`}
                    alt=""
                    className="min-h-[81px]! min-w-[81px]!"
                  />

                  <h2 className="text-[20px]! text-[#FFFFFF] leading-[22px]! font-bold! mt-[27px]!">
                    {" "}
                    Embracing Innovation for a Better Tomorrow.
                  </h2>
                  <p className="text-[18px]!  mt-[24px]! leading-[20px]!  font-normal! max-w-[100%]! ">
                    By staying at the forefront of industry trends, we’re able
                    to deliver cutting-edge solutions that help our clients
                    thrive. Our mission extends beyond business; we aim to
                    create a more positive and inclusive digital landscape for
                    everyone.
                  </p>
                </div>

                <div className="w-1/3 p-10 flex flex-col  max-[767px]:py-[61px]! gap-3 py-2 px-3 max-[400px]:px-3! items-start justify-start max-[767px]:w-full ">
                  <Image
                    width={81}
                    height={81}
                    src={`/whoppingreact/about/go/img3.png`}
                    alt=""
                    className="min-h-[81px]! min-w-[81px]!"
                  />

                  <h2 className="text-[20px]! text-[#FFFFFF] leading-[22px]! font-bold! mt-[27px]!">
                    {" "}
                    Beyond Website Development.
                  </h2>
                  <p className="text-[18px]! mt-[24px]!  leading-[20px]! font-normal! max-w-[100%]!">
                    We create more than just websites; we build thriving online
                    businesses. Our comprehensive services go beyond the initial
                    launch. We’ll guide you through every stage of your digital
                    journey, from SEO optimization to content marketing and
                    beyond.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-[120px]!   max-[767px]:mt-[90px]! bg-black">
        <Container>
          <div className=" max-[767px]:text-center!">
            <h3 className="text-[35px]! text-[#ffffff]! font-bold!">
              Your Success is Our Success.
            </h3>
            <p className="text-[18px]! pt-[24px]! text-[#ffffff]!">
              At WhoppingSEO, we’re invested in your growth. Your success is our
              ultimate goal. We’re committed to providing exceptional service
              that helps you achieve your business objectives and reach new
              heights.
            </p>
          </div>
          {/* Main Box */}
          <div
            className="
    w-full
    rounded-[16px]
    mt-[38px]!
    bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)]
    px-8
    py-[38px]!
    max-[767px]:px-4
    max-[767px]:py-8
  "
          >
            {/* Google Logo */}
            <div className="flex justify-center pb-12 max-[767px]:pb-8">
              <Image
                width={460}
                height={130}
                src="/whoppingreact/about/google/img1.png"
                alt=""
                className="object-contain max-[767px]:w-[280px] max-[400px]:w-[240px]"
              />
            </div>

            {/* Certificates / 12 Icons */}
            <div
              className="
      flex flex-wrap
      justify-center
      items-center
      gap-8

      max-[767px]:grid
      max-[767px]:grid-cols-3
      max-[767px]:gap-x-3
      max-[767px]:gap-y-8
    "
            >
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img2.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Search Ads
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img3.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Shopping Ads
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img4.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Analytics
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img5.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Mobile Ads
                </span>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img6.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Display Ads
                </span>
              </div>

              {/* Item 6 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img7.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Video Ads
                </span>
              </div>

              {/* Item 7 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img8.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Business Ads
                </span>
              </div>

              {/* Item 8 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img9.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Certification
                </span>
              </div>

              {/* Item 9 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img10.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Partner
                </span>
              </div>

              {/* Item 10 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img11.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Performance
                </span>
              </div>

              {/* Item 11 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img12.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Marketing
                </span>
              </div>

              {/* Item 12 */}
              <div className="flex flex-col items-center gap-3 text-center">
                <Image
                  width={90}
                  height={90}
                  src="/whoppingreact/about/google/img13.png"
                  alt=""
                  className="w-[90px] h-[90px] object-contain border rounded-full p-3"
                />
                <span className="text-white text-[14px] leading-tight">
                  Google <br /> Certified
                </span>
              </div>
            </div>

            {/* Bottom Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-12">
              {/* <Image
      width={70}
      height={70}
      src="/whoppingreact/about/google/img9.png"
      alt=""
      className="object-contain"
    />

    <Image
      width={70}
      height={70}
      src="/whoppingreact/about/google/img10.png"
      alt=""
      className="object-contain"
    /> */}

              {/* <Image
      width={70}
      height={70}
      src="/whoppingreact/about/google/img11.png"
      alt=""
      className="object-contain"
    />

    <Image
      width={70}
      height={70}
      src="/whoppingreact/about/google/img12.png"
      alt=""
      className="object-contain"
    />

    <Image
      width={70}
      height={70}
      src="/whoppingreact/about/google/img13.png"
      alt=""
      className="object-contain"
    /> */}
            </div>
          </div>

          <div
            className="
    flex items-center justify-between
    w-full
  mt-[128px]!
    text-[35px]!
    leading-[45px]!
    font-bold!
    text-center

    max-[767px]:mt-[90px]!
    max-[767px]:px-4
    max-[767px]:text-[30px]!
    max-[767px]:leading-[38px]!
  "
          >
            <span className="w-full text-center  leading-[40px]! text-[#FFFFFF]!">
              “Elevate Your Business <br />
              with WhoppingSEO”
            </span>
          </div>
        </Container>
      </div>

      <div className="py-[2rem] pb-[8rem] bg-black ">
        <Container>
          <Row>
            <Col>
              {/* Heading */}
              <div className="flex items-center gap-3 pb-3 max-[767px]:justify-center">
                <Image
                  width={44}
                  height={44}
                  src="/whoppingreact/about/bluetick.png"
                  alt=""
                />

                <h2
                  className="
      text-[35px]!
      font-bold!
      m-0
      text-[#FFFFFF]
      border-b
      border-[#FFFFFF]
      max-[767px]:!text-[30px]
    "
                >
                  CORE MIND
                </h2>
              </div>

              <p
                className="text-[20px]! font-medium! mt-[26px]!  max-[767px]:text-center
    max-[767px]:text-[17px]!
    max-[767px]:leading-[26px]!  pb-10 text-[#FFFFFF]"
              >
                Reimagining Digital. We’re more than a digital agency; we’re a
                catalyst for transformation. Our team’s passion for innovation
                and commitment to excellence will help your business stand out
                in the digital landscape.
              </p>

              {/* Team Cards */}
              <div
                ref={sliderRef}
                className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8

        max-md:flex
        max-md:overflow-x-auto
        max-md:gap-4
        max-md:snap-x
        max-md:snap-mandatory
        max-md:scroll-smooth
        max-md:[scrollbar-width:none]
        max-md:[&::-webkit-scrollbar]:hidden
      "
              >
                {/* =========================
          CARD 1
      ========================= */}
                <div
                  className="
          team-card
          group
          bg-[#100606]
          relative
          rounded-[14px]
          overflow-hidden
          transition-all
          ease-out
          duration-800
          
          hover:bg-white
          hover:text-black

          max-md:min-w-full
          max-md:w-full
          max-md:flex-shrink-0
          max-md:snap-center
        "
                >
                  <div className="overflow-hidden">
                    <Image
                      width={400}
                      height={500}
                      src="/whoppingreact/about/team/img1.png"
                      alt="Utkarsh Khare"
                      className="
              w-full
              h-[390px]
              object-cover
              px-2
              transition-transform
              duration-500
              group-hover:scale-105
            "
                    />
                  </div>

                  <div className="transition-all ease-out">
                    <div
                      className="
              hidden
              group-hover:flex
              justify-center
              group-hover:bottom-22
              group-hover:opacity-100
              transition-all
              duration-500
              ease-in-out
              absolute
              bottom-22
              py-1
              bg-white
              w-full
              gap-[45px]
              pb-3
            "
                    >
                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/gmail.png"
                        alt="Gmail"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/business.png"
                        alt="Business"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/phone.png"
                        alt="Phone"
                      />
                    </div>

                    <h3
                      className="
              text-[20px]!
              pt-3!
              text-[#FFFFFF]!
              text-center
              font-bold!
              transition-all
              duration-500
              mb-1!
            "
                    >
                      Utkarsh Khare
                    </h3>

                    <p
                      className="
              text-[14px]!
              pb-3!
                  text-[#FFFFFF]!
              text-center!
              group-hover:text-black
              transition-all
              duration-500
            "
                    >
                      Founder & CEO
                    </p>
                  </div>
                </div>

                {/* =========================
          CARD 2
      ========================= */}
                <div
                  className="
          team-card
          group
          bg-[#100606]
          relative
          rounded-[14px]
          overflow-hidden
          transition-all
          ease-out
          duration-800

          hover:bg-white
          hover:text-black

          max-md:min-w-full
          max-md:w-full
          max-md:flex-shrink-0
          max-md:snap-center
        "
                >
                  <div className="overflow-hidden">
                    <Image
                      width={400}
                      height={500}
                      src="/whoppingreact/about/team/img2.png"
                      alt="Amit Chouhan"
                      className="
              w-full
              h-[390px]
              object-cover
              px-2
              transition-transform
              duration-500
              group-hover:scale-105
            "
                    />
                  </div>

                  <div className="transition-all ease-out">
                    <div
                      className="
              hidden
              group-hover:flex
              justify-center
              group-hover:bottom-22
              group-hover:opacity-100
              transition-all
              duration-500
              ease-in-out
              absolute
              bottom-22
              py-1
              bg-white
              w-full
              gap-[45px]
              pb-3
            "
                    >
                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/gmail.png"
                        alt="Gmail"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/business.png"
                        alt="Business"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/phone.png"
                        alt="Phone"
                      />
                    </div>

                    <h3
                      className="
              text-[20px]!
              pt-3!
              text-center
                  text-[#FFFFFF]!
              font-bold!
              transition-all
              duration-500
              mb-1!
            "
                    >
                      Amit Chouhan
                    </h3>

                    <p
                      className="
              text-[14px]!
              pb-3
              text-center
                  text-[#FFFFFF]!
              group-hover:text-black
              transition-all
              duration-500
            "
                    >
                      Digital Marketing Lead
                    </p>
                  </div>
                </div>

                {/* =========================
          CARD 3
      ========================= */}
                <div
                  className="
          team-card
          group
          bg-[#100606]
          relative
          rounded-[14px]
          overflow-hidden
          transition-all
          ease-out
          duration-800

          hover:bg-white
          hover:text-black

          max-md:min-w-full
          max-md:w-full
          max-md:flex-shrink-0
          max-md:snap-center
        "
                >
                  <div className="overflow-hidden">
                    <Image
                      width={400}
                      height={500}
                      src="/whoppingreact/about/team/img3.png"
                      alt="Shikha Vaid"
                      className="
              w-full
              h-[390px]
              object-cover
              px-2
              transition-transform
              duration-500
              group-hover:scale-105
            "
                    />
                  </div>

                  <div className="transition-all ease-out">
                    <div
                      className="
              hidden
              group-hover:flex
              justify-center
              group-hover:bottom-22
              group-hover:opacity-100
              transition-all
              duration-500
              ease-in-out
              absolute
              bottom-22
              py-1
              bg-white
              w-full
              gap-[45px]
              pb-3
            "
                    >
                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/gmail.png"
                        alt="Gmail"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/business.png"
                        alt="Business"
                      />

                      <Image
                        width={28}
                        height={28}
                        src="/whoppingreact/about/team/phone.png"
                        alt="Phone"
                      />
                    </div>

                    <h3
                      className="
              text-[20px]!
              pt-3
                 text-[#FFFFFF]!
              text-center
              font-bold!
              transition-all
              duration-500
              mb-1!
            "
                    >
                      Shikha Vaid
                    </h3>

                    <p
                      className="
              text-[14px]!
              pb-3
              text-center
                 text-[#FFFFFF]!
              group-hover:text-black
              transition-all
              duration-500
            "
                    >
                      Project Manager
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
