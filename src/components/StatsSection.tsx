import React from 'react';

const ACCENT_BLUE = '#1E54A3';

export function StatsSection() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Experience You Trust, Innovation You Love
          </h3>
          <p className="text-2xl font-bold" style={{ color: '#1E54A3' }}>#35YearsStrong</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 35 Years Strong */}
          <div className="text-center">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-full px-6 py-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: ACCENT_BLUE }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-zinc-50 mb-2">35+</div>
              <div className="text-zinc-400 uppercase text-sm">Years Strong</div>
            </div>
          </div>

          {/* Roofs Installed */}
          <div className="text-center">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-full px-6 py-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: ACCENT_BLUE }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-zinc-50 mb-2">1000+</div>
              <div className="text-zinc-400 uppercase text-sm">Roofs Installed</div>
            </div>
          </div>

          {/* 100% Satisfaction */}
          <div className="text-center">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-full px-6 py-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: ACCENT_BLUE }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-zinc-50 mb-2">100%</div>
              <div className="text-zinc-400 uppercase text-sm">Satisfaction</div>
            </div>
          </div>

          {/* A+ Quality */}
          <div className="text-center">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-full px-6 py-8 hover:bg-zinc-800 transition-colors">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: ACCENT_BLUE }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-zinc-50 mb-2">A+</div>
              <div className="text-zinc-400 uppercase text-sm">Quality Grade</div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4">
            For three decades, we've been the trusted name in roofing for Southern New Brunswick.
          </p>
          <p className="text-xl text-zinc-400">
            We don't just build roofs; <span className="font-bold" style={{ color: '#1E54A3' }}>we build relationships.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
