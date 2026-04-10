import ServiceEstimatorComponent from '@/components/reuseableComponents/ServicesEstimator/ServiceEstimator';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import TitleBadge from '@/components/TitleBadge';

export default function EngineRebuildsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-black">
        <Image
          src="/images/dropbox/16.jpg"
          alt="Engine Rebuilds Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron uppercase tracking-wider leading-tight bg-black/50 p-4">
              <TitleBadge title="ENGINE SERVICES" className='mb-2' />
              ENGINE REBUILDS
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-rajdhani leading-relaxed">
                Professional engine rebuild services to restore your vehicle's performance and reliability. Our expert technicians use <span className="text-white font-bold">OEM-standard parts</span> to breathe new life into your engine.
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
            <TitleBadge title="COMPREHENSIVE ENGINE REBUILD SERVICES" className="mb-8 pl-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron uppercase leading-tight">
              Navigating the Road of Engine Rebuilds – A Cost-Effective Alternative
            </h2>
            <div className="max-w-4xl">
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Are you grappling with concerns that your vehicle's engine might be on the brink of irreparable damage? Common issues such as excessive smoke, knocking sounds, rapid oil consumption, or frequent overheating could be early signs of engine trouble. Before you contemplate bidding farewell to your trusted ride, let's explore a <span className="text-white font-semibold">cost-effective alternative: engine rebuilds</span>.
              </p>
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Engine damage, often a result of normal wear and tear, insufficient servicing, or lubrication issues, doesn't necessarily mark the end of your car's journey. Instead of hastily opting for a new vehicle, consider the economic benefits of engine repair through a professional rebuild.
              </p>
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                At <span className="text-white font-semibold">The Car Edition</span>, we specialize in comprehensive engine rebuilds for all vehicle makes and models. Our meticulous process ensures your engine meets Original Equipment Manufacturer (OEM) standards, giving you many more miles of reliable performance.
              </p>
              <a
                href="https://www.youtube.com/watch?v=GmuX2if7Kng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 hover:scale-105 active:scale-95"
              >
                Watch Video
                <FaPlayCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* What Happens During an Engine Rebuild */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-orbitron uppercase">
              What Happens During an Engine Rebuild?
            </h3>
            <div className="max-w-4xl mb-8">
              <p className="text-gray-300 font-rajdhani text-base leading-relaxed">
                Rebuilding an engine is a meticulous process that involves removing the engine block, disassembling it, and replacing damaged parts with new or refurbished components. This approach ensures the engine meets OEM standards, with new gaskets, seals, and lubricants. Critical components like camshafts, crankshafts, and pistons are replaced only if necessary.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Engine Disassembly</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Complete removal and disassembly of the engine block for thorough inspection</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Component Inspection</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Detailed assessment of all engine components to identify wear and damage</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Parts Replacement</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Installation of new gaskets, seals, and replacement of worn components</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Precision Machining</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Professional machining services to restore engine block to OEM specifications</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Engine Reassembly</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Expert reassembly with proper torque specifications and lubrication</p>
              </div>
              <div className="bg-black p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Testing & Quality Check</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Comprehensive testing to ensure optimal performance and reliability</p>
              </div>
            </div>
            <p className="text-gray-300 mt-8 font-rajdhani text-sm">
              The rebuilt engine, often hailed as superior to factory-installed engines, undergoes thorough inspection, cleaning, and replacement of worn-out parts. The result? A dependable, reliable powerhouse backed by warranties.
            </p>
          </div>

          {/* When Does an Engine Need Rebuilding */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-orbitron uppercase">
              When Does an Engine Need Rebuilding?
            </h3>
            <p className="text-gray-300 mb-6 font-rajdhani text-sm">Watch for these warning signs that may indicate your engine needs rebuilding:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Excessive smoke from exhaust</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Knocking or unusual engine noises</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Rapid oil consumption</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Frequent overheating</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Loss of compression</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Metal particles in oil</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Poor performance and power loss</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Odd smells or strange noises</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm">
              Not all engine problems necessitate a rebuild; sometimes, a minor repair could suffice. Our expert diagnostics will determine the best course of action for your vehicle.
            </p>
          </div>

          {/* Cost-Saving Tips */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 font-orbitron uppercase">
              Cost-Saving Tips for Engine Rebuilds
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Do Thorough Research</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Ensure you get the right parts for your specific engine</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Replace Only What's Necessary</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Avoid unnecessary expenses by replacing only worn components</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Quality Parts Matter</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Use OEM or high-quality aftermarket parts for longevity</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Check Warranties</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Always verify warranty coverage before making final decisions</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Professional Service</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Trust experienced technicians to do the job right the first time</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm leading-relaxed">
              Considering an engine rebuild can be a daunting decision, but it often proves to be a cost-effective alternative, especially when compared to the expense of purchasing a new vehicle. Rebuilding provides a chance to breathe new life into your car, ensuring it stays on the road for many more miles.
            </p>
          </div>

          {/* Service Estimator */}
          <div className="mb-20 bg-black p-0 md:p-8 md:border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-orbitron uppercase">
              Get Your Engine Rebuild Quote
            </h3>
            <ServiceEstimatorComponent />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron uppercase">
              Book Your Engine Rebuild Service Today
            </h3>
            <p className="text-base text-gray-300 mb-6 font-rajdhani max-w-2xl mx-auto">
              Considering an engine rebuild? Our expert team at The Car Edition specializes in comprehensive automotive solutions. Trust us to breathe new life into your vehicle with professional engine rebuild services.
            </p>
            <p className="text-sm text-white mb-8 font-rajdhani font-semibold">
              Same-day diagnostics available - call now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani uppercase tracking-wide"
              >
                Book Service
              </Link>
              <Link
                href="tel:01480759004"
                className="border-2 border-white text-white hover:bg-[#f97316] hover:text-white px-8 py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani uppercase tracking-wide"
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
