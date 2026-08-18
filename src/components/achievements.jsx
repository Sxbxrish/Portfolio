import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import nptelCert from '../assets/media/images/page_1.png';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    id: '01',
    title: 'INTERNATIONAL KARATE',
    description: 'Won a Silver Medal at an international-level competition, showcasing discipline, resilience, focus, and high-performance mindset.',
    capabilities: [
      { label: 'Discipline', title: 'Maintained rigorous training schedule and consistency' },
      { label: 'Resilience', title: 'Overcame challenges and performed under pressure' },
      { label: 'Focus', title: 'Demonstrated concentration during competitions' },
      { label: 'High-Performance', title: 'Achieved medal at international level' }
    ]
  },
  {
    id: '02',
    title: 'NPTEL CERTIFICATION',
    image: nptelCert,
    description: 'Completed Principles of Management certification, building strong foundations in leadership, strategy, and business decision-making.',
    capabilities: [
      { label: 'Leadership', title: 'Built strong foundations in leadership principles' },
      { label: 'Strategy', title: 'Developed strategic thinking and business strategy skills' },
      { label: 'Decision-Making', title: 'Enhanced business decision-making capabilities' },
      { label: 'Management', title: 'Completed formal management certification' }
    ]
  },
  {
    id: '03',
    title: 'CERTIFICATION',
    description: 'Social Media Marketing: Strategy & Optimization\nCurrently Pursuing\n\nBuilding expertise in social media strategy, content optimization, audience targeting, and performance-driven campaign execution.',
    capabilities: [
      { label: 'Social Media Strategy', title: 'Developing expertise in social media strategy and planning' },
      { label: 'Content Optimization', title: 'Building skills in content optimization and performance' },
      { label: 'Audience Targeting', title: 'Learning audience targeting techniques for campaigns' },
      { label: 'Performance-Driven', title: 'Focus on execution-driven campaign management' }
    ]
  }
];

const Achievements = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="achievements" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">

      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right">
            MY ACHIEVEMENTS
          </h2>
        </div>
      </div>

      {/* Accordion List */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">

              {/* Left Side: Achievement Details */}
              <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                  <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                    
                  </div>
                  <div className="flex flex-col w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10">
                      <h3 className="text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis">
                        {achievement.title}
                      </h3>
                    </div>

                    {/* Expanded Details */}
                    <div className="overflow-hidden transition-all duration-500 ease-in-out w-full">
                      <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                        {/* Certificate Image at top of each achievement */}
                        {achievement.image && <div className="w-full mb-8 text-center">
                          <img src={achievement.image} alt={`${achievement.title} Certificate`} className="w-full h-auto rounded-md object-cover" />
                        </div>}
                        
                        <p className="transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light">
                          {achievement.description}
                        </p>

                        {achievement.capabilities && achievement.capabilities.length > 0 ? (
                          <div className="pt-4 flex flex-col space-y-2">
                            {achievement.capabilities.map((cap, i) => (
                              <div key={i} className="flex items-start gap-3 pb-2">
                                <span className="transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px]">■</span>
                                <strong className="text-[#ccff00] font-medium">{cap.label}:</strong>
                                <span className="transition-colors duration-300 ease-in-out text-sm md:text-base font-light">{cap.title}</span>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow Icon */}
                <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Summary - NO DUPLICATE DESCRIPTION */}
              <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full">
                  <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                    {/* Description removed from here to avoid duplication - it's shown in the left column */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Achievements;
