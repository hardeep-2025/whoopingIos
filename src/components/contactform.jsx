"use client";

import React, { useState } from "react";
import {
  Container,
  Spinner,
  Toast,
  ToastContainer,
  Modal,
} from "react-bootstrap";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success", // "success" | "danger"
  });

  const showToast = (message, variant = "success") => {
    setToast({ show: true, message, variant });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    // Validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      showToast("Please fill all fields", "danger");
      return;
    }

    setIsSubmitting(true);

    // Save current form data before clearing
    const submittedData = { ...formData };

    // =====================================================
    // SHOW MODAL IMMEDIATELY
    // =====================================================

    setShowSuccessModal(true);

    // Clear form immediately
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });

    try {
      const res = await fetch("https://whoppingseo.com/api/whooping-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      const result = await res.json();

      // ===================================================
      // API FAILED
      // ===================================================

      if (result.status !== 0) {
        setShowSuccessModal(false);

        showToast(
          result.msg || "Something went wrong. Please try again.",
          "danger",
        );
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      // Close success modal if API failed
      setShowSuccessModal(false);

      showToast("Network error. Please try again.", "danger");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[8rem]! py-[66px]!  max-[768px]:px-[0px]! bg-black h-[700px]">
      {/* Toast Notifications */}
      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={toast.show}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
          delay={4000}
          autohide
          bg={toast.variant}
        >
          <Toast.Header closeButton>
            <strong className="me-auto">
              {toast.variant === "success" ? "Success" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body
            className={toast.variant === "danger" ? "text-white" : ""}
          >
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>

  
        {/* Main Box */}
   <div className="relative max-w-[865px]! m-auto! z-20 overflow-hidden rounded-[20px] border border-[#2140FF]! bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] px-12! md:px-12! py-12! max-[768px]:-top-[40px]! max-[768px]:mx-[10px]! max-[768px]:px-2!  ">

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-[#FFFFFF]! text-[35px]! font-semibold! pb-[32px]!  max-[768px]:leading-[25px]! max-[768px]:text-center! max-[768px]:pb-[39px]!">
              Who we are?
            </h2>

            <p className="text-[#FFFFFF] text-[16px]! max-[768px]:text-[18px]! font-medium! leading-[20px]! pb-[32px]!  max-[768px]:pb-[47px]! max-[768px]:text-center!">
              We at WhoppingSEO think that the success of our customers is
              directly proportional to our growth as a company. We want to help
              our clients achieve in their businesses by providing them with
              quality services that help them reach their full potential as
              business owners.
            </p>

            {/* Sub Heading */}
            <h3 className="text-[#FFFFFF]! text-[35px]! font-normal!  max-[768px]:text-center! max-[768px]:mb-[22px]!">
              Our <span className="text-[#1A98FF] font-bold!">Team</span> Is
              Ready To Help
            </h3>

            <p className="text-[#FFFFFF]! text-[16px]! leading-[20px]! mt-[13px]! font-medium! max-[768px]:text-center!  max-[768px]:text-[18px]!">
              We’re here to help! Reach out to us for expert guidance,
              personalized SEO solutions, or any questions you have.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4  max-[768px]:gap-[13px]!  pb-4 max-[768px]:mt-[38px]! mt-[27px]!">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none"
                />
              </div>

              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none resize-none"
              />

              <div className="flex justify-end pt-10 max-[768px]:pt-[23px]! ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r  from-[#1B51CC] to-[#2B0E66] hover:bg-[#1B52D6] transition-all duration-300 text-white w-[196px]! h-[50px]! text-[20px]! rounded-full! flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
  

      {/* Responsive Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        dialogClassName="mx-auto my-auto px-2 max-w-[296px] sm:max-w-[500px]"
        contentClassName="bg-transparent border-0 shadow-none p-0"
      >
        {/* Outer 0.5px Gradient Border Container */}
        <div
          className="rounded-[15px] mt-[110px]!   max-[767px]:mt-[170px]! overflow-hidden"
          style={{
            background:
              "linear-gradient(146.21deg, #A31AFF 2.14%, #1A62FF 100%)",
          }}
        >
          {/* Inner Content - Mobile Specs: 296x488, Desktop Specs: 500x452 */}
          <div
            className="
    rounded-[14.5px]
    px-4
    py-6
    sm:px-10
    sm:py-8
    text-center
    text-white
    w-[296px]
    sm:w-[500px]!
    h-[488px]!
    sm:h-[452px]!
    max-h-[85vh]
    max-[768px]:max-h-[488px]!
    max-[768px]:max-w-[296px]!
    overflow-y-auto
    flex
    flex-col
    items-center
    justify-between
  "
            style={{
              background:
                "linear-gradient(146.49deg, rgba(17, 58, 146, 0.96) 5.13%, rgba(44, 12, 65, 0.96) 96.71%)",
            }}
          >
            <div className="flex flex-col items-center w-full justify-between">
              {/* Title */}
              <h2 className="text-[#FFFFFF]! text-[35px]! mt-[60px]!   max-[767px]:mt-[41px]! leading-[25px]! font-semibold! mb-4  tracking-tight leading-tight">
                Thank You!
              </h2>

              {/* Main Message */}
              <p className="text-[#FFFFFF] text-[18px]! font-normal! mt-[39px]! leading-[24px]! text-center">
                Your message has been successfully sent. <br />
                <span className="font-medium! block mt-1">
                  Our team will get back to you shortly.
                </span>
              </p>

              {/* Subtext */}
              <p className="text-[#FFFFFF]! text-[18px]! font-normal mt-[39px]! leading-[24px]! text-center">
                We appreciate your interest in <br />
                <span className="font-medium!"> IosAndWeb Technologies</span>
              </p>

              {/* Button */}
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="text-[#FFFFFF] text-[20px]! max-[767px]:mt-[39px]! mt-[39px]!  font-normal! w-[196px]! h-[50px]! rounded-[25px]! border-[1px] border-[#CAC5C51C] transition-all duration-300 hover:opacity-90 flex items-center justify-center cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #1B51CC 0%, #2B0E66 100%)",
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactSection;
