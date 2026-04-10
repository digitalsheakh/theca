'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TitleBadge from '@/components/TitleBadge';
import { useSession } from 'next-auth/react';
import GlobalLoading from '@/components/GlobalLoading';
import { FaCog, FaTools } from 'react-icons/fa';
import { PiHandshakeFill } from "react-icons/pi";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const session = useSession();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  // Set mounted flag on first render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const toggleService = (index: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setExpandedService(prev => prev === index ? null : index);
  };

  useEffect(() => {
    if (sliderRef.current && scrollPosition === 0) {
      sliderRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  }, []);

  const servicesSliderRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (sliderRef.current) {
        const totalWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.clientWidth;
        let newPosition = scrollPosition + 1;
        if (newPosition >= totalWidth - containerWidth) {
          sliderRef.current.scrollLeft = 0;
          newPosition = 0;
        } else {
          sliderRef.current.scrollLeft = newPosition;
        }

        setScrollPosition(newPosition);
      }
    }, 20);

    return () => clearInterval(animationInterval);
  }, [scrollPosition]);

  useEffect(() => {
    if (!autoScrollEnabled) return;

    const servicesInterval = setInterval(() => {
      if (servicesSliderRef.current) {
        servicesSliderRef.current.scrollLeft += 1;
        if (servicesSliderRef.current.scrollLeft >= servicesSliderRef.current.scrollWidth - servicesSliderRef.current.clientWidth - 10) {
          servicesSliderRef.current.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(servicesInterval);
  }, [autoScrollEnabled]);

  if (!isMounted) {
    return <GlobalLoading />;
  }

  return (
    <main className=" text-white font-heading bg-black">
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="/images/logos/backgroundlogo2.jpg"
            alt="Car Workshop"
            fill
            className="object-cover brightness-50"
            sizes="100vw"
            style={{
              objectPosition: 'center 20%'
            }}
            priority
          />
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-screen-2xl mx-auto">
            <div className="text-center md:text-left">
              <motion.div
                className="mb-12"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase font-orbitron tracking-wider text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Welcome to
                </motion.h1>
                <motion.h2
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 uppercase font-orbitron tracking-wider"
                  style={{ color: '#fb9929' }}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  The Car Edition
                </motion.h2>
                <motion.a
                  initial={{ opacity: 0, y: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0, delay: 0, ease: "easeInOut" }}
                  href="tel:01480759004"
                  className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold font-orbitron uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center">
                    CALL US FOR AN ESTIMATE
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 md:pb-16">
          <div className="w-full px-6">
            <div className="max-w-screen-2xl mx-auto">
              <motion.div
                className="hidden md:grid md:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.div
                  className="flex items-start justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                  }}
                >
                  <div className="mr-4">
                    <FaCog className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1 font-orbitron tracking-wider">ENGINE REPAIR & REBUILDS</h3>
                    <p className="text-gray-300 text-xs font-rajdhani">
                      Rebuild your engine with The Car Edition.<br />
                      Our experts are proficient in European,<br />
                      American and Japanese brands.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                  }}
                >
                  <div className="mr-4">
                    <FaTools className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1 font-orbitron tracking-wider">MAINTENANCE & SERVICING</h3>
                    <p className="text-gray-300 text-xs font-rajdhani">
                      Whether you need oil change services,<br />
                      major service or even a general service,<br />
                      The Car Edition got you covered.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                  }}
                >
                  <div className="mr-4">
                    <PiHandshakeFill className="w-10 h-10 font-bold text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase mb-1 font-orbitron tracking-wider">BUY OR SELL YOUR CAR</h3>
                    <p className="text-gray-300 text-xs font-rajdhani">
                      Looking to buy your dream car<br />
                      or simply want to sell yours?<br />
                      Look no further - we can do both!
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <div className="md:hidden overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                  <style jsx>{`
 @keyframes marquee {
 0% { transform: translateX(100%); }
 100% { transform: translateX(-200%); }
 }
 .animate-marquee {
 animation: marquee 20s linear infinite;
 min-width: 100%;
 }
`}</style>
                  <div className="inline-flex items-start mx-4">
                    <div className="mr-4">
                      <FaCog className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase mb-1 italic">ENGINE REPAIR & REBUILDS</h3>
                      <p className="text-gray-300 text-xs italic">
                        Rebuild your engine with The Car Edition.<br />
                        Our experts are proficient in European,<br />
                        American and Japanese brands.
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-start mx-4">
                    <div className="mr-4">
                      <FaTools className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase mb-1 italic">MAINTENANCE & SERVICING</h3>
                      <p className="text-gray-300 text-xs italic">
                        Whether you need oil change services,<br />
                        major service or even a general service,<br />
                        The Car Edition got you covered.
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-start mx-4">
                    <div className="mr-4">
                      <PiHandshakeFill className="w-10 h-10 font-bold text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase mb-1 italic">BUY OR SELL YOUR CAR</h3>
                      <p className="text-gray-300 text-xs italic">
                        Looking to buy your dream car<br />
                        or simply want to sell yours?<br />
                        Look no further - we can do both!
                      </p>
                    </div>
                  </div>

                  {/* Duplicate first set for continuous scrolling */}
                  <div className="inline-flex items-start mx-4">
                    <div className="mr-4">
                      <Image
                        src="/images/icons/SERVICE ICON white.png"
                        alt="Service Icon"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase mb-1 italic">ENGINE REPAIR & REBUILDS</h3>
                      <p className="text-gray-300 text-xs italic">
                        Rebuild your engine with The Car Edition.<br />
                        Our experts are proficient in European,<br />
                        American and Japanese brands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10% Off Banner with Mobile Marquee */}
      <motion.section
        className="bg-orange-600 py-3 md:py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="w-full">
          {/* Desktop - Static Text */}
          <div className="hidden md:block px-4">
            <div className="max-w-screen-2xl mx-auto">
              <p className="text-white text-center text-base font-bold uppercase tracking-wide font-orbitron">
                SAVE £10 OFF YOUR FIRST SERVICE WHEN YOU BOOK ONLINE
              </p>
            </div>
          </div>

          {/* Mobile - Marquee */}
          <div className="md:hidden overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              <style jsx>{`
 @keyframes marquee {
 0% { transform: translateX(0%); }
 100% { transform: translateX(-100%); }
 }
 .animate-marquee {
 animation: marquee 15s linear infinite;
 }
`}</style>
              <p className="text-white text-base font-bold uppercase tracking-wide font-orbitron">
                SAVE £10 OFF YOUR FIRST SERVICE WHEN YOU BOOK ONLINE&nbsp;&nbsp;&nbsp;&nbsp;SAVE £10 OFF YOUR FIRST SERVICE WHEN YOU BOOK ONLINE&nbsp;&nbsp;&nbsp;&nbsp;SAVE £10 OFF YOUR FIRST SERVICE WHEN YOU BOOK ONLINE
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-10 md:py-20 bg-black"
        style={{ backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]"></div>
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center">
                <TitleBadge title="Most Requested" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6"
              >
                Trending <span className="text-orange-500">Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed"
              >
                Discover our most popular automotive services designed to keep your vehicle running at peak performance. Professional quality, competitive prices.
              </motion.p>
            </motion.div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {/* Service Card 1 - Ford Wet Belt Replacement */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 0 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(0, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 0 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Ford Wet Belt Replacement</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">SPECIALIST SERVICE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Prevent engine failure with complete belt replacement service.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 0 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="border-b border-orange-600/30 pb-2 mb-2">
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <span className="text-gray-300 font-rajdhani text-xs">Ford Focus & Transit 2.0L</span>
                          <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                            <span>from</span>
                            <span>£1,450 + VAT</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-orange-600/30 pb-2 mb-2">
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <span className="text-gray-300 font-rajdhani text-xs">Transit (RWD) 2.0L</span>
                          <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                            <span>from</span>
                            <span>£1,550 + VAT</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-orange-600/30 pb-2 mb-2">
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <span className="text-gray-300 font-rajdhani text-xs">Ford Ranger 2.0L</span>
                          <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                            <span>from</span>
                            <span>£1,750 + VAT</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Ford Fiesta 1.0L EcoBoost</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£1,500 + VAT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 2 - Timing Chain Replacement */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 1 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(1, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 1 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Timing Chain Replacement</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">CRITICAL SERVICE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Full timing chain replacement with OEM components.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 1 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="border-b border-orange-600/30 pb-2 mb-3">
                        <div className="text-orange-500 font-orbitron text-xs font-bold mb-2">Ford</div>
                        <div className="space-y-1">
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">Ranger 3.2L TDCi</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,800 + VAT</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">Transit 2.2L TDCi</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,500 + VAT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-orange-600/30 pb-2 mb-3">
                        <div className="text-orange-500 font-orbitron text-xs font-bold mb-2">BMW</div>
                        <div className="space-y-1">
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">N47 (118d / 320d / 520d / X1 / X3)(+£400 if xDrive)</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,750 + VAT</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">N57 (330d / 530d / 730d / X5 / X6)(+£500 if xDrive)</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,850 + VAT</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">N52 (125i / 325i / 525i / Z4 / X3)</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£2,050 + VAT</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">B47 (320d / 520d / X3 / X4 / Mini)</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,950 + VAT</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <span className="text-gray-300 font-rajdhani text-xs">B37 (116d / 118d / Mini)</span>
                            <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                              <span>from</span>
                              <span>£1,950 + VAT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-orange-500 font-orbitron text-xs font-bold mb-2">Mercedes-Benz OM651 2.1L</div>
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <span className="text-gray-300 font-rajdhani text-xs">C-Class / E-Class / Vito / Sprinter</span>
                          <span className="text-orange-500 font-orbitron text-xs font-bold whitespace-nowrap">from £1,850 + VAT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Card 3 - Performance and ECU Tuning */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 2 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(2, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 2 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Performance & ECU Tuning</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">PERFORMANCE UPGRADE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Precision ECU tuning for enhanced power and efficiency.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 2 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Stage 1 Remap</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£199 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">AdBlue Delete</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£249 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">ECU Cloning (OBD)</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£49 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">ECU Cloning (Bench)</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£119 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">ECU Recovery</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£99 + VAT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Card 4 - Car Key & Immobiliser */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 3 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(3, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 3 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Car Key & Immobiliser</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">SECURITY SERVICE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Mobile key programming and emergency services.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 3 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Emergency Vehicle Opening</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£99 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Additional Key</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£199 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">All Keys Lost (inc. 2 keys)</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£399 + VAT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Card 5 - Full Service */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 4 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(4, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 4 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Full Service</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">PREMIUM PACKAGE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Comprehensive vehicle inspection and maintenance package.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 4 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Oil & Filter Change</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£150 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Brake System Check</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Engine Diagnostics</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Safety Inspection</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Card 6 - Gearbox Servicing */}
              <div
                className={`relative overflow-visible shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col ${expandedService === 5 ? 'border-orange-500 bg-black z-50' : 'border-orange-600/30 hover:border-orange-500 bg-[#0a0a0a] z-0'
                  }`}
                onClick={(e) => toggleService(5, e)}
              >
                <div className="p-4 flex flex-col">
                  {/* Expand/collapse indicator at top */}
                  <div className="flex items-center justify-end pb-3 border-b border-white/10 mb-3">
                    <div className="text-orange-500">
                      {expandedService === 5 ? (
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-white font-orbitron uppercase tracking-wide mb-1">Gearbox Servicing</h3>
                    <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider">SPECIALIST SERVICE</p>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 text-xs font-rajdhani">Professional gearbox maintenance and repair services.</span>
                  </div>

                  {/* Expandable Details */}
                  <div className={`transition-all duration-150 ${expandedService === 5 ? 'max-h-96 opacity-100 mb-4 md:absolute md:left-0 md:right-0 md:top-full md:mt-0 md:bg-black md:border md:border-orange-500 md:z-50 md:shadow-2xl md:p-4 md:max-h-none md:mb-0' : 'max-h-0 opacity-0 overflow-hidden md:hidden md:opacity-0'
                    }`}>
                    <div className="space-y-3">
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Gearbox Oil Change</span>
                        <div className="text-orange-500 font-orbitron text-xs font-bold flex flex-col text-right">
                          <span>from</span>
                          <span>£250 + VAT</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Filter Replacement</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">System Diagnostics</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <span className="text-gray-300 font-rajdhani text-xs">Performance Test</span>
                        <span className="text-gray-400 font-rajdhani text-xs">Included</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Pricing Disclaimer */}
            <div className="text-center mt-12 mb-8">
              <p className="text-orange-500 text-sm font-rajdhani">
                <span className="font-bold">Note:</span> Prices shown are starting estimates and may vary depending on vehicle model and access requirements.
              </p>
            </div>

            {/* Book Your Service Today Button */}
            <div className="text-center">
              <Link
                href="/service-estimator"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book Your Service Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trusted Brands Section */}
      <motion.section
        className="py-10 md:py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-full px-4 md:px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center">
                <TitleBadge title="AUTOMOTIVE EXCELLENCE" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">TRUSTED BY LEADING BRANDS</h2>
              <p className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
                We service and maintain vehicles from all major automotive manufacturers with professional expertise and genuine parts.
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden bg-black py-12 border border-orange-600/30">
              <style jsx>{`
                @keyframes marquee-fast {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-100%); }
                }
                @keyframes marquee-slow {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-100%); }
                }
                .marquee-mobile {
                  animation: marquee-fast 8s linear infinite;
                  animation-delay: 1s;
                }
                .marquee-mobile:hover {
                  animation-play-state: paused;
                }
                .marquee-desktop {
                  animation: marquee-slow 20s linear infinite;
                }
                .marquee-desktop:hover {
                  animation-play-state: paused;
                }
                @media (min-width: 768px) {
                  .marquee-mobile {
                    animation: marquee-slow 20s linear infinite;
                  }
                }
              `}</style>
              {/* Continuous Marquee - No gaps, always filled */}
              <div className="flex space-x-8 md:space-x-16 marquee-mobile">
                {/* First set of logos - 9 brands (removed Rolls-Royce and Mini) */}
                <div className="w-28 h-20 md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/ford-logo-2017-download.png"
                    alt="Ford"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/bmw-logo-2020-gray-download.png"
                    alt="BMW"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/Mercedes-Benz-logo-2011-1920x1080.png"
                    alt="Mercedes-Benz"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/audi-logo-2016-download.png"
                    alt="Audi"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/Volkswagen-logo-2019-1500x1500.png"
                    alt="Volkswagen"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/porsche-logo-2014-full-download.png"
                    alt="Porsche"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/bentley-logo-2002-download.png"
                    alt="Bentley"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/toyota-logo-2020-europe-download.png"
                    alt="Toyota"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/honda-logo-2000-full-download.png"
                    alt="Honda"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Duplicate set for seamless loop - 9 brands */}
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/ford-logo-2017-download.png"
                    alt="Ford"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/bmw-logo-2020-gray-download.png"
                    alt="BMW"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/Mercedes-Benz-logo-2011-1920x1080.png"
                    alt="Mercedes-Benz"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/audi-logo-2016-download.png"
                    alt="Audi"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/Volkswagen-logo-2019-1500x1500.png"
                    alt="Volkswagen"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/porsche-logo-2014-full-download.png"
                    alt="Porsche"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/bentley-logo-2002-download.png"
                    alt="Bentley"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/toyota-logo-2020-europe-download.png"
                    alt="Toyota"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="w-28 h-20  md:w-40 md:h-24 relative flex-shrink-0 group">
                  <Image
                    src="/images/marquee/honda-logo-2000-full-download.png"
                    alt="Honda"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Fade overlays for smooth effect */}
              <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Welcome to The Car Edition Section */}
      <motion.section
        className="py-10 md:py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-full px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden shadow-2xl border border-orange-600/30">
                  <video
                    src="/video/the_car_editon.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-auto"
                    poster="/images/logos/about us image.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center justify-left">
                  <TitleBadge title="15 YEARS OF AUTOMOTIVE EXCELLENCE" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-4">
                  WELCOME TO
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-orange-500 uppercase font-orbitron tracking-wider leading-tight mb-8">
                  THE CAR EDITION
                </h3>
                <p className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-8">
                  With 15 years of experience, The Car Edition is a trusted provider of high-quality used cars and comprehensive automotive services. Our qualified team of mechanics delivers professional solutions for all your vehicle needs, from routine maintenance to complex engine rebuilds and advanced diagnostics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services" className="inline-flex items-center bg-white text-black hover:bg-[#f97316] hover:text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                    EXPLORE SERVICES
                  </Link>
                  <Link href="/about-us" className="inline-flex items-center bg-orange-600 hover:bg-orange-600 text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Why Service Your Car Section */}
      <motion.section
        className="py-10 md:py-20 bg-black"
        style={{ backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]"></div>
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row items-top gap-16">
              {/* Left side - 3D Car Image (Clean & Plain) */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/dropbox/30.jpg"
                    alt="Professional automotive service at The Car Edition"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right side - Compact Content */}
              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <div className="flex items-center justify-left">
                  <TitleBadge title="Trusted by enthusiasts" />
                </div>

                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
                  Why Choose <span className="text-orange-500">The Car Edition</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-8">
                  We treat every car as if it were our own. Whether it is a daily runabout, a work van, or a performance build you will always get dealership-level care without the dealership prices.
                </motion.p>

                {/* Service Features with Orange Badges */}
                <motion.div variants={fadeInUp} className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-600 mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold text-lg mb-2">Honest Diagnostics</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Straight answers, no guesswork. We tell you exactly what is wrong and what it takes to fix it.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-600 mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold text-lg mb-2">Transparent Pricing</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Clear communication and upfront pricing. No hidden fees, no surprises.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-600 mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold text-lg mb-2">Factory-Level Expertise</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Dealership-level care without dealership prices. Professional tools and passionate technicians.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-600 mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold text-lg mb-2">Trusted by Enthusiasts</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Whether it is a daily driver or a performance build, we treat every car as if it were our own.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                    VIEW SERVICES
                  </Link>
                  <Link href="/contact-us" className="inline-flex items-center justify-center border-2 bg-white hover:border-[#f97316] border-white  text-black hover:bg-[#f97316] hover:text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                    CONTACT US
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        className="py-10 md:py-20 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center">
                <TitleBadge title="PROFESSIONAL EXPERTISE" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6"
              >
                Our <span className="text-orange-600">Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed"
              >
                Every job we take on is done properly, no guesswork, no upselling, no compromises.
              </motion.p>
            </motion.div>

            {/* Service Tabs */}
            {/* Mobile — Selection bar */}
            <div className="sm:hidden mb-8 w-full min-w-0">
              <div className="relative border-2 border-orange-600 bg-gray-100 w-full min-w-0 box-border">
                <select
                  value={activeServiceTab}
                  onChange={(e) => setActiveServiceTab(Number(e.target.value))}
                  className="w-full min-w-0 h-fit block bg-transparent text-gray-900 font-bold text-xs uppercase pl-4 pr-8 py-4 appearance-none cursor-pointer focus:outline-none"
                >
                  {['Diagnostics & Electrical', 'Keys & Security', 'Performance & Tuning', 'Servicing & Maintenance', 'Tyres & Alignment', 'Mechanical Repairs'].map((name, index) => (
                    <option key={index} value={index} className="bg-gray-100 hover:bg-orange-600 text-gray-900 font-rajdhani text-sm uppercase my-2">
                      {name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-orange-500">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="h-0.5 bg-orange-600 w-full" />
            </div>
            {/* Desktop — Button grid */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-12">
              {[
                {
                  name: 'Diagnostics & Electrical',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Keys & Security',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Performance & Tuning',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Servicing & Maintenance',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Tyres & Alignment',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Mechanical Repairs',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveServiceTab(index)}
                  className={`group relative flex flex-col items-center justify-center px-6 py-4 transition-all duration-300 border-2 flex-stretch ${activeServiceTab === index
                    ? 'bg-orange-600 border-orange-500 text-white shadow-lg scale-105'
                    : 'bg-black border-orange-600/30 text-white hover:bg-[#f97316]/80 hover:border-orange-600/50 hover:scale-105'
                    }`}
                >
                  <div className="mb-2">
                    {service.icon}
                  </div>
                  <span className="text-xs font-rajdhani font-bold uppercase tracking-wide">{service.name}</span>
                  {activeServiceTab === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Service Content */}
            <div className="bg-black backdrop-blur-sm p-4 sm:p-6 md:p-8 border-2 border-orange-600/30 shadow-2xl">
              {/* Diagnostics & Electrical */}
              {activeServiceTab === 0 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Diagnostics & Electrical</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Advanced diagnostic equipment to identify and resolve electrical faults, sensor issues, and system malfunctions.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Advanced OBD diagnostics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Electrical fault finding</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Sensor diagnostics and replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">ECU fault code reading and clearing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Wiring repairs and modifications</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Keys & Security */}
              {activeServiceTab === 1 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Keys & Security</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Car key programming, replacement, emergency opening, and immobiliser services for all vehicle makes.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Key programming and coding</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Lost key replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Emergency vehicle opening</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Immobiliser repair and bypass</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Remote key fob programming</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance & Remapping */}
              {activeServiceTab === 2 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Performance & Remapping</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">ECU remapping, stage 1-3 tuning, AdBlue delete, and performance upgrades for enhanced power and efficiency.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Stage 1, 2, and 3 ECU remapping</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">DPF and AdBlue delete</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Performance upgrades</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Rolling road tuning</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Custom map development</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Servicing & Maintenance */}
              {activeServiceTab === 3 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Servicing & Maintenance</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Regular servicing, oil changes, brake repairs, and preventative maintenance to keep your vehicle running smoothly.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Full and interim servicing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Oil and filter changes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Brake inspection and repair</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Suspension checks</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">MOT preparation</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tyres & Wheel Alignment */}
              {activeServiceTab === 4 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Tyres & Wheel Alignment</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">For any vehicle up to 3.5 tonne, ensuring that tyres are set to the optimal position as per the manufacturer spec.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Tyre fitting and balancing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">4-wheel alignment and geometry</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Puncture repairs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">TPMS sensor replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Wheel refurbishment</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mechanical Repairs */}
              {activeServiceTab === 5 && (
                <div className="animate-fadeIn">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-orbitron mb-3">Mechanical Repairs</h3>
                      <p className="text-gray-300 font-rajdhani text-base leading-relaxed">Comprehensive mechanical repairs from timing chains to clutch replacements, all carried out to the highest standards.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Timing belt and chain replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Clutch replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Engine repairs and rebuilds</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Gearbox repairs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 font-rajdhani text-sm">Cooling system repairs</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Schedule Appointment Section */}
      <motion.section
        className="py-10 md:py-20 bg-black"
        style={{ backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]"></div>
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="lg:w-1/2 order-2 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="border-l-4 border-orange-600 pl-6 mb-8"
                >
                  <p className="text-orange-500 text-sm font-bold uppercase tracking-wider font-rajdhani mb-2">
                    BOOK YOUR SERVICE TODAY
                  </p>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6"
                >
                  Book an
                  <br />
                  <span className="text-orange-500">Appointment</span>
                </motion.h2>
                <p className="text-lg text-gray-300 font-rajdhani leading-relaxed mb-8">
                  Experience professional automotive service at The Car Edition. Our expert technicians are ready to keep your vehicle running at peak performance. Book your appointment today for quality service you can trust.
                </p>

                {/* Service Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 mr-3"></div>
                    <span className="text-gray-300 font-rajdhani">Same Day Service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 mr-3"></div>
                    <span className="text-gray-300 font-rajdhani">Expert Technicians</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 mr-3"></div>
                    <span className="text-gray-300 font-rajdhani">Quality Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 mr-3"></div>
                    <span className="text-gray-300 font-rajdhani">Competitive Prices</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a href="tel:01480759004" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105">
                    BOOK APPOINTMENT
                  </a>
                  <a href="tel:01480759004" className="inline-flex items-center justify-center border-2 bg-white hover:border-[#f97316] border-white text-black hover:bg-[#f97316] hover:text-white px-8 py-4 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95">
                    CALL US NOW
                  </a>
                </motion.div>
              </motion.div>

              {/* Right - Google Map */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: "0px" }}
                className="order-1 lg:order-2 w-full lg:w-1/2"
              >
                <div className="relative w-full  mx-auto">
                  <div className=" shadow-2xl border border-orange-600/30 overflow-hidden bg-gray-900">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d-0.1857!3d52.3284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877e9a1a1a1a1a1%3A0x1234567890abcdef!2sUnit%204-5%20Cinch%20Storage%2C%20St%20Margarets%20Way%2C%20Huntingdon%20PE29%206EB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                      width="100%"
                      height="400"
                      style={{ border: 0, minHeight: '400px', filter: 'invert(90%) hue-rotate(180deg)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Testimonials Section */}
      <TestimonialsCarousel limit={6} autoplaySpeed={6000} />


    </main>
  );
}
