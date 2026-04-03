'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaEye, FaArrowRight, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface BlogPost {
  _id: string;
  title: string;
  createdAt: string;
  content: string;
  imageUrl: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // Commented out API call - using dummy data for now
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get<BlogPost[]>("/api/blogs");
  //       setBlogs(response.data);
  //       setError(null);
  //     } catch (err) {
  //       console.error('Error fetching blogs:', err);
  //       setError('Failed to load blogs. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // Dummy blog data for services
  useEffect(() => {
    const dummyBlogs: BlogPost[] = [
      {
        _id: '1',
        title: 'Timing Chain Replacement: Essential Maintenance for Engine Longevity',
        createdAt: new Date().toISOString(),
        content: 'Learn why timing chain replacement is crucial for your engine\'s health and performance. Our expert technicians explain the signs of wear and the importance of regular maintenance.',
        imageUrl: '/images/dropbox/15.jpg'
      },
      {
        _id: '2',
        title: 'Complete Guide to Engine Rebuilds: Restoring Your Vehicle\'s Power',
        createdAt: new Date().toISOString(),
        content: 'Discover the comprehensive process of engine rebuilding and how it can breathe new life into your vehicle. From diagnostics to final testing, we cover it all.',
        imageUrl: '/images/dropbox/16.jpg'
      },
      {
        _id: '3',
        title: 'Turbo Repair and Replacement: Maximizing Performance',
        createdAt: new Date().toISOString(),
        content: 'Everything you need to know about turbocharger maintenance, repair, and replacement. Keep your turbocharged engine running at peak performance.',
        imageUrl: '/images/dropbox/17.jpg'
      },
      {
        _id: '4',
        title: 'Brake Safety: When to Replace Your Brakes and Pads',
        createdAt: new Date().toISOString(),
        content: 'Your safety depends on properly functioning brakes. Learn the warning signs and understand when it\'s time for brake and pad replacement.',
        imageUrl: '/images/dropbox/18.jpg'
      },
      {
        _id: '5',
        title: 'Advanced Diagnostics: Identifying Vehicle Issues with Precision',
        createdAt: new Date().toISOString(),
        content: 'Modern vehicles require advanced diagnostic tools. Discover how our state-of-the-art equipment helps identify and resolve issues quickly.',
        imageUrl: '/images/dropbox/19.jpg'
      },
      {
        _id: '6',
        title: 'Wheel Alignment: The Key to Better Handling and Tire Life',
        createdAt: new Date().toISOString(),
        content: 'Proper wheel alignment improves handling, extends tire life, and enhances fuel efficiency. Learn the signs that your vehicle needs alignment.',
        imageUrl: '/images/tyres-and-puncture.jpeg'
      },
      {
        _id: '7',
        title: 'Transmission Repair: Expert Care for Your Gearbox',
        createdAt: new Date().toISOString(),
        content: 'Understanding transmission issues and repair options. Our experts explain common problems and how to maintain your automatic or manual gearbox.',
        imageUrl: '/images/dropbox/20.jpg'
      },
      {
        _id: '8',
        title: 'Carbon Cleaning: Restore Engine Performance and Efficiency',
        createdAt: new Date().toISOString(),
        content: 'Carbon buildup can significantly impact engine performance. Learn how professional carbon cleaning can restore power and improve fuel economy.',
        imageUrl: '/images/dropbox/21.jpg'
      },
      {
        _id: '9',
        title: 'Electrical Repair: Solving Complex Automotive Electrical Issues',
        createdAt: new Date().toISOString(),
        content: 'Modern vehicles rely heavily on electrical systems. Discover how our expert technicians diagnose and repair complex electrical problems.',
        imageUrl: '/images/dropbox/22.jpg'
      },
      {
        _id: '10',
        title: 'Interior Repair: Professional Restoration for Your Vehicle',
        createdAt: new Date().toISOString(),
        content: 'From leather repair to upholstery restoration, learn how professional interior repair can transform your vehicle\'s cabin.',
        imageUrl: '/images/dropbox/23.jpg'
      },
      {
        _id: '11',
        title: 'Car Servicing: Comprehensive Maintenance for Peak Performance',
        createdAt: new Date().toISOString(),
        content: 'Regular servicing is essential for vehicle longevity. Understand what\'s included in our comprehensive service packages.',
        imageUrl: '/images/dropbox/24.jpg'
      },
      {
        _id: '12',
        title: 'Vehicle Customisation: Transform Your Car with Modern Tech',
        createdAt: new Date().toISOString(),
        content: 'Explore the latest in vehicle customisation, from star lights to advanced entertainment systems. Make your car uniquely yours.',
        imageUrl: '/images/dropbox/25.jpg'
      },
      {
        _id: '13',
        title: 'Air Conditioning Service: Stay Cool and Comfortable',
        createdAt: new Date().toISOString(),
        content: 'Professional air conditioning service and repair keeps you comfortable year-round. Learn about maintenance and common AC issues.',
        imageUrl: '/images/dropbox/26.jpg'
      }
    ];
    
    setBlogs(dummyBlogs);
    setLoading(false);
  }, []);

  const openBlogDialog = (blog: BlogPost) => {
    router.push(`/blogs/${blog._id}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-16 flex flex-col justify-center items-center">
        <p className="text-xl text-gray-400 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2"
        >
          Try Again
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="relative py-4 bg-black" style={{backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blog Grid Section */}
      <section className="relative w-full py-16 bg-black" style={{backgroundImage: 'url(/images/logos/background-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="w-full px-6 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase font-orbitron tracking-wider leading-tight">
                FEATURED <span className="text-orange-600">ARTICLES</span>
              </h2>
              <p className="text-sm text-gray-400 font-rajdhani max-w-2xl mx-auto">
                Full articles coming soon. Browse our service topics below.
              </p>
            </motion.div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <motion.article 
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 border border-gray-600 rounded-xl overflow-hidden backdrop-blur-sm hover:border-orange-600 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center text-xs text-orange-400 mb-3 font-rajdhani">
                      <FaCalendarAlt className="mr-2" />
                      <span>{formatDate(blog.createdAt)}</span>
                      <span className="mx-2">•</span>
                      <FaClock className="mr-2" />
                      <span>5 min read</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300 font-orbitron uppercase tracking-wide line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <div 
                      className="text-gray-300 text-sm mb-3 font-rajdhani line-clamp-2" 
                      dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }} 
                    />
                    
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-orbitron font-semibold uppercase tracking-wide">
                      COMING SOON
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}