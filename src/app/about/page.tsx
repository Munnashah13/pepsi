"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Hero
        title="About Pepsi"
        subtitle="A legacy of refreshment since 1893"
        ctaText="View Our Products"
        ctaLink="/services"
      />

      {/* Story Section */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-lg text-[#0b090a] mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#161a1d] leading-relaxed">
                Pepsi was created in 1893 by Caleb Bradham, a pharmacist from New Bern, North Carolina.
                Originally called "Brad's Drink," it was renamed Pepsi-Cola in 1898 and later shortened to Pepsi.
              </p>
              <p className="text-lg text-[#161a1d] leading-relaxed">
                Over the decades, Pepsi has grown from a small-town creation to a global phenomenon,
                enjoyed by millions of people in more than 200 countries and territories.
              </p>
              <p className="text-lg text-[#161a1d] leading-relaxed">
                Today, we continue to innovate and evolve, staying true to our mission of bringing
                refreshment and joy to consumers worldwide. Our commitment to quality, sustainability,
                and community drives everything we do.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, x: 30 }}
            animate={valuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#660708] to-[#a4161a] rounded-2xl p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-[#f5f3f4]">Our Values</h3>
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start"
              >
                <span className="text-[#e5383b] mr-4 text-3xl flex-shrink-0">✓</span>
                <div className="text-[#f5f3f4]">
                  <strong className="text-xl block mb-1">Quality</strong>
                  <span className="text-[#d3d3d3]">We maintain the highest standards in everything we do</span>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <span className="text-[#e5383b] mr-4 text-3xl flex-shrink-0">✓</span>
                <div className="text-[#f5f3f4]">
                  <strong className="text-xl block mb-1">Innovation</strong>
                  <span className="text-[#d3d3d3]">We continuously push boundaries to serve you better</span>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start"
              >
                <span className="text-[#e5383b] mr-4 text-3xl flex-shrink-0">✓</span>
                <div className="text-[#f5f3f4]">
                  <strong className="text-xl block mb-1">Sustainability</strong>
                  <span className="text-[#d3d3d3]">We're committed to protecting our planet for future generations</span>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start"
              >
                <span className="text-[#e5383b] mr-4 text-3xl flex-shrink-0">✓</span>
                <div className="text-[#f5f3f4]">
                  <strong className="text-xl block mb-1">Community</strong>
                  <span className="text-[#d3d3d3]">We believe in giving back and making a positive difference</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#f5f3f4]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg text-[#0b090a] mb-6">Our Mission</h2>
            <p className="text-xl text-[#161a1d] leading-relaxed mb-8">
              To create more smiles with every sip and every bite. We strive to be the global leader in
              convenient foods and beverages by winning with purpose, guided by our vision to be the
              best at refreshing the world and making a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="card text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-[#0b090a] mb-2">Excellence</h4>
                <p className="text-[#161a1d]">Delivering exceptional quality in every product</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h4 className="text-xl font-bold text-[#0b090a] mb-2">Responsibility</h4>
                <p className="text-[#161a1d]">Operating sustainably for people and planet</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">💡</div>
                <h4 className="text-xl font-bold text-[#0b090a] mb-2">Innovation</h4>
                <p className="text-[#161a1d]">Pioneering new ideas and experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-[#0b090a] mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-[#161a1d] max-w-2xl mx-auto">
              From a small pharmacy to a global icon, discover the milestones that shaped our story
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { year: "1893", event: "Pepsi-Cola is invented by Caleb Bradham in New Bern, North Carolina" },
              { year: "1898", event: "Officially renamed from Brad's Drink to Pepsi-Cola" },
              { year: "1961", event: "Shortened to simply 'Pepsi' and introduced modern branding" },
              { year: "1990s", event: "Global expansion with iconic advertising campaigns and celebrity partnerships" },
              { year: "2020s", event: "Leading focus on sustainability initiatives and innovative product development" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6 bg-[#f5f3f4] p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#a4161a] to-[#e5383b] text-[#f5f3f4] font-bold text-2xl px-8 py-4 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.year}
                </div>
                <p className="text-[#161a1d] text-lg leading-relaxed pt-3">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
