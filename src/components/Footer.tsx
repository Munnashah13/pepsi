import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pepsi-darkBlue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">PEPSI</h3>
            <p className="text-gray-300">
              Refreshing the world, one sip at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-pepsi-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pepsi-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pepsi-red transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pepsi-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Email: info@pepsi.com</p>
              <p className="text-gray-300">Phone: 1-800-PEPSI</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pepsi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
