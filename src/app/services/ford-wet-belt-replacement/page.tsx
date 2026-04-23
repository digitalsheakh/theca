import ServiceEstimatorComponent from '@/components/reuseableComponents/ServicesEstimator/ServiceEstimator';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import TitleBadge from '@/components/TitleBadge';

export default function FordWetBeltReplacementPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-black">
        <Image
          src="/images/trending/Wetbelt.png"
          alt="Ford Wet Belt Replacement Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron uppercase tracking-wider leading-tight bg-black/50 p-4">
              <TitleBadge title="TRENDING SERVICE" className='mb-2' />
              FORD WET BELT REPLACEMENT
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-rajdhani leading-relaxed">
                Expert Ford wet belt replacement service from <span className="text-white font-bold">£1250 + VAT</span>. Prevent catastrophic engine failure with our professional wet belt replacement service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 md:py-20 bg-black">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="mb-16">
            <TitleBadge title="FORD WET BELT SPECIALIST" className="mb-8 pl-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron uppercase leading-tight">
              Ford Wet Belt Replacement in Huntingdon – Protect Your Engine
            </h2>
            <div className="max-w-4xl">
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Ford's wet belt system, found in EcoBoost engines, operates inside the engine oil. Unlike traditional timing belts, these belts deteriorate rapidly and can cause <span className="text-white font-semibold">catastrophic engine damage</span> if not replaced in time.
              </p>
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                At <span className="text-white font-semibold">The Car Edition</span>, we specialize in Ford wet belt replacement. Our expert technicians use genuine parts and follow manufacturer specifications to ensure your engine is protected.
              </p>
              <a
                href="https://www.youtube.com/watch?v=-Jz8jyMPt2U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 hover:scale-105 active:scale-95"
              >
                Watch Video
                <FaPlayCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 font-orbitron uppercase">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Complete Wet Belt Replacement</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Full wet belt system replacement using genuine Ford parts</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Oil Pump Inspection</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Thorough inspection of oil pump and related components</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Engine Oil Change</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Complete oil and filter change as part of the service</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Coolant System Check</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Inspection and top-up of coolant system</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">System Diagnostics</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Pre and post-replacement diagnostic checks</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Warranty Coverage</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Comprehensive warranty on parts and labour</p>
              </div>
            </div>
            <p className="text-gray-300 mt-8 font-rajdhani text-sm">
              Don't wait until it's too late. Wet belt failure can result in engine replacement costing thousands of pounds.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 font-orbitron uppercase">
              Why Choose The Car Edition?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Ford Specialists</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Extensive experience with Ford EcoBoost engines</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Genuine Parts</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Only genuine Ford parts used for reliability</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Competitive Pricing</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - From £1250 + VAT, significantly less than main dealers</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Expert Technicians</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Trained specialists in wet belt replacement</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Full Warranty</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Comprehensive warranty on all work completed</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm leading-relaxed">
              We understand the importance of preventative maintenance. Our wet belt replacement service ensures your Ford engine runs smoothly for years to come.
            </p>
          </div>

          {/* Warning Signs Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-orbitron uppercase">
              Signs Your Wet Belt Needs Replacement
            </h3>
            <p className="text-gray-300 mb-6 font-rajdhani text-sm">Watch out for these warning signs:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Metallic debris in engine oil</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Unusual engine noises or rattling</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Oil pressure warning light</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Vehicle approaching 100,000 miles</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Engine performance issues</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Belt material visible in oil filter</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Overheating issues</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Ford recommends replacement at 150,000 miles</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm">
              Don't risk engine failure. Book your wet belt replacement today and protect your investment.
            </p>
          </div>

          {/* Service Estimator */}
          <div className="mb-20 bg-black p-0 md:p-8 md:border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-orbitron uppercase">
              Get Your Ford Wet Belt Replacement Quote
            </h3>
            <ServiceEstimatorComponent />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron uppercase">
              Protect Your Ford Engine Today
            </h3>
            <p className="text-base text-gray-300 mb-6 font-rajdhani max-w-2xl mx-auto">
              Book your Ford wet belt replacement from £1250 + VAT. Don't wait until it's too late – prevent costly engine damage.
            </p>
            <p className="text-sm text-white mb-8 font-rajdhani font-semibold">
              Expert Ford specialists – book your appointment now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani uppercase tracking-wide"
              >
                Book Service
              </Link>
              <Link
                href="tel:01480 585343"
                className="border-2 border-white hover:border-[#f97316] text-black bg-white hover:bg-[#f97316] hover:text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani uppercase tracking-wide"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
