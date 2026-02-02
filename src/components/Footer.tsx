import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b090a] text-[#f5f3f4] mt-auto">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#a4161a] to-[#e5383b] bg-clip-text text-transparent">
              PEPSI
            </h3>
            <p className="text-[#d3d3d3] text-lg leading-relaxed mb-6">
              Refreshing the world, one sip at a time. Experience the bold taste
              that has brought joy to millions since 1893.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#161a1d] flex items-center justify-center hover:bg-[#a4161a] transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#161a1d] flex items-center justify-center hover:bg-[#a4161a] transition-colors duration-300"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#161a1d] flex items-center justify-center hover:bg-[#a4161a] transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#f5f3f4]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#d3d3d3] hover:text-[#e5383b] transition-colors duration-300 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#d3d3d3] hover:text-[#e5383b] transition-colors duration-300 text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#d3d3d3] hover:text-[#e5383b] transition-colors duration-300 text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#d3d3d3] hover:text-[#e5383b] transition-colors duration-300 text-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#f5f3f4]">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-[#d3d3d3] text-lg">
                <span className="block font-semibold text-[#f5f3f4] mb-1">Email</span>
                info@pepsi.com
              </p>
              <p className="text-[#d3d3d3] text-lg">
                <span className="block font-semibold text-[#f5f3f4] mb-1">Phone</span>
                1-800-PEPSI-CO
              </p>
              <p className="text-[#d3d3d3] text-lg">
                <span className="block font-semibold text-[#f5f3f4] mb-1">Address</span>
                Purchase, NY 10577
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#161a1d] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#b1a7a6] text-center md:text-left">
              &copy; {currentYear} Pepsi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-[#b1a7a6] hover:text-[#e5383b] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#b1a7a6] hover:text-[#e5383b] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-[#b1a7a6] hover:text-[#e5383b] transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
