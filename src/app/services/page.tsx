import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Our Services - Pepsi",
  description: "Explore Pepsi's products and services",
};

export default function Services() {
  const services = [
    {
      title: "Classic Pepsi",
      description: "Our original and most beloved cola beverage, perfect for any occasion.",
      icon: "🥤",
    },
    {
      title: "Pepsi Zero Sugar",
      description: "All the bold taste of Pepsi with zero sugar and zero calories.",
      icon: "🎯",
    },
    {
      title: "Pepsi Max",
      description: "Maximum taste, maximum refreshment with no sugar.",
      icon: "⚡",
    },
    {
      title: "Diet Pepsi",
      description: "A light, crisp cola taste with zero calories.",
      icon: "💎",
    },
    {
      title: "Flavored Varieties",
      description: "Cherry, Vanilla, and other exciting flavor combinations.",
      icon: "🍒",
    },
    {
      title: "Corporate Partnerships",
      description: "Partnering with businesses for events and catering services.",
      icon: "🤝",
    },
  ];

  return (
    <>
      <Hero
        title="Our Products & Services"
        subtitle="Discover the full range of Pepsi offerings"
        ctaText="Get in Touch"
        ctaLink="/contact"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pepsi-blue mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={<span className="text-4xl">{service.icon}</span>}
            />
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-pepsi-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Custom Solutions</h2>
          <p className="text-lg mb-8">
            Looking for custom beverage solutions for your business or event?
            We offer tailored packages and partnerships to meet your unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Events</h3>
              <p>Refreshment solutions for events of all sizes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Retail</h3>
              <p>Comprehensive product lines for retailers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Hospitality</h3>
              <p>Premium beverage programs for restaurants & hotels</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
