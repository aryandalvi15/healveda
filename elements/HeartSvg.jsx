import React from 'react'

const HeartSvg = () => {
  return (
    <section className="flex h-screen relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-emerald-950/20 pointer-events-none z-0"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Left Content Panel */}
      <div className="w-1/2 relative z-20 flex flex-col justify-center px-12 py-16">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
        
        <div className="relative z-10 space-y-8">
          {/* Enhanced heading */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-emerald-200 bg-clip-text text-transparent">
                Our Health Intelligence
              </h2>
            </div>
            
            {/* Subtitle with animation */}
            <div className="pl-15">
              <span className="inline-block text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2 ">
                AI-Powered Healthcare
              </span>
            </div>
          </div>

          {/* Enhanced description */}
          <div className="pl-15 space-y-6">
            <p className="text-3xl text-gray-300 leading-relaxed font-light">
              Experience the <span className="text-emerald-400 font-semibold">future of healthcare</span> with Healveda — your intelligent AI health advisor.
            </p>
            
            <p className="text-2xl text-gray-400 leading-relaxed">
              This interactive 3D heart model showcases how Healveda combines 
              <span className="text-emerald-300 font-medium"> cutting-edge technology</span> with medical insight to make health information more visual, personal, and accessible.
            </p>
            
            <p className="text-2xl text-gray-400 leading-relaxed">
              From anatomy to actionable advice, Healveda empowers you to 
              <span className="text-teal-300 font-medium"> understand your body</span> like never before.
            </p>

            {/* Feature highlights */}
            <div className="space-y-3 pt-6 text-xl">
              {[
                {  text: "* AI-Driven Insights" },
                { text: "* Interactive 3D Models" },
                { text: "* Personalized Health Data" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <span className="text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore More</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right 3D Model Panel */}
      <div className="w-1/2 relative z-20">
        {/* Model container with enhanced styling */}
        <div className="relative h-full bg-gradient-to-bl from-slate-900/50 to-black/80 backdrop-blur-sm">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none z-30"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/10 to-transparent pointer-events-none z-30"></div>
          
          {/* Enhanced iframe */}
          <iframe
            className="w-full h-full rounded-lg"
            title="Realistic Human Heart"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/775d6629622740de8a5ed61a959c7506/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_stop=0"
          />

          {/* Enhanced overlays to hide watermark and controls */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black to-black/60 pointer-events-none z-40" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black to-black/60 pointer-events-none z-40" />
          
          {/* Side gradient overlays */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-40" />
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-40" />

          {/* Model label */}
          <div className="absolute bottom-6 left-6 z-50">
            <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-500/30">
              <span className="text-emerald-400 text-sm font-semibold">Interactive 3D Heart Model</span>
            </div>
          </div>

          {/* Interaction hint */}
          <div className="absolute top-6 right-6 z-50 animate-bounce">
            <div className="bg-emerald-500/20 backdrop-blur-sm p-3 rounded-full border border-emerald-400/30">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeartSvg