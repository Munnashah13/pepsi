"use client";

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Hero
        title="Welcome to Pepsi"
        subtitle="Experience the bold, refreshing taste that generations have loved"
        ctaText="Explore Our Products"
        ctaLink="/services"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      {/* Features Section */}
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
              Why Choose Pepsi?
            </h2>
            <p className="text-lg text-[#161a1d] max-w-2xl mx-auto">
              Discover what makes Pepsi the world's favorite beverage choice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Bold Taste"
              description="Our signature flavor that has been refreshing the world since 1893. A perfect balance of sweetness and fizz."
              icon={<span className="text-5xl">🥤</span>}
              delay={0}
            />
            <Card
              title="Global Brand"
              description="Enjoyed by millions across the globe, bringing people together through moments of refreshment and joy."
              icon={<span className="text-5xl">🌍</span>}
              delay={0.1}
            />
            <Card
              title="Innovation"
              description="Constantly evolving with new flavors, sustainable practices, and cutting-edge beverage technology."
              icon={<span className="text-5xl">⚡</span>}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-[#a4161a] to-[#660708]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f5f3f4] mb-3">130+</div>
              <div className="text-xl text-[#d3d3d3]">Years of Heritage</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f5f3f4] mb-3">200+</div>
              <div className="text-xl text-[#d3d3d3]">Countries Worldwide</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f5f3f4] mb-3">1B+</div>
              <div className="text-xl text-[#d3d3d3]">Daily Servings</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-24 bg-[#ffffff]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg text-[#0b090a] mb-6">
                A Legacy of Refreshment
              </h2>
              <p className="text-lg text-[#161a1d] mb-6 leading-relaxed">
                Since 1893, Pepsi has been more than just a beverage. We've been part of
                life's celebrations, quiet moments, and everything in between. Our commitment
                to quality, innovation, and refreshment has made us a global icon.
              </p>
              <p className="text-lg text-[#161a1d] mb-8 leading-relaxed">
                From our humble beginnings to becoming one of the world's most recognized
                brands, we continue to push boundaries and create moments of joy.
              </p>
              <Button href="/about" variant="primary">
                Discover Our Story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#ba181b] to-[#e5383b] rounded-2xl p-12 shadow-2xl">
                <div className="text-[#f5f3f4] space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Award Winning</h4>
                      <p className="text-[#d3d3d3]">Recognized globally for excellence in taste and innovation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌱</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Sustainable Future</h4>
                      <p className="text-[#d3d3d3]">Committed to environmental responsibility and sustainable practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Community First</h4>
                      <p className="text-[#d3d3d3]">Supporting communities and creating positive impact worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-[#0b090a] relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-lg text-[#f5f3f4] mb-6">
              Ready to Experience Pepsi?
            </h2>
            <p className="text-xl text-[#d3d3d3] mb-10 leading-relaxed">
              Get in touch with us today and discover how Pepsi can refresh your world.
              Whether you're interested in our products, partnerships, or just want to say hello,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Contact Us Now
              </Button>
              <Button href="/services" variant="outline-light">
                View Our Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
