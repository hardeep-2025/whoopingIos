import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactSection from './contactform';

const ContactUs = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <div>
<div className="banner relative h-[680px] overflow-hidden">
      <Image
src={`/whoppingreact/contact/bg.png`}
    alt="Banner"
    fill
    className="img -z-10 object-cover "
  />
    <Container>
      <Row>
      <Col>
            <section className="bannnerSection  flex items-center justify-center mt-[10%]  flex-col gap-3 text-white">

              <div className="bannerHeading font-bold  font-['Poppins']">
                    <h1 className="text-[45px]! border-b !border-[#FFFFFF] leading-[38px] md:text-[45px] md:leading-[50px] font-bold!">
                      Contact Us
                </h1>
              </div>              
            </section>
      </Col>
      </Row>
    </Container>
    </div>
    <div className=''><ContactSection /></div>
    <div className='bg-black pb-[6rem] max-[480px]:mt-[3rem]!'>
        <Container>
            <Row>
                <Col>
                <div className='flex gap-15 border border-.5 py-15 rounded-[15px] px-10 bg-[linear-gradient(104.88deg,_rgba(36,25,43,0.77)_-4.64%,_rgba(16,4,4,0.77)_94.31%)]! max-[991px]:flex-col max-[991px]:items-center max-[767px]:py-10! max-[767px]:px-5! max-[767px]:mt-[18rem] max-[767px]:items-start'>
                      <div className='w-1/3 flex gap-3 items-start max-[991px]:w-full  '>
                          <div >
                            <Image 
                            width={82}
                            height={42}
                            src={`/whoppingreact/contact/img1.png`}
                            alt=''
                            />
                          </div>
                          <div className='flex flex-col text-[18px] '>
                            <span className='font-extrabold! pb-3'>ADDRESS</span>
                            <span className=''>400, Valley Road, Suite 202,Mount Arlington NJ 07856</span>
                          </div>
                      </div>
                      <div className='w-1/3 flex gap-3 items-start max-[991px]:w-full '>
                          <div >
                            <Image 
                            width={42}
                            height={42}
                            src={`/whoppingreact/contact/img2.png`}
                            alt=''
                            />
                          </div>
                          <div className='flex flex-col text-[18px]'>
                            <span className='font-extrabold! pb-3'>GENERAL QUERIES</span>
                            <span className=''>+91-9915841204</span>
                          </div>
                      </div>
                      <div className='w-1/3 flex gap-3 items-start max-[991px]:w-full '>
                          <div >
                            <Image 
                            width={42}
                            height={42}
                            src={`/whoppingreact/contact/img3.png`}
                            alt=''
                            />
                          </div>
                          <div className='flex flex-col text-[18px]'>
                            <span className='font-extrabold! pb-3'>Careers</span>
                            <span className='max-[455px]:text-[14px]'>contact@whoppingseo.com</span>
                          </div>
                      </div>

                </div>
                </Col>
            </Row>
        </Container>
  <div className='pt-[6rem]'>
    <Container>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.769286539613!2d-74.64184262523446!3d40.89887552615623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c375763ac00001%3A0xf2e72952de3b4ce8!2s400%20Valley%20Rd%20Suite%20202%2C%20Mt%20Arlington%2C%20NJ%2007856%2C%20USA!5e0!3m2!1sen!2sin!4v1779792310059!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full! rounded-[25px]'
        ></iframe>
    </Container>

  </div>
    </div>
        </div>
    );
}

export default ContactUs;
