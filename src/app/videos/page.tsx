'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaPlay, FaCalendarAlt, FaEye, FaArrowRight, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import axios from 'axios';
import { HeroVideoDialog } from '@/components/magicui/hero-video-dialog';
import TitleBadge from '@/components/TitleBadge';
import GlobalLoading from '@/components/GlobalLoading';

interface YouTubeVideo {
  _id: string;
  title: string;
  createdAt: string;
  videoYoutubeLink: string;
  videoThumbnail: string;
  videoEmbedLink: string;
  description: string;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);


  // Commented out API call - using dummy data for now
  // useEffect(() => {
  // const fetchVideos = async () => {
  // setLoading(true);
  // try {
  // const response = await axios.get("/api/videos");
  // setVideos(response.data);
  // setError(null);
  // } catch (err) {
  // console.error('Error fetching videos:', err);
  // setError('Failed to load videos. Please try again later.');
  // } finally {
  // setLoading(false);
  // }
  // };

  // fetchVideos();
  // }, []);

  // Dummy video data
  useEffect(() => {
    const dummyVideos: YouTubeVideo[] = [
      {
        _id: '1',
        title: 'This Job Got EXPENSIVE Fast! Jaguar XE Came For A Timing Chain BUT It Was Way Worse - The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/YFUxge40zro',
        videoThumbnail: 'https://i.ytimg.com/vi/YFUxge40zro/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/YFUxge40zro',
        description: 'Workshop stories and automotive insights'
      },
      {
        _id: '2',
        title: 'Why We REFUSED This Mercedes Timing Chain Job | The Importance of Bearings | The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/lOoiXiWvCZw',
        videoThumbnail: 'https://i.ytimg.com/vi/lOoiXiWvCZw/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/lOoiXiWvCZw',
        description: 'Behind the scenes at The Car Edition'
      },
      {
        _id: '3',
        title: 'Track Car Series EP1: 4 Mechanics. 4 Cars. 1 Track Day. Who Built The Fastest? - The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/-HFEznHHuC4',
        videoThumbnail: 'https://i.ytimg.com/vi/-HFEznHHuC4/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/-HFEznHHuC4',
        description: 'Diagnostic deep dive and tech talk'
      },
      {
        _id: '4',
        title: 'New-Gen 2020 Land Rover Defender Ingenium Timing Chain | New vs Old Engine | The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/ki3Upa2CiNo',
        videoThumbnail: 'https://i.ytimg.com/vi/ki3Upa2CiNo/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/ki3Upa2CiNo',
        description: 'Expert tips and common car issues'
      },
      {
        _id: '5',
        title: 'Bentley Bentayga W12 Service | The Reality Behind a ‘Clear History’ | The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/WFtX4o-zrr0',
        videoThumbnail: 'https://i.ytimg.com/vi/WFtX4o-zrr0/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/WFtX4o-zrr0',
        description: 'Complete engine rebuild process'
      },
      {
        _id: '6',
        title: '🚨VW Amarok WET BELT Shock🚨 1 Year Old & ONLY 62,000 Miles | Belt About to SNAP! - The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/7sopzjNaLG0',
        videoThumbnail: 'https://i.ytimg.com/vi/7sopzjNaLG0/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/7sopzjNaLG0',
        description: 'Professional turbo repair techniques'
      },
      {
        _id: '7',
        title: '2018 Audi Q7 V6 TDI Engine Tear Down - You Won’t Believe What We Found Inside - The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/GmuX2if7Kng',
        videoThumbnail: 'https://i.ytimg.com/vi/GmuX2if7Kng/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/GmuX2if7Kng',
        description: 'Complete carbon cleaning walkthrough'
      },
      {
        _id: '8',
        title: 'Classic BMW 850i V12 Engine Tear-Down, The Masterpiece of the 90s - The Car Edition',
        createdAt: new Date().toISOString(),
        videoYoutubeLink: 'https://youtu.be/4inq-Ox7Nfo',
        videoThumbnail: 'https://i.ytimg.com/vi/4inq-Ox7Nfo/maxresdefault.jpg',
        videoEmbedLink: 'https://www.youtube.com/embed/4inq-Ox7Nfo',
        description: 'Professional transmission servicing'
      }
    ];

    setVideos(dummyVideos);
    setLoading(false);
  }, []);

  // Keyboard support for video modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedVideo) {
        closeVideo();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <GlobalLoading />;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-32">
      {/* Podcast Section */}
      <section className="w-full pt-20 pb-0 bg-black">
        <div className="w-full px-6">
          <div className="max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <ScrollAnimation animation="fade-up">
              <div className="flex flex-col text-center mb-12 items-center justify-center">
                <TitleBadge title="Behind the Spanners" />
                <h2 className="text-4xl md:text-6xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
                  THE CAR EDITION
                  <br />
                  <span className="text-orange-600">PODCAST</span>
                </h2>
                <p className="text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
                  Real mechanics, real problems, real solutions. Tune in to our unfiltered automotive podcast.
                </p>
              </div>
            </ScrollAnimation>

            {/* Podcast Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <TitleBadge title="Behind the Spanners" />
                <h3 className="text-3xl md:text-4xl font-bold text-white font-orbitron leading-tight">
                  The Car Edition <span className="text-orange-600">Unfiltered</span> Podcast
                </h3>
                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                  We do not hide behind closed doors. Our workshop and podcast show the real side of automotive repair the wins, the failures, the stories behind the spanners.
                </p>
                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                  Watch our latest episodes to see what really happens in the world of diagnostics and engine rebuilds. Real mechanics, real problems, real solutions.
                </p>

                {/* Social Links */}
                <div className="grid grid-cols-2 md:grid-cols-4  gap-3 pt-4">
                  <a
                    href="https://www.youtube.com/@thecareditionltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white px-6 py-3 font-rajdhani font-bold transition-all duration-300"
                  >
                    <FaYoutube className="text-xl" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://open.spotify.com/show/79qHgTDpAvY6H7fYF9Zl3B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-rajdhani font-bold transition-all duration-300 "
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    <span>Spotify</span>
                  </a>
                  <a
                    href="facebook.com/share/1E8qBYXmJU/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-rajdhani font-bold transition-all duration-300"
                  >
                    <FaFacebookF className="text-lg" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="instagram.com/thecareditionltd?igsh=N2FjdTgzNWthenlm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 md:px-2 md:py-1 font-rajdhani font-bold transition-all duration-300"
                  >
                    <FaInstagram className="text-lg" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Spotify Embed */}
              <div className="bg-black/50 p-6 flex items-center justify-center overflow-hidden border-2 border-orange-600/30 hover:border-orange-600 transition-all duration-300 rounded">
                <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/5BZsQlgw21vDOAjoqkNgKb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="w-full pt-20 pb-0 bg-black">
        <div className="w-full px-6">
          <div className="max-w-screen-2xl mx-auto">
            {/* Section Header */}
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white uppercase font-orbitron tracking-wider leading-tight mb-6">
                  OUR <span className="text-orange-600">VIDEOS</span>
                </h2>
              </div>
            </ScrollAnimation>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-300 mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-bold font-orbitron uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Try Again
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* First row - 4 videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videos.slice(0, 4).map((video, index) => (
                    <a
                      key={video._id}
                      href={video.videoYoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-black overflow-hidden border border-orange-600/30 hover:border-orange-600 transition-all duration-300"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={video.videoThumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaPlay className="text-white text-2xl ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-rajdhani font-bold text-base mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">{video.title}</h4>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-orange-500 font-rajdhani text-xs font-bold uppercase flex items-center">
                            <FaYoutube className="mr-1" />
                            Watch Now
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Second row - 4 videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videos.slice(4, 8).map((video, index) => (
                    <a
                      key={video._id}
                      href={video.videoYoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-black overflow-hidden border border-orange-600/30 hover:border-orange-600 transition-all duration-300"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={video.videoThumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaPlay className="text-white text-2xl ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-rajdhani font-bold text-base mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">{video.title}</h4>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-orange-500 font-rajdhani text-xs font-bold uppercase flex items-center">
                            <FaYoutube className="mr-1" />
                            Watch Now
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-12">
              <a
                href="https://www.youtube.com/@thecareditionltd/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold font-orbitron uppercase tracking-wider transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center">
                  <FaYoutube className="mr-3" />
                  VIEW ALL VIDEOS
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="w-full py-20 bg-gradient-to-b from-black to-black/50">
        <div className="w-full px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="bg-black/50 border-2 border-orange-600/30 p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron mb-4 uppercase tracking-wider">
                Work With <span className="text-orange-600">Us</span>
              </h3>
              <p className="text-gray-300 font-rajdhani text-lg mb-6">
                Interested in collaboration, media partnerships, or sponsorship opportunities?
              </p>
              <p className="text-white font-rajdhani text-lg">
                Get in touch with our media team at{' '}
                <a
                  href="mailto:marketing@thecaredition.co.uk"
                  className="text-orange-600 hover:text-orange-500 font-bold transition-colors duration-300"
                >
                  marketing@thecaredition.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-7xl mx-4 animate-in fade-in zoom-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button - Top Right */}
            <button
              onClick={closeVideo}
              className="absolute -top-4 -right-4 z-30 group bg-orange-600 hover:bg-orange-700 w-12 h-12 flex items-center justify-center text-white transition-all duration-300 shadow-2xl hover:shadow-orange-600/50 transform hover:scale-110"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Close Button - Alternative Position */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-30 group bg-black/80 hover:bg-orange-600 w-10 h-10 flex items-center justify-center text-white transition-all duration-300 shadow-lg"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative bg-black overflow-hidden shadow-2xl border-2 border-orange-600/30 ring-4 ring-orange-600/10">
              {/* Loading Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10" id="video-loading">
                <div className="flex flex-col items-center">
                  <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-600 mb-4"></div>
                  <p className="text-white font-rajdhani">Loading video...</p>
                </div>
              </div>

              {/* Video Player */}
              <iframe
                src={`${selectedVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&color=white&theme=dark`}
                className="w-full aspect-video border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                title="The Car Edition - Premium Automotive Content"
                frameBorder="0"
                style={{ minHeight: '400px' }}
                onLoad={() => {
                  const loading = document.getElementById('video-loading');
                  if (loading) {
                    setTimeout(() => {
                      loading.style.display = 'none';
                    }, 1000);
                  }
                }}
              />

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-600 flex items-center justify-center">
                      <FaYoutube className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white font-orbitron font-bold text-sm">THE CAR EDITION</p>
                      <p className="text-gray-300 font-rajdhani text-xs">Premium Automotive Content</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => {
                        if (document.fullscreenElement) {
                          document.exitFullscreen();
                        } else {
                          document.documentElement.requestFullscreen();
                        }
                      }}
                      className="w-10 h-10 bg-white/10 hover:bg-[#f97316]/20 flex items-center justify-center text-white transition-all duration-300"
                      title="Toggle Fullscreen"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>

                    <a
                      href={selectedVideo.replace('/embed/', '/watch?v=')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-rajdhani font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center hover:scale-105 active:scale-95"
                    >
                      <FaYoutube className="mr-2" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-between items-center text-gray-400 font-rajdhani text-sm">
              <div>
                Press <kbd className="px-2 py-1 bg-white text-white mx-1">ESC</kbd> to close or click outside
              </div>
              <div className="flex items-center space-x-4">
                <span>Click</span>
                <div className="w-8 h-8 bg-orange-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}