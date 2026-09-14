import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";

function Footer() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/whoppingseo",
      icon: "/whoppingreact/linkedin.png",
    },
    {
      name: "X",
      url: "https://x.com/WhoppingSEO",
      icon: "/whoppingreact/twitter.png",
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/whoppingseo/",
      icon: "/whoppingreact/pinterest.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/whoppingseo",
      icon: "/whoppingreact/socialinsta.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/WhoppingSEO",
      icon: "/whoppingreact/facebook.png",
    },
  ];

  return (
    <div className="bg-[linear-gradient(107.89deg,_#100335_0%,_#061B47_97.43%)] overflow-hidden">
      <Container>
        <Row>
          <Col>
            <footer>
              <div>
                {/* Footer Main Image */}
                <div className="m-auto footerImageContainer mx-5 pt-5 flex my-10 gap-[3rem] items-center justify-center flex-wrap max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-6">
                  <Image
                    src="/whoppingreact/google1.png"
                    alt="Google"
                    width={105}
                    height={105}
                    className="FotterImage"
                  />

                  <Image
                    src="/whoppingreact/top.png"
                    alt="Top"
                    width={105}
                    height={105}
                    className="FotterImage"
                  />

                  <Image
                    src="/whoppingreact/meta.png"
                    alt="Meta"
                    width={105}
                    height={105}
                    className="FotterImage"
                  />

                  <Image
                    src="/whoppingreact/clutch.png"
                    alt="Clutch"
                    width={105}
                    height={105}
                    className="FotterImage"
                  />
                </div>

                <div
                  className="
                    footerTextContainer
                    flex justify-between py-[4rem] gap-15 flex-wrap

                    max-[1191px]:grid
                    max-[1191px]:grid-cols-2

                    max-[767px]:grid-cols-1
                    max-[767px]:text-left
                    max-[767px]:justify-items-start
                  "
                >
                  {/* Logo Section */}
                  <div className="LogoSection w-1/5 max-[1191px]:w-full">
                    <Image
                      src={`/whoppingreact/footer_logo.png`}
                      alt="Logo"
                      width={200}
                      height={200}
                      className="FooterLogo pb-4.5"
                    />

                    <p className="Logotitle w-full text-[15px] !text-[#FFFFFF] max-w-[300px] pb-4">
                      Over the years, we’ve built strong ideas and lasting
                      memories, driven by our commitment to delivering
                      top-quality digital marketing and web development
                      solutions—the core of our company.
                    </p>

                    <span className="SocialMediaLogo flex items-center gap-1 ">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <Image
                              height={25}
                              width={25}
                              src={social.icon}
                              alt=""
                            />
                          </a>
                        );
                      })}
                    </span>
                  </div>

                  {/* Contact Section */}
                  <div className="ContactSection !text-[#FFFFFF]  w-1/5  max-w-[250px] max-[1191px]:w-full">
                    <h3 className="ContactTitle !text-[20px] font-semibold! pb-4 uppercase">
                      Contact
                    </h3>
                    <div className="flex items-start gap-2 ">
                      <span className=" bg-[#1A98FF] rounded-full p-1 text-[24px] text-black">
                        <IoLocationSharp />{" "}
                      </span>
                      <p className="ContactInfo text-[15px]!  ">
                        400, Valley Road, Suite 202, Mount Arlington NJ 07856
                      </p>
                    </div>

                    <div className="flex items-start gap-2 ">
                      <span className=" bg-[#1A98FF] rounded-full p-1 text-[24px] text-black">
                        <TiDocumentText />{" "}
                      </span>
                      <p className="ContactInfo text-[15px]!  ">
                        GENERAL QUERIES <br />
                        +91-9915841204
                      </p>
                    </div>

                    <div className="flex items-start gap-2 ">
                      <span className=" bg-[#1A98FF] rounded-full p-1 text-[24px] text-black">
                        <IoIosMail />{" "}
                      </span>
                      <p className="ContactInfo text-[15px]! ">
                        CAREERS
                        <br />
                        contact@whoppingseo.com
                      </p>
                    </div>
                  </div>

                  {/* Services Links */}
                  <div className="servisesList w-1/5 flex !text-[#FFFFFF] flex-col max-[1191px]:w-full">
                    <h3 className="ContactTitle !text-[20px] pb-4 font-semibold! uppercase!">
                      Services
                    </h3>

                    <Link
                      href="/services/digital-marketing-services"
                      className="lsit text-[15px]! !no-underline text-white flex gap-2 items-center pb-3.5"
                    >
                      <FaAngleDoubleRight /> Digital Marketing Service
                    </Link>

                    <Link
                      href="/services/seo-services"
                      className="lsit text-[15px]! !no-underline text-white flex gap-2 items-center pb-3.5"
                    >
                      <FaAngleDoubleRight /> SEO Service
                    </Link>

                    <Link
                      href="/services/local-seo-services"
                      className="lsit text-[15px]! !no-underline text-white flex gap-2 items-center pb-2.5"
                    >
                      <FaAngleDoubleRight /> Local SEO Service
                    </Link>

                    <Link
                      href="/services/ppc-services"
                      className="lsit text-[15px]! !no-underline text-white flex gap-2 items-center pb-3.5"
                    >
                      <FaAngleDoubleRight /> PPC Service
                    </Link>

                    <Link
                      href="/services/social-media-marketing-services"
                      className="lsit text-[15px]! !no-underline text-white flex gap-2 items-center pb-3.5"
                    >
                      <FaAngleDoubleRight /> SMM Service
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div className="QuisckLink flex !text-[#FFFFFF] flex-col w-1/5 max-[1191px]:w-full">
                    <h3 className="ContactTitle !text-[20px] pb-4 font-semibold! uppercase!">
                      Quick Links
                    </h3>

                    <Link
                      href="/about-us"
                      className="Qlink text-[15px]! !no-underline flex gap-2 items-center  text-white pb-3.5"
                    >
                      {/* <FaAngleDoubleRight /> About Us */}
                      About Us
                    </Link>

                    <Link
                      href="/blog"
                      className="Qlink text-[15px]! !no-underline flex gap-2 items-center text-white pb-3.5"
                    >
                      {/* <FaAngleDoubleRight />  */}
                      Blogs
                    </Link>

                    <Link
                      href="/contact"
                      className="Qlink text-[15px]! !no-underline flex gap-2 items-start text-white pb-2.5"
                    >
                      {/* <FaAngleDoubleRight />  */}
                      Contact Us
                    </Link>

                    <Link
                      href="/services/digital-marketing-agency-in-frisco/"
                      className="Qlink text-[15px]! !no-underline flex gap-2 items-start text-white pb-2.5"
                    >
                      {/* <FaAngleDoubleRight /> */}
                      Digital Marketing Services in Frisco
                    </Link>

                    <Link
                      href="/services/ppc-in-dallas/"
                      className="Qlink text-[15px]! !no-underline flex gap-2 items-center text-white pb-2.5"
                    >
                      {/* <FaAngleDoubleRight /> */}
                      PPC in Dallas
                    </Link>
                  </div>
                </div>
              </div>

              <hr className="w-screen relative left-1/2 -translate-x-1/2 border-t h-[4px]!" />

              <div className="Copyright flex justify-between py-4 max-[991px]:flex-col max-[767px]:gap-4 max-[768px]:items-center max-[768px]:text-center">
                <span className="CopyrightText">
                  © 2024 Whopping SEO. All Rights Reserved.
                </span>

                <span className="TearmAndCondition">
                  <Link href="#" className="!no-underline text-white">
                    Terms and Conditions
                  </Link>{" "}
                  |{" "}
                  <Link href="#" className="!no-underline text-white">
                    Privacy Policy
                  </Link>{" "}
                  |{" "}
                  <Link href="#" className="!no-underline text-white">
                    Cancellation Policy
                  </Link>
                </span>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
