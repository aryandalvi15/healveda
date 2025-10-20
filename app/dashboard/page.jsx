'use client';

import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-emerald-400">
        Choose a Feature
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-4">
        <Link href="/features/nutrition">
          <div className="cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 rounded-2xl p-8 shadow-lg border border-emerald-500/30 hover:border-emerald-400/60 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Nutrition Analysis</h2>
            <p className="text-gray-400 text-sm">
              Analyze food composition, calories, and nutrients in your meals.
            </p>
          </div>
        </Link>

        <Link href="/features/diet-tracking">
          <div className="cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 rounded-2xl p-8 shadow-lg border border-emerald-500/30 hover:border-emerald-400/60 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Diet Tracking</h2>
            <p className="text-gray-400 text-sm">
              Track your daily calorie intake and maintain a balanced diet.
            </p>
          </div>
        </Link>

        <Link href="/features/disease-prediction">
          <div className="cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 rounded-2xl p-8 shadow-lg border border-emerald-500/30 hover:border-emerald-400/60 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Disease Prediction</h2>
            <p className="text-gray-400 text-sm">
              Use AI-powered tools to predict potential health risks.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
