import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: 'AI-Powered Portfolio Platform',
      description: 'A modern developer portfolio system integrating Generative AI APIs for dynamic, tailored resume highlights, automated code quality checks, and real-time visitor interaction analytics.',
      tech: ['React', 'Node.js', 'Google Gemini API', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: '#',
      isFeatured: true,
      visual: (
        <div className="relative h-44 w-full bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col p-4 gap-3 justify-center shadow-inner">
          <div className="flex gap-2 items-start text-xs">
            <div className="w-5 h-5 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center font-bold text-[9px]">AI</div>
            <div className="bg-white border border-gray-200/80 px-3 py-2 rounded-lg rounded-tl-none text-gray-700 max-w-[80%] font-mono leading-tight shadow-sm">
              Analyzing Priyanshu's portfolio metrics...
            </div>
          </div>
          <div className="flex gap-2 items-start text-xs self-end justify-end w-full">
            <div className="bg-red-50 text-gray-900 px-3 py-2 rounded-lg rounded-tr-none max-w-[80%] font-mono leading-tight border border-[#ff2a2a]/20 shadow-sm">
              Optimized! Score: <span className="text-[#ff2a2a] font-bold">98%</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-[9px]">User</div>
          </div>
        </div>
      )
    },
    {
      title: 'Cloud-Native E-Commerce Hub',
      description: 'A high-scale e-commerce application utilizing a microservices architecture, serverless transaction flows, and real-time inventory updates across distributed cloud datastores.',
      tech: ['React', 'Node.js', 'AWS Lambda', 'MongoDB', 'Docker'],
      demoLink: '#',
      githubLink: '#',
      isFeatured: false,
      visual: (
        <div className="relative h-44 w-full bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-6 shadow-inner">
          <div className="flex items-center gap-4 relative">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shadow-sm text-gray-700 hover:border-[#ff2a2a] transition-all duration-300">
              <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h3.5a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z" />
              </svg>
            </div>
            <div className="w-8 border-t-2 border-dashed border-gray-300"></div>
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shadow-sm text-gray-700">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Intelligent Smart Task Scheduler',
      description: 'A collaborative workflow manager with AI-driven priority assignment, team workload analytics, and real-time socket-based event synchronization.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
      demoLink: '#',
      githubLink: '#',
      isFeatured: false,
      visual: (
        <div className="relative h-44 w-full bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col p-4 gap-2.5 justify-center shadow-inner">
          <div className="flex items-center justify-between bg-white border border-gray-100 px-3 py-2 rounded-lg shadow-sm text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]"></span>
              <span className="font-mono text-gray-700 font-medium">Deploy Server</span>
            </div>
            <span className="text-[9px] bg-red-100 text-[#ff2a2a] px-2 py-0.5 rounded font-black">CRITICAL</span>
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-100 px-3 py-2 rounded-lg shadow-sm text-xs opacity-75">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span className="font-mono text-gray-500 font-medium">Optimize Assets</span>
            </div>
            <span className="text-[9px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-black">NORMAL</span>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="relative w-full bg-white py-24 md:py-36 overflow-hidden border-t border-gray-100">
      {/* Blueprint Grid Pattern matching Skills theme */}
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
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-space-grotesk text-black mb-6 tracking-tight leading-[1.05]">
            Engineering <span className="text-[#ff2a2a]">Solutions</span>
          </h2>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl font-inter font-normal leading-relaxed">
            An asymmetric showcase of full-stack products, built to demonstrate cloud performance, scalability, and AI integrations.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative bg-white border border-gray-200/70 rounded-[1.8rem] p-6 md:p-10 flex flex-col justify-between hover:border-red-500/20 hover:shadow-[0_30px_70px_rgba(255,42,42,0.05)] hover:-translate-y-1.5 transition-all duration-500 z-10 overflow-hidden ${
                project.isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Corner crosshairs (+) for engineering look */}
              <div className="absolute top-3 left-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute top-3 right-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute bottom-3 left-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>
              <div className="absolute bottom-3 right-3 text-gray-300 font-mono text-[9px] pointer-events-none opacity-50 select-none group-hover:text-[#ff2a2a] transition-colors duration-500">+</div>

              {/* Accent highlight stripe */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-[#ff2a2a] transition-all duration-500" />

              <div className={`grid grid-cols-1 ${project.isFeatured ? 'md:grid-cols-12 gap-8' : ''}`}>
                
                {/* Description Text block */}
                <div className={`${project.isFeatured ? 'md:col-span-7' : ''}`}>
                  {/* Index label */}
                  <span className="font-mono text-xs font-bold text-[#ff2a2a] uppercase tracking-wider block mb-4">
                    [ 0{index + 1} ]
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-space-grotesk text-gray-900 mb-4 group-hover:text-[#ff2a2a] transition-colors duration-300 tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 font-inter font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] md:text-xs font-semibold text-black/60 bg-gray-100 group-hover:bg-red-50 group-hover:text-[#ff2a2a] rounded-full transition-colors duration-300 font-space-grotesk"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating CSS Mockup visual container */}
                <div className={`flex flex-col justify-center ${project.isFeatured ? 'md:col-span-5' : 'mb-6'}`}>
                  {project.visual}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-5 pt-5 border-t border-gray-100 mt-6 w-full">
                <a
                  href={project.demoLink}
                  className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-gray-900 hover:text-[#ff2a2a] transition-colors duration-300 font-space-grotesk"
                >
                  Live Link
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-gray-500 hover:text-[#ff2a2a] transition-colors duration-300 font-space-grotesk"
                >
                  Source Code
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
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

export default Projects;
