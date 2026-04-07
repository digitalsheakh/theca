import ServiceEstimatorComponent from '@/components/reuseableComponents/ServicesEstimator/ServiceEstimator';
import ServiceVideoPlayer from '@/components/ServiceVideoPlayer';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import TitleBadge from '@/components/TitleBadge';

export default function TransmissionPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        <Image
          src="/images/dropbox/20.jpg"
          alt="Transmission Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <TitleBadge title="TRANSMISSION SERVICES" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron uppercase tracking-wider leading-tight bg-black/50 p-4">
              DUAL MASS FLYWHEEL & FLYWHEEL REPLACEMENT
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-200 mb-8 font-rajdhani leading-relaxed">
                Professional dual mass flywheel and flywheel replacement services. Our skilled technicians use <span className="text-white font-bold">specialized tools</span> to eliminate vibration, noise, and clutch problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="mb-16">
            <TitleBadge title="PROFESSIONAL TRANSMISSION REPAIR SERVICES" className="mb-8 pl-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-orbitron uppercase leading-tight">
              Transmission Services in Huntingdon – Keep Your Gearbox Running Smoothly
            </h2>
            <div className="max-w-4xl">
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                Your transmission is one of the most complex and critical components in your vehicle. Whether automatic or manual, it requires expert care to maintain <span className="text-white font-semibold">smooth operation and longevity</span>.
              </p>
              <p className="text-base text-gray-300 mb-6 font-rajdhani leading-relaxed">
                At <span className="text-white font-semibold">The Car Edition</span>, we specialize in transmission diagnostics, repairs, servicing, and replacements. From clutch replacements to gearbox rebuilds, we have the expertise to handle all transmission issues.
              </p>
              <a
                href="https://www.youtube.com/watch?v=p_R_85SaLtI"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Clutch Replacement</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Complete clutch kit replacement including pressure plate, disc, and release bearing</p>
              </div>
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Flywheel Replacement</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Standard flywheel replacement for smooth clutch operation</p>
              </div>
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Transmission Fluid Service</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Transmission fluid change and flush to maintain optimal performance</p>
              </div>
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Dual Mass Flywheel</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Replacement of worn dual mass flywheels to eliminate vibration and noise</p>
              </div>
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Transmission Diagnostics</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Advanced diagnostic testing to identify transmission faults accurately</p>
              </div>
              <div className="bg-gray-900 p-6 border border-orange-600/30 hover:border-orange-600 transition-colors duration-300">
                <h4 className="text-lg font-bold text-white mb-3 font-rajdhani">Diff Services</h4>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">Differential repair and servicing for optimal power distribution</p>
              </div>
            </div>
            <p className="text-gray-300 mt-8 font-rajdhani text-sm">
              From routine maintenance to major repairs, we ensure your transmission operates smoothly and reliably.
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
                  <span className="text-white font-semibold font-rajdhani text-sm">Transmission Specialists</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Expert technicians with extensive transmission experience</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Quality Parts</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Premium transmission components from trusted suppliers</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Competitive Pricing</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Fair and transparent pricing with no hidden costs</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Warranty Protection</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Comprehensive warranty on all transmission work</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-white font-semibold font-rajdhani text-sm">Modern Equipment</span>
                  <span className="text-gray-300 font-rajdhani text-sm"> - Latest diagnostic and repair tools for accurate work</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm leading-relaxed">
              We understand that transmission repairs can be costly, which is why we provide honest assessments and cost-effective solutions.
            </p>
          </div>

          {/* Warning Signs Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-orbitron uppercase">
              Warning Signs of Transmission Problems
            </h3>
            <p className="text-gray-300 mb-6 font-rajdhani text-sm">Don't ignore these transmission warning signs:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Slipping gears or difficulty changing gears</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Grinding, whining, or clunking noises</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Burning smell from transmission</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Clutch slipping or juddering</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Leaking transmission fluid</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Dashboard warning lights</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Delayed engagement when shifting</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 font-rajdhani text-sm">Unusual vibrations while driving</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 font-rajdhani text-sm">
              Early diagnosis of transmission problems can prevent costly repairs. Contact us immediately if you notice any of these symptoms.
            </p>
          </div>

          {/* Video Section */}
          <ServiceVideoPlayer
            videoId="p_R_85SaLtI"
            title="Learn More"
          />

          {/* Service Estimator */}
          <div className="mb-20 bg-gray-900 p-8 border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-orbitron uppercase">
              Get Your Transmission Service Quote
            </h3>
            <ServiceEstimatorComponent />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron uppercase">
              Expert Transmission Repair You Can Trust
            </h3>
            <p className="text-base text-gray-300 mb-6 font-rajdhani max-w-2xl mx-auto">
              Book your transmission service or repair today. Our expert technicians will diagnose and fix your transmission issues efficiently.
            </p>
            <p className="text-sm text-white mb-8 font-rajdhani font-semibold">
              Same-day appointments available - call now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Learn More
              </Link>
              <Link
                href="tel:01480123456"
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
