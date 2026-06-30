import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video and poster
import heroVideo from '../assets/hero video/Animated_developer_speaking_to_v…_202606241428 (online-video-cutter.com).webm';
import heroPoster from '../assets/hero video/wmremove-transformed.webp';


const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      disable: 'mobile'
    });
  }, []);

  // Toggle Play/Pause state and unmute audio on play
  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false; // Ensure audio plays
        videoRef.current.volume = 1.0;  // Ensure maximum volume
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => console.log("Play failed: ", err));
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster={heroPoster}
        className="absolute top-0 left-0 w-full h-full object-cover object-[75%_center] z-0"
      >
        <source src={heroVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container - UPDATED: Changed items-center to items-start and added responsive top padding (pt-28 / md:pt-[12%]) to lift content below the navbar */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m a <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Full Stack Developer 
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            Leveraging React, Node.js, AI, and cloud technologies to build scalable, intelligent, and high-performance digital products.
          </p>

          {/* Buttons and Play/Pause */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-row items-center gap-4">
              {/* Primary Button */}
              <a 
                href="#projects" 
                className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
              >
                View My Work
              </a>
              
              {/* Secondary Button */}
              <a 
                href="#contact" 
                className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
              >
                Contact Me
              </a>
            </div>

            {/* Play/Pause Button - Translucent and positioned below View My Work */}
            <button
              onClick={togglePlayPause}
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2 w-fit shadow-md select-none"
            >
              {isPlaying ? (
                <>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                  <span>Pause Video</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                  <span>Play Video</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>



      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;