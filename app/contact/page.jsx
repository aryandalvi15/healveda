"use client";

import React, { useEffect, useRef } from "react";
import GradientText from "@/components/GradientText";

const Contact = () => {
  const canvasRef = useRef(null);

  // Dark subtle particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, particles;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(64, 255, 170, 0.12)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <section className="relative min-h-screen w-screen bg-gradient-to-b from-[#020202] via-[#060c12] to-[#0a0f15] flex flex-col items-center justify-center overflow-hidden px-6 md:px-20 lg:px-56 font-bold">
      {/* Background particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      ></canvas>

      {/* Gradient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-[#40ffaa]/10 rounded-full blur-[180px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] bg-[#4079ff]/10 rounded-full blur-[180px] animate-pulse-slow"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-14">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
          animationSpeed={3.5}
          showBorder={false}
          className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(64,255,170,0.25)]"
        >
          CONTACT
        </GradientText>
        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-normal leading-relaxed">
          Let’s connect and create something <span className="text-green-400">extraordinary</span> together.
        </p>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl group">
        {/* Glow border */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] blur-[8px] opacity-60 group-hover:opacity-100 transition duration-700"></div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative bg-[#0a0f15]/80 backdrop-blur-2xl rounded-[2rem] p-10 md:p-12 border border-white/10 shadow-[0_0_100px_rgba(64,255,170,0.15)] transition-transform duration-700 group-hover:scale-[1.02]"
        >
          {/* Name */}
          <div className="flex flex-col mb-6">
            <label className="text-green-400 text-lg mb-2 tracking-wide">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-[#101820]/70 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-6">
            <label className="text-green-400 text-lg mb-2 tracking-wide">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#101820]/70 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4079ff] transition-all duration-300"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mb-8">
            <label className="text-green-400 text-lg mb-2 tracking-wide">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="bg-[#101820]/70 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="relative w-full py-3 text-black font-semibold text-lg rounded-xl bg-gradient-to-r from-[#40ffaa] to-[#4079ff] hover:from-[#4079ff] hover:to-[#40ffaa] transition-all duration-500 shadow-[0_0_40px_rgba(64,255,170,0.4)] hover:shadow-[0_0_60px_rgba(64,255,170,0.6)]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-gray-600 text-sm mt-16 text-center">
        © {new Date().getFullYear()} <span className="text-green-400">HealVeda</span>. Designed with precision.
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
