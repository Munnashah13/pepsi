"use client";

import Hero from "@/components/Hero";
import Button from "@/components/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: (
        <>
          700 Anderson Hill Road<br />
          Purchase, NY 10577<br />
          United States
        </>
      ),
    },
    {
      icon: "📞",
      title: "Phone",
      content: "1-800-PEPSI-CO",
    },
    {
      icon: "📧",
      title: "Email",
      content: "info@pepsi.com",
    },
    {
      icon: "🕐",
      title: "Business Hours",
      content: (
        <>
          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
          Saturday - Sunday: Closed
        </>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's start a conversation."
        ctaText="View Products"
        ctaLink="/services"
      />

      <section className="py-24 bg-[#f5f3f4]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg text-[#0b090a] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#161a1d] font-semibold mb-3 text-lg">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#d3d3d3] rounded-xl focus:border-[#a4161a] focus:outline-none transition-colors bg-[#ffffff] text-[#0b090a] text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#161a1d] font-semibold mb-3 text-lg">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#d3d3d3] rounded-xl focus:border-[#a4161a] focus:outline-none transition-colors bg-[#ffffff] text-[#0b090a] text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#161a1d] font-semibold mb-3 text-lg">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-[#d3d3d3] rounded-xl focus:border-[#a4161a] focus:outline-none transition-colors bg-[#ffffff] text-[#0b090a] text-lg"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#161a1d] font-semibold mb-3 text-lg">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-[#d3d3d3] rounded-xl focus:border-[#a4161a] focus:outline-none transition-colors resize-none bg-[#ffffff] text-[#0b090a] text-lg"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg text-[#0b090a] mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#ffffff] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl flex-shrink-0">{info.icon}</span>
                      <div>
                        <h3 className="font-bold text-xl text-[#0b090a] mb-2">{info.title}</h3>
                        <p className="text-[#161a1d] text-lg leading-relaxed">{info.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 bg-gradient-to-br from-[#a4161a] to-[#e5383b] text-[#f5f3f4] rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-bold text-2xl mb-4">Quick Response Guaranteed</h3>
                <p className="text-[#d3d3d3] text-lg leading-relaxed">
                  We typically respond to all inquiries within 24-48 hours during business days.
                  For urgent matters, please call our hotline directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA Section */}
      <section className="py-24 bg-[#0b090a]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-lg text-[#f5f3f4] mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-[#d3d3d3] max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you're interested in partnerships, product inquiries, or just want to share your
              Pepsi story, we're here to listen and help make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/about" variant="outline-light">
                Learn About Us
              </Button>
              <Button href="/services" variant="outline-light">
                Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
