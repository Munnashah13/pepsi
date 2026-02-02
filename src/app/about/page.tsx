import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Us - Pepsi",
  description: "Learn about Pepsi's rich history and commitment to refreshing the world",
};

export default function About() {
  return (
    <>
      <Hero
        title="About Pepsi"
        subtitle="A legacy of refreshment since 1893"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-pepsi-blue mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Pepsi was created in 1893 by Caleb Bradham, a pharmacist from New Bern, North Carolina.
              Originally called "Brad&apos;s Drink," it was renamed Pepsi-Cola in 1898 and later shortened to Pepsi.
            </p>
            <p className="text-gray-700 mb-4">
              Over the decades, Pepsi has grown from a small-town creation to a global phenomenon,
              enjoyed by millions of people in more than 200 countries and territories.
            </p>
            <p className="text-gray-700">
              Today, we continue to innovate and evolve, staying true to our mission of bringing
              refreshment and joy to consumers worldwide.
            </p>
          </div>

          <div className="bg-pepsi-blue rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pepsi-red mr-3 text-2xl">✓</span>
                <div>
                  <strong>Quality:</strong> We maintain the highest standards in everything we do
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pepsi-red mr-3 text-2xl">✓</span>
                <div>
                  <strong>Innovation:</strong> We continuously push boundaries to serve you better
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pepsi-red mr-3 text-2xl">✓</span>
                <div>
                  <strong>Sustainability:</strong> We&apos;re committed to protecting our planet
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pepsi-red mr-3 text-2xl">✓</span>
                <div>
                  <strong>Community:</strong> We believe in giving back and making a difference
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-pepsi-blue mb-12">
            Our Journey Through Time
          </h2>
          <div className="space-y-8">
            {[
              { year: "1893", event: "Pepsi-Cola is invented by Caleb Bradham" },
              { year: "1898", event: "Officially renamed from Brad's Drink to Pepsi-Cola" },
              { year: "1961", event: "Shortened to simply 'Pepsi'" },
              { year: "1990s", event: "Global expansion and iconic advertising campaigns" },
              { year: "2020s", event: "Focus on sustainability and product innovation" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-pepsi-red text-white font-bold text-xl px-6 py-3 rounded-lg flex-shrink-0">
                  {item.year}
                </div>
                <p className="text-gray-700 text-lg">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
