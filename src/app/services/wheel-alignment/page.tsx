import ServiceEstimatorComponent from '@/components/reuseableComponents/ServicesEstimator/ServiceEstimator';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import TitleBadge from '@/components/TitleBadge';

export default function WheelAlignment() {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-black">
        <Image
          src="/images/tyres-and-puncture.jpeg"
          alt="Wheel Alignment Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron uppercase tracking-wider leading-tight bg-black/50 p-4">
              <TitleBadge title="WHEEL ALIGNMENT" className='mb-2' />
              WHEEL ALIGNMENT
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-rajdhani leading-relaxed">
                Professional wheel alignment services to ensure optimal handling and tire longevity. Our expert technicians use <span className="text-white font-bold">state-of-the-art equipment</span> and precision techniques for perfect alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="md:py-20 bg-black">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="mb-16">
            <TitleBadge title="PROFESSIONAL WHEEL ALIGNMENT SERVICES" className="mb-8 pl-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron uppercase leading-tight">
              Wheel Alignment in Huntingdon – Precision for Perfect Handling
            </h2>
            <div className="max-w-4xl">
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Proper wheel alignment is essential for optimal vehicle handling, tire longevity, and fuel efficiency. Misaligned wheels can cause uneven tire wear, poor handling, and reduced fuel economy. Don't compromise on <span className="text-white font-semibold">precision alignment</span> services.
              </p>
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                At <span className="text-white font-semibold">The Car Edition</span>, we use state-of-the-art computerized wheel alignment equipment to ensure your wheels are perfectly aligned. Proper alignment improves handling, extends tyre life, and ensures your safety on the road.
              </p>
              <a
                href="https://www.youtube.com/watch?v=q8yZL8IEK5o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Watch Video
                <FaPlayCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 font-orbitron uppercase">
              Our Alignment Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">4-Wheel Alignment</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Comprehensive alignment service for all four wheels using computerized equipment</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Tracking Adjustment</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Precise tracking adjustments to prevent uneven tire wear and improve handling</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Camber & Caster Adjustment</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Professional camber and caster adjustments for optimal tire contact</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Toe Adjustment</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Accurate toe-in and toe-out adjustments for straight-line stability</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Alignment Inspection</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Comprehensive alignment inspection and diagnostic report</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Post-Repair Alignment</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Essential alignment checks after suspension or steering repairs</p>
              </div>
            </div>
            <p className="text-gray-300 mt-8 font-rajdhani text-sm">
              We provide precise alignment services for all vehicle makes and models.
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
                  <span className="text-white font-semibold font-rajdhani text-sm">Advanced Equipment</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - State-of-the-art computerized alignment systems for precision results</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Expert Technicians</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Certified technicians with years of alignment experience</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Competitive Pricing</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Fair pricing for professional alignment services</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Fast Service</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Quick fitting and repair services to minimize disruption</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Warranty Coverage</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Warranty on all alignment work performed</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm leading-relaxed">
              We understand the importance of proper alignment. That's why we provide detailed reports and honest recommendations for your vehicle.
            </p>
          </div>

          {/* Warning Signs Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-orbitron uppercase">
              Signs You Need Wheel Alignment
            </h3>
            <p className="text-gray-300 mb-6 font-rajdhani">Get your alignment checked if you notice:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Vehicle pulling to one side while driving</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Uneven tire wear patterns</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Steering wheel off-center when driving straight</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Steering wheel vibration at highway speeds</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Poor handling or wandering on the road</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">After hitting a pothole or curb</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Squealing tires during turns</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">After suspension or steering repairs</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm">
              Proper wheel alignment improves handling, extends tire life, and enhances fuel efficiency. Book an alignment check today.
            </p>
          </div>

          {/* Service Estimator */}
          <div className="mb-20 bg-black p-0 md:p-8 md:border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-orbitron uppercase">
              Get Your Wheel Alignment Quote
            </h3>
            <ServiceEstimatorComponent />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron uppercase">
              Book Your Wheel Alignment Today
            </h3>
            <p className="text-base text-gray-300 mb-6 font-rajdhani max-w-2xl mx-auto">
              Don't compromise on vehicle handling and safety. Whether you need a standard alignment check or comprehensive 4-wheel alignment, we're here to help.
            </p>
            <p className="text-sm text-white mb-8 font-rajdhani font-semibold">
              Same-day appointments available - call now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani uppercase tracking-wide"
              >
                Book Service
              </Link>
              <Link
                href="tel:01480123456"
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