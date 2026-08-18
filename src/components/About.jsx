import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/media/images/about_section.png';
import resume from '../assets/media/documents/Resume.pdf';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marketingSkills = ["Google Ads", "Google Analytics", "SEO", "SEM", "Power BI"];
const commerceSkills = ["Shopify", "Canva", "WordPress", "Google Sheets"];
const professionalSkills = ["Leadership", "Analytical Thinking", "Problem Solving", "Strategic Planning"];
const toolsSkills = ["Google Ads", "SEO", "Google Analytics", "Shopify", "Canva", "Power BI", "WordPress", "SEM"];

const aboutWords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Sabarish" },
  { text: "R", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "", newLine: true },
  { text: "MBA" },
  { text: "|" },
  { text: "Performance" },
  { text: "Marketing" },
  { text: "|" },
  { text: "SEO" },
  { text: "|" },
  { text: "Shopify" },
  { text: "|" },
  { text: "Google" },
  { text: "Ads." },
  { text: "", newLine: true },
  { text: "I'm" },
  { text: "an" },
  { text: "MBA" },
  { text: "student" },
  // { text: "", newLine: true },
  { text: "specializing" ,className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"},
  { text: "in" },
  { text: "Digital" },
  { text: "", newLine: true },
  { text: "Marketing" },
  { text: "and" },
  { text: "Operations" },
  { text: "with" },
  { text: "hands-on" },
  { text: "experience" },
  { text: "in" },
  { text: "", newLine: true },
  { text: "Shopify," },
  { text: "Google" },
  { text: "Ads," },
  { text: "SEO," },
  { text: "analytics," },
  { text: "and" },
  { text: "customer" },
  { text: "acquisition." },
  { text: "I" },
  { text: "enjoy" },
  { text: "combining" },
  { text: "creativity" },
  { text: "with" },
  { text: "data" },
  { text: "to" },
  { text: "build" },
  { text: "campaigns" },
  { text: "that" },
  { text: "generate" },
  { text: "measurable" },
  { text: "business" },
  { text: "results." }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">


      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text (Visible only on mobile/tablet) */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-20">
            <img
              src={aboutImage}
              alt="About"
              className="w-81 md:w-100 lg:w-[26rem] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text (Visible only on desktop) */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    {wordObj.newLine ? (
                      <><br />{index < aboutWords.length - 1 && " "}</>
                    ) : (
                      <>
                        <span className={`word ${wordObj.className || ''}`}>
                          {wordObj.text}
                        </span>
                        {index < aboutWords.length - 1 && !aboutWords[index + 1].newLine && " "}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <a href={resume} download="Resume.pdf" className="w-full px-6 md:px-10 py-3 md:py-4 rounded-3xl border border-gray-600 flex items-center justify-center backdrop-blur-md bg-gray-900/60 hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 cursor-pointer group">
              <span className="text-gray-300 group-hover:text-black text-base md:text-lg font-medium tracking-wider transition-colors duration-300">Download CV</span>
            </a>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...marketingSkills, ...marketingSkills, ...marketingSkills, ...marketingSkills].map((item, i) => (
              <div key={`marketing-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...commerceSkills, ...commerceSkills, ...commerceSkills, ...commerceSkills].map((item, i) => (
              <div key={`commerce-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...professionalSkills, ...professionalSkills, ...professionalSkills, ...professionalSkills].map((item, i) => (
              <div key={`professional-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
