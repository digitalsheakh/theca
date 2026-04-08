'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ServiceCard {
  title: string;
  subtitle: string;
  price: string;
  vat: string;
  features: string[];
  href: string;
}

const trendingServices: ServiceCard[] = [
  {
    title: "FORD WET BELT REPLACEMENT",
    subtitle: "SPECIALIST SERVICE",
    price: "From £1250",
    vat: "+ VAT",
    features: [
      "Expert wet belt replacement",
      "Ford specialist service",
      "Quality OEM parts",
      "Professional installation"
    ],
    href: "/services/ford-wet-belt-replacement"
  },
  {
    title: "TIMING CHAIN REPLACEMENT",
    subtitle: "CRITICAL SERVICE",
    price: "From £1500",
    vat: "+ VAT",
    features: [
      "Complete chain replacement",
      "Tensioner inspection",
      "Engine timing adjustment",
      "Prevent engine damage"
    ],
    href: "/services/timing-chains"
  },
  {
    title: "PERFORMANCE & ECU TUNING",
    subtitle: "PERFORMANCE UPGRADE",
    price: "From £49",
    vat: "+ VAT",
    features: [
      "ECU remapping",
      "Performance optimization",
      "Fuel efficiency improvement",
      "Power enhancement"
    ],
    href: "/services/performance-ecu-tuning"
  },
  {
    title: "CAR KEY & IMMOBILISER",
    subtitle: "SECURITY SERVICE",
    price: "From £99",
    vat: "+ VAT",
    features: [
      "Key programming",
      "Immobiliser repair",
      "Key replacement",
      "Security system diagnostics"
    ],
    href: "/services/car-key-immobiliser"
  },
  {
    title: "FULL SERVICE",
    subtitle: "PREMIUM PACKAGE",
    price: "£150",
    vat: "+ VAT",
    features: [
      "Oil & filter change",
      "Brake system check",
      "Engine diagnostics",
      "Safety inspection"
    ],
    href: "/services/full-service"
  }
];

export default function TrendingServicesCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="border-l-4 border-orange-600 pl-6 mb-8 inline-block">
              <p className="text-orange-600 text-sm font-bold uppercase tracking-wider font-rajdhani mb-2">
                TRENDING SERVICES
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
              POPULAR AUTOMOTIVE
              <br />
              <span className="text-orange-600">SERVICES</span>
            </h2>
            <p className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
              Our most requested services with transparent pricing and professional expertise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {trendingServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-900 border overflow-hidden cursor-pointer transition-all duration-500 ${expandedCard === index
                    ? 'border-orange-600 bg-gradient-to-br from-gray-900 to-orange-900/20 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                    : 'border-orange-600/30 hover:border-orange-600 hover:shadow-lg'
                  }`}
                onClick={() => toggleCard(index)}
                style={{
                  transform: expandedCard === index ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider font-rajdhani transition-all duration-500 ${expandedCard === index ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className={`font-bold text-lg font-orbitron uppercase tracking-wide leading-tight mb-4 transition-all duration-500 ${expandedCard === index ? 'text-orange-400' : 'text-white'
                    }`}>
                    {service.title}
                  </h3>

                  <div className="mb-4">
                    <span className={`text-2xl font-bold font-orbitron transition-all duration-500 ${expandedCard === index ? 'text-orange-400' : 'text-white'
                      }`}>
                      {service.price}
                    </span>
                    <span className={`text-sm font-rajdhani ml-2 transition-all duration-500 ${expandedCard === index ? 'text-orange-300' : 'text-gray-400'
                      }`}>
                      {service.vat}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className={`space-y-3 transition-all duration-700 ${expandedCard === index ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
                    }`}
                    style={{
                      transitionTimingFunction: expandedCard === index ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-in'
                    }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center transition-all duration-700`}
                        style={{
                          opacity: expandedCard === index ? 1 : 0,
                          transform: expandedCard === index
                            ? 'translateX(0) scale(1)'
                            : 'translateX(-12px) scale(0.95)',
                          transitionDelay: expandedCard === index ? `${featureIndex * 60}ms` : '0ms',
                          transitionTimingFunction: expandedCard === index ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-in'
                        }}
                      >
                        <div className={`w-2 h-2 bg-orange-600 mr-3 flex-shrink-0 transition-all duration-300 ${expandedCard === index ? 'shadow-[0_0_8px_rgba(249,115,22,0.8)]' : ''
                          }`}></div>
                        <span className="text-gray-300 text-sm font-rajdhani">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                    <Link
                      href={service.href}
                      className="text-orange-600 hover:text-orange-400 text-sm font-orbitron font-semibold uppercase tracking-wide transition-all duration-300 hover:translate-x-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      LEARN MORE
                    </Link>
                    <div className="text-orange-600 transition-all duration-700" style={{
                      transform: expandedCard === index ? 'rotate(180deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                      transformOrigin: 'center',
                      filter: expandedCard === index ? 'drop-shadow(0 0 4px rgba(249,115,22,0.6))' : 'drop-shadow(0 0 0px rgba(249,115,22,0))'
                    }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
