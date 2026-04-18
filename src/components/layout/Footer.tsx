"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const pathname = usePathname();
  if (!pathname.includes("/dashboard") && !pathname.includes("/signin") && !pathname.includes("/signup")) {
    return (
      <footer className="bg-black text-white py-20" style={{ backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            {/* Logo */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-14">
              <div className="flex items-center lg:mb-0">
                <span className="text-orange-600 font-bold text-2xl sm:text-3xl lg:text-4xl font-orbitron uppercase tracking-wider">THE CAR</span>
                <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl font-orbitron uppercase tracking-wider ml-2">EDITION</span>
              </div>
            </div>

            {/* Footer sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-bold mb-6 font-orbitron uppercase tracking-wide text-white border-l-4 border-orange-600 pl-4">ABOUT US</h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  The Car Edition is your trusted partner for professional automotive services. We deliver quality maintenance, repairs, and diagnostics with expert care and attention to detail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-orbitron uppercase tracking-wide text-white border-l-4 border-orange-600 pl-4">OUR SERVICES</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/timing-chains" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Timing Chains
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/engine-rebuilds" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Engine Rebuilds
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/turbos" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Turbos
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/brakes-and-pads" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Brakes & Pads
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/diagnostics" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/wheel-alignment" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Wheel Alignment
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-orbitron uppercase tracking-wide text-white border-l-4 border-orange-600 pl-4">QUICK LINKS</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-gray-300 hover:text-orange-400 transition-colors font-rajdhani flex items-center">
                      <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-orbitron uppercase tracking-wide text-white border-l-4 border-orange-600 pl-4">CONTACT INFO</h3>
                <address className="text-gray-300 not-italic space-y-4 font-rajdhani">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 mr-3 mt-2"></span>
                    <div>
                      <a
                        href="https://maps.app.goo.gl/XCk7pLMaP3LGdNSDA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400 transition-colors"
                      >
                        Unit 14, Airfield Industrial Estate,<br></br> Warboys, Huntingdon, PE28 2SH
                      </a>
                      <p></p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                    <a href="tel:01480585343" className="hover:text-orange-400 transition-colors">Phone: 01480 585343</a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 mr-3"></span>
                    <a href="mailto:info@thecaredition.co.uk" className="hover:text-orange-400 transition-colors">info@thecaredition.co.uk</a>
                  </div>
                </address>
                <div className="flex gap-2 mt-4">
                  <a href="https://www.facebook.com/people/The-Car-Edition-Ltd/100084497851944/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 group">
                    <FaFacebookF className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.instagram.com/thecareditionltd/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 group">
                    <FaInstagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.tiktok.com/@thecareditionltd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 group">
                    <FaTiktok className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCj8QxUrDgfMmmwafBdc28Bg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all duration-300 group">
                    <FaYoutube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 font-rajdhani mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} The Car Edition. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors font-rajdhani text-sm">
                    Terms & Conditions
                  </Link>
                  <Link href="/faqs" className="text-gray-400 hover:text-orange-400 transition-colors font-rajdhani text-sm">
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
