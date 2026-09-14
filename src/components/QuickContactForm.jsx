"use client";

import React, { useState } from "react";
import { User, Mail, Phone, ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

const QuickContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    const loadingToastId = toast.loading("Sending...");

    try {
      const res = await fetch("https://whoppingseo.com/api/servies-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === 0) {
        toast.success("Thanks! We'll be in touch shortly.", { id: loadingToastId });

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        toast.error(result.msg || "Something went wrong. Please try again.", {
          id: loadingToastId,
        });
      }
    } catch (error) {
      console.error("Quick contact form submission error:", error);
      toast.error("Network error. Please try again.", { id: loadingToastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center text-white">

      {/* Heading */}
      <h2 className="text-[38px]! md:text-[55px]! font-extrabold leading-tight">
        Lets Have the Conversation Your Business
        <br />
        Has Been Waiting For
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 text-[20px]! mt-6 max-w-[750px] mx-auto leading-relaxed">
        Every day without a strategy is money left on the table.
        Let`s change that — starting today
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-16"
      >

        {/* Name */}
        <div className="flex items-center gap-3 border border-gray-700 rounded-full w-[295px]! h-[60px]! px-6 py-4 w-full lg:w-[270px] bg-black">
          <User size={18} className="text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400 disabled:opacity-60"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border border-gray-700 rounded-full w-[295px]! h-[60px]! px-6 py-4 w-full lg:w-[270px] bg-black">
          <Mail size={18} className="text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={handleChange}
            disabled={isSubmitting}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400 disabled:opacity-60"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 border border-gray-700 rounded-full w-[295px]! h-[60px]! px-6 py-4 w-full lg:w-[270px] bg-black">
          <Phone size={18} className="text-gray-400" />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            required
            onChange={handleChange}
            disabled={isSubmitting}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400 disabled:opacity-60"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-10 py-4 rounded-full! bg-gradient-to-r from-[#1A62FF] to-[#6A00FF] hover:opacity-90 transition-all duration-300 flex items-center gap-2 font-semibold text-white w-full lg:w-auto justify-center w-[292px]! h-[60px]! disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Get in Touch"}
          {!isSubmitting && <ArrowUpRight size={18} />}
        </button>

      </form>
    </div>
  );
};

export default QuickContactForm;