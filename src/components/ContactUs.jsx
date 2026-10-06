import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactSection from "./contactform";

const ContactUs = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div>
      <div className="banner relative h-[620px]!"
      
      >
       <div
  className="absolute top-0 left-1/2 z-0 h-full w-full bg-[#0d0d0d]! max-w-[1440px] -translate-x-1/2 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/whoppingreact/contact/bg.png')",
  }}
></div>

        {/* <Image
          src={`/whoppingreact/contact/bg.png`}
          alt="Banner"
          fill
          className="img -z-10 object-cover "
        /> */}
        <Container>
          <Row>
            <Col>
              <section className="bannnerSection  flex items-center justify-center mt-[48px]!   max-[768px]:mt-[32px]! flex-col gap-3 text-white">
                <div className="bannerHeading font-bold  font-['Poppins']">
                  <h1 className="text-[45px]! border-b  relative !border-[#FFFFFF] leading-[38px] md:text-[45px] md:leading-[50px] font-bold!" style={{zIndex:"2"}}>
                    Contact Us
                  </h1>
                </div>
              </section>
            </Col>
          </Row>
        </Container>

         <ContactSection />
      </div>
      {/* <div className="">
       
      </div> */}
      
<div className="bg-black relative z-10    mt-[clamp(95px,34.72vw,500px)]!">
        <Container>
          <Row>
            <Col className="">
              <div className="flex gap-15 border border-.5 py-15 rounded-[15px] px-10 bg-[linear-gradient(104.88deg,_rgba(36,25,43,0.77)_-4.64%,_rgba(16,4,4,0.77)_94.31%)]! max-[991px]:flex-col max-[991px]:items-center max-[767px]:py-10!  max-[767px]:mt-[37rem]! max-[768px]:items-start!">
                <div className="w-1/3 flex gap-3 items-start max-[991px]:w-full  ">
                  <div>
                    <Image
                      width={42}
                      height={42}
                        className="min-w-[42px]! min-h-[42px]! w-[42px]! h-[42px]!"
                      src={`/whoppingreact/contact/img1.png`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-[18px] ">
                    <span className="font-bold! pb-3 text-[#FFFFFF]!">
                      ADDRESS
                    </span>
                    <span className="text-[#FFFFFF]!">
                      400, Valley Road, Suite 202,Mount Arlington NJ 07856
                    </span>
                  </div>
                </div>
                <div className="w-1/3 flex gap-3 items-start max-[991px]:w-full ">
                  <div>
<Image
  width={42}
  height={42}
  className="min-w-[42px]! min-h-[42px]! w-[42px]! h-[42px]!"
  src="/whoppingreact/contact/img2.png"
  alt="max-42"
/>


                  </div>
                  <div className="flex flex-col text-[18px]">
                    <span className="font-extrabold! pb-3 text-[#FFFFFF]!">
                      GENERAL QUERIES
                    </span>
                    <a href="tel:+919915841204" className="text-[#FFFFFF]!">
                      +91-9915841204
                    </a>
                  </div>
                </div>
                <div className="w-1/3 flex gap-3 items-start max-[991px]:w-full ">
                  <div>
                    <Image
                         width={42}
                      height={42}
                      src={`/whoppingreact/contact/img3.png`}
                        className="min-w-[42px]! min-h-[42px]! w-[42px]! h-[42px]!"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col text-[18px]">
                    <span className="font-extrabold! pb-3 text-[#FFFFFF]!">
                      CAREERS
                    </span>
                    <a
                      href="mailto:contact@whoppingseo.com"
                      className="max-[455px]:text-[14px] text-[#FFFFFF]! hover:underline"
                    >
                      contact@whoppingseo.com
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="pb-[6rem]!  mt-[6rem]!">
          <Container>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.769286539613!2d-74.64184262523446!3d40.89887552615623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c375763ac00001%3A0xf2e72952de3b4ce8!2s400%20Valley%20Rd%20Suite%20202%2C%20Mt%20Arlington%2C%20NJ%2007856%2C%20USA!5e0!3m2!1sen!2sin!4v1779792310059!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full! rounded-[25px]"
            ></iframe>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
