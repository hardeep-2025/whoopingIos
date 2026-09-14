"use client";

import React, { useState } from "react";
import { Container, Spinner, Toast, ToastContainer } from "react-bootstrap";

const ContactSection = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      showToast("Please fill all fields", "danger");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://whoppingseo.com/api/whooping-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === 0) {
        showToast("Form submitted successfully!", "success");

        // Clear Inputs
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        showToast(result.msg || "Something went wrong. Please try again.", "danger");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      showToast("Network error. Please try again.", "danger");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-[8rem] bg-black h-[700px] ">

      {/* Toast Notifications */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
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
          <Toast.Body className={toast.variant === "danger" ? "text-white" : ""}>
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Container>

        {/* Main Box */}
        <div className="relative relative -top-[500px]! z-20 overflow-hidden rounded-[20px] border border-[#2140FF]! bg-[linear-gradient(146.49deg,_rgba(17,58,146,0.4)_5.13%,_rgba(44,12,65,0.4)_96.71%)] px-20! md:px-10 py-20
        max-[991px]:py-15 max-[991px]:px-10! max-[480px]:-top-[600px]!
        ">

          {/* Removed Outside Blue Glow */}

          <div className="relative z-10">

            {/* Heading */}
            <h2 className="text-white text-[35px]! font-semibold! pb-2">
              Who we are?
            </h2>

            <p className="text-[#D2D2D2] text-[18px]  leading-[28px] pb-20">
              We at WhoppingSEO think that the success of our customers is directly
              proportional to our growth as a company. We want to help our clients
              achieve in their businesses by providing them with quality services
              that help them reach their full potential as business owners.
            </p>

            {/* Sub Heading */}
            <h3 className="text-white text-[35px]! font-normal">
              Our <span className="text-[#4DA2FF] font-bold!">Team</span> Is Ready To Help
            </h3>

            <p className="text-[#D2D2D2] text-[18px] font-semibold pb-8">
              We’re here to help! Reach out to us for expert guidance,
              personalized SEO solutions, or any questions you have.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

                <input
                  type="text"
                  required
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none disabled:opacity-60"
                />

                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none disabled:opacity-60"
                />

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none disabled:opacity-60"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none disabled:opacity-60"
                />

              </div>

              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-transparent border border-[#8F8F8F] rounded-[15px] px-4 py-3 text-white outline-none resize-none disabled:opacity-60"
              />

              <div className="flex justify-end pt-10">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#1B51CC] to-[#2B0E66] hover:bg-[#1B52D6] transition-all duration-300 text-white w-[196px] h-[50px] text-[20px]! rounded-full! disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner animation="border" size="sm" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

              </div>

            </form>

          </div>
          
        </div>

      </Container>
    </div>
  );
};

export default ContactSection;