import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Pepsi"
        subtitle="Experience the bold, refreshing taste that generations have loved"
        ctaText="Explore Our Products"
        ctaLink="/services"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-pepsi-blue mb-12">
            Why Choose Pepsi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Bold Taste"
              description="Our signature flavor that has been refreshing the world since 1893."
              icon={<span className="text-4xl">🥤</span>}
            />
            <Card
              title="Global Brand"
              description="Enjoyed by millions across the globe, bringing people together."
              icon={<span className="text-4xl">🌍</span>}
            />
            <Card
              title="Innovation"
              description="Constantly evolving with new flavors and sustainable practices."
              icon={<span className="text-4xl">⚡</span>}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pepsi-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Pepsi?
          </h2>
          <p className="text-xl mb-8">
            Get in touch with us today and discover how Pepsi can refresh your world.
          </p>
          <Button href="/contact">
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  );
}
