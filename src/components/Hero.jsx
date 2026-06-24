import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video and poster
import heroVideo from '../assets/hero video/Animated_developer_speaking_to_v…_202606241428 (online-video-cutter.com).mp4';


const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    // Start video playback (muted) after preloader screen slides away (approx 2500ms)
    const playTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(err => console.log("Autoplay failed:", err));
      }
    }, 2500);

    return () => {
      clearTimeout(playTimer);
    };
  }, []);

  // Switches audio states cleanly without freezing or pausing the video frame timeline
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      // Safety check: ensure the video remains playing
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.log("Play failed: ", err));
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - configured to play automatically after loader */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[75%_center] z-0"
      >
        <source src={heroVideo} type="video/mp4" />
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

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
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
        </div>

      </div>

      {/* Mute/Unmute Controller - Shifted to bottom-right to cover Gemini logo */}
      <div 
        className="absolute bottom-4 right-4 md:bottom-[49px] md:right-[67px] flex flex-row items-center justify-center gap-3 cursor-pointer group z-30"
        onClick={toggleMute}
      >
        <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
          {isMuted ? "Unmute Reel" : "Mute Sound"}
        </span>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
          {isMuted ? (
            // Speaker Muted Icon
            <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
            </svg>
          ) : (
            // Speaker Audio Active Waves Icon
            <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
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