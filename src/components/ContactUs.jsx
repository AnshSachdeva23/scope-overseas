import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer
      className="bg-[#6B4C2C] text-white px-6 py-16 md:px-32"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-white/80 mb-10">
          Have a question or want to work with us? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 bg-[#735333] text-white placeholder-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 bg-[#735333] text-white placeholder-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 bg-[#735333] text-white placeholder-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-[#4B3621] font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-white/80 text-sm text-center space-y-2">
          <p className="flex justify-center items-center gap-2">
            <span>📞</span>
            <span>+91 7838411038</span>
          </p>
          <p className="flex justify-center items-center gap-2">
            <span>📍</span>
            <span>
              Flat 1202, Tower-1, Sunshine County, Kundli District, Sonipat, Haryana, India
            </span>
          </p>
          <p className="pt-4 text-white/60">
            © {new Date().getFullYear()} Scope Overseas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
