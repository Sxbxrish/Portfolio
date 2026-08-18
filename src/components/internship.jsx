import React from 'react';

const Internship = () => {
  return (
    <section id="internship" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">

      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        {/* Giant Title */}
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right">
            INTERNSHIP EXPERIENCE
          </h2>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Side: Internship 1 */}
          <div className="w-full lg:w-1/2">
            <div className="border-b border-white/20 py-8 px-6 md:py-10 md:px-8 last:border-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">INTERNSHIP EXPERIENCE</h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#050505]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#ccff00] font-bold text-lg">SORGE CARE</p>
                  <p className="text-gray-300 text-sm">Growth / Business Development & Customer Success Intern</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[#ccff00] font-bold text-sm mb-2">Jun 2026 - July 2026</p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Prospected 30+ B2B clinic accounts, managed 20+ prospect interactions, and benchmarked 5+ healthcare competitors to support lead conversion, onboarding, and GTM insights. <br />30+ Accounts | 20+ Interactions | 5+ Competitors
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-sm mb-2">Impact</p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Contributed to B2B lead conversion and customer onboarding by engaging 30+ clinic accounts and managing 20+ prospect interactions across the acquisition journey.Benchmarked 5+ healthcare competitors to identify customer pain points, market gaps, and actionable GTM opportunities.
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-sm mb-2">Tools & Skills</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Sorge Care Platform</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">WhatsApp Marketing</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Google Sheets </span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">CRM/Lead Tracking</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">B2B Outreach</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Market Research</span>
                </div>
              </div>

              
            </div>
          </div>

          {/* Right Side: Internship 2 */}
          <div className="w-full lg:w-1/2">
            <div className="border-b border-white/20 py-8 px-6 md:py-10 md:px-8 last:border-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">AUDITING INTERNSHIP</h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#050505]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#ccff00] font-bold text-lg">PRASATH KULOTHUNGAN & ASSOCIATES</p>
                  <p className="text-gray-300 text-sm">Auditing Intern</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[#ccff00] font-bold text-sm mb-2">Nov 2024 – Dec 2024</p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Executed financial audit procedures by preparing and reviewing 20+ vouchers and journal entries, while performing account reconciliation and financial data validation.
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-sm mb-2">Impact</p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Supported senior auditors in preparing audit reports, documenting findings, evaluating internal controls and financial compliance, and improving the accuracy of client financial records.
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-sm mb-2">Tools & Skills</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">MS Excel</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Financial Auditing</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Account Reconciliation</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Data Validation</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Audit Reporting</span>
                  <span className="bg-[#2a2a2a] text-[#ccff00] text-xs px-3 py-1 rounded-full">Team Coordination</span>
                </div>
              </div>
              <p className="mt-8 text-gray-400 text-sm">
                &nbsp;&nbsp;&nbsp;&nbsp;PRASATH KULOTHUNGAN & ASSOCIATES — Villupuram
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Internship;