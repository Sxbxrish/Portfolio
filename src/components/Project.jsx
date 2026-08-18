import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/media/images/image-1.png';
import image2 from '../assets/media/images/image-2.png';
import image3 from '../assets/media/images/image-3.png';

const projects = [
  {
    name: 'PrimePick15',
    title: (
      <>
        PRIMEPICK15
      </>
    ),
    description: "PrimePick15 – Shopify Growth Project. Executed SEO and Google Ads strategies for a Shopify e-commerce store, including audience targeting, landing-page optimization, and analytics tracking. Achieved ₹15,000+ revenue, 16 sales, 8.89% CTR, and a 2.49% conversion rate through data-driven campaign optimization.",
    image: image1
  },
  {
    name: 'Canva Template Store',
    title: (
      <>
        CANVA TEMPLATE <br />
        STORE
      </>
    ),
    description: "Built a niche Shopify store selling customizable Canva marketing templates for food, gym, and salon businesses. Executed Instagram and Facebook campaigns with Canva creatives to drive brand visibility, engagement, and digital product discovery. Tools: Shopify, Canva, SEO, Facebook Ads.",
    image: image3
  },
  {
    name: 'Swaggit – Own Yourself',
    title: (
      <>
        SWAGGIT <br />
        OWN YOURSELF
      </>
    ),
    description: "Conceptualized and launched a customizable T-shirt brand with strategic branding, product positioning, and performance tracking. Generated ₹20,000+ revenue within 30 days and allocated 50% of profits to an orphanage, combining business growth with social impact.",
    image: image2
  },
  {
    name: 'Published Research',
    title: (
      <>
        PUBLISHED <br />
        RESEARCH
      </>
    ),
    description: "International Scientific Journal of Engineering and Management. Published a research paper titled “From Clicks to Delivery in Minutes: Analyzing Customer Satisfaction in Zepto’s Quick-Commerce Digital Grocery.” The study examined customer satisfaction drivers, delivery efficiency, and digital purchasing behavior in quick-commerce.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Projects
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">works</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            Performance-driven marketing work focused on e-commerce growth, SEO, creative strategy, analytics, and brand building.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                  <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
