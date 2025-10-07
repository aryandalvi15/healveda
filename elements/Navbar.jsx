'use client';

import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  return (
<nav className="w-full bg-gradient-to-r from-slate-900 via-black to-slate-900 backdrop-blur-lg border-b border-emerald-500/20 sticky top-0 z-50">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-emerald-600/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Brand logo/title */}
          <div className="flex-shrink-0 pl-4">
            <Link
              href="/"
              className="group relative text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent hover:from-emerald-300 hover:to-teal-200 transition-all duration-300"
            >
              <span className="relative z-10 text-emerald-400">Healveda</span>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="group relative text-gray-300 hover:text-emerald-400 text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-emerald-500/10"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="#features"
              className="group relative text-gray-300 hover:text-emerald-400 text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-emerald-500/10"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="#about"
              className="group relative text-gray-300 hover:text-emerald-400 text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-emerald-500/10"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="#contact"
              className="group relative text-gray-300 hover:text-emerald-400 text-lg font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-emerald-500/10"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center space-x-4 pr-4">
            <SignedIn>
              {/* Enhanced User Section with Dashboard Link */}
              <div className="flex items-center space-x-3">
                {/* Dashboard Button */}
                <Link href="/dashboard">
                  <button className="group relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-800/60 to-slate-700/60 hover:from-emerald-600/20 hover:to-teal-600/20 backdrop-blur-sm rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 text-gray-300 hover:text-emerald-300 shadow-lg hover:shadow-emerald-500/10">
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm font-medium">Dashboard</span>
                    <div className="absolute inset-0 rounded-xl bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                </Link>

                {/* Health Profile Button */}
                <Link href="/profile">
                  <button className="group relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-800/60 to-slate-700/60 hover:from-teal-600/20 hover:to-emerald-600/20 backdrop-blur-sm rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 text-gray-300 hover:text-teal-300 shadow-lg hover:shadow-teal-500/10">
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-sm font-medium">Health Profile</span>
                    <div className="absolute inset-0 rounded-xl bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                </Link>

                {/* Enhanced User Button Container */}
                <div className="relative">
                  <div className="p-1.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 backdrop-blur-sm border border-emerald-400/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonAvatarBox: 'w-10 h-10 border-2 border-emerald-400/60 shadow-lg hover:border-emerald-300 transition-all duration-300',
                          userButtonPopoverCard: 'bg-slate-900/95 backdrop-blur-lg border border-emerald-500/30 shadow-2xl',
                          userButtonPopoverActions: 'bg-slate-800/50',
                          userButtonPopoverActionButton: 'text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-200',
                          userButtonPopoverFooter: 'hidden', // Hide clerk branding
                          userPreviewMainIdentifier: 'text-emerald-300 font-medium',
                          userPreviewSecondaryIdentifier: 'text-gray-400',
                        },
                        variables: {
                          colorPrimary: '#059669',
                          colorBackground: '#0f172a',
                          colorInputBackground: '#1e293b',
                          colorInputText: '#e2e8f0',
                          borderRadius: '0.75rem',
                        },
                      }}
                    />
                  </div>
                  
                  {/* User status indicator */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-slate-900 shadow-lg animate-pulse"></div>
                </div>
              </div>
            </SignedIn>
            
            <SignedOut>
              {/* Enhanced Sign In/Up Buttons */}
              <div className="flex items-center space-x-3">
                {/* Sign Up Button */}
                <SignUpButton mode="modal">
                  <button className="group relative px-6 py-2.5 bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700 hover:to-slate-600 text-gray-300 hover:text-white rounded-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/10 backdrop-blur-sm">
                    <span className="relative z-10 flex items-center space-x-2">
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span>Join</span>
                    </span>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                </SignUpButton>

                {/* Enhanced Sign In Button */}
                <SignInButton mode="modal">
                  <button className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:-translate-y-1 active:translate-y-0 border border-emerald-500/50 hover:border-emerald-400">
                    <span className="relative z-10 flex items-center space-x-2">
                      <svg className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Sign In</span>
                    </span>
                    
                    {/* Enhanced shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
                    
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10"></div>
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </nav>
  );
}