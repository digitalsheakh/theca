'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaGoogle } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import TitleBadge from './TitleBadge';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  photoUrl?: string;
}

interface TestimonialsCarouselProps {
  limit?: number;
  autoplaySpeed?: number;
}

export default function TestimonialsCarousel({
  limit = 8,
  autoplaySpeed = 5000
}: TestimonialsCarouselProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch reviews from Google
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        // In a production environment, this would fetch from an API endpoint
        // that connects to the Google Places API
        const realReviews: Review[] = [
          {
            id: '1',
            author: 'Antonio Pereira',
            rating: 5,
            text: 'Well worth the 3 hour drive to get these guys working on my T6. Cambelt, water pump, health check and diagnostics on another fault. Good bunch of lads. Will definitely use them again.',
            date: '2024-01-15',
            photoUrl: '/images/testimonials/avatar1.jpg'
          },
          {
            id: '2',
            author: 'Samson Tabonares',
            rating: 5,
            text: 'I recently had my gearbox oil, differential oil, and filters changed here, and I couldn\'t be happier with the service. The team was professional, friendly, and explained everything clearly before starting the job. You can tell they really know their stuff — the car feels smoother and runs better than ever. Prices were fair, and the work was done on time. I\'ll definitely be coming back for future maintenance. Highly recommend this garage to anyone looking for honest and skilled mechanics!',
            date: '2024-01-10',
            photoUrl: '/images/testimonials/avatar2.jpg'
          },
          {
            id: '3',
            author: 'Abdallah Al Teeb',
            rating: 5,
            text: 'First time here, I was really impressed by the car education ltd. Customer service 10/10. Car was repaired quickly and i was charged a reasonable price. Will definitely come back in the future.',
            date: '2024-01-05',
            photoUrl: '/images/testimonials/avatar3.jpg'
          },
          {
            id: '4',
            author: 'Laszlo',
            rating: 5,
            text: 'Great service from The Car Edition! They did the wet belt on my car and were friendly, professional, and easy to deal with. Everything was explained clearly and the job was done to a high standard. Highly recommend them!',
            date: '2023-12-28',
            photoUrl: '/images/testimonials/avatar4.jpg'
          },
          {
            id: '5',
            author: 'Sinead Wilmot',
            rating: 5,
            text: 'Had a wet belt service done on my van along with all four brake discs and pads replaced, and I\'m very impressed with the service from The Car Edition Ltd. Everything was clearly explained beforehand and the work was carried out professionally. It\'s been around three weeks since the work was completed and I\'ve had no issues at all — the van is running smoothly and the brakes feel spot on. Great workmanship, fair pricing, and excellent service. Would definitely recommend.',
            date: '2023-12-20',
            photoUrl: '/images/testimonials/avatar5.jpg'
          },
          {
            id: '6',
            author: 'Kevin Allen',
            rating: 5,
            text: 'Is it one of the best garages I have used in a long time very hard to find a good Garage? I\'d recommend these any day of the week you get what you pay for And these guys know their stuff you may have seen them on Facebook they don\'t sugarcoat anything They tell you the truth and they don\'t lie if you want a Garage to do 100% job on your vehicle come to these guys they are absolutely brilliant',
            date: '2023-12-15',
            photoUrl: '/images/testimonials/avatar6.jpg'
          },
          {
            id: '7',
            author: 'Chris Church',
            rating: 5,
            text: 'I am an addict to the YouTube videos the lads put out. Their attention to detail and knowledge is quite remarkable. I just wish they were round the corner from me . Obviously I have not been able to use them due to my location but would not hesitate to do so if I could. You can tell that you can trust these guys just by watching them . Good luck with the racing Chris C',
            date: '2023-12-10',
            photoUrl: '/images/testimonials/avatar7.jpg'
          }
        ];

        // Filter to only 5-star reviews and limit to the specified number
        const fiveStarReviews = realReviews.filter(review => review.rating === 5).slice(0, limit);
        setReviews(fiveStarReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [limit]);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    // On mobile: 1 review per page, on desktop: 3 reviews per page
    const reviewsPerPage = screenWidth < 768 ? 1 : 3;
    const pageCount = Math.ceil(reviews.length / reviewsPerPage);
    if (pageCount <= 1) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, autoplaySpeed);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, activeIndex, reviews.length, autoplaySpeed, screenWidth]);

  const handlePrev = () => {
    // On mobile: 1 review per page, on desktop: 3 reviews per page
    const reviewsPerPage = screenWidth < 768 ? 1 : 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    if (totalPages <= 1) return;

    setActiveIndex(prevIndex => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    // On mobile: 1 review per page, on desktop: 3 reviews per page
    const reviewsPerPage = screenWidth < 768 ? 1 : 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    if (totalPages <= 1) return;

    setActiveIndex(prevIndex => (prevIndex + 1) % totalPages);
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Truncate text if it's too long
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Track window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="bg-white py-6 sm:py-8 md:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="w-full px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center">
              <TitleBadge title="CLIENT TESTIMONIALS" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase font-orbitron tracking-wider leading-tight mb-3">
              DON'T JUST TAKE OUR WORD FOR IT,
              <br />
              <span className="text-orange-600">SEE WHAT OTHERS ARE SAYING</span>
            </h2>
            <p className="text-sm text-gray-600 font-rajdhani max-w-xl mx-auto leading-relaxed">
              Read genuine reviews from our satisfied customers who trust us with their vehicles.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-[#f56e13]"></div>
            </div>
          ) : (
            <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              {/* Testimonials Cards Slider */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {screenWidth < 768 ? (
                    // Mobile: One review per slide
                    reviews.map((review) => (
                      <div key={review.id} className="w-full flex-shrink-0 flex justify-center">
                        <div className="bg-white border border-gray-200 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col max-w-sm w-full mx-4">
                          {/* Google Logo and Stars */}
                          <div className="flex items-center justify-between mb-3">
                            <Image 
                              src="/images/logos/Google_logo.png" 
                              alt="Google" 
                              width={50} 
                              height={16} 
                              className="object-contain"
                            />
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <BsStarFill
                                  key={i}
                                  className="text-yellow-400 mr-0.5"
                                  size={14}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4 flex-grow font-rajdhani leading-relaxed text-sm">
                            "{truncateText(review.text, 200)}"
                          </p>

                          <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
                            <div className="w-10 h-10 overflow-hidden mr-3 bg-orange-600 flex items-center justify-center">
                              <span className="text-white font-bold font-orbitron text-sm">{review.author.charAt(0)}</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-800 font-orbitron text-xs uppercase tracking-wide">{review.author}</h3>
                              <p className="text-gray-500 text-xs font-rajdhani uppercase tracking-wider">VIA GOOGLE REVIEWS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Desktop: Three reviews per slide
                    Array.from({ length: Math.ceil(reviews.length / 3) }, (_, pageIndex) => (
                      <div key={pageIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-shrink-0">
                        {reviews.slice(pageIndex * 3, (pageIndex + 1) * 3).map((review) => (
                          <div
                            key={review.id}
                            className="bg-white border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                          >
                            {/* Google Logo and Stars */}
                            <div className="flex items-center justify-between mb-4">
                              <Image 
                                src="/images/logos/Google_logo.png" 
                                alt="Google" 
                                width={60} 
                                height={20} 
                                className="object-contain"
                              />
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <BsStarFill
                                    key={i}
                                    className="text-yellow-400 mr-1"
                                    size={16}
                                  />
                                ))}
                              </div>
                            </div>

                            <p className="text-gray-700 mb-6 flex-grow font-rajdhani leading-relaxed text-sm">
                              "{review.text}"
                            </p>

                            <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                              <div className="w-12 h-12 overflow-hidden mr-4 bg-orange-600 flex items-center justify-center">
                                <span className="text-white font-bold font-orbitron text-lg">{review.author.charAt(0)}</span>
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-800 font-orbitron text-sm uppercase tracking-wide">{review.author}</h3>
                                <p className="text-gray-500 text-xs font-rajdhani uppercase tracking-wider">VIA GOOGLE REVIEWS</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center mt-6 items-center">
                <button
                  onClick={handlePrev}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-2 transition-colors duration-300 mx-2 shadow-md"
                  aria-label="Previous testimonials"
                >
                  <HiOutlineChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-orange-600 hover:bg-orange-700 text-white p-2 transition-colors duration-300 mx-2 shadow-md"
                  aria-label="Next testimonials"
                >
                  <HiOutlineChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="text-center mt-6">
            <a
              href="https://g.co/kgs/pGmWczy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md text-sm"
            >
              <FaGoogle className="mr-2 w-4 h-4" />
              <span>VIEW ALL GOOGLE REVIEWS</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
