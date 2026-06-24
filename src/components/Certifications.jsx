import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certificationsData = [
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued Jan 2025',
      credentialId: 'AWS-DEV-98210',
      verifyLink: '#',
      icon: (
        <svg className="w-12 h-12 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Cloud server mesh visualization */}
          <path d="M17.5 19A3.5 3.5 0 1 0 14 15.5" />
          <path d="M12 21A6 6 0 1 1 12 9a6.002 6.002 0 0 1 5.92 5" />
          <circle cx="12" cy="15" r="2" fill="currentColor" fillOpacity="0.1" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="6" y1="15" x2="10" y2="15" />
          <line x1="14" y1="15" x2="18" y2="15" />
        </svg>
      )
    },
    {
      title: 'Meta Front-End Developer Professional',
      issuer: 'Meta (via Coursera)',
      date: 'Issued Aug 2024',
      credentialId: 'META-FED-88432',
      verifyLink: '#',
      icon: (
        <svg className="w-12 h-12 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Concentric UI loops representing front-end rendering */}
          <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.05" />
          <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          <circle cx="7" cy="9" r="1" fill="currentColor" />
          <circle cx="10" cy="9" r="1" fill="currentColor" />
          <circle cx="13" cy="9" r="1" fill="currentColor" />
          <path d="M7 14h10" />
        </svg>
      )
    },
    {
      title: 'Advanced Generative AI & LLMs',
      issuer: 'DeepLearning.AI',
      date: 'Issued Nov 2025',
      credentialId: 'DLAI-GENAI-77490',
      verifyLink: '#',
      icon: (
        <svg className="w-12 h-12 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Neural nodes & AI Sparkles */}
          <path d="M12 3L9.5 7.5 4 10l5.5 2.5L12 18l2.5-5.5L20 10l-5.5-2.5z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
          <circle cx="4" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <circle cx="20" cy="10" r="1" fill="currentColor" />
          <line x1="12" y1="3" x2="9.5" y2="7.5" strokeDasharray="2 2" />
          <line x1="4" y1="10" x2="9.5" y2="7.5" strokeDasharray="2 2" />
          <line x1="12" y1="18" x2="9.5" y2="12.5" strokeDasharray="2 2" />
          <line x1="20" y1="10" x2="14.5" y2="12.5" strokeDasharray="2 2" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16
      }
    }
  };

  return (
    <section id="certifications" className="relative w-full bg-white py-24 md:py-36 overflow-hidden border-t border-gray-100">
      {/* Blueprint Grid Pattern matching Skills/Projects theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.02)_25%,rgba(0,0,0,.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.02)_75%,rgba(0,0,0,.02)_76%,transparent_77%,transparent)] bg-[length:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 md:mb-20 text-left"
        >
          <div className="mb-4">
            <span className="inline-block text-xs font-bold text-black/50 uppercase tracking-widest px-4 py-2 bg-black/5 border border-black/5 rounded-full font-space-grotesk">
              Credentials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-space-grotesk text-black mb-6 tracking-tight leading-[1.05]">
            Verified <span className="text-[#ff2a2a]">Badges</span>
          </h2>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl font-inter font-normal leading-relaxed">
            Professional industry-standard certifications validating full-stack expertise and advanced AI applications engineering.
          </p>
        </motion.div>

        {/* Certifications Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white border border-gray-200/70 rounded-[1.8rem] p-8 flex flex-col justify-between hover:border-red-500/20 hover:shadow-[0_30px_70px_rgba(255,42,42,0.05)] hover:-translate-y-1.5 transition-all duration-500 z-10"
            >
              {/* Corner crosshairs (+) for engineering look */}
              <div className="absolute top-3 left-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute top-3 right-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute bottom-3 left-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute bottom-3 right-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>

              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-[#ff2a2a] transition-all duration-500" />

              <div>
                {/* Index & Custom Graphic Header */}
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs font-bold text-[#ff2a2a] tracking-wider">
                    [ 0{index + 1} ]
                  </span>
                  
                  {/* Custom SVG Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-500/10 shadow-sm transition-all duration-500">
                    {cert.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-extrabold font-space-grotesk text-gray-900 mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300 tracking-tight leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-black/55 font-space-grotesk mb-1">
                  {cert.issuer}
                </p>
                
                {/* Date */}
                <p className="text-xs text-gray-400 font-inter font-normal mb-5">
                  {cert.date}
                </p>

                {/* Monospace Credential ID */}
                <div className="text-xs text-gray-500 font-mono bg-gray-50 border border-gray-100/80 px-3.5 py-2 rounded-xl inline-block mb-8">
                  ID: <span className="font-semibold text-black/70">{cert.credentialId}</span>
                </div>
              </div>

              {/* Verification Link */}
              <div className="pt-5 border-t border-gray-100 w-full">
                <a
                  href={cert.verifyLink}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-gray-900 hover:text-[#ff2a2a] transition-colors duration-300 font-space-grotesk"
                >
                  Verify License
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
