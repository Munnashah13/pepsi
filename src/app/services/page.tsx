"use client";

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [solutionsRef, solutionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      title: "Classic Pepsi",
      description: "Our original and most beloved cola beverage, delivering the iconic bold taste that's refreshed the world since 1893.",
      icon: "🥤",
    },
    {
      title: "Pepsi Zero Sugar",
      description: "All the bold taste of Pepsi with zero sugar and zero calories. Enjoy guilt-free refreshment without compromise.",
      icon: "🎯",
    },
    {
      title: "Pepsi Max",
      description: "Maximum taste, maximum refreshment with no sugar. Engineered for those who demand more from their cola.",
      icon: "⚡",
    },
    {
      title: "Diet Pepsi",
      description: "A light, crisp cola taste with zero calories. The perfect balance of flavor and refreshment.",
      icon: "💎",
    },
    {
      title: "Flavored Varieties",
      description: "Cherry, Vanilla, Lime, and other exciting flavor combinations. Discover your new favorite twist on classic Pepsi.",
      icon: "🍒",
    },
    {
      title: "Corporate Partnerships",
      description: "Partnering with businesses for events, catering, and custom beverage solutions that elevate any occasion.",
      icon: "🤝",
    },
  ];

  const solutions = [
    {
      title: "Events",
      description: "Refreshment solutions for events of all sizes, from intimate gatherings to massive festivals.",
      icon: "🎉",
    },
    {
      title: "Retail",
      description: "Comprehensive product lines and merchandising support for retailers and convenience stores.",
      icon: "🏪",
    },
    {
      title: "Hospitality",
      description: "Premium beverage programs tailored for restaurants, hotels, and entertainment venues.",
      icon: "🍽️",
    },
  ];

  return (
    <>
      <Hero
        title="Our Products & Services"
        subtitle="Discover the full range of Pepsi offerings that bring refreshment to every moment"
        ctaText="Get in Touch"
        ctaLink="/contact"
        secondaryCtaText="Learn About Us"
        secondaryCtaLink="/about"
      />

      {/* Products Grid */}
      <section className="py-24 bg-[#f5f3f4]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-[#0b090a] mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-[#161a1d] max-w-2xl mx-auto">
              From timeless classics to innovative new flavors, explore our complete range of beverages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                description={product.description}
                icon={<span className="text-5xl">{product.icon}</span>}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section ref={solutionsRef} className="py-24 bg-gradient-to-br from-[#660708] to-[#a4161a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-[#f5f3f4] mb-6">Custom Solutions</h2>
            <p className="text-xl text-[#d3d3d3] max-w-3xl mx-auto leading-relaxed">
              Looking for custom beverage solutions for your business or event?
              We offer tailored packages and partnerships to meet your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#ffffff]/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-[#ffffff]/15 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#f5f3f4]">{solution.title}</h3>
                <p className="text-[#d3d3d3] leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button href="/contact" variant="outline-light">
              Request a Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#ffffff]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-lg text-[#0b090a] mb-12 text-center">
              Why Choose Pepsi?
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 rounded-xl bg-[#f5f3f4] hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl flex-shrink-0">🏆</div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b090a] mb-2">Unmatched Quality</h4>
                  <p className="text-[#161a1d] leading-relaxed">
                    Every bottle, can, and fountain drink meets our rigorous quality standards,
                    ensuring consistent taste and refreshment every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-xl bg-[#f5f3f4] hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl flex-shrink-0">🌱</div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b090a] mb-2">Sustainable Practices</h4>
                  <p className="text-[#161a1d] leading-relaxed">
                    We're committed to reducing our environmental footprint through innovative
                    packaging, water stewardship, and renewable energy initiatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-xl bg-[#f5f3f4] hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl flex-shrink-0">🚀</div>
                <div>
                  <h4 className="text-xl font-bold text-[#0b090a] mb-2">Continuous Innovation</h4>
                  <p className="text-[#161a1d] leading-relaxed">
                    From new flavor profiles to cutting-edge packaging solutions, we never stop
                    innovating to deliver better experiences for our consumers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
